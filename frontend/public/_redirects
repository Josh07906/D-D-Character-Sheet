# Force /api requests to the serverless function FIRST.
# The trailing ! makes the rule unconditional (overrides shadow rules).
/api/*    /.netlify/functions/api/:splat    200!
/api      /.netlify/functions/api           200!

# SPA fallback for React Router — only matches unmatched paths.
/*        /index.html                       200
