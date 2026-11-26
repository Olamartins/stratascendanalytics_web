# Backend — Stratascend Analytics API

Express 4 + TypeScript + mysql2 (prepared statements via `pool.execute`) + JWT in an
HttpOnly cookie. Only `/api/admin/*` routes are protected.

## Scripts

```bash
npm install
npm run dev           # tsx watch on :4000
npm run build         # tsc -> dist/
npm start             # node dist/index.js
npm test              # vitest unit tests
npm run create-admin  # create/reset an admin user (prompts for password)
```

## Structure

```
src/
├── config/env.ts       # zod-validated environment (loads repo-root .env)
├── db/pool.ts          # mysql2 promise pool + query() helper
├── middleware/         # auth (JWT cookie, roles), audit log, error handler
├── routes/             # health, auth (implemented); CRUD routers (phase 5 stubs)
├── utils/              # slugify (+ unit test)
└── app.ts / index.ts   # app factory + server bootstrap
scripts/create-admin.ts
```

## Auth flow

`POST /api/admin/login {email,password}` → bcrypt check → JWT signed with `JWT_SECRET`,
set as HttpOnly/SameSite cookie `strat_admin` (`Secure` in production). `GET /api/admin/me`
returns the current user; `POST /api/admin/logout` clears the cookie.

## Env

Copy repo-root `.env.example` to `.env` and fill: `DB_*`, `JWT_SECRET`, `PAYSTACK_*`,
`SMTP_*`, `CORS_ORIGIN`, `COOKIE_SECURE=true` in production.

## Security notes

- All SQL via prepared statements (`mysql2` `execute`), inputs validated with zod.
- `helmet`, CORS restricted to `CORS_ORIGIN` with credentials, rate limit on `/api/*`.
- Uploads (phase 5) via multer into `UPLOAD_DIR` with type/size allow-listing.
- Paystack webhooks (phase 7) verified with `x-paystack-signature` HMAC + verify endpoint.
