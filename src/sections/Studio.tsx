import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { STUDIO, CONTACT } from '../data/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { MediaFrame } from '../components/ui/MediaFrame';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { PinIcon } from '../components/ui/Icons';

/**
 * The single studio, presented as a place to escape to. Non-pinned framer
 * parallax on the imagery (safe with Lenis since it isn't scroll-event driven).
 */
export function Studio() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="studio" className="bg-sand/60 py-[var(--space-section)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-12 md:gap-16">
        {/* Media with quiet parallax */}
        <div ref={ref} className="md:col-span-7">
          <div className="overflow-hidden rounded-lg shadow-lift">
            <motion.div style={{ y }} className="scale-110">
              <MediaFrame image={STUDIO.image} label={t({ de: 'Studio-Interieur', en: 'Studio interior' })} aspect="aspect-[16/11]" />
            </motion.div>
          </div>
        </div>

        {/* Studio card */}
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{t(STUDIO.eyebrow)}</Eyebrow>
            <h2 className="mt-5" style={{ fontSize: 'var(--text-section)' }}>
              {t(STUDIO.title)} <span className="font-editorial text-mocha">{t(STUDIO.titleItalic)}</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-stone">{t(STUDIO.body)}</p>

            <div className="mt-8 flex items-start gap-3 text-espresso">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-mocha" />
              <address className="not-italic leading-relaxed">
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>

            <div className="mt-6 border-t border-taupe/50 pt-6">
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-stone">{t(STUDIO.hoursLabel)}</span>
              <ul className="mt-3 flex flex-col gap-1.5">
                {CONTACT.hours.map((h) => (
                  <li key={t(h.days)} className="flex justify-between gap-6 text-sm text-espresso">
                    <span>{t(h.days)}</span>
                    <span className="text-stone">{t(h.time)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button href={CONTACT.booking} variant="line">{t(STUDIO.cta)}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
