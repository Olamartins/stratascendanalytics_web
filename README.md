# stratascendanalytics_web

Modern rebuild of **stratascendanalytics.com** — a dynamic data-analytics-as-a-service
site (public storefront + admin CMS) built with **React + Tailwind + Framer Motion**
(frontend) and **Node.js/Express + MySQL** (backend), with **Paystack** payments.

## Repo layout

```
├── frontend/          # Vite + React 18 + TS + Tailwind 3 + Framer Motion (public site & admin shell)
├── backend/           # Express + TS API, mysql2, JWT-cookie auth, multer uploads, Paystack
├── database/          # schema.sql (import via phpMyAdmin) + seed.sql (demo content & admin user)
├── api/openapi.yaml   # OpenAPI 3.1 spec of the REST API (import into Postman)
├── docs/
│   ├── CONTENT_MAP.md # Phase 1: content map of the existing WordPress site
│   ├── REVIEW_CHECKLIST.md # Phase 2 review checklist before CMS/payments work
│   └── DEPLOYMENT.md  # cPanel / Namecheap deployment runbook (added in phase 9)
└── .env.example       # copy to .env — DB, JWT, Paystack, SMTP placeholders
```

## Quick start (dev)

```bash
# 1. Database: create DB and import schema + seed (phpMyAdmin or CLI)
mysql -u root -p -e "CREATE DATABASE stratascend CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -p stratascend < database/schema.sql
mysql -u root -p stratascend < database/seed.sql

# 2. Env
cp .env.example .env        # fill DB_* and JWT_SECRET (Paystack/SMTP can stay placeholder for now)

# 3. Backend (http://localhost:4000)
cd backend && npm install && npm run dev

# 4. Frontend (http://localhost:5173, proxies /api to :4000)
cd frontend && npm install && npm run dev
```

**Demo admin login:** `admin@stratascendanalytics.com` / `Admin@12345`
— change it right after first login via `cd backend && npm run create-admin -- --email you@... --password "..."`.

## Phases

1. Discovery + content map — `docs/CONTENT_MAP.md` ✅
2. Repo scaffolding, theme tokens, demo page, SQL schema, `.env.example` — this PR ✅
3. DB schema & seed ✅ (importable now)
4. Public pages (Products/Resources/Training/Blog/Contact) — next
5. Backend CRUD + media + audit — next
6. Admin GUI — next
7. Paystack checkout + webhooks — next
8. QA & accessibility
9. cPanel/Namecheap deployment artifacts — `docs/DEPLOYMENT.md`
10. Handoff runbook

## Libraries used

- Frontend: [React](https://react.dev) 18, [Vite](https://vite.dev), [Tailwind CSS](https://tailwindcss.com) 3,
  [Framer Motion](https://www.framer.com/motion/), [react-router](https://reactrouter.com), [lucide-react](https://lucide.dev) icons.
- Backend: [Express](https://expressjs.com) 4, [mysql2](https://github.com/sidorares/node-mysql2),
  [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/dcodeIO/bcrypt.js),
  [multer](https://github.com/expressjs/multer), [zod](https://zod.dev), [nodemailer](https://nodemailer.com),
  [helmet](https://helmetjs.github.io)/[cors](https://github.com/expressjs/cors)/[express-rate-limit](https://github.com/expressjs/rate-limiter).
- Planned for CMS phase: [TipTap](https://tiptap.dev) rich-text editor.
- Payments: [Paystack API](https://paystack.com/docs/api) (server-side init + signature-verified webhooks).

No secrets are committed — all keys live in `.env` (see `.env.example`).
