import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BarChart3, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from './Container';
import ThemeToggle from './ThemeToggle';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/resources', label: 'Resources' },
  { to: '/training', label: 'Training' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-surface-raised/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-mat-2' : 'shadow-none'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-2 rounded-lg" aria-label="Stratascend Analytics home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-contrast shadow-mat-1">
            <BarChart3 size={20} aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Stratascend<span className="text-primary">Analytics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `focus-ring rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-primary-50 text-primary-700 dark:bg-primary-100 dark:text-primary-200' : 'text-ink-muted hover:bg-surface-sunken hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="focus-ring hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-contrast shadow-mat-1 transition-transform hover:-translate-y-0.5 hover:shadow-mat-2 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden border-t border-line bg-surface-raised lg:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col py-2">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive ? 'bg-primary-50 text-primary-700 dark:bg-primary-100 dark:text-primary-200' : 'text-ink-muted hover:bg-surface-sunken'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
