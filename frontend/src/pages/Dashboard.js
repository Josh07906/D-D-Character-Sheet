import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, formatApiErrorDetail } from "../lib/api";
import Navbar from "../components/Navbar";
import { toast } from "sonner";

function formatErr(e) {
  if (e?.response?.data?.detail) return formatApiErrorDetail(e.response.data.detail);
  return e?.message || "Something went wrong.";
}

function CharacterCard({ ch, onDelete, onDownload, onOpen, onEditPortrait }) {
  const portrait = ch.portrait_url || "";
  return (
    <div
      data-testid={`character-card-${ch.id}`}
      className="bg-ink-surface border border-edge p-6 hover:border-gold/50 transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={() => onEditPortrait(ch)}
          data-testid={`character-portrait-${ch.id}`}
          title="Set character portrait"
          className="relative shrink-0 w-20 h-20 border border-gold/40 bg-ink/60 overflow-hidden flex items-center justify-center group/portrait"
          style={{
            backgroundImage: portrait ? `url('${portrait.replace(/'/g, "\\'")}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {!portrait && (
            <span className="font-cinzel text-gold/70 text-xl">❖</span>
          )}
          <span className="absolute inset-0 bg-ink/70 opacity-0 group-hover/portrait:opacity-100 transition-opacity flex items-center justify-center font-cinzel text-[9px] tracking-[0.2em] uppercase text-gold">
            Edit
          </span>
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                data-testid={`character-card-name-${ch.id}`}
                className="font-cinzel text-parchment text-xl tracking-wide truncate"
              >
                {ch.name || "Unnamed"}
              </h3>
              <p className="font-cormorant italic text-parchment-muted text-base mt-1">
                {ch.char_class ? ch.char_class : "—"} · Level {ch.level || 1}
              </p>
            </div>
            <span className="font-cinzel text-gold text-2xl leading-none shrink-0">❖</span>
          </div>
          <div className="mt-3 font-cormorant text-sm text-parchment-dim">
            Last scribed:{" "}
            {ch.updated_at ? new Date(ch.updated_at).toLocaleDateString(undefined, {
              year: "numeric", month: "short", day: "numeric"
            }) : "—"}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => onOpen(ch)}
          data-testid={`character-open-${ch.id}`}
          className="px-4 py-2 border border-gold/60 text-gold hover:bg-gold/10 font-cinzel text-[11px] tracking-[0.2em] uppercase btn-press"
        >
          Open
        </button>
        <button
          onClick={() => onDownload(ch)}
          data-testid={`character-download-${ch.id}`}
          className="px-4 py-2 border border-edge text-parchment-muted hover:text-parchment hover:border-parchment-muted font-cinzel text-[11px] tracking-[0.2em] uppercase btn-press"
        >
          Download JSON
        </button>
        <button
          onClick={() => onDelete(ch)}
          data-testid={`character-delete-${ch.id}`}
          className="px-4 py-2 text-parchment-dim hover:text-crimson font-cinzel text-[11px] tracking-[0.2em] uppercase btn-press"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function PortraitModal({ character, onClose, onSaved }) {
  const [url, setUrl] = useState(character?.portrait_url || "");
  const [preview, setPreview] = useState(character?.portrait_url || "");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const fileRef = useRef(null);

  if (!character) return null;

  const onFile = (e) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      setErr("Image larger than 5 MB. Use a smaller file or a hosted URL.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      setUrl(dataUrl);
      setPreview(dataUrl);
      setErr("");
    };
    reader.onerror = () => setErr("Could not read the image file.");
    reader.readAsDataURL(f);
  };

  const onUrlChange = (e) => {
    const v = e.target.value;
    setUrl(v);
    setPreview(v.trim());
  };

  const submit = async () => {
    setSaving(true);
    setErr("");
    try {
      const data = (await api.put(`/characters/${character.id}/portrait`, { portrait_url: url.trim() })).data;
      toast.success(url.trim() ? "Portrait saved." : "Portrait cleared.");
      onSaved(data);
      onClose();
    } catch (e2) {
      setErr(formatErr(e2));
    } finally {
      setSaving(false);
    }
  };

  const clear = async () => {
    setUrl("");
    setPreview("");
    setSaving(true);
    setErr("");
    try {
      const data = (await api.put(`/characters/${character.id}/portrait`, { portrait_url: "" })).data;
      toast.success("Portrait cleared.");
      onSaved(data);
      onClose();
    } catch (e2) {
      setErr(formatErr(e2));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      data-testid="portrait-modal"
      className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-ink-surface border border-gold/40 max-w-xl w-full p-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-cinzel text-gold text-[10px] tracking-[0.4em] uppercase">❖ Codex</p>
            <h3 className="font-cinzel text-parchment text-2xl mt-1">
              {character.name || "Unnamed"} — Portrait
            </h3>
          </div>
          <button
            data-testid="portrait-close-btn"
            onClick={onClose}
            className="font-cinzel text-parchment-muted hover:text-gold text-xl"
            aria-label="Close"
          >✕</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 items-start">
          <div className="w-40 h-40 border border-gold/40 bg-ink/60 overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: preview ? `url('${preview.replace(/'/g, "\\'")}')` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            {!preview && (
              <span className="font-cormorant italic text-parchment-dim text-sm text-center px-2">
                No portrait yet
              </span>
            )}
          </div>
          <div>
            <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-1">
              Image URL
            </label>
            <input
              data-testid="portrait-url-input"
              type="url"
              value={url.startsWith("data:") ? "(uploaded file)" : url}
              onChange={onUrlChange}
              placeholder="https://example.com/hero.jpg"
              className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
              readOnly={url.startsWith("data:")}
            />
            <p className="font-cormorant italic text-parchment-dim text-xs mt-2">
              Paste a hosted image URL <em>or</em> upload from your device. Uploaded files
              are saved inside the character sheet and shown on the codex card.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFile}
                data-testid="portrait-file-input"
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                data-testid="portrait-upload-btn"
                className="px-4 py-2 border border-gold/60 text-gold hover:bg-gold/10 font-cinzel text-[11px] tracking-[0.2em] uppercase btn-press"
              >
                ⬆ Upload File
              </button>
              {(url || preview) && (
                <button
                  type="button"
                  onClick={clear}
                  disabled={saving}
                  data-testid="portrait-clear-btn"
                  className="px-4 py-2 border border-edge text-parchment-muted hover:text-crimson hover:border-crimson/60 font-cinzel text-[11px] tracking-[0.2em] uppercase btn-press disabled:opacity-50"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {err && (
          <p data-testid="portrait-error" className="text-crimson font-cormorant text-sm mt-4">
            {err}
          </p>
        )}

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            data-testid="portrait-cancel-btn"
            className="px-4 py-2 text-parchment-muted hover:text-parchment font-cinzel text-[11px] tracking-[0.2em] uppercase"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={saving}
            data-testid="portrait-save-btn"
            className="px-5 py-2 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel text-[11px] tracking-[0.2em] uppercase border border-edge btn-press disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save Portrait"}
          </button>
        </div>
      </div>
    </div>
  );
}

