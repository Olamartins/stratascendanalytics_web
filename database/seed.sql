-- Stratascend Analytics — seed data (demo content, replace via the admin CMS).
-- Demo admin: admin@stratascendanalytics.com / Admin@12345  (change immediately after first login)
-- Hash below is bcrypt of "Admin@12345".

USE stratascend;

INSERT INTO users (name, email, password_hash, role) VALUES
  ('Demo Admin', 'admin@stratascendanalytics.com', '$2a$10$0UnQ9rCMQ/X.SGeZcFdulOkciHofcybo30QWJxYZqzlsCBg3F5qyS', 'admin');

INSERT INTO settings (`key`, value, updated_by) VALUES
  ('site', JSON_OBJECT(
    'name', 'Stratascend Analytics',
    'tagline', 'Elevating Strategy, Empowering Growth',
    'defaultTheme', 'light',
    'contactEmail', 'hello@stratascendanalytics.com',
    'phone', '+2349014506008',
    'address', '3, Daniella Close, Elikpokwuodu, Port Harcourt, Nigeria',
    'socials', JSON_OBJECT('facebook', '', 'twitter', '', 'youtube', '')
  ), 1),
  ('paystack', JSON_OBJECT('publicKey', 'pk_test_replace_me', 'currency', 'NGN'), 1),
  ('header', JSON_OBJECT('ctaLabel', 'Get a Quote', 'ctaHref', '/contact'), 1),
  ('footer', JSON_OBJECT('copyright', 'Stratascend Analytics'), 1);

-- Pages (type=page) + blog posts (type=post)
INSERT INTO pages (title, slug, type, content_html, excerpt, meta_title, meta_desc, published, created_by) VALUES
  ('Home', 'home', 'page',
   '<h1>Elevating Strategy, Empowering Growth</h1><p>We merge strategic thinking with AI-powered analytics to unlock growth opportunities for your business.</p>',
   'Data analytics as a service, BI, dashboards, predictive analytics and training.',
   'Stratascend Analytics — Home', 'Data analytics as a service, BI, dashboards and training for growing businesses.', 1, 1),
  ('About', 'about', 'page',
   '<h1>About Us</h1><p>We are your growth partners, harnessing data, technology and strategy to turn challenges into opportunities.</p><h2>Core values</h2><ul><li>Excellence</li><li>Insight</li><li>Collaboration</li><li>Innovation</li><li>Timeliness</li></ul>',
   'More than a digital agency — your growth partners.',
   'About — Stratascend Analytics', 'Our story, vision, mission and core values.', 1, 1),
  ('Services', 'services', 'page',
   '<h1>Services — Insights that Drive Action</h1><p>DAaaS, Business Intelligence, Data Visualization, Predictive Analytics, Web Development, Digital Transformation, Training, Dashboard Templates.</p>',
   'Eight ways we turn data into decisions.',
   'Services — Stratascend Analytics', 'Analytics as a service, BI, dashboards, predictive analytics, web development and training.', 1, 1),
  ('Contact', 'contact', 'page',
   '<h1>Contact</h1><p>3, Daniella Close, Elikpokwuodu, Port Harcourt · +234 901 450 6008</p>',
   'We are here to help.',
   'Contact — Stratascend Analytics', 'Get a quote or schedule a call with Stratascend Analytics.', 1, 1),
  ('Terms of Service', 'terms', 'page', '<h1>Terms of Service</h1><p>Placeholder terms. Replace via the admin CMS before go-live.</p>', 'Terms of service.', 'Terms — Stratascend Analytics', 'Terms of service.', 1, 1),
  ('Privacy Policy', 'privacy', 'page', '<h1>Privacy Policy</h1><p>Placeholder privacy policy. Replace via the admin CMS before go-live.</p>', 'Privacy policy.', 'Privacy — Stratascend Analytics', 'Privacy policy.', 1, 1),
  ('5 KPIs every SME should watch weekly', 'post-5-kpis-every-sme-should-watch-weekly', 'post',
   '<p>Placeholder article body. Edit in the admin CMS.</p>', 'A weekly KPI shortlist for small businesses.', 'Insights — Stratascend Analytics', 'Weekly KPIs for SMEs.', 1, 1),
  ('From spreadsheet chaos to one dashboard', 'post-from-spreadsheet-chaos-to-one-dashboard', 'post',
   '<p>Placeholder article body. Edit in the admin CMS.</p>', 'Consolidate reporting into a single dashboard.', 'Insights — Stratascend Analytics', 'One dashboard to rule your reporting.', 1, 1),
  ('Predictive analytics: a starter guide', 'post-predictive-analytics-a-starter-guide', 'post',
   '<p>Placeholder article body. Edit in the admin CMS.</p>', 'Forecasting basics for business teams.', 'Insights — Stratascend Analytics', 'Predictive analytics starter guide.', 1, 1),
  ('Why dashboards beat gut feeling', 'post-why-dashboards-beat-gut-feeling', 'post',
   '<p>Placeholder article body. Edit in the admin CMS.</p>', 'Data-driven decisions made simple.', 'Insights — Stratascend Analytics', 'Why dashboards beat gut feeling.', 1, 1);

