# Content Map — stratascendanalytics.com (Phase 1 discovery)

Source: live WordPress/Elementor site, enumerated via `sitemap.xml` (SureRank).
All copy below is paraphrased/structural; the rebuild uses fresh placeholder copy
that the admin can edit through the CMS.

## 1. Inventory of existing pages

| URL | Type | Purpose | Migrate to |
|---|---|---|---|
| `/` | Home | Hero + services grid + about blurb + clients + CTAs + newsletter | Public `Home` page (CMS-driven) |
| `/services/` | Page | Detailed service catalogue (8 services, each with "what we deliver" / "why us") | `Services` section driven by `products`/`pages` + dedicated Services page |
| `/about/` | Page | Company intro, core values, client testimonials, CTA | Public `About` page |
| `/contact/` | Page | Address, phone, socials, contact/quote form | Public `Contact` page + `POST /api/contact` |
| `/customer-cabinet/`, `/customer-cabinet-2/` | Page | WP/WooCommerce account placeholders | Replace with customer order/download portal (post-purchase) |
| `/sample-page/` | Page | WordPress default | Drop |
| `/hello-world/` | Post | WordPress default post | Replace with CMS blog seed posts |

## 2. Home page — section-by-section

1. **Header/nav** — brand logo, menu, CTA button.
2. **Hero** — headline "Elevating Strategy, Empowering Growth"; sub: businesses thrive by acting on data; CTA "Find out how!" → services.
3. **"Hire Us For" service grid (6 cards)** — Data Analytics as a Service (DAaaS), Business Intelligence, Data Visualization / Dashboards, Predictive Analytics, Web Development, Training & Capacity Building. Each card: title, tagline, short description.
4. **About blurb** — "more than a digital agency — your growth partners"; Vision ("leading force in elevating strategy through data") and Mission ("actionable, innovative analytics solutions").
5. **Clients We Worked With** — logo strip (S&S Ali, RotnikTech Consult, Hausoriginal, VizNerd).
6. **Why Choose Us** — listening, impartial advice, honest pricing narrative.
7. **CTA band** — "Have a project in mind?" → "Schedule a Call".
8. **Closing CTA** — "Let us together build a flourishing business" → "Get A Quote".
9. **Newsletter subscribe** — email capture form (JS-driven on WP).

## 3. Services page (`/services/`)

Intro: "Insights that Drive Action". Eight service blocks, each with a headline, tagline, "What We Deliver" bullet list, and "Why Choose Us" line:

1. Data Analytics as a Service (DAaaS) — on-demand expert analytics, pipelines, reports, monitoring.
2. Business Intelligence — unified single source of truth, 360° view, automated real-time reporting, custom KPIs.
3. Data Visualization — interactive dashboards in Power BI / Tableau / Excel, role-based, mobile-responsive.
4. Predictive Analytics — forecasting, risk modeling, customer segmentation, AI trend analysis.
5. Web Development — responsive, secure, SEO-ready sites with analytics integration.
6. Digital Transformation — process automation, cloud migration, AI-driven operations.
7. Training & Capacity Building — individual 1:1, corporate workshops, self-paced; areas: data/BI analysis, visualization (Excel/Power BI/Tableau), web dev.
8. Dashboard Templates (Power BI & more) — pre-built customizable templates → maps to **sellable Resources/Products**.

Page ends with client logo strip + both CTAs (Schedule a Call / Get A Quote).

## 4. About page (`/about/`)

- Intro paragraph (growth partners, data + technology + strategy).
- **Core values**: Excellence, Insight, Collaboration, Innovation, Timeliness.
- **Testimonials**: 4 client quotes (Cynthia M., Samuel K., Grace T., Fatima O.), each rated 4.5/5 — dashboards, training, BI cost-cutting, delivery professionalism.
- Quote CTA: "Let's create something extraordinary together" + Schedule a Call + Get A Quote bands.

## 5. Contact page (`/contact/`)

- "We are here to help!" + address (3, Daniella Close, Elikpokwuodu, Port Harcourt) + phone (+234 901 450 6008).
- Socials: Facebook, Twitter/X, YouTube.
- Form: First/Last name, Email, Subject, Message → button "Get A Quote".

## 6. Assets to migrate (from sitemap image entries)

- Brand: `viznerd_company_logo.png`
- Clients: `client_sandsali.png`, `RotnikTechConsult_Logo.png`, `Hausoriginal.png`
- Imagery: `about_img.jpg`, `about_img_02.jpg`, `cta_project_img.jpg`, `cta-img.jpg`, `gallery-1..3.jpg`
- Service art: `data_analysis.png`, `biz_intelligence.png`, `data_viz.png`, `predictions_bg.png`, `web_development_bg.png`, `digital_transformation.png`, `training_bg.png`, `bi_template.png`

(Download from `wp-content/uploads/...` during migration; placeholders used until then.)

## 7. New site map (target build)

Public: Home, About, Services, Products (+detail), Resources (+detail), Training (+list/detail), Blog/Insights (+post), Contact, Terms, Privacy, 404, plus post-purchase Downloads portal.
Admin (`/admin/*`, JWT-cookie auth): Dashboard, Pages, Products, Resources, Trainings, Orders, Customers, Media, Users & Roles, Settings, Audit Logs.

## 8. Design direction board

- **Look**: Material Design 3-inspired — elevated cards, rounded-2xl surfaces, tonal color, clear type hierarchy, motion (page transitions, hover lifts, CTA pulse) via Framer Motion.
- **Palette** (light): primary indigo `#4F46E5`, deep navy surface text `#0F172A`, accent teal `#0D9488`, background `#F8FAFC`. **Dark**: Material dark baseline `#121212` with elevated surfaces `#1E1E1E`/`#242424`, primary `#A5B4FC`-toned.
- **Type**: Outfit (display/headings, weights 100–900) + Plus Jakarta Sans (body, 200–800 + italics) — loaded exactly from Google Fonts as specified.
- **Motion**: 200–300 ms ease-out page fades/slides; card hover lift (−4 px, elevation up); CTA subtle pulse.
- **Accessibility**: WCAG AA contrast in both themes, focus-visible rings, semantic landmarks, keyboard-navigable nav, skip link.
