import { Link } from "react-router-dom";
import { ArrowUpIcon } from "../components/ui/Icons";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { useLang } from "../lib/i18n";

export function Footer() {
  const { t } = useLang();
  const featured = FOCUS_GROUPS.flatMap((group) => group.treatments).slice(
    0,
    4,
  );
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand">
        <Link to="/" className="wordmark" aria-label="satuuu99 — Home">
          satuuu<span>99</span>
        </Link>
        <p>
          {t({
            de: "Wellness. Head Spa. Ahrensburg.",
            en: "Wellness. Head Spa. Ahrensburg.",
          })}
        </p>
        <a className="back-top" href="#main">
          {t({ de: "Nach oben", en: "Back to top" })}
          <ArrowUpIcon />
        </a>
      </div>
      <div className="footer-nav">
        <div>
          <p className="eyebrow">{t({ de: "Entdecken", en: "Explore" })}</p>
          <Link to="/behandlungen">
            {t({ de: "Behandlungen", en: "Treatments" })}
          </Link>
          <Link to="/studio">{t({ de: "Das Studio", en: "The studio" })}</Link>
          <Link to="/gutscheine">
            {t({ de: "Gutscheine", en: "Gift cards" })}
          </Link>
          <Link to="/preise">{t({ de: "Preise", en: "Prices" })}</Link>
        </div>
        <div>
          <p className="eyebrow">{t({ de: "Beliebt", en: "Popular" })}</p>
          {featured.map((item) => (
            <Link key={item.id} to={`/behandlungen/${item.id}`}>
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">{t({ de: "Besuch", en: "Visit" })}</p>
          <Link to="/kontakt">{t({ de: "Kontakt", en: "Contact" })}</Link>
          <a href={CONTACT.booking}>
            {t({ de: "Termin buchen", en: "Book a visit" })}
          </a>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            {CONTACT.addressLines[0]}
            <br />
            {CONTACT.addressLines[1]}
          </a>
        </div>
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
        </nav>
      </div>
    </footer>
  );
}
