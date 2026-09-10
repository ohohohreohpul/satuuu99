import { useEffect, useRef, useState } from "react";
import { useLang } from "../../lib/i18n";
import { NAV, CONTACT } from "../../data/content";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ArrowRightIcon } from "../ui/Icons";

export function NavBar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const query = window.matchMedia("(min-width: 960px)");
    const resize = () => {
      if (query.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    query.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      query.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <a className="skip-link" href="#main">
        {t({ de: "Zum Inhalt", en: "Skip to content" })}
      </a>
      <nav
        className="nav-shell"
        aria-label={t({ de: "Hauptnavigation", en: "Main navigation" })}
      >
        <a href="/#top" className="wordmark" aria-label="satuuu99 — Home">
          satuuu<span>99</span>
        </a>
        <div className="desktop-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.label)}
            </a>
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
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={t(
              open
                ? { de: "Menü schließen", en: "Close menu" }
                : { de: "Menü öffnen", en: "Open menu" },
            )}
          >
            <span className={open ? "menu-line is-open" : "menu-line"} />
            <span className={open ? "menu-line is-open" : "menu-line"} />
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label={t({ de: "Mobile Navigation", en: "Mobile navigation" })}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.label)}
              <ArrowRightIcon />
            </a>
          ))}
          <a href={CONTACT.booking}>
            {t({ de: "Termin buchen", en: "Book a visit" })}
            <ArrowRightIcon />
          </a>
        </nav>
      )}
    </header>
  );
}
