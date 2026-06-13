import axios from "axios";

// On Netlify (single-platform deploy) leave REACT_APP_BACKEND_URL unset
// and the API will be reached via relative `/api/*` URLs (same origin
// → Netlify Function). For a split deploy (Render/Fly backend) set it
// to the API base URL (no trailing slash, no /api suffix).
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
export const API = `${BACKEND_URL}/api`;

// `withCredentials: false` because:
//   1) Auth uses a Bearer token in localStorage (see AuthContext.js) —
//      cookies aren't required by the client.
//   2) Some edge proxies in front of the API rewrite the response
//      `Access-Control-Allow-Origin` header to `*`. Browsers refuse to
//      accept that together with credentials, so sending credentials
//      would trigger a "Network Error" in the SPA even though the
//      server replied 200.
export const api = axios.create({
  baseURL: API,
  withCredentials: false,
});

export function formatApiErrorDetail(detail) {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}
