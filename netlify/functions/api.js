// Aurora Codex API — Netlify Function backed by Supabase.
// Single CJS handler, no ESM, no Web Fetch quirks — globalThis.fetch is
// available in the Netlify Node 20 runtime.
//
// Tables created by /supabase_schema.sql (run once in Supabase SQL editor):
//   public.aurora_users      — id, username, password_hash, name, role, created_at
//   public.aurora_characters — id, username, name, char_class, level,
//                              portrait_url, data jsonb, created_at, updated_at
//
// Env vars required (set in Netlify → Site settings → Environment variables):
//   SUPABASE_URL                 — https://<ref>.supabase.co (no trailing slash)
//   SUPABASE_SECRET_KEY          — sb_secret_… (service-role, server-only)
//   JWT_SECRET                   — random 32+ byte string
//   ADMIN_USERNAME / ADMIN_PASSWORD — initial admin seed

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");

console.log("[aurora] api function module loaded (supabase backend)");

// ─────────────────────────── Constants ──────────────────────────────
const USERNAME_RE = /^[a-z0-9_\-.]{3,32}$/;
const USERS_TABLE = "aurora_users";
const CHARS_TABLE = "aurora_characters";

const SUPABASE_URL = () =>
  (process.env.SUPABASE_URL || "").replace(/\/+$/, "").replace(/\/rest\/v1$/, "");

const SUPABASE_KEY = () => {
  const k = process.env.SUPABASE_SECRET_KEY;
  if (!k) throw new Error("Missing SUPABASE_SECRET_KEY env var");
  return k;
};

function sbHeaders(prefer) {
  const k = SUPABASE_KEY();
  const h = {
    apikey: k,
    Authorization: `Bearer ${k}`,
    "Content-Type": "application/json",
  };
  if (prefer) h["Prefer"] = prefer;
  return h;
}

