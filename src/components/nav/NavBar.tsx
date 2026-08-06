import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../lib/i18n';
import { NAV, CONTACT, HERO, CATEGORIES } from '../../data/content';
import { LanguageToggle } from '../ui/LanguageToggle';
import { MediaFrame } from '../ui/MediaFrame';
import { SearchIcon, UserIcon, ChevronDownIcon, ArrowRightIcon } from '../ui/Icons';
import { AnnouncementBar } from './AnnouncementBar';
import { EASE } from '../../lib/motion';

const SCROLL_THRESHOLD = 40;

/**
 * Flat, full-width header (after soulhouse.me): a thin announcement strip over a
 * solid nav bar with a hairline base — dark text on warm paper, no floating
 * island, no rounding. Sits in flow; the hero begins below it.
 */
export function NavBar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-taupe/50 bg-canvas/95 backdrop-blur-md">
      <AnnouncementBar collapsed={scrolled || menuOpen} />

      <nav aria-label="Main" className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-2xl lowercase tracking-tight text-ink">
          satuuu<span className="text-mocha">99</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) =>
            item.flyout ? (
              <li key={item.href} className="static" onMouseEnter={() => setFlyoutOpen(true)} onMouseLeave={() => setFlyoutOpen(false)}>
                <a href={item.href} className="inline-flex items-center gap-1 text-sm text-stone transition-colors hover:text-ink">
                  {t(item.label)}
                  <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${flyoutOpen ? 'rotate-180' : ''}`} />
                </a>
                <AnimatePresence>
                  {flyoutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute inset-x-0 top-full px-5 pb-4 sm:px-8"
                    >
                      <RitualeFlyout />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-stone transition-colors hover:text-ink">
                  {t(item.label)}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-4">
          <button type="button" aria-label={t({ de: 'Suche', en: 'Search' })} className="hidden text-espresso transition-colors hover:text-mocha sm:block">
            <SearchIcon className="h-5 w-5" />
          </button>
          <a href={CONTACT.booking} aria-label={t({ de: 'Konto', en: 'Account' })} className="hidden text-espresso transition-colors hover:text-mocha sm:block">
            <UserIcon className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.booking}
            className="hidden rounded-pill bg-mocha px-5 py-2.5 text-sm font-medium text-linen transition-colors hover:bg-mocha-deep sm:inline-block"
          >
            {t(HERO.ctaPrimary)}
          </a>
          <button type="button" className="lg:hidden" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-taupe/40 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-taupe/40 py-4 font-display text-2xl text-ink">
                    {t(item.label)}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between pt-5">
                <LanguageToggle />
                <a href={CONTACT.booking} onClick={() => setMenuOpen(false)} className="rounded-pill bg-mocha px-5 py-2.5 text-sm font-medium text-linen">
                  {t(HERO.ctaPrimary)}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** The Treatments-style flyout: focus columns over a media panel. */
function RitualeFlyout() {
  const { t } = useLang();
  const focus = CATEGORIES.slice(0, 4);
  const more = CATEGORIES.slice(4);

  return (
    <div className="grid gap-8 border border-taupe/50 bg-linen p-8 shadow-overlay md:grid-cols-[1fr_1fr_1.1fr]">
      <div>
        <p className="mb-4 text-[0.62rem] uppercase tracking-[0.22em] text-stone">{t({ de: 'Nach Fokus', en: 'By focus' })}</p>
        <ul className="flex flex-col gap-1">
          {focus.map((c) => (
            <li key={c.id}>
              <a href={c.href} className="group flex items-center justify-between px-3 py-2.5 font-display text-lg text-ink transition-colors hover:bg-sand/70">
                {t(c.name)}
                <ArrowRightIcon className="h-4 w-4 -translate-x-1 text-mocha opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-[0.62rem] uppercase tracking-[0.22em] text-stone">{t({ de: 'Auswahl', en: 'Selection' })}</p>
        <ul className="flex flex-col gap-1">
          {more.map((c) => (
            <li key={c.id}>
              <a href={c.href} className="block px-3 py-2.5 font-display text-lg text-ink transition-colors hover:bg-sand/70">
                {t(c.name)}
              </a>
            </li>
          ))}
          <li>
            <a href="#rituale" className="block px-3 py-2.5 font-display text-lg text-mocha transition-colors hover:bg-sand/70">
              {t({ de: 'Alle Rituale', en: 'All rituals' })}
            </a>
          </li>
        </ul>
      </div>

      <a href="#rituale" className="group relative overflow-hidden">
        <MediaFrame image={CATEGORIES[0].image} label={t({ de: 'Head Spa', en: 'Head Spa' })} aspect="aspect-[16/10]" tone="dark" imgClassName="transition-transform duration-[1.2s] group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/80 to-transparent" aria-hidden />
        <div className="absolute bottom-0 p-5 text-linen">
          <p className="font-display text-xl">{t({ de: 'Japanese Head Spa', en: 'Japanese Head Spa' })}</p>
          <p className="mt-1 text-xs text-linen/75">{t({ de: 'Unser Signature-Ritual', en: 'Our signature ritual' })}</p>
        </div>
      </a>
    </div>
  );
}
