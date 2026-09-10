import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
export function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <a href="/#top" className="wordmark" aria-label="satuuu99 — Home">
          satuuu<span>99</span>
        </a>
        <p>Wellness. Head Spa. Ahrensburg.</p>
        <a className="back-top" href="/#top">
          {t({ de: "Nach oben", en: "Back to top" })} ↑
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} satuuu99</p>
        <nav
          aria-label={t({
            de: "Rechtliche Informationen",
            en: "Legal information",
          })}
        >
          <a href={CONTACT.imprint}>{t({ de: "Impressum", en: "Imprint" })}</a>
          <a href={CONTACT.privacy}>
            {t({ de: "Datenschutz", en: "Privacy" })}
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            {t({ de: "Kontakt", en: "Contact" })}
          </a>
        </nav>
      </div>
    </footer>
  );
}
