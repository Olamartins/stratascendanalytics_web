# Frontend — Stratascend Analytics

Vite + React 18 + TypeScript + Tailwind CSS 3 + Framer Motion.

## Scripts

```bash
npm install
npm run dev      # dev server on :5173 (proxies /api and /uploads to :4000)
npm run build    # typecheck (tsc -b) + production build in dist/
npm run preview  # serve the production build
npm run lint     # eslint
npm run format   # prettier
```

## Structure

```
src/
├── theme/ThemeContext.tsx   # dark/light theme, persisted to localStorage, CSS vars
├── components/              # Header, Footer, ThemeToggle, Container, PageTransition
├── pages/                   # Home (demo), NotFound — more pages in phase 4
├── lib/api.ts               # fetch wrapper (credentials: include) + money formatter
└── index.css                # Tailwind + Material design tokens (light/dark CSS variables)
```

## Theming

- Toggle: header button (persisted in `localStorage["strat-theme"]`, applied pre-paint in `index.html`).
- Tokens: CSS variables in `src/index.css` (`:root` / `.dark`), mapped in `tailwind.config.js`
  as `primary-*`, `accent`, `surface-*`, `ink-*`, `line`, plus Material elevations `shadow-mat-1..4`.
- Fonts (loaded in `index.html` exactly as specified): Outfit (display) + Plus Jakarta Sans (body).

## Env

`VITE_API_URL` — API base URL for production builds (e.g. `https://api.stratascendanalytics.com`).
In dev it is empty and Vite proxies `/api` to `http://localhost:4000`.

## Production build for cPanel

`npm run build` → upload `dist/` contents to `public_html` (or a subfolder) and add an
`.htaccess` SPA rewrite (see root `docs/DEPLOYMENT.md`).
