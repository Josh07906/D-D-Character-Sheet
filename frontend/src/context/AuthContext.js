import React, { createContext, useContext, useEffect, useState } from "react";
import { api, formatApiErrorDetail } from "../lib/api";

const AuthContext = createContext(null);

const TOKEN_KEY = "aurora.access_token";

function setStoredToken(token) {
  if (!token) {
    localStorage.removeItem(TOKEN_KEY);
    delete api.defaults.headers.common.Authorization;
    return;
  }
  localStorage.setItem(TOKEN_KEY, token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function bootstrapToken() {
  const t = localStorage.getItem(TOKEN_KEY);
  if (t) api.defaults.headers.common.Authorization = `Bearer ${t}`;
}

function describeAxiosError(e) {
  // Network / CORS error → no `e.response`
  if (!e.response) {
    return `Network error: ${e.message || "no response from server"}. ` +
      `Open DevTools → Network tab to see the failed request.`;
  }
  const { status, data } = e.response;
  if (data && data.detail) return formatApiErrorDetail(data.detail);
  if (typeof data === "string" && data.length > 0 && data.length < 300) {
    return `Server returned ${status}: ${data}`;
  }
  return `Server returned HTTP ${status}.`;
}

export function AuthProvider({ children }) {
  // null = checking, false = anonymous, object = authenticated
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;
    bootstrapToken();
    (async () => {
      try {
        const res = await api.get("/auth/me");
        if (!cancelled) setUser(res.data);
      } catch (_e) {
        if (!cancelled) setUser(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const login = async ({ username, password }) => {
    try {
      const res = await api.post("/auth/login", { username, password });
      if (res.data.access_token) setStoredToken(res.data.access_token);
      setUser(res.data.user);
      return { ok: true, user: res.data.user };
    } catch (e) {
      return { ok: false, error: describeAxiosError(e) };
    }
  };

  const register = async ({ username, password, name }) => {
    try {
      const res = await api.post("/auth/register", { username, password, name });
      if (res.data.access_token) setStoredToken(res.data.access_token);
      setUser(res.data.user);
      return { ok: true, user: res.data.user };
    } catch (e) {
      return { ok: false, error: describeAxiosError(e) };
    }
  };

  const logout = async () => {
    try { await api.post("/auth/logout"); } catch (_e) { /* ignore */ }
    setStoredToken(null);
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
