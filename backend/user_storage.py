"""User-account storage on Google Drive (no database).

All users live inside a single ``_users.json`` file in the root
Aurora Codex folder owned by the service account. The file format:

    {
        "users": [
            {"id": "...", "username": "...", "password_hash": "...",
             "name": "...", "role": "user|admin", "created_at": "ISO"},
            ...
        ]
    }

Concurrent writes are serialized via a process-wide RLock. The same
helper functions used by ``drive_storage`` (``_get_service`` and
``_root_folder_id``) are reused so we share one set of Google
credentials.
"""
from __future__ import annotations

import io
import json
import logging
import threading
import uuid
from datetime import datetime, timezone
from typing import Optional

from googleapiclient.errors import HttpError
from googleapiclient.http import MediaInMemoryUpload, MediaIoBaseDownload

import drive_storage  # reuse credentials, service, lock, helpers

logger = logging.getLogger(__name__)

USERS_FILE_NAME = "_users.json"
USERS_MIME = "application/json"
_users_lock = threading.RLock()


def _find_users_file_locked() -> Optional[str]:
    svc = drive_storage._get_service()
    parent = drive_storage._root_folder_id()
    q = (
        f"name='{USERS_FILE_NAME}' and '{parent}' in parents "
        f"and trashed=false"
    )
    res = svc.files().list(q=q, fields="files(id,name)", pageSize=1).execute()
    files = res.get("files", [])
    return files[0]["id"] if files else None


def _read_users_file_locked() -> dict:
    svc = drive_storage._get_service()
    file_id = _find_users_file_locked()
    if not file_id:
        return {"users": []}
    request = svc.files().get_media(fileId=file_id)
    buf = io.BytesIO()
    downloader = MediaIoBaseDownload(buf, request)
    done = False
    while not done:
        _status, done = downloader.next_chunk()
    raw = buf.getvalue().decode("utf-8", errors="replace") or "{}"
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        logger.exception("Corrupt _users.json; resetting to empty list.")
        return {"users": []}
    if not isinstance(data, dict) or "users" not in data:
        return {"users": []}
    return data


def _write_users_file_locked(data: dict) -> None:
    svc = drive_storage._get_service()
    parent = drive_storage._root_folder_id()
    content = json.dumps(data, ensure_ascii=False, indent=2).encode("utf-8")
    media = MediaInMemoryUpload(content, mimetype=USERS_MIME, resumable=False)
    file_id = _find_users_file_locked()
    if file_id:
        svc.files().update(fileId=file_id, media_body=media, fields="id").execute()
    else:
        meta = {
            "name": USERS_FILE_NAME,
            "parents": [parent],
            "mimeType": USERS_MIME,
        }
        svc.files().create(body=meta, media_body=media, fields="id").execute()


# ─────── Public API (matches the previous MongoDB-backed code) ───────

def find_by_username(username: str) -> Optional[dict]:
    username = (username or "").lower()
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
    for u in data["users"]:
        if u.get("username") == username:
            return dict(u)
    return None


def find_by_id(uid: str) -> Optional[dict]:
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
    for u in data["users"]:
        if u.get("id") == uid:
            return dict(u)
    return None


def list_users() -> list[dict]:
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
    out = [dict(u) for u in data["users"]]
    out.sort(key=lambda u: u.get("created_at", ""))
    return out


def create_user(username: str, password_hash: str, name: str, role: str = "user") -> dict:
    username = (username or "").lower()
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
        if any(u.get("username") == username for u in data["users"]):
            raise ValueError("Username already taken")
        new_user = {
            "id": uuid.uuid4().hex,
            "username": username,
            "password_hash": password_hash,
            "name": name.strip(),
            "role": role,
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        data["users"].append(new_user)
        _write_users_file_locked(data)
    return new_user


def update_user(uid: str, updates: dict) -> Optional[dict]:
    """Apply a shallow update to the user record. Returns the updated user
    or None if not found."""
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
        for u in data["users"]:
            if u.get("id") == uid:
                u.update(updates)
                _write_users_file_locked(data)
                return dict(u)
    return None


def ensure_admin(username: str, password_hash: str, name: str = "Admin") -> dict:
    """Create the admin user if missing, or refresh its password hash."""
    username = (username or "").lower()
    with _users_lock, drive_storage._drive_lock:
        data = _read_users_file_locked()
        for u in data["users"]:
            if u.get("username") == username:
                if u.get("password_hash") != password_hash:
                    u["password_hash"] = password_hash
                    _write_users_file_locked(data)
                return dict(u)
        new_user = {
            "id": uuid.uuid4().hex,
            "username": username,
            "password_hash": password_hash,
            "name": name,
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        data["users"].append(new_user)
        _write_users_file_locked(data)
    return new_user
