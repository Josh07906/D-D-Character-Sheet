import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { api, formatApiErrorDetail } from "../lib/api";
import Navbar from "../components/Navbar";
import { toast } from "sonner";

function formatErr(e) {
  if (e?.response?.data?.detail) return formatApiErrorDetail(e.response.data.detail);
  return e?.message || "Something went wrong.";
}

export default function Sheet() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const charId = params.get("id");
  const fileInputRef = useRef(null);
  const [meta, setMeta] = useState(null);
  const [saveOpen, setSaveOpen] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [saveClass, setSaveClass] = useState("");
  const [saveLevel, setSaveLevel] = useState(1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [immersive, setImmersive] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && immersive) setImmersive(false);
      if ((e.key === "f" || e.key === "F") && e.shiftKey) {
        e.preventDefault();
        setImmersive((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [immersive]);

  const iframeRef = useRef(null);
  const immersiveIframeRef = useRef(null);

  useEffect(() => {
    if (!charId) return;
    let revokeUrl;
    (async () => {
      try {
        const res = await api.get(`/characters/${charId}`);
        const data = res.data;
        setMeta(data);
        const blob = new Blob([JSON.stringify(data.data, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        revokeUrl = url;
        setDownloadUrl(url);
        setSaveName(data.name || "");
        setSaveClass(data.char_class || "");
        setSaveLevel(data.level || 1);
      } catch (e) {
        setError(formatErr(e));
      }
    })();
    return () => { if (revokeUrl) URL.revokeObjectURL(revokeUrl); };
  }, [charId]);

  // Push character data into the iframe once ready
  useEffect(() => {
    if (!meta?.data) return;
    const payload = { type: "aurora:load-character", reqId: "init-" + Date.now(), data: meta.data };
    let attempts = 0;
    let sent = false;

    const onMsg = (ev) => {
      const m = ev && ev.data;
      if (m && m.type === "aurora:ready" && !sent) {
        const t = iframeRef.current?.contentWindow;
        const t2 = immersiveIframeRef.current?.contentWindow;
        try { if (t) t.postMessage(payload, "*"); } catch (_) { /* noop */ }
        try { if (t2) t2.postMessage(payload, "*"); } catch (_) { /* noop */ }
        sent = true;
      }
    };
    window.addEventListener("message", onMsg);

    const interval = setInterval(() => {
      if (sent || attempts++ > 8) { clearInterval(interval); return; }
      const t = iframeRef.current?.contentWindow;
      const t2 = immersiveIframeRef.current?.contentWindow;
      try { if (t) t.postMessage(payload, "*"); } catch (_) { /* noop */ }
      try { if (t2) t2.postMessage(payload, "*"); } catch (_) { /* noop */ }
    }, 250);

    return () => {
      window.removeEventListener("message", onMsg);
      clearInterval(interval);
    };
  }, [meta, immersive]);

  const requestCharacterFromIframe = () => {
    const win = (immersive ? immersiveIframeRef.current : iframeRef.current)?.contentWindow;
    if (!win) return Promise.reject(new Error("Sheet iframe not ready — please wait a moment and try again."));
    const reqId = "req-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        window.removeEventListener("message", onMsg);
        reject(new Error("The sheet did not respond. Open it, edit something, then try Quick Save again."));
      }, 8000);
      function onMsg(ev) {
        const m = ev && ev.data;
        if (!m || m.type !== "aurora:character" || m.reqId !== reqId) return;
        clearTimeout(timeout);
        window.removeEventListener("message", onMsg);
        if (!m.ok || !m.data) reject(new Error("Sheet returned no character data — edit the sheet then try again."));
        else resolve({ name: m.name, char_class: m.char_class, level: m.level, data: m.data });
      }
      window.addEventListener("message", onMsg);
      win.postMessage({ type: "aurora:get-character", reqId }, "*");
    });
  };

  const saveCurrentSheetToCloud = async () => {
    setSaving(true);
    setError("");
    try {
      const fromIframe = await requestCharacterFromIframe();
      const payload = {
        name: (saveName || fromIframe.name || "Unnamed Hero").trim(),
        char_class: (saveClass || fromIframe.char_class || "").trim(),
        level: Number(saveLevel || fromIframe.level || 1),
        data: fromIframe.data,
      };
      if (charId) {
        await api.put(`/characters/${charId}`, payload);
        toast.success("Updated in your codex.");
      } else {
        const created = (await api.post(`/characters`, payload)).data;
        toast.success("Saved to your codex.");
        navigate(`/sheet?id=${created.id}`);
      }
      setSaveOpen(false);
    } catch (err) {
      const msg = formatErr(err);
      setError(msg);
      toast.error(msg);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveToCloud = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      await saveCurrentSheetToCloud();
      return;
    }
    setSaving(true);
    setError("");
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const payload = {
        name: saveName.trim() || "Unnamed Hero",
        char_class: saveClass.trim(),
        level: Number(saveLevel) || 1,
        data,
      };
      if (charId) {
        await api.put(`/characters/${charId}`, payload);
        toast.success("Updated in your codex.");
      } else {
        const created = (await api.post(`/characters`, payload)).data;
        toast.success("Saved to your codex.");
        navigate(`/sheet?id=${created.id}`);
      }
      setSaveOpen(false);
    } catch (err) {
      const msg = formatErr(err);
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  // ── IMMERSIVE (FULLSCREEN) MODE ────────────────────────────────
  if (immersive) {
    return (
      <div className="fixed inset-0 z-[60] bg-ink flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 bg-ink-surface border-b border-edge gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setImmersive(false)}
              data-testid="immersive-exit-btn"
              className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-parchment-muted hover:text-gold transition-colors"
              title="Exit fullscreen (Esc)"
            >
              ✕ Exit
            </button>
            <span className="text-edge">|</span>
            <p
              data-testid="sheet-meta-name-immersive"
              className="font-cormorant italic text-parchment text-sm truncate"
            >
              {meta?.name || "Unsaved hero"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {downloadUrl && (
              <a
                href={downloadUrl}
                download={`${(meta?.name || "character").replace(/[^a-z0-9-_]+/gi, "_")}.json`}
                data-testid="sheet-download-json-immersive"
                className="px-3 py-1.5 border border-edge text-parchment-muted hover:text-parchment hover:border-parchment-muted font-cinzel text-[10px] tracking-[0.2em] uppercase btn-press"
              >
                ⬇ JSON
              </a>
            )}
            <button
              onClick={saveCurrentSheetToCloud}
              disabled={saving}
              data-testid="immersive-save-cloud-btn"
              className="px-3 py-1.5 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel text-[10px] tracking-[0.2em] uppercase border border-edge btn-press disabled:opacity-50"
            >
              {saving ? "Saving…" : "⚡ Quick Save"}
            </button>
          </div>
        </div>
        <iframe
          ref={immersiveIframeRef}
          data-testid="aurora-iframe-immersive"
          title="Aurora D&D 2024 Character Sheet — Immersive"
          src={charId ? "/sheet/aurora.html?continue=1" : "/sheet/aurora.html"}
          className="flex-1 w-full"
          allow="downloads"
          style={{ background: "#0F0C0B", border: 0 }}
        />
      </div>
    );
  }

  // ── NORMAL MODE — full-bleed sheet with a slim sticky chrome bar ──
  return (
    <div className="min-h-screen bg-ink flex flex-col">
      <Navbar />

      {/* Slim sticky action bar (sits flush under the navbar) */}
      <div
        data-testid="sheet-toolbar"
        className="sticky top-16 z-30 bg-ink-surface/95 backdrop-blur border-b border-edge"
      >
        <div className="px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/dashboard"
              data-testid="sheet-back-link"
              className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-parchment-muted hover:text-gold transition-colors whitespace-nowrap"
            >
              ← Codex
            </Link>
            <span className="text-edge">|</span>
            <div className="min-w-0 flex-1">
              <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase text-gold leading-none">
                {charId ? "Editing" : "New Character"}
              </p>
              <input
                data-testid="sheet-meta-name"
                value={saveName}
                onChange={(e) => {
                  const v = e.target.value;
                  setSaveName(v);
                  // Push the new name into the iframe so the character
                  // sheet's own name field updates live.
                  const win =
                    (immersive ? immersiveIframeRef.current : iframeRef.current)
                      ?.contentWindow;
                  if (win) {
                    try {
                      win.postMessage({ type: "aurora:set-name", name: v }, "*");
                    } catch (_e) { /* ignore */ }
                  }
                }}
                placeholder="Unsaved hero — type a name…"
                className="font-cormorant italic text-parchment text-base leading-tight bg-transparent border-b border-transparent hover:border-edge focus:border-gold outline-none px-0 py-0.5 w-full min-w-0 max-w-[28ch] rounded-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setImmersive(true)}
              data-testid="sheet-immersive-btn"
              title="Fullscreen (Shift+F)"
              className="px-3 py-1.5 border border-gold/50 text-gold hover:bg-gold/10 font-cinzel text-[10px] tracking-[0.2em] uppercase btn-press"
            >
              ⛶ Fullscreen
            </button>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download={`${(meta?.name || "character").replace(/[^a-z0-9-_]+/gi, "_")}.json`}
                data-testid="sheet-download-json"
                className="px-3 py-1.5 border border-edge text-parchment-muted hover:text-parchment hover:border-parchment-muted font-cinzel text-[10px] tracking-[0.2em] uppercase btn-press"
              >
                ⬇ JSON
              </a>
            )}
            <button
              onClick={saveCurrentSheetToCloud}
              disabled={saving}
              data-testid="sheet-quicksave-btn"
              title="Save the live sheet to the cloud instantly (Shift+F for fullscreen)"
              className="px-3 py-1.5 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel text-[10px] tracking-[0.2em] uppercase border border-edge btn-press disabled:opacity-50"
            >
              {saving ? "Saving…" : "⚡ Quick Save"}
            </button>
            <button
              onClick={() => setSaveOpen((v) => !v)}
              data-testid="sheet-save-cloud-toggle"
              className="px-3 py-1.5 border border-gold/50 text-gold hover:bg-gold/10 font-cinzel text-[10px] tracking-[0.2em] uppercase btn-press"
            >
              {charId ? "↑ Manual Sync" : "↑ Manual Save"}
            </button>
          </div>
        </div>

        {/* Manual save drawer */}
        {saveOpen && (
          <div className="border-t border-edge bg-ink/60 px-4 sm:px-6 py-3">
            <form
              onSubmit={handleSaveToCloud}
              data-testid="cloud-save-form"
              className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end"
            >
              <div className="md:col-span-2">
                <label className="block font-cinzel text-[9px] tracking-[0.3em] uppercase text-parchment-muted mb-1">
                  Hero name
                </label>
                <input
                  data-testid="cloud-save-name"
                  required
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-1.5 font-cormorant text-parchment rounded-none text-sm"
                  placeholder="Aurora the Bold"
                />
              </div>
              <div>
                <label className="block font-cinzel text-[9px] tracking-[0.3em] uppercase text-parchment-muted mb-1">
                  Class
                </label>
                <input
                  data-testid="cloud-save-class"
                  value={saveClass}
                  onChange={(e) => setSaveClass(e.target.value)}
                  className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-1.5 font-cormorant text-parchment rounded-none text-sm"
                  placeholder="Bard"
                />
              </div>
              <div>
                <label className="block font-cinzel text-[9px] tracking-[0.3em] uppercase text-parchment-muted mb-1">
                  Level
                </label>
                <input
                  data-testid="cloud-save-level"
                  type="number"
                  min={1}
                  max={20}
                  value={saveLevel}
                  onChange={(e) => setSaveLevel(e.target.value)}
                  className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-1.5 font-cormorant text-parchment rounded-none text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-cinzel text-[9px] tracking-[0.3em] uppercase text-parchment-muted mb-1">
                  JSON file (optional — empty pulls the live sheet)
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/json,.json"
                  data-testid="cloud-save-file"
                  className="block w-full text-xs text-parchment-muted font-cormorant
                    file:mr-3 file:py-1.5 file:px-3 file:border-0 file:bg-gold/10 file:text-gold
                    file:font-cinzel file:text-[10px] file:tracking-[0.2em] file:uppercase"
                />
              </div>
              <div className="md:col-span-6 flex items-center justify-between flex-wrap gap-3">
                {error && (
                  <p data-testid="cloud-save-error" className="text-crimson font-cormorant text-sm">
                    {error}
                  </p>
                )}
                <div className="flex gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setSaveOpen(false)}
                    data-testid="cloud-save-cancel"
                    className="px-4 py-1.5 text-parchment-muted hover:text-parchment font-cinzel text-[10px] tracking-[0.2em] uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    data-testid="cloud-save-submit"
                    className="px-5 py-1.5 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel text-[10px] tracking-[0.2em] uppercase border border-edge btn-press disabled:opacity-50"
                  >
                    {saving ? "Sealing…" : (charId ? "Update" : "Save")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Full-bleed iframe — no borders, no max-width wrapper */}
      <iframe
        ref={iframeRef}
        data-testid="aurora-iframe"
        title="Aurora D&D 2024 Character Sheet"
        src={charId ? "/sheet/aurora.html?continue=1" : "/sheet/aurora.html"}
        className="w-full flex-1"
        allow="downloads"
        style={{
          height: `calc(100vh - ${saveOpen ? 240 : 110}px)`,
          minHeight: 600,
          background: "#0F0C0B",
          border: 0,
          display: "block",
        }}
      />
    </div>
  );
}
