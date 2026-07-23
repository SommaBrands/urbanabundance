# Handoff: Urban Abundance 2.0 — Production Deployment (urbanabundance.com)

## Overview
This is the full Urban Abundance 2.0 marketing site: a 7-page experience (Home, How It Works, Residential, Commercial, Our Story, Blog, Contact) with a sticky header + "More" dropdown, announcement ticker, a Jobber-embedded new-customer form, and an on-site blog with category filtering and article reader.

## About the design files
The files in `site/` are a **design reference built in HTML + in-browser React (Babel)** — a working prototype showing the intended look, copy, and behavior. They are **not** the production build. The task is to **recreate this in a production framework** (recommended below) using its established patterns, then deploy to urbanabundance.com. Everything is **high-fidelity**: recreate colors, type, spacing, and interactions exactly.

## Recommended production architecture

**Use Next.js (App Router) with static generation (SSG) + per-route metadata.** This is the single most important change for SEO: the current prototype is client-rendered (content loads via JS), so search crawlers see little in the initial HTML. Next.js renders each route to full HTML at build time.

- **One real route per page**: `/`, `/how-it-works`, `/residential`, `/commercial`, `/our-story`, `/blog`, `/blog/[slug]`, `/contact`. Replace the prototype's `useState`-based router (`index.html` bootstrap + `go(id)`) with the framework router (`<Link>` / `next/navigation`).
- **Per-route metadata**: port the `META` map in `site/index.html` into each route's `export const metadata` (title + description). The `<head>` block in `site/index.html` (Open Graph, Twitter, canonical, favicon, theme-color) becomes the root `metadata` + per-route overrides.
- **Structured data (JSON-LD)**: the `LocalBusiness`/`Organization`/`WebSite` graph in `site/index.html` should render in the root layout. Add `BlogPosting` JSON-LD to each `/blog/[slug]` page and `BreadcrumbList` where relevant.
- **Blog as real pages**: the posts live in `site/Blog.jsx` as a `POSTS` array (title, date, tag, cats, img, excerpt, body). Move these to MDX/CMS or a data file; render each at `/blog/[slug]` with its own metadata + BlogPosting schema. `body` is an array of blocks: plain strings = paragraphs, `{h}` = subheading, `{ul}` = bullet list, `{cta}` = download button.
- **Sitemap + robots**: `site/sitemap.xml` and `site/robots.txt` are starting points — regenerate the sitemap from the route list (Next.js `sitemap.ts`) and include every blog slug. Update the domain if needed (already set to https://urbanabundance.com/).
- **Fonts**: DM Serif Display (headings) + Hanken Grotesk (body/UI) via `next/font/google` for zero-layout-shift loading.
- **Forms**: the Contact page embeds the real Jobber work-request form via iframe (`JOBBER_FORM_URL` in `site/Contact.jsx`). Keep the iframe; it works on the production domain. Ensure Jobber allows framing on urbanabundance.com.
- **Analytics/consent**: add GA4/GTM (the old site used GTM-WXCFBZBW) and a cookie banner in the root layout.

If the team prefers not to adopt Next.js, the fallback is a prerender step (e.g. `react-snap` / `vite-plugin-ssr` / `@prerenderer`) over a Vite React port so each route emits static HTML — but Next.js SSG is the cleaner long-term path.

## Design tokens
Global tokens are defined in the design system root (`../../styles.css` → `tokens/*.css`). The prototype-specific tokens live in `site/site.css`.

**Color**
- Grass green `#89C377`, Lime `#C8DB4B` (bright accent), Basil `#35702D` (`--green-deep`, text/links/buttons), Forest `#264F20` (hover).
- Neutrals: Ink `#33302A` (`--soil-900`, dark bands), Body `#4F4B42`, Soil/Taupe `#706C61`, Sand `#E7E2D5` (borders), Bone `#F5F2E9`, Oat `#EDE8DB` (alt band), Paper `#FCFBF6` (page bg), White.
- Mist `#E9F1DD` (`--green-mist`, small tints only — never large backgrounds).
- Status: Tomato `#CE4A2F` (danger), Sun `#E9B949` (warning), Sky `#7FB0C4` (info).

**Type** — Headings: `DM Serif Display` (`--display`). Body/UI: `Hanken Grotesk` (`--font-body`/`--font-ui`). Eyebrows: uppercase, 700, letter-spacing .14–.18em, in basil green.

**Radius** — buttons are pills (`--radius-pill`); cards ~22px; leaf-corner motif on imagery: `border-radius: 16px 16px 90px 16px` (and mirrored variants). Non-button labels/chips use small radius (7–8px), NOT pills.

**Shadow** — soft, warm, soil-tinted (e.g. `0 10px 30px rgba(51,48,42,.07)`, `0 24px 50px rgba(51,48,42,.16)`).

**Motion** — gentle grow/fade; `Reveal` (IntersectionObserver fade-up) on section entry; buttons lift 2px on hover.

## Screens / Views
1. **Home** — ticker, hero ("You relax. We grow." with lime highlight swash + rating/press/seal), stat strip (12 growing months · 500+ beds · 300+ families), "start with your space" (3 cards), 3-step process, **Vego Garden partner** bed showcase (real finishes: Olive Green, British Green, Terra Cotta, Modern Gray, Pearl White, Sky Blue, Sunlit Oak; product cards), membership teaser, "what's growing now" seasonal chips, testimonials, dark CTA band.
2. **How It Works** — 3 phases (Design / Install / Membership) alternating splits; member bonuses (team access, Farmer Jack call, welcome pack); **Why-it-works timeline** on a dark band (5 nodes + "where most companies stop / where UA keeps going" bracket).
3. **Residential** — hero, who-it's-for, what's-included, 3 membership tiers (Kitchen Garden $159/1 bed · Family Harvest $299/3 beds · Estate custom/4+).
4. **Commercial** — hero, segments (Restaurants, Community, Assisted Living, Treatment Centers), what's-included, 3 partner programs.
5. **Our Story** — mission, Farmer Jack founder story, values, movement stats.
6. **Blog** — hero, category filter, featured post, card grid; in-site article reader (hero image, rich body, related posts). Real posts + images in `assets/blog/`.
7. **Contact** — 2-column: Jobber form iframe + "what happens next" + nursery address/hours (17035 Jupiter Farms Rd; 1515 N. Dixie Hwy, Lake Worth Beach).

## Icons
Custom single-color line set in `site/Icons.jsx` (`<Icon name>` + `<Stars>`) — sprout, leaf, herb, carrot, flower, sun, droplet, calendar, broadcast, check, phone, pin, basket, gift, chat, cycle, heart, book, star, + monochrome social marks. No emoji. Port as an SVG icon component.

## Responsive
Breakpoints in `site.css`: ≤1000px (3-col → 2-col), ≤820px (mobile menu/hamburger, splits stack, headings scale), ≤620px (single column, tighter spacing). Nav collapses to an animated hamburger panel.

## Assets
- Logos: `../../assets/logo-horizontal.png`, `logo-horizontal-white.png`, `logo-icon.png`/`-white`.
- Photography: `../../assets/photos/`.
- Blog images: `../../assets/blog/` (rabbit, ladybug, cropfest, earthworm, del-monte, february-harvest, grocery-costs, jicama, drought, referral).
- In production, move these into the app's `public/` and serve optimized (`next/image`).

## Files (in this bundle, under `site/`)
- `index.html` — SPA shell + all SEO `<head>`, JSON-LD, per-page META map, `<noscript>` fallback.
- `site.css` — prototype tokens, components, responsive rules.
- `Shared.jsx` — Ticker, Header (nav + More dropdown + mobile menu), Footer, CTABand, Reveal.
- `Icons.jsx` — icon set.
- `Home.jsx`, `HowItWorks.jsx`, `Residential.jsx`, `Commercial.jsx`, `About.jsx`, `Blog.jsx`, `Contact.jsx` — page content + copy.
- `robots.txt`, `sitemap.xml`.

The same site is registered as the `Marketing Site` template at `templates/marketing-site/` in the design system.
