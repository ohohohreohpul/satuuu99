import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { FOCUS_GROUPS, KINETIC, CONTACT, treatmentsByIds } from '../data/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { MediaFrame } from '../components/ui/MediaFrame';
import { WordsPullUp } from '../components/ui/WordsPullUp';
import { ArrowRightIcon } from '../components/ui/Icons';
import { EASE } from '../lib/motion';

/**
 * Interactive focus explorer — the distinct, clickable evolution of Soulhouse's
 * passive kinetic-word section. Hovering or selecting Kopf / Gesicht / Füße /
 * Körper cross-fades the backdrop and swaps in that focus's rituals.
 */
export function FocusExplorer() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const group = FOCUS_GROUPS[active];
  const treatments = treatmentsByIds(group.treatmentIds);

  return (
    <section id="fokus" className="relative overflow-hidden bg-mocha-deep py-[var(--space-section)] text-linen">
      {/* Cross-fading backdrop per active focus */}
      <AnimatePresence initial={false}>
        <motion.div
          key={group.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="absolute inset-0"
          aria-hidden
        >
          <MediaFrame image={group.image} label={t(group.word)} aspect="" className="absolute inset-0 h-full w-full" tone="dark" />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-mocha-deep/72" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep via-mocha-deep/40 to-mocha-deep/70" aria-hidden />

      <div className="relative mx-auto max-w-[100rem] px-5 sm:px-8">
        {/* Statement */}
        <div className="max-w-3xl">
          <Eyebrow className="!text-linen/60">{t({ de: 'Nach Fokus', en: 'By focus' })}</Eyebrow>
          <h2 className="mt-5 font-display" style={{ fontSize: 'var(--text-statement)', lineHeight: 1.02 }}>
            <WordsPullUp
              segments={[
                { text: t(KINETIC.statementLead) + ' ' },
                { text: t(KINETIC.statementItalic), className: 'font-editorial text-linen/85' },
              ]}
            />
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-linen/75">{t(KINETIC.body)}</p>
        </div>

        {/* Interactive explorer */}
        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          {/* Focus words */}
          <ul className="flex flex-col">
            {FOCUS_GROUPS.map((g, i) => {
              const isActive = i === active;
              return (
                <li key={g.id} className="border-t border-linen/15 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative flex w-full items-center gap-5 py-5 text-left"
                  >
                    {isActive && (
                      <motion.span layoutId="focus-bar" className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-linen" transition={{ duration: 0.4, ease: EASE }} aria-hidden />
                    )}
                    <span className={`ml-5 font-mono text-xs transition-colors duration-300 ${isActive ? 'text-linen/80' : 'text-linen/35'}`}>{g.index}</span>
                    <span
                      className={`font-display transition-all duration-300 ${isActive ? 'text-linen' : 'text-linen/35 group-hover:text-linen/60'}`}
                      style={{ fontSize: 'clamp(2rem, 1rem + 3vw, 3.75rem)', lineHeight: 1 }}
                    >
                      {t(g.word)}
                    </span>
                    <ArrowRightIcon className={`ml-auto h-6 w-6 transition-all duration-300 ${isActive ? 'translate-x-0 text-linen opacity-100' : '-translate-x-2 text-linen/40 opacity-0 group-hover:opacity-60'}`} />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Active focus content */}
          <div className="md:pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <p className="max-w-md font-editorial text-2xl leading-snug text-linen/90">{t(group.blurb)}</p>

                <ul className="mt-8 flex flex-col">
                  {treatments.map((tr) => (
                    <li key={tr.id}>
                      <a
                        href={CONTACT.booking}
                        className="group flex items-center justify-between gap-4 border-b border-linen/12 py-3.5 text-linen/85 transition-colors hover:text-linen"
                      >
                        <span className="font-display text-lg">{t(tr.name)}</span>
                        <span className="flex items-center gap-3 text-sm text-linen/45">
                          <span className="text-gold" aria-hidden>★</span>
                          {tr.rating}
                          <ArrowRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a href="#rituale" className="mt-7 inline-flex items-center gap-2 text-sm text-linen/80 transition-colors hover:text-linen">
                  {t({ de: `Alle ${t(group.word)}-Rituale`, en: `All ${t(group.word)} rituals` })}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
