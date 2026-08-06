import { useLang } from '../lib/i18n';
import { FOOTER, CONTACT } from '../data/content';
import { LanguageToggle } from '../components/ui/LanguageToggle';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-linen/70">
      <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] md:gap-8">
          <div>
            <a href="#top" className="font-display text-3xl lowercase text-linen">
              satuuu<span className="text-mocha-soft">99</span>
            </a>
            <p className="mt-4 max-w-xs font-editorial text-lg text-linen/60">{t(FOOTER.tagline)}</p>
          </div>

          {FOOTER.columns.map((col) => (
            <nav key={t(col.title)} aria-label={t(col.title)}>
              <p className="text-[0.72rem] uppercase tracking-eyebrow text-linen/40">{t(col.title)}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={t(link.label)}>
                    <a href={link.href} className="transition-colors hover:text-linen">
                      {t(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-[0.72rem] uppercase tracking-eyebrow text-linen/40">{t({ de: 'Kontakt', en: 'Contact' })}</p>
            <address className="mt-4 space-y-1 not-italic">
              {CONTACT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a href={CONTACT.phoneHref} className="block pt-2 transition-colors hover:text-linen">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block transition-colors hover:text-linen">
                {CONTACT.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-linen/15 pt-6 text-sm text-linen/40 sm:flex-row sm:items-center">
          <p>© {year} satuuu99 · Ahrensburg</p>
          <div className="flex items-center gap-6">
            {FOOTER.legalLinks.map((link) => (
              <a key={t(link.label)} href={link.href} className="transition-colors hover:text-linen/70">
                {t(link.label)}
              </a>
            ))}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
