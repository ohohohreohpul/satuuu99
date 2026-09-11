import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CONTACT, FOCUS_GROUPS, NAV } from "../../data/content";
import { MEDIA } from "../../data/media";
import { useLang } from "../../lib/i18n";
import { ArrowDownIcon, ArrowRightIcon } from "../ui/Icons";
import { LanguageToggle } from "../ui/LanguageToggle";

export function NavBar() {
  const { t } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen && !megaOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [mobileOpen, megaOpen]);

  return (
    <header ref={header} className="site-header">
      <a className="skip-link" href="#main">
        {t({ de: "Zum Inhalt", en: "Skip to content" })}
      </a>
      <nav
        className="nav-shell"
        aria-label={t({ de: "Hauptnavigation", en: "Main navigation" })}
      >
        <Link to="/" className="wordmark" aria-label="satuuu99 — Home">
          satuuu<span>99</span>
        </Link>
        <div className="desktop-nav">
          <button
            className={
              location.pathname.startsWith("/behandlungen")
                ? "is-active mega-trigger"
                : "mega-trigger"
            }
            aria-expanded={megaOpen}
            aria-controls="treatment-mega-menu"
            onClick={() => setMegaOpen((value) => !value)}
          >
            {t(NAV[0].label)} <ArrowDownIcon aria-hidden />
          </button>
          {NAV.slice(1).map((item) => (
            <NavLink key={item.href} to={item.href}>
              {t(item.label)}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <LanguageToggle />
          <a className="button button-small nav-book" href={CONTACT.booking}>
            {t({ de: "Termin buchen", en: "Book a visit" })}
            <ArrowRightIcon />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={t(
              mobileOpen
                ? { de: "Menü schließen", en: "Close menu" }
                : { de: "Menü öffnen", en: "Open menu" },
            )}
          >
            <span className={mobileOpen ? "menu-line is-open" : "menu-line"} />
            <span className={mobileOpen ? "menu-line is-open" : "menu-line"} />
          </button>
        </div>
      </nav>

      {megaOpen && (
        <div id="treatment-mega-menu" className="mega-menu">
          <div className="mega-menu-inner">
            <div className="mega-intro">
              <p className="eyebrow">
                {t({ de: "Deine Pause", en: "Your pause" })}
              </p>
              <h2>
                {t({
                  de: "Was darf heute leichter werden?",
                  en: "What could feel lighter today?",
                })}
              </h2>
              <Link className="text-link" to="/behandlungen">
                {t({ de: "Alle Behandlungen", en: "All treatments" })}
                <ArrowRightIcon />
              </Link>
            </div>
            <div className="mega-groups">
              {FOCUS_GROUPS.map((group, index) => (
                <div className="mega-group" key={group.id}>
                  <Link
                    to={`/behandlungen?focus=${group.id}`}
                    className="mega-group-title"
                  >
                    <span>0{index + 1}</span>
                    {t(group.word)}
                  </Link>
                  {group.treatments.map((item) => (
                    <Link key={item.id} to={`/behandlungen/${item.id}`}>
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Link className="mega-image" to="/behandlungen/head-spa">
              <img src={MEDIA.treatments.head} alt="" />
              <span>
                {t({
                  de: "Japanese Head Spa entdecken",
                  en: "Discover Japanese Head Spa",
                })}
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label={t({ de: "Mobile Navigation", en: "Mobile navigation" })}
        >
          <div className="mobile-primary">
            {NAV.map((item, index) => (
              <NavLink key={item.href} to={item.href}>
                <span>0{index + 1}</span>
                {t(item.label)}
                <ArrowRightIcon />
              </NavLink>
            ))}
            <NavLink to="/kontakt">
              <span>05</span>
              {t({ de: "Kontakt", en: "Contact" })}
              <ArrowRightIcon />
            </NavLink>
          </div>
          <div className="mobile-treatment-links">
            <p className="eyebrow">
              {t({ de: "Direkt zur Behandlung", en: "Go to a treatment" })}
            </p>
            {FOCUS_GROUPS.flatMap((group) => group.treatments).map((item) => (
              <Link key={item.id} to={`/behandlungen/${item.id}`}>
                {t(item.name)}
              </Link>
            ))}
          </div>
          <a className="button" href={CONTACT.booking}>
            {t({ de: "Termin buchen", en: "Book a visit" })}
            <ArrowRightIcon />
          </a>
        </nav>
      )}
    </header>
  );
}
