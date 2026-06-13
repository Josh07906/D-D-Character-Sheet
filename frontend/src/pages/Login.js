import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await login({ username: username.trim(), password });
    setLoading(false);
    if (res.ok) {
      const to = location.state?.from || "/dashboard";
      navigate(to);
    } else {
      setError(res.error);
    }
  };

  return (
    <div className="min-h-screen bg-leather">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
              ❖ Welcome back, traveller
            </p>
            <h1 className="font-cinzel text-parchment text-4xl">Enter the Codex</h1>
            <p className="mt-4 font-cormorant italic text-parchment-muted">
              Sign in with your codex name and pass-phrase.
            </p>
          </div>

          <form
            data-testid="login-form"
            onSubmit={onSubmit}
            className="bg-ink-surface border border-edge p-8 space-y-5"
          >
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-2">
                Username
              </label>
              <input
                data-testid="login-username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
                placeholder="aurora"
              />
            </div>
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.3em] uppercase text-parchment-muted mb-2">
                Pass-phrase
              </label>
              <input
                data-testid="login-password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-ink/60 border-b border-edge focus:border-gold outline-none px-2 py-2 font-cormorant text-parchment rounded-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="login-submit-button"
              className="w-full px-6 py-3 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-sm border border-edge btn-press disabled:opacity-50"
            >
              {loading ? "Entering…" : "Enter the Codex"}
            </button>

            {error && (
              <div
                data-testid="login-error"
                className="text-crimson border border-crimson/30 bg-crimson/10 px-4 py-3 font-cormorant text-sm"
              >
                {error}
              </div>
            )}

            <p className="text-center font-cormorant italic text-parchment-dim text-sm">
              No codex yet?{" "}
              <Link to="/register" className="text-gold hover:underline" data-testid="login-register-link">
                Begin your tale
              </Link>
              .
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
