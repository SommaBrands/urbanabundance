# Urban Abundance — Marketing Site

The Urban Abundance 2.0 marketing site (urbanabundance.com). Static, self-contained — no build step.

## Run locally
Serve the folder with any static server, e.g.:

    npx serve .
    # or
    python3 -m http.server 8000

Open the printed URL. (Open via a server, not file://, so the module scripts and video load.)

## Structure
- `index.html` — app shell + SEO head (title, meta, Open Graph, JSON-LD, per-page metadata) and the router bootstrap.
- `*.jsx` — page + shared components, transpiled in the browser via Babel (React 18 pinned via CDN).
- `site.css` — layout, components, responsive rules. `styles.css` + `tokens/` — brand design tokens.
- `assets/` — logos, photography, blog images, hero video.
- `404.html` — branded not-found page with legacy-URL redirect logic.
- `_redirects` — Netlify 301s from old WordPress URLs to new routes.
- `robots.txt`, `sitemap.xml` — SEO.
- `HANDOFF.md` — production/Next.js migration guide (recommended for the real build).

## Deploy on Netlify
1. Push this folder to a GitHub repo.
2. In Netlify: New site → import the repo.
3. Build command: (leave blank). Publish directory: `/` (repo root, where index.html lives).
4. Deploy. `_redirects` and `404.html` are picked up automatically.

Routing is hash-based (`/#/how`, `/#/blog`, …) so every page is deep-linkable on a static host with no server rewrites.

## Note
This is a high-fidelity, browser-transpiled prototype. For maximum SEO/performance in production, see `HANDOFF.md` — recommended path is a Next.js (App Router) static build with real per-route URLs.
