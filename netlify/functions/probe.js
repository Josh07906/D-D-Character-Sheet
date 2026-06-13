// Minimal probe — confirms ANY function can deploy and execute.
// Visit /.netlify/functions/probe in the browser → {"ok":true,"probe":"alive"}.
exports.handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ok: true, probe: "alive" }),
});