-- 8 placeholder products (ebooks, templates, solutions)
INSERT INTO products (title, slug, description_html, price_cents, currency, type, category, tags, images, files, published) VALUES
  ('Sales Analytics Power BI Template', 'sales-analytics-power-bi-template',
   '<p>Pre-built Power BI sales dashboard: revenue, pipeline, conversion and cohort views.</p>', 1500000, 'NGN', 'template', 'Power BI',
   JSON_ARRAY('power-bi', 'sales', 'dashboard'), JSON_ARRAY('/uploads/placeholders/product-sales-pbi.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'sales-analytics.pbit', 'path', '/uploads/placeholders/sales-analytics.pbit')), 1),
  ('Marketing Funnel Excel Template', 'marketing-funnel-excel-template',
   '<p>Excel workbook to track funnel stages, drop-off and channel ROI.</p>', 900000, 'NGN', 'template', 'Excel',
   JSON_ARRAY('excel', 'marketing', 'funnel'), JSON_ARRAY('/uploads/placeholders/product-funnel-xlsx.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'marketing-funnel.xlsx', 'path', '/uploads/placeholders/marketing-funnel.xlsx')), 1),
  ('Inventory Tracker Excel Kit', 'inventory-tracker-excel-kit',
   '<p>Stock levels, reorder points and valuation in one workbook.</p>', 1200000, 'NGN', 'template', 'Excel',
   JSON_ARRAY('excel', 'inventory'), JSON_ARRAY('/uploads/placeholders/product-inventory.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'inventory-tracker.xlsx', 'path', '/uploads/placeholders/inventory-tracker.xlsx')), 1),
  ('HR Scorecard Power BI Template', 'hr-scorecard-power-bi-template',
   '<p>Headcount, attrition and performance KPIs for people teams.</p>', 1500000, 'NGN', 'template', 'Power BI',
   JSON_ARRAY('power-bi', 'hr'), JSON_ARRAY('/uploads/placeholders/product-hr-pbi.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'hr-scorecard.pbit', 'path', '/uploads/placeholders/hr-scorecard.pbit')), 1),
  ('The Data-Driven SME Playbook', 'the-data-driven-sme-playbook',
   '<p>Ebook: a practical guide to using data for everyday decisions in small businesses.</p>', 500000, 'NGN', 'ebook', 'Ebooks',
   JSON_ARRAY('ebook', 'sme', 'strategy'), JSON_ARRAY('/uploads/placeholders/product-playbook.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'data-driven-sme-playbook.pdf', 'path', '/uploads/placeholders/data-driven-sme-playbook.pdf')), 1),
  ('KPI Design Masterclass (Ebook)', 'kpi-design-masterclass-ebook',
   '<p>Ebook: choose metrics that actually move the business.</p>', 700000, 'NGN', 'ebook', 'Ebooks',
   JSON_ARRAY('ebook', 'kpi'), JSON_ARRAY('/uploads/placeholders/product-kpi.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'kpi-design-masterclass.pdf', 'path', '/uploads/placeholders/kpi-design-masterclass.pdf')), 1),
  ('Custom BI Dashboard (Solution)', 'custom-bi-dashboard-solution',
   '<p>We design and deliver a tailored BI dashboard for your data sources.</p>', 25000000, 'NGN', 'solution', 'Solutions',
   JSON_ARRAY('bi', 'custom', 'service'), JSON_ARRAY('/uploads/placeholders/product-custom-bi.png'), '[]', 1),
  ('Analytics Audit (Solution)', 'analytics-audit-solution',
   '<p>A structured audit of your data, reporting and decision workflows.</p>', 15000000, 'NGN', 'solution', 'Solutions',
   JSON_ARRAY('audit', 'service'), JSON_ARRAY('/uploads/placeholders/product-audit.png'), '[]', 1);

-- 6 resources: 2 Power BI, 2 Excel, 2 ebooks
INSERT INTO resources (title, slug, description_html, price_cents, currency, kind, tags, images, files, preview_url, published) VALUES
  ('Retail Performance Power BI Template', 'retail-performance-power-bi-template',
   '<p>Same-store sales, basket size and stock-out views for retailers.</p>', 1800000, 'NGN', 'powerbi',
   JSON_ARRAY('power-bi', 'retail'), JSON_ARRAY('/uploads/placeholders/res-retail.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'retail-performance.pbit', 'path', '/uploads/placeholders/retail-performance.pbit')),
   '/uploads/placeholders/res-retail-preview.png', 1),
  ('Executive KPI Power BI Template', 'executive-kpi-power-bi-template',
   '<p>One-page executive overview across finance, sales and operations.</p>', 2000000, 'NGN', 'powerbi',
   JSON_ARRAY('power-bi', 'executive'), JSON_ARRAY('/uploads/placeholders/res-exec.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'executive-kpi.pbit', 'path', '/uploads/placeholders/executive-kpi.pbit')),
   '/uploads/placeholders/res-exec-preview.png', 1),
  ('Budget vs Actual Excel Template', 'budget-vs-actual-excel-template',
   '<p>Monthly budget tracking with variance flags and charts.</p>', 800000, 'NGN', 'excel',
   JSON_ARRAY('excel', 'budget'), JSON_ARRAY('/uploads/placeholders/res-budget.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'budget-vs-actual.xlsx', 'path', '/uploads/placeholders/budget-vs-actual.xlsx')),
   '/uploads/placeholders/res-budget-preview.png', 1),
  ('Cash Flow Forecast Excel Template', 'cash-flow-forecast-excel-template',
   '<p>13-week rolling cash flow forecast with scenario switches.</p>', 1000000, 'NGN', 'excel',
   JSON_ARRAY('excel', 'cashflow'), JSON_ARRAY('/uploads/placeholders/res-cashflow.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'cash-flow-forecast.xlsx', 'path', '/uploads/placeholders/cash-flow-forecast.xlsx')),
   '/uploads/placeholders/res-cashflow-preview.png', 1),
  ('Power BI for Beginners (Ebook)', 'power-bi-for-beginners-ebook',
   '<p>Ebook: from raw data to your first interactive dashboard.</p>', 600000, 'NGN', 'ebook',
   JSON_ARRAY('ebook', 'power-bi', 'beginner'), JSON_ARRAY('/uploads/placeholders/res-pbi-book.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'power-bi-for-beginners.pdf', 'path', '/uploads/placeholders/power-bi-for-beginners.pdf')),
   '/uploads/placeholders/res-pbi-book-preview.png', 1),
  ('Excel Data Analysis Toolkit (Ebook)', 'excel-data-analysis-toolkit-ebook',
   '<p>Ebook: pivot tables, lookups and automation for analysts.</p>', 600000, 'NGN', 'ebook',
   JSON_ARRAY('ebook', 'excel', 'analysis'), JSON_ARRAY('/uploads/placeholders/res-excel-book.png'),
   JSON_ARRAY(JSON_OBJECT('name', 'excel-data-analysis-toolkit.pdf', 'path', '/uploads/placeholders/excel-data-analysis-toolkit.pdf')),
   '/uploads/placeholders/res-excel-book-preview.png', 1);

-- 3 trainings with schedules and trainers
INSERT INTO trainings (title, slug, description_html, syllabus_html, price_cents, currency, schedules, capacity, enrolled_count, trainers, attachments, published) VALUES
  ('Power BI Fundamentals — Live Online', 'power-bi-fundamentals-live-online',
   '<p>Four-week live course taking you from raw data to interactive dashboards.</p>',
   '<ul><li>Week 1: Data modeling & Power Query</li><li>Week 2: DAX essentials</li><li>Week 3: Dashboard design</li><li>Week 4: Publishing & sharing</li></ul>',
   7500000, 'NGN',
   JSON_ARRAY(JSON_OBJECT('start', '2025-10-06', 'end', '2025-10-31', 'time', 'Mon–Fri 18:00–20:00 WAT', 'mode', 'online')),
   30, 12,
   JSON_ARRAY(JSON_OBJECT('name', 'Adaeze Obi', 'bio', 'Senior BI Consultant, 8+ years with Power BI')),
   JSON_ARRAY(JSON_OBJECT('name', 'course-slides.pdf', 'path', '/uploads/placeholders/power-bi-slides.pdf')), 1),
  ('Advanced DAX & Analytics', 'advanced-dax-and-analytics',
   '<p>Deep-dive into DAX patterns, time intelligence and performance tuning.</p>',
   '<ul><li>DAX patterns & iterators</li><li>Time intelligence</li><li>Row vs filter context</li><li>Optimizing large models</li></ul>',
   12000000, 'NGN',
   JSON_ARRAY(JSON_OBJECT('start', '2025-11-03', 'end', '2025-11-28', 'time', 'Tue/Thu 18:00–21:00 WAT', 'mode', 'online')),
   20, 5,
   JSON_ARRAY(JSON_OBJECT('name', 'Adaeze Obi', 'bio', 'Senior BI Consultant'), JSON_OBJECT('name', 'Tunde Bakare', 'bio', 'Data Engineer')),
   '[]', 1),
  ('Corporate Analytics Bootcamp (On-site)', 'corporate-analytics-bootcamp-onsite',
   '<p>Two-day on-site bootcamp for teams: dashboards, storytelling with data, and governance.</p>',
   '<ul><li>Day 1: Foundations & visualization</li><li>Day 2: Team dashboards & governance</li></ul>',
   30000000, 'NGN',
   JSON_ARRAY(JSON_OBJECT('start', 'By arrangement', 'end', '', 'time', '2 days on-site', 'mode', 'onsite')),
   40, 0,
   JSON_ARRAY(JSON_OBJECT('name', 'Stratascend Training Team', 'bio', 'Certified analytics trainers')),
   '[]', 1);

INSERT INTO audit_logs (user_id, action, resource_type, resource_id, meta) VALUES
  (1, 'seed', 'system', NULL, JSON_OBJECT('note', 'Initial seed data loaded'));