function extractMeta(data) {
  // Try to extract a sensible name / class / level from arbitrary D&D sheet JSON
  if (!data || typeof data !== "object") return { name: "", char_class: "", level: 1 };
  const name =
    data.name ||
    data.characterName ||
    data.character?.name ||
    data.identity?.name ||
    data.bio?.name ||
    "";
  const char_class =
    data.class ||
    data.className ||
    data.character?.class ||
    data.identity?.class ||
    "";
  const level =
    Number(
      data.level ||
      data.characterLevel ||
      data.character?.level ||
      data.identity?.level ||
      1
    ) || 1;
  return { name: String(name || ""), char_class: String(char_class || ""), level };
}

export default function Dashboard() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [portraitTarget, setPortraitTarget] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const load = async () => {
    try {
      const res = await api.get("/characters");
      setCharacters(res.data);
    } catch (e) {
      setError(formatErr(e));
      setCharacters([]);
    }
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await api.get("/characters");
        if (!cancelled) setCharacters(res.data);
      } catch (e) {
        if (!cancelled) {
          setError(formatErr(e));
          setCharacters([]);
        }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (uploading) return;
    setUploading(true);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const meta = extractMeta(data);
      const name = meta.name || file.name.replace(/\.json$/i, "") || "Unnamed Hero";
      await api.post("/characters", {
        name,
        char_class: meta.char_class,
        level: meta.level,
        data,
      });
      toast.success(`Saved "${name}" to your codex.`);
      await load();
    } catch (err) {
      const msg = formatErr(err);
      toast.error(msg);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (ch) => {
    if (!window.confirm(`Strike "${ch.name}" from the codex?`)) return;
    try {
      await api.delete(`/characters/${ch.id}`);
      toast.success("Character removed.");
      setCharacters((prev) => (prev || []).filter((c) => c.id !== ch.id));
    } catch (e) {
      toast.error(formatErr(e));
    }
  };

  const handleDownload = async (ch) => {
    try {
      const res = await api.get(`/characters/${ch.id}`);
      const data = res.data;
      const blob = new Blob([JSON.stringify(data.data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${(ch.name || "character").replace(/[^a-z0-9-_]+/gi, "_")}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("JSON scroll downloaded.");
    } catch (e) {
      toast.error(formatErr(e));
    }
  };

  const handleOpen = (ch) => {
    navigate(`/sheet?id=${ch.id}`);
  };

  const handlePortraitSaved = (updated) => {
    setCharacters((prev) =>
      (prev || []).map((c) => (c.id === updated.id ? { ...c, portrait_url: updated.portrait_url } : c))
    );
  };

  return (
    <div className="min-h-screen bg-leather">
      <Navbar />
      <main className="pt-32 pb-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-3">
                ❖ Your Codex Shelf
              </p>
              <h1
                data-testid="dashboard-title"
                className="font-cinzel text-parchment text-4xl sm:text-5xl"
              >
                Saved Characters
              </h1>
              <p className="mt-3 font-cormorant italic text-parchment-muted text-lg">
                Heroes you have inscribed into the cloud. Open, download, or send them
                forth into a new adventure.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/sheet"
                data-testid="new-character-button"
                className="px-5 py-3 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-xs border border-edge btn-press"
              >
                ＋ New Character
              </Link>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={handleUpload}
                data-testid="upload-json-input"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                data-testid="upload-json-button"
                className="px-5 py-3 border border-gold/60 text-gold hover:bg-gold/10 font-cinzel tracking-[0.22em] uppercase text-xs btn-press disabled:opacity-50"
              >
                {uploading ? "Inscribing…" : "Upload JSON"}
              </button>
            </div>
          </div>

          <div className="divider-gold mb-10 max-w-3xl" />

          {error && (
            <div
              data-testid="dashboard-error"
              className="text-crimson border border-crimson/30 bg-crimson/10 px-4 py-3 font-cormorant mb-8"
            >
              {error}
            </div>
          )}

          {characters === null ? (
            <p data-testid="dashboard-loading" className="font-cormorant italic text-parchment-muted">
              ❖ Consulting the arcane tomes…
            </p>
          ) : characters.length === 0 ? (
            <div
              data-testid="empty-state"
              className="border border-dashed border-edge bg-ink-surface/50 p-12 text-center"
            >
              <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
                ❖ Empty Shelf
              </p>
              <h3 className="font-cinzel text-parchment text-2xl mb-3">
                No heroes yet
              </h3>
              <p className="font-cormorant italic text-parchment-muted text-lg mb-8 max-w-md mx-auto">
                Forge a brand new hero in the sheet, or upload a previously exported JSON
                scroll to bring them into your codex.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/sheet"
                  data-testid="empty-new-button"
                  className="px-5 py-3 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-xs border border-edge btn-press"
                >
                  Open the Sheet
                </Link>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  data-testid="empty-upload-button"
                  className="px-5 py-3 border border-gold/60 text-gold hover:bg-gold/10 font-cinzel tracking-[0.22em] uppercase text-xs btn-press"
                >
                  Upload JSON
                </button>
              </div>
            </div>
          ) : (
            <div
              data-testid="character-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {characters.map((ch) => (
                <CharacterCard
                  key={ch.id}
                  ch={ch}
                  onDelete={handleDelete}
                  onDownload={handleDownload}
                  onOpen={handleOpen}
                  onEditPortrait={setPortraitTarget}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <PortraitModal
        key={portraitTarget?.id || "no-portrait"}
        character={portraitTarget}
        onClose={() => setPortraitTarget(null)}
        onSaved={handlePortraitSaved}
      />
    </div>
  );
}
