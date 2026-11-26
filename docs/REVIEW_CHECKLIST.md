# Phase 1–2 review checklist (before CMS & payments work starts)

Please review the following in this PR and confirm before I proceed to phases 4–7:

## Content & discovery
- [ ] `docs/CONTENT_MAP.md` matches the live site structure (pages, sections, assets, design direction)
- [ ] Target sitemap (public + admin) is the right shape; anything missing (e.g. customer portal scope)?

## Structure & config
- [ ] `/frontend` + `/backend` + `/database` + `/api` + `/docs` layout works for you
- [ ] `.env.example` covers everything needed (DB, JWT, Paystack, SMTP, uploads)
- [ ] `database/schema.sql` imports cleanly in phpMyAdmin; `database/seed.sql` loads demo content
- [ ] `api/openapi.yaml` endpoint surface is what you expect (importable into Postman)

## Frontend demo (phase 2)
- [ ] `cd frontend && npm run dev` → demo home page renders at http://localhost:5173
- [ ] Dark/light toggle in the header works and persists across reloads (localStorage + CSS vars)
- [ ] Material look: elevations (`shadow-mat-*`), cards, rounded surfaces, hierarchy
- [ ] Framer Motion: page transition on route change, card hover lifts, CTA pulse on hero
- [ ] Fonts render: Outfit headings + Plus Jakarta Sans body (Google Fonts links in `index.html`)
- [ ] Responsive: check mobile menu (hamburger), tablet, desktop widths
- [ ] `npm run build` produces `dist/` without type errors

## Backend skeleton
- [ ] `cd backend && npm run dev` → `GET /api/health` returns ok
- [ ] `POST /api/admin/login` with seeded admin (`admin@stratascendanalytics.com` / `Admin@12345`)
      sets the HttpOnly cookie; `GET /api/admin/me` returns the user; logout clears it
- [ ] CRUD routers return 501 placeholders until phase 5 (expected)
- [ ] `npm test` passes (slugify unit tests); `npm run build` compiles

## Decisions to confirm
- [ ] Stack choices: Vite (not Next.js/CRA), Express (not NestJS), mysql2 (no ORM) — OK?
- [ ] TipTap as the admin WYSIWYG editor — OK?
- [ ] Currency NGN default with Paystack — OK?
- [ ] Demo admin credentials documented in README (change after first login) — OK?

Reply with any changes; otherwise I'll proceed to phase 4 (public pages) → 5 (CRUD) → 6 (admin GUI) → 7 (Paystack).
