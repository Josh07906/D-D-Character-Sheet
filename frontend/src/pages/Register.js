import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await register({
      name: name.trim(),
      username: username.trim(),
      password,
    });
    setLoading(false);
    if (res.ok) navigate("/dashboard");
    else setError(res.error);
  };

  return (
    <div className="min-h-screen bg-leather">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
              ❖ Begin your tale
            </p>
            <h1 className="font-cinzel text-parchment text-4xl">Forge a Codex</h1>
            <p className="mt-4 font-cormorant italic text-parchment-muted">
              Claim a name, set a pass-phrase, step into the chronicle.
            </p>
          </div>

          <form
            data-testid="register-form"
            onSubmit={onSubmit}
            className="bg-ink-surface border border-edge p-8 space-y-5"
          >
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-2">
                Display name
              </label>
              <input
                data-testid="register-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={80}
                className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
                placeholder="Aurora the Bold"
              />
            </div>
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-2">
                Username
              </label>
              <input
                data-testid="register-username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
                maxLength={32}
                pattern="[A-Za-z0-9_\-.]+"
                title="3-32 characters: letters, numbers, _ - ."
                autoComplete="username"
                className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
                placeholder="aurora"
              />
              <p className="mt-1 font-cormorant italic text-parchment-dim text-xs">
                3–32 chars: letters, numbers, dot, dash, underscore.
              </p>
            </div>
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-2">
                Pass-phrase
              </label>
              <input
                data-testid="register-password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={128}
                autoComplete="new-password"
                className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
                placeholder="At least 6 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="register-submit-button"
              className="w-full px-6 py-3 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-sm border border-edge btn-press disabled:opacity-50"
            >
              {loading ? "Inscribing…" : "Forge Codex"}
            </button>

            {error && (
              <div
                data-testid="register-error"
                className="text-crimson border border-crimson/30 bg-crimson/10 px-4 py-3 font-cormorant text-sm"
              >
                {error}
              </div>
            )}

            <p className="text-center font-cormorant italic text-parchment-dim text-sm">
              Already a scribe?{" "}
              <Link to="/login" className="text-gold hover:underline" data-testid="register-login-link">
                Return to the codex
              </Link>
              .
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
