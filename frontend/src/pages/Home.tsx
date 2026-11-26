import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  Rocket,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const SERVICES = [
  { icon: LineChart, title: 'Data Analytics as a Service', text: 'Insight on demand, intelligence at scale — expert analytics without the overhead.' },
  { icon: LayoutDashboard, title: 'Business Intelligence', text: 'Your numbers, your story — enterprise-grade BI in one central view.' },
  { icon: BarChart3, title: 'Dashboards & Visualization', text: 'Power BI, Tableau and Excel dashboards that turn KPIs into growth levers.' },
  { icon: BrainCircuit, title: 'Predictive Analytics', text: 'Forecast demand, risk and customer behavior before the competition moves.' },
  { icon: Rocket, title: 'Web Development', text: 'Modern, scalable, data-driven web platforms built to convert.' },
  { icon: GraduationCap, title: 'Training & Capacity Building', text: 'Hands-on programs that equip your team to lead in the digital era.' },
];

const PRODUCTS = [
  { title: 'Sales Analytics Power BI Template', price: 15000, tag: 'Power BI' },
  { title: 'Excel Financial Model Kit', price: 9000, tag: 'Excel' },
  { title: 'The Data-Driven SME Playbook', price: 5000, tag: 'Ebook' },
];

const TESTIMONIALS = [
  { quote: 'Their dashboards gave us the confidence to make quick, informed decisions. Growth followed fast.', name: 'Cynthia M.', role: 'Operations Lead' },
  { quote: 'The training was practical and patient. Our team now reports in Power BI with real confidence.', name: 'Samuel K.', role: 'Finance Manager' },
  { quote: 'Scattered data became one clear picture — we cut costs and improved efficiency within weeks.', name: 'Grace T.', role: 'SME Owner' },
];

const POSTS = [
  { title: '5 KPIs every SME should watch weekly', date: '2025-09-02', read: '4 min read' },
  { title: 'From spreadsheet chaos to one dashboard', date: '2025-08-21', read: '6 min read' },
  { title: 'Predictive analytics: a starter guide', date: '2025-08-05', read: '8 min read' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgb(var(--c-primary-200)/0.5),transparent),radial-gradient(40rem_24rem_at_0%_110%,rgb(var(--c-accent)/0.18),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgb(var(--c-primary)/0.25),transparent),radial-gradient(40rem_24rem_at_0%_110%,rgb(var(--c-accent)/0.12),transparent)]"
        />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
          <div>
            <motion.p {...fadeUp} className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-4 py-1.5 text-xs font-semibold text-primary shadow-mat-1">
              <Sparkles size={14} aria-hidden /> AI-powered analytics & strategy
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Elevating Strategy, <span className="text-primary">Empowering Growth</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.55, delay: 0.12, ease: [0.2, 0, 0, 1] }} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Businesses don&apos;t just survive on data — they thrive by acting on it. We merge strategic
              thinking with AI-powered analytics to unlock growth for your organization.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.18, ease: [0.2, 0, 0, 1] }} className="mt-8 flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast shadow-mat-2"
                >
                  Find out how <ArrowRight size={16} aria-hidden />
                </Link>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Link
                  to="/training"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-surface-raised px-6 py-3 text-sm font-semibold text-ink shadow-mat-1 transition-colors hover:text-primary"
                >
                  Explore training
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="rounded-mat-lg border border-line bg-surface-raised p-6 shadow-mat-3">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-semibold">Revenue vs target</p>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">+24.8%</span>
              </div>
              <div className="mt-6 flex h-40 items-end gap-3" aria-hidden>
                {[38, 55, 42, 66, 58, 78, 70, 92].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: [0.2, 0, 0, 1] }}
                    className={`flex-1 rounded-t-md ${i === 7 ? 'bg-accent' : 'bg-primary/70'}`}
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ['Revenue', '₦48.2M'],
                  ['Orders', '12,480'],
                  ['Churn', '1.9%'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-mat bg-surface-sunken py-3">
                    <p className="text-xs text-ink-faint">{k}</p>
                    <p className="font-display text-sm font-bold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Hire us for</h2>
            <p className="mt-3 text-lg text-ink-muted">Six ways we turn data into decisions — and decisions into growth.</p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-mat border border-line bg-surface-raised p-6 shadow-mat-1 transition-shadow hover:shadow-mat-3"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary group-hover:text-primary-contrast dark:bg-primary-100 dark:text-primary-300">
                  <s.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="bg-surface-sunken py-20">
        <Container>
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Featured products</h2>
              <p className="mt-3 text-lg text-ink-muted">Templates and ebooks, ready to download after purchase.</p>
            </div>
            <Link to="/products" className="focus-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:underline">
              View all <ArrowRight size={15} aria-hidden />
            </Link>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -6 }}
                className="flex flex-col rounded-mat border border-line bg-surface-raised p-6 shadow-mat-1 transition-shadow hover:shadow-mat-3"
              >
                <span className="self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{p.tag}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{p.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <p className="font-display text-xl font-extrabold text-primary">₦{p.price.toLocaleString()}</p>
                  <Link to="/products" className="focus-ring rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-contrast shadow-mat-1 transition-transform hover:-translate-y-0.5">
                    Buy now
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <Container>
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">What our clients say</h2>
            <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
              <span className="flex text-amber-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              Rated 4.5 out of 5 by our clients
            </div>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
                className="rounded-mat border border-line bg-surface-raised p-6 shadow-mat-1"
              >
                <blockquote className="text-sm leading-relaxed text-ink-muted">“{t.quote}”</blockquote>
                <figcaption className="mt-5">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog teaser */}
      <section className="bg-surface-sunken py-20">
        <Container>
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Insights &amp; resources</h2>
            <Link to="/blog" className="focus-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:underline">
              All articles <ArrowRight size={15} aria-hidden />
            </Link>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-mat border border-line bg-surface-raised p-6 shadow-mat-1 transition-shadow hover:shadow-mat-2"
              >
                <p className="text-xs font-medium text-ink-faint">{p.date} · {p.read}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read <ArrowRight size={14} aria-hidden />
                </span>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-mat-lg bg-primary px-8 py-14 text-center text-primary-contrast shadow-mat-3 sm:px-16"
          >
            <Workflow aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-10" />
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              Let&apos;s talk about what we can build and raise together. Insight on demand — intelligence at scale.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-flex">
              <Link
                to="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-surface-raised px-7 py-3 text-sm font-bold text-primary shadow-mat-2"
              >
                Schedule a call <ArrowRight size={16} aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  );
}
