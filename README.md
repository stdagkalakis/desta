# desta — Wedding Invitation

A tiny static wedding invitation site: **React + TypeScript + Vite**, hosted on **GitHub Pages**.

## Requirements

- Node.js 20+ (tested with 22)
- npm 10+

## Run locally

```bash
npm install     # install dependencies (once)
npm run dev     # start dev server on http://localhost:5173/desta/
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
vite.config.ts        # Vite config (base = '/desta/')
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
3. Site URL: `https://stdagkalakis.github.io/desta/`

> If the repo is renamed, update `base` in `vite.config.ts` to `/<new-repo-name>/`.
> For a custom domain, set `base: '/'` and add a `public/CNAME` file with the domain.
