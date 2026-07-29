# Urban Abundance 2.0 — live site

Static site. No build step, no dependencies. Everything is in `index.html`.

## Push it with GitHub Desktop
1. **File → New repository** (or open your existing site repo).
2. Unzip this bundle and copy its contents into the repository folder — the
   files must sit at the **root** of the repo, not inside a subfolder:
   ```
   index.html
   styles.css
   site.css
   404.html
   robots.txt
   sitemap.xml
   _redirects
   .gitignore
   assets/
   ```
3. GitHub Desktop shows the changes → write a summary ("Launch UA 2.0 site")
   → **Commit to main** → **Push origin**.

## Then connect the repo to Netlify (recommended host)
1. netlify.com → **Add new site → Import an existing project → GitHub**, pick
   the repo.
2. Build command: **leave empty**. Publish directory: **`.`** (a single dot).
3. Deploy. Every future push auto-deploys.
4. **Domain management** → add `urbanabundance.com` (primary) and
   `urbanabundancenursery.com`. Point DNS at Netlify as it instructs.

`_redirects` is read automatically by Netlify — no config needed.

> Note: GitHub Pages ignores `_redirects`, so the legacy WordPress and nursery
> URL redirects won't work there. Use Netlify (or Cloudflare Pages, which reads
> the same file).

## Point urbanabundancenursery.com at the "we've moved" page
Once the domain is added in Netlify, add these two lines to the top of
`_redirects`, commit, and push:

```
http://urbanabundancenursery.com/*   https://urbanabundance.com/#/nursery  301!
https://urbanabundancenursery.com/*  https://urbanabundance.com/#/nursery  301!
```

Legacy nursery paths (`/shop/*`, `/product/*`, `/plants/*`, `/nursery`) are
already mapped in `_redirects`.

## Routes
`/#/` home · `/#/how` · `/#/residential` · `/#/commercial` · `/#/about` ·
`/#/blog` · `/#/contact` · `/#/nursery` (moved-to-SmartyPlants notice)

## Before launch
- DNS for both domains pointed at the host.
- Test the Jobber form on `/#/contact`.
- Submit `sitemap.xml` in Google Search Console.

## Editing later
Page components live inline in `index.html` under the
`<script type="text/babel">` block, in order: Icons, Shared (header/footer/CTA),
Home, HowItWorks, Residential, Commercial, About, Blog, Contact, NurseryMoved.
Brand tokens (colors, type, spacing) are in `styles.css`; site layout in
`site.css`. Edit, commit, push — Netlify redeploys.