async function sbFetch(table, { method = "GET", params = {}, body, prefer } = {}) {
  const url = new URL(`${SUPABASE_URL()}/rest/v1/${table}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const r = await fetch(url, {
    method,
    headers: sbHeaders(prefer),
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!r.ok) {
    const txt = await r.text().catch(() => "");
    const err = new Error(`Supabase ${method} ${table} ${r.status}: ${txt.slice(0, 240)}`);
    err.status = r.status;
    err.body = txt;
    throw err;
  }
  if (r.status === 204) return null;
  return r.json();
}

// ─────────────────────────── User storage ───────────────────────────
function stripUser(u) {
  return {
    id: u.id,
    username: u.username,
    password_hash: u.password_hash || "",
    name: u.name || "",
    role: u.role || "user",
    created_at: u.created_at || null,
  };
}

async function findUserByUsername(username) {
  const rows = await sbFetch(USERS_TABLE, {
    params: { select: "*", username: `eq.${username}`, limit: "1" },
  });
  return rows && rows.length ? stripUser(rows[0]) : null;
}

async function findUserById(id) {
  const rows = await sbFetch(USERS_TABLE, {
    params: { select: "*", id: `eq.${id}`, limit: "1" },
  });
  return rows && rows.length ? stripUser(rows[0]) : null;
}

async function listAllUsers() {
  const rows = await sbFetch(USERS_TABLE, {
    params: { select: "*", order: "created_at.asc" },
  });
  return (rows || []).map(stripUser);
}

async function createUserRecord(username, passwordHash, name, role = "user") {
  try {
    const rows = await sbFetch(USERS_TABLE, {
      method: "POST",
      prefer: "return=representation",
      body: {
        id: randomUUID().replace(/-/g, ""),
        username,
        password_hash: passwordHash,
        name: (name || "").trim(),
        role,
      },
    });
    return stripUser(rows[0]);
  } catch (e) {
    if (e.status === 409 || (e.body && /23505/.test(e.body))) {
      const err = new Error("Username already taken");
      err.status = 400;
      throw err;
    }
    throw e;
  }
}

async function ensureAdmin(username, passwordHash, name = "Admin") {
  const existing = await findUserByUsername(username);
  if (existing) {
    if (existing.password_hash !== passwordHash) {
      await sbFetch(USERS_TABLE, {
        method: "PATCH",
        params: { id: `eq.${existing.id}` },
        body: { password_hash: passwordHash },
      });
      existing.password_hash = passwordHash;
    }
    return existing;
  }
  return createUserRecord(username, passwordHash, name, "admin");
}

// ─────────────────────────── Character storage ──────────────────────
function summary(row) {
  return {
    id: row.id,
    name: row.name || "Unnamed",
    char_class: row.char_class || "",
    level: parseInt(row.level || 1, 10) || 1,
    portrait_url: row.portrait_url || "",
    updated_at: row.updated_at || "",
    created_at: row.created_at || "",
  };
}

function derivePortrait(data) {
  if (!data || typeof data !== "object") return "";
  const meta = data.meta;
  if (!meta || typeof meta !== "object") return "";
  const pu = meta.portraitUrl;
  if (typeof pu !== "string") return "";
  if (pu.startsWith("data:")) return "";
  return pu;
}

async function listChars(username) {
  const rows = await sbFetch(CHARS_TABLE, {
    params: {
      select: "id,name,char_class,level,portrait_url,created_at,updated_at",
      username: `eq.${username}`,
      order: "updated_at.desc",
    },
  });
  return (rows || []).map(summary);
}

async function createChar(username, { name, char_class, level, data }) {
  const rows = await sbFetch(CHARS_TABLE, {
    method: "POST",
    prefer: "return=representation",
    body: {
      username,
      name,
      char_class: char_class || "",
      level: parseInt(level, 10) || 1,
      portrait_url: derivePortrait(data),
      data: data || {},
    },
  });
  const row = rows[0];
  return { ...summary(row), data: row.data || {} };
}

async function getChar(username, charId) {
  const rows = await sbFetch(CHARS_TABLE, {
    params: {
      select: "id,name,char_class,level,portrait_url,created_at,updated_at,data",
      id: `eq.${charId}`,
      username: `eq.${username}`,
      limit: "1",
    },
  });
  if (!rows || !rows.length) return null;
  const row = rows[0];
  return { ...summary(row), data: row.data || {} };
}

async function updateChar(username, charId, { name, char_class, level, data }) {
  const rows = await sbFetch(CHARS_TABLE, {
    method: "PATCH",
    prefer: "return=representation",
    params: { id: `eq.${charId}`, username: `eq.${username}` },
    body: {
      name,
      char_class: char_class || "",
      level: parseInt(level, 10) || 1,
      portrait_url: derivePortrait(data),
      data: data || {},
    },
  });
  if (!rows || !rows.length) return null;
  const row = rows[0];
  return { ...summary(row), data: row.data || {} };
}

async function updatePortrait(username, charId, portraitUrl) {
  const current = await getChar(username, charId);
  if (!current) return null;
  const data = current.data && typeof current.data === "object" ? current.data : {};
  if (!data.meta || typeof data.meta !== "object") data.meta = {};
  if (portraitUrl) data.meta.portraitUrl = portraitUrl;
  else delete data.meta.portraitUrl;
  const cleanPortrait =
    portraitUrl && !portraitUrl.startsWith("data:") ? portraitUrl : "";
  const rows = await sbFetch(CHARS_TABLE, {
    method: "PATCH",
    prefer: "return=representation",
    params: { id: `eq.${charId}`, username: `eq.${username}` },
    body: { portrait_url: cleanPortrait, data },
  });
  if (!rows || !rows.length) return null;
  return summary(rows[0]);
}

async function deleteChar(username, charId) {
  const rows = await sbFetch(CHARS_TABLE, {
    method: "DELETE",
    prefer: "return=representation",
    params: { id: `eq.${charId}`, username: `eq.${username}` },
  });
  return Array.isArray(rows) && rows.length > 0;
}

// ─────────────────────────── Auth helpers ───────────────────────────
const jwtSecret = () => process.env.JWT_SECRET || "dev-only-secret-change-me";

const signAccess = (uid, username) =>
  jwt.sign({ sub: uid, username, type: "access" }, jwtSecret(), { expiresIn: "1d" });
const signRefresh = (uid) =>
  jwt.sign({ sub: uid, type: "refresh" }, jwtSecret(), { expiresIn: "7d" });

function verifyAccess(token) {
  try {
    const p = jwt.verify(token, jwtSecret());
    return p.type === "access" ? p : null;
  } catch (_e) {
    return null;
  }
}

function getTokenFromEvent(event) {
  const headers = event.headers || {};
  const auth = headers.authorization || headers.Authorization || "";
  if (auth.startsWith("Bearer ")) return auth.slice(7);
  const cookie = headers.cookie || headers.Cookie || "";
  const m = cookie.match(/(?:^|;\s*)access_token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

async function getCurrentUser(event) {
  const tok = getTokenFromEvent(event);
  if (!tok) return null;
  const payload = verifyAccess(tok);
  if (!payload) return null;
  return findUserById(payload.sub);
}

const userPublic = (u) => ({
  id: u.id,
  username: u.username,
  name: u.name || "",
  role: u.role || "user",
  created_at: u.created_at || null,
});

const validUsername = (u) => {
  if (typeof u !== "string") return null;
  const v = u.trim().toLowerCase();
  return USERNAME_RE.test(v) ? v : null;
};

// ─────────────────────────── Response helpers ────────────────────────
function jsonResp(statusCode, body, extraHeaders) {
  return {
    statusCode,
    headers: Object.assign(
      { "Content-Type": "application/json" },
      extraHeaders || {},
    ),
    body: JSON.stringify(body),
  };
}

const errResp = (statusCode, detail) => jsonResp(statusCode, { detail });

function withAuthCookies(resp, access, refresh) {
  resp.multiValueHeaders = resp.multiValueHeaders || {};
  resp.multiValueHeaders["Set-Cookie"] = [
    `access_token=${access}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=86400`,
    `refresh_token=${refresh}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=604800`,
  ];
  return resp;
}

function withCleardCookies(resp) {
  resp.multiValueHeaders = resp.multiValueHeaders || {};
  resp.multiValueHeaders["Set-Cookie"] = [
    "access_token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=None",
    "refresh_token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=None",
  ];
  return resp;
}

// ─────────────────────────── Admin seeding ──────────────────────────
let _adminSeeded = false;
async function seedAdminOnce() {
  if (_adminSeeded) return;
  const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || "admin").toLowerCase();
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
  try {
    const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await ensureAdmin(ADMIN_USERNAME, hash, "Admin");
    _adminSeeded = true;
    console.log("[aurora] admin seeded:", ADMIN_USERNAME);
  } catch (e) {
    console.warn("[aurora] admin seed failed:", e.message || e);
  }
}

function safeJson(s) {
  try { return JSON.parse(s || "{}"); } catch (_e) { return {}; }
}

// ───────────────────────────── Handler ──────────────────────────────
exports.handler = async (event) => {
  let p = event.path || "/";
  if (p.startsWith("/.netlify/functions/api")) {
    p = p.slice("/.netlify/functions/api".length);
  }
  if (p.startsWith("/api")) p = p.slice("/api".length);
  if (!p) p = "/";
  const method = (event.httpMethod || "GET").toUpperCase();
  console.log(`[aurora] ${method} ${p}`);

  try {
    await seedAdminOnce();

    if (p === "/" && method === "GET") {
      return jsonResp(200, { message: "Aurora Character Sheet API" });
    }

    // ── Auth ──
    if (p === "/auth/register" && method === "POST") {
      const body = safeJson(event.body);
      const username = validUsername(body.username);
      if (!username) {
        return errResp(422, "username must be 3-32 chars, letters/numbers/_/-/. only");
      }
      const password = body.password || "";
      if (typeof password !== "string" || password.length < 6 || password.length > 128) {
        return errResp(422, "password must be 6-128 chars");
      }
      const name = String(body.name || "").trim();
      if (name.length < 1 || name.length > 80) {
        return errResp(422, "name required (1-80 chars)");
      }
      let user;
      try {
        const hash = await bcrypt.hash(password, 10);
        user = await createUserRecord(username, hash, name);
      } catch (e) {
        if (e.status === 400) return errResp(400, e.message);
        return errResp(502, `Storage error: ${String(e.message || e).slice(0, 200)}`);
      }
      const access = signAccess(user.id, user.username);
      const refresh = signRefresh(user.id);
      return withAuthCookies(
        jsonResp(200, { user: userPublic(user), access_token: access }),
        access, refresh,
      );
    }

    if (p === "/auth/login" && method === "POST") {
      const body = safeJson(event.body);
      const username = validUsername(body.username);
      if (!username) return errResp(401, "Invalid username or password");
      const u = await findUserByUsername(username);
      if (!u) return errResp(401, "Invalid username or password");
      const ok = await bcrypt.compare(body.password || "", u.password_hash || "");
      if (!ok) return errResp(401, "Invalid username or password");
      const access = signAccess(u.id, u.username);
      const refresh = signRefresh(u.id);
      return withAuthCookies(
        jsonResp(200, { user: userPublic(u), access_token: access }),
        access, refresh,
      );
    }

    if (p === "/auth/logout" && method === "POST") {
      return withCleardCookies(jsonResp(200, { ok: true }));
    }

    if (p === "/auth/me" && method === "GET") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      return jsonResp(200, userPublic(u));
    }

    // ── Characters ──
    if (p === "/characters" && method === "GET") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      return jsonResp(200, await listChars(u.username));
    }

    if (p === "/characters" && method === "POST") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      const body = safeJson(event.body);
      const name = String(body.name || "").trim();
      if (!name || name.length > 120) return errResp(422, "name required (1-120 chars)");
      if (!body.data || typeof body.data !== "object") return errResp(422, "data must be an object");
      const out = await createChar(u.username, {
        name,
        char_class: String(body.char_class || "").trim(),
        level: parseInt(body.level, 10) || 1,
        data: body.data,
      });
      return jsonResp(200, out);
    }

    let m = p.match(/^\/characters\/([^/]+)$/);
    if (m) {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      const charId = decodeURIComponent(m[1]);
      if (method === "GET") {
        const out = await getChar(u.username, charId);
        return out ? jsonResp(200, out) : errResp(404, "Character not found");
      }
      if (method === "PUT") {
        const body = safeJson(event.body);
        const name = String(body.name || "").trim();
        if (!name || name.length > 120) return errResp(422, "name required (1-120 chars)");
        if (!body.data || typeof body.data !== "object") return errResp(422, "data must be an object");
        const out = await updateChar(u.username, charId, {
          name,
          char_class: String(body.char_class || "").trim(),
          level: parseInt(body.level, 10) || 1,
          data: body.data,
        });
        return out ? jsonResp(200, out) : errResp(404, "Character not found");
      }
      if (method === "DELETE") {
        const ok = await deleteChar(u.username, charId);
        return ok ? jsonResp(200, { ok: true }) : errResp(404, "Character not found");
      }
    }

    m = p.match(/^\/characters\/([^/]+)\/portrait$/);
    if (m && method === "PUT") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      const charId = decodeURIComponent(m[1]);
      const body = safeJson(event.body);
      const portrait = String(body.portrait_url || "").trim();
      if (portrait.length > 200_000) return errResp(422, "portrait_url too long");
      const out = await updatePortrait(u.username, charId, portrait);
      return out ? jsonResp(200, out) : errResp(404, "Character not found");
    }

    // ── Admin ──
    if (p === "/admin/users" && method === "GET") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      if (u.role !== "admin") return errResp(403, "Admin access required");
      const users = await listAllUsers();
      const out = [];
      for (const x of users) {
        let count = -1;
        try { count = (await listChars(x.username)).length; }
        catch (_e) { count = -1; }
        out.push({
          id: x.id,
          username: x.username,
          name: x.name || "",
          role: x.role || "user",
          character_count: count,
          created_at: x.created_at || "",
        });
      }
      return jsonResp(200, out);
    }

    m = p.match(/^\/admin\/users\/([^/]+)\/characters$/);
    if (m && method === "GET") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      if (u.role !== "admin") return errResp(403, "Admin access required");
      const username = validUsername(m[1]);
      if (!username) return errResp(400, "Invalid username");
      const target = await findUserByUsername(username);
      if (!target) return errResp(404, "User not found");
      return jsonResp(200, await listChars(username));
    }

    m = p.match(/^\/admin\/users\/([^/]+)\/characters\/([^/]+)$/);
    if (m && method === "GET") {
      const u = await getCurrentUser(event);
      if (!u) return errResp(401, "Not authenticated");
      if (u.role !== "admin") return errResp(403, "Admin access required");
      const username = validUsername(m[1]);
      if (!username) return errResp(400, "Invalid username");
      const out = await getChar(username, decodeURIComponent(m[2]));
      return out ? jsonResp(200, out) : errResp(404, "Character not found");
    }

    return errResp(404, "Not found");
  } catch (e) {
    console.error("[aurora] handler error:", e);
    return errResp(500, String(e.message || e).slice(0, 200));
  }
};
