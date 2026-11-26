import { Link } from 'react-router-dom';
import { BarChart3, Facebook, Twitter, Youtube } from 'lucide-react';
import Container from './Container';

const COLS: { title: string; links: { to: string; label: string }[] }[] = [
  { title: 'Company', links: [
    { to: '/about', label: 'About Us' },
    { to: '/blog', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ]},
  { title: 'Products', links: [
    { to: '/products', label: 'Digital Products' },
    { to: '/resources', label: 'Resources & Templates' },
    { to: '/training', label: 'Training' },
  ]},
  { title: 'Legal', links: [
    { to: '/terms', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
  ]},
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface-sunken">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-contrast">
              <BarChart3 size={20} aria-hidden />
            </span>
            <span className="font-display text-lg font-bold">Stratascend<span className="text-primary">Analytics</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            Data analytics as a service, BI, dashboards, predictive analytics and training —
            elevating strategy, empowering growth.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-surface-raised text-ink-muted shadow-mat-1 transition-colors hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-faint">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="focus-ring rounded text-sm text-ink-muted transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="border-t border-line py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Stratascend Analytics. All rights reserved.</p>
          <p>3, Daniella Close, Elikpokwuodu, Port Harcourt · +234 901 450 6008</p>
        </Container>
      </div>
    </footer>
  );
}
