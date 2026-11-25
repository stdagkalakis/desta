# desta — Wedding Invitation

A tiny static wedding invitation site: **React + TypeScript + Vite**, hosted on **GitHub Pages**.

## Requirements

- Node.js 20+ (tested with 22)
- npm 10+

## Run locally

```bash
npm install     # install dependencies (once)
npm run dev     # start dev server on http://localhost:5173/
```

## Other commands

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run build`     | Type-check and build the static site to `dist/` |
| `npm run preview`   | Serve the built `dist/` locally               |
| `npm run typecheck` | TypeScript check only                         |

## Edit the invitation

All wedding details live in one file: `src/content.ts` — names, date/time, venue,
Google Maps URLs and the shared photo album link.

- `dateTime` is ISO and drives the countdown; `dateLabel`/`timeLabel` are what visitors read.
- `mapEmbedUrl`: Google Maps → Share → **Embed a map** → copy the `src` URL.
- `photosUrl`: link to the shared Google Drive folder.

Layout is `src/App.tsx` (one page, sections: hero, countdown, map, photos),
styling is `src/styles.css`.

## Project structure

```
index.html            # page shell
vite.config.ts        # Vite config (base = '/')
public/CNAME          # custom domain for GitHub Pages
src/
  main.tsx            # React entry point
  App.tsx             # the invitation page (all sections)
  Countdown.tsx       # countdown to the ceremony
  content.ts          # names, date, venue, map + photo links
  styles.css          # styles
.github/workflows/deploy.yml   # GitHub Pages deployment
```

## Deploy (GitHub Pages)

1. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow builds and deploys automatically.
3. Site URL: `https://desta-wedd.ing`

### Custom domain

- The domain is registered in Cloudflare; DNS points at the GitHub Pages IPs
  (`185.199.108-111.153` on `@`, CNAME `www` → `stdagkalakis.github.io`), all records
  set to **DNS only** (no Cloudflare proxy), with SSL/TLS mode **Full (strict)**.
- `public/CNAME` must contain the domain. It is copied to `dist/` on every build —
  without it, each deploy clears the custom domain in GitHub Pages settings.
- `base` in `vite.config.ts` is `'/'` because the site is served from the domain root.
  If you ever move back to `stdagkalakis.github.io/desta/`, set it to `'/desta/'` and
  delete `public/CNAME`.
- `.ing` is an HSTS-preloaded TLD, so HTTPS is mandatory — keep **Enforce HTTPS** on.
