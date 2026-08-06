import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../lib/i18n';
import { NAV, CONTACT, HERO, CATEGORIES } from '../../data/content';
import { LanguageToggle } from '../ui/LanguageToggle';
import { MediaFrame } from '../ui/MediaFrame';
import { MagneticButton } from '../ui/Interactive';
import { SearchIcon, UserIcon, ChevronDownIcon, ArrowRightIcon } from '../ui/Icons';
import { AnnouncementBar } from './AnnouncementBar';
import { EASE } from '../../lib/motion';

const SCROLL_THRESHOLD = 40;

/**
 * Header as a single floating frosted-glass island — the promo row and nav live
 * in one dark-glass container with light text, legible over any hero frame and
 * over the light page alike. On scroll the promo row collapses and the glass
 * firms up. This unifies the old top-bar + nav that read as two clashing strips.
 */
export function NavBar() {
  const { t } = useLang();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const promoCollapsed = solid || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`mx-auto max-w-[100rem] overflow-hidden rounded-2xl border border-linen/12 text-linen backdrop-blur-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          promoCollapsed ? 'bg-mocha-deep/80 shadow-lift' : 'bg-mocha-deep/55 shadow-soft'
        }`}
      >
        <AnnouncementBar collapsed={promoCollapsed} />

        <nav aria-label="Main" className="flex items-center justify-between px-5 py-3 sm:px-7">
          <a href="#top" className="font-display text-2xl lowercase tracking-tight text-linen">
            satuuu<span className="text-linen/55">99</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) =>
              item.flyout ? (
                <li key={item.href} className="static" onMouseEnter={() => setFlyoutOpen(true)} onMouseLeave={() => setFlyoutOpen(false)}>
                  <a href={item.href} className="inline-flex items-center gap-1 text-sm text-linen/85 transition-colors hover:text-linen">
                    {t(item.label)}
                    <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${flyoutOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <AnimatePresence>
                    {flyoutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="absolute inset-x-3 top-full md:inset-x-5"
                      >
                        <RitualeFlyout />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-linen/85 transition-colors hover:text-linen">
                    {t(item.label)}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-4">
            <button type="button" aria-label={t({ de: 'Suche', en: 'Search' })} className="hidden text-linen/85 transition-colors hover:text-linen sm:block">
              <SearchIcon className="h-5 w-5" />
            </button>
            <a href={CONTACT.booking} aria-label={t({ de: 'Konto', en: 'Account' })} className="hidden text-linen/85 transition-colors hover:text-linen sm:block">
              <UserIcon className="h-5 w-5" />
            </a>
            <MagneticButton
              href={CONTACT.booking}
              className="hidden rounded-pill bg-linen px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-colors hover:bg-porcelain sm:inline-block"
            >
              {t(HERO.ctaPrimary)}
            </MagneticButton>
            <button type="button" className="lg:hidden" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
              <div className="flex flex-col gap-1.5">
                <span className={`h-px w-6 bg-linen transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`h-px w-6 bg-linen transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-px w-6 bg-linen transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
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
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-5 pb-6 pt-1 sm:px-7">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-linen/12 py-4 font-display text-2xl text-linen">
                      {t(item.label)}
                    </a>
                  </li>
                ))}
                <li className="flex items-center justify-between pt-5">
                  <LanguageToggle className="[&_button]:!text-linen/60 [&_button[aria-pressed=true]]:!text-linen" />
                  <a href={CONTACT.booking} onClick={() => setMenuOpen(false)} className="rounded-pill bg-linen px-5 py-2.5 text-sm font-medium text-ink">
                    {t(HERO.ctaPrimary)}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/** The Treatments-style flyout: focus columns over a media panel. */
function RitualeFlyout() {
  const { t } = useLang();
  const focus = CATEGORIES.slice(0, 4);
  const more = CATEGORIES.slice(4);

  return (
    <div className="grid gap-8 rounded-2xl border border-taupe/50 bg-linen/95 p-8 text-ink shadow-lift backdrop-blur-md md:grid-cols-[1fr_1fr_1.1fr]">
      <div>
        <p className="mb-4 text-[0.62rem] uppercase tracking-[0.22em] text-stone">{t({ de: 'Nach Fokus', en: 'By focus' })}</p>
        <ul className="flex flex-col gap-1">
          {focus.map((c) => (
            <li key={c.id}>
              <a href={c.href} className="group flex items-center justify-between rounded-lg px-3 py-2.5 font-display text-lg text-ink transition-colors hover:bg-sand/70">
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
              <a href={c.href} className="block rounded-lg px-3 py-2.5 font-display text-lg text-ink transition-colors hover:bg-sand/70">
                {t(c.name)}
              </a>
            </li>
          ))}
          <li>
            <a href="#rituale" className="block rounded-lg px-3 py-2.5 font-display text-lg text-mocha transition-colors hover:bg-sand/70">
              {t({ de: 'Alle Rituale', en: 'All rituals' })}
            </a>
          </li>
        </ul>
      </div>

      <a href="#rituale" className="group relative overflow-hidden rounded-xl">
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
