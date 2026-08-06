import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import type { Localized } from '../lib/i18n';
import { FINDER, FOCUS_GROUPS, CONTACT, treatmentsByIds } from '../data/content';
import { EASE } from '../lib/motion';
import { MagneticButton } from '../components/ui/Interactive';
import { ChevronDownIcon, ArrowRightIcon, StarIcon } from '../components/ui/Icons';

/**
 * "Starte dein Ritual" — the interactive finder that lifts over the hero.
 * Two custom dropdowns (focus + goal) feed a booking CTA, and choosing a focus
 * surfaces a matching ritual inline so the finder feels intelligent, not static.
 */
export function RitualFinder() {
  const { t } = useLang();
  const [focus, setFocus] = useState<Localized | null>(null);
  const [goal, setGoal] = useState<Localized | null>(null);

  // Live recommendation: the signature ritual for the chosen focus.
  const group = focus ? FOCUS_GROUPS.find((g) => t(g.word) === t(focus)) : null;
  const recommended = group ? treatmentsByIds(group.treatmentIds)[0] : null;

  return (
    <section id="finder" className="relative z-20 -mt-10 px-4 sm:-mt-14 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-taupe/50 bg-linen/95 p-5 shadow-lift backdrop-blur-md sm:p-6 md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-end">
          <p className="hidden font-editorial text-2xl text-mocha md:block md:pb-2 md:pr-2">{t(FINDER.title)}</p>
          <span className="mx-1 hidden h-12 w-px self-end bg-taupe/50 md:block" aria-hidden />

          <Dropdown label={t(FINDER.focusLabel)} placeholder={t(FINDER.focusPlaceholder)} options={FINDER.focus} value={focus} onChange={setFocus} />
          <Dropdown label={t(FINDER.goalLabel)} placeholder={t(FINDER.goalPlaceholder)} options={FINDER.goals} value={goal} onChange={setGoal} />

          <MagneticButton
            href={CONTACT.booking}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-pill bg-mocha px-6 py-4 text-sm font-medium tracking-wide text-linen shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-mocha-deep hover:shadow-hover"
          >
            {t(FINDER.cta)}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
          </MagneticButton>
        </div>

        <AnimatePresence>
          {recommended && (
            <motion.a
              href={CONTACT.booking}
              key={recommended.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group mt-5 flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-taupe/50 bg-sand/50 px-4 py-3.5 sm:px-5"
            >
              <span className="flex items-center gap-3">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-mocha">
                  {t({ de: 'Für dich', en: 'For you' })}
                </span>
                <span className="font-display text-lg text-ink">{t(recommended.name)}</span>
                <span className="hidden items-center gap-1 text-sm text-stone sm:inline-flex">
                  <StarIcon className="h-3.5 w-3.5 text-gold" />
                  {recommended.rating}
                </span>
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-mocha">
                {t({ de: 'Buchen', en: 'Book' })}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface DropdownProps {
  label: string;
  placeholder: string;
  options: Localized[];
  value: Localized | null;
  onChange: (v: Localized) => void;
}

function Dropdown({ label, placeholder, options, value, onChange }: DropdownProps) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative flex-1">
      <span className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-stone">{label}</span>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-taupe/60 bg-porcelain px-4 py-3 text-left text-[0.95rem] text-ink transition-colors hover:border-mocha/60"
      >
        <span className={value ? 'text-ink' : 'text-stone'}>{value ? t(value) : placeholder}</span>
        <ChevronDownIcon className={`h-4 w-4 shrink-0 text-mocha transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-taupe/60 bg-porcelain p-1.5 shadow-lift"
          >
            {options.map((opt) => {
              const active = value ? t(value) === t(opt) : false;
              return (
                <li key={t(opt)}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`w-full rounded-lg px-3.5 py-2.5 text-left text-[0.95rem] transition-colors ${active ? 'bg-sand text-ink' : 'text-espresso hover:bg-sand/70'}`}
                  >
                    {t(opt)}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
