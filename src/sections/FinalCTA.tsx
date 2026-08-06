import { useLang } from '../lib/i18n';
import { FINAL_CTA, CONTACT } from '../data/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Reveal } from '../components/ui/Reveal';
import { ArrowRightIcon } from '../components/ui/Icons';

/** Closing invitation — doubles as the contact anchor (#kontakt). */
export function FinalCTA() {
  const { t } = useLang();

  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-5 py-[var(--space-section)] sm:px-8">
      <div className="grid gap-12 bg-mocha-deep p-8 text-linen md:grid-cols-2 md:gap-16 md:p-16">
        <Reveal>
          <Eyebrow className="!text-linen/60">{t(FINAL_CTA.eyebrow)}</Eyebrow>
          <h2 className="mt-6 text-balance font-display" style={{ fontSize: 'var(--text-section)' }}>
            {t(FINAL_CTA.title)}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-linen/75 sm:text-lg">{t(FINAL_CTA.body)}</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={CONTACT.phoneHref}
              className="group inline-flex w-fit items-center gap-3 rounded-pill bg-linen py-3 pl-6 pr-3 text-sm font-medium tracking-wide text-ink shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-hover"
            >
              {t(FINAL_CTA.cta)}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mocha text-linen transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" aria-hidden>
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="text-sm text-linen/75 underline-offset-4 hover:underline">
              {CONTACT.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col justify-center gap-8 md:border-l md:border-linen/15 md:pl-16">
          <div>
            <p className="text-[0.72rem] uppercase tracking-eyebrow text-linen/50">{t({ de: 'Adresse', en: 'Address' })}</p>
            <div className="mt-3 font-editorial text-xl">
              {CONTACT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a href={CONTACT.phoneHref} className="mt-3 inline-block text-linen/80 transition-colors hover:text-linen">
              {CONTACT.phone}
            </a>
          </div>

          <div>
            <p className="text-[0.72rem] uppercase tracking-eyebrow text-linen/50">{t({ de: 'Öffnungszeiten', en: 'Opening hours' })}</p>
            <ul className="mt-3 space-y-1.5 text-linen/80">
              {CONTACT.hours.map((row) => (
                <li key={t(row.days)} className="flex justify-between gap-8">
                  <span>{t(row.days)}</span>
                  <span className="text-linen/60">{typeof row.time === 'string' ? row.time : t(row.time)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
