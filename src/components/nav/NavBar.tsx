import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { CONTACT, FOCUS_GROUPS, NAV } from "../../data/content";
import { MEDIA } from "../../data/media";
import { useLang } from "../../lib/i18n";
import { ArrowRightIcon } from "../ui/Icons";
import { LanguageToggle } from "../ui/LanguageToggle";
import { BrandMark } from "../ui/BrandMark";
import { Photo } from "../media/Photo";
const pictures = [
  { id: "head", photo: MEDIA.treatments.head },
  { id: "face", photo: MEDIA.treatments.face },
  { id: "body", photo: MEDIA.treatments.body },
  { id: "feet", photo: MEDIA.treatments.feet },
  { id: "studio", photo: MEDIA.studio },
];
const pagePreview: Record<
  string,
  {
    image: string;
    eyebrow: { de: string; en: string };
    title: { de: string; en: string };
    copy: { de: string; en: string };
  }
> = {
  "/behandlungen": {
    image: "head",
    eyebrow: { de: "Rituale", en: "Rituals" },
    title: {
      de: "Was braucht heute\ndeine Aufmerksamkeit?",
      en: "What needs your\nattention today?",
    },
    copy: {
      de: "Head Spa, Gesicht, Füße und Körper – persönlich für dich gewählt.",
      en: "Head spa, face, feet and body – chosen personally with you.",
    },
  },
  "/studio": {
    image: "studio",
    eyebrow: { de: "Ein privater Ort", en: "A private place" },
    title: {
      de: "Klein. Ruhig.\nGanz bei dir.",
      en: "Small. Quiet.\nEntirely yours.",
    },
    copy: {
      de: "Lerne unser persönliches Studio mitten in Ahrensburg kennen.",
      en: "Meet our personal studio in the heart of Ahrensburg.",
    },
  },
  "/gutscheine": {
    image: "face",
    eyebrow: { de: "Zeit verschenken", en: "Give time" },
    title: { de: "Etwas, das\nbleibt.", en: "Something that\nstays with you." },
    copy: {
      de: "Eine Einladung zum Ankommen, Abschalten und Sich-kümmern-lassen.",
      en: "An invitation to arrive, switch off and be cared for.",
    },
  },
  "/preise": {
    image: "body",
    eyebrow: { de: "Planen", en: "Plan" },
    title: {
      de: "Klarheit vor\ndeinem Besuch.",
      en: "Clarity before\nyour visit.",
    },
    copy: {
      de: "Alle aktuellen Behandlungen, Zeiten und Preise auf einen Blick.",
      en: "Current treatments, durations and prices at a glance.",
    },
  },
  "/journal": {
    image: "feet",
    eyebrow: { de: "Gedanken aus dem Studio", en: "Notes from the studio" },
    title: {
      de: "Rituale für\nruhigere Tage.",
      en: "Rituals for\nquieter days.",
    },
    copy: {
      de: "Wissen, Inspiration und kleine Pausen für deinen Alltag.",
      en: "Knowledge, inspiration and small pauses for everyday life.",
    },
  },
  "/kontakt": {
    image: "studio",
    eyebrow: { de: "Sprich mit uns", en: "Talk to us" },
    title: {
      de: "Deine Auszeit\nbeginnt hier.",
      en: "Your time out\nstarts here.",
    },
    copy: {
      de: "Fragen, Wünsche oder noch unsicher? Wir helfen dir persönlich weiter.",
      en: "Questions, wishes or still unsure? We are happy to help personally.",
    },
  },
};
export function NavBar() {
  const { t } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preview, setPreview] = useState("/behandlungen");
  const activePreview =
    pagePreview[preview] ||
    (() => {
      const group =
        FOCUS_GROUPS.find((item) => item.id === preview) || FOCUS_GROUPS[0];
      return {
        image: group.id,
        eyebrow: { de: "Dein Ritual", en: "Your ritual" },
        title: group.title,
        copy: group.blurb,
      };
    })();
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closing = useRef(false);
  const isHome = location.pathname === "/";
  const moveGlassLight = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--glass-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--glass-y",
      `${event.clientY - bounds.top}px`,
    );
  };
  const resetGlassLight = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--glass-x", "50%");
    event.currentTarget.style.setProperty("--glass-y", "-30px");
  };
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    opener.current = event.currentTarget;
    setOpen(true);
  };
  const closeMenu = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    const finish = () => {
      setOpen(false);
      closing.current = false;
      opener.current?.focus();
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !panel.current
    )
      finish();
    else
      gsap.to(panel.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        onComplete: finish,
      });
  }, []);
  useEffect(() => {
    setOpen(false);
    closing.current = false;
  }, [location.pathname, location.search]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 65);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useLayoutEffect(() => {
    if (!open) return;
    const ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.from(panel.current, {
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        });
        gsap.from(".menu-editorial-links a", {
          y: 35,
          opacity: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
        });
        gsap.from(".menu-photo", {
          scale: 1.05,
          duration: 1.3,
          ease: "power2.out",
        });
      }
    }, panel);
    closeButton.current?.focus();
    return () => ctx.revert();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ];
    content.forEach((el) => el?.setAttribute("inert", ""));
    const keys = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
      if (e.key === "Tab") {
        const focusable = Array.from(
          panel.current?.querySelectorAll<HTMLElement>(
            'a[href],button,input,select,[tabindex="0"]',
          ) || [],
        ).filter((el) => el.getClientRects().length > 0);
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = previous;
      content.forEach((el) => el?.removeAttribute("inert"));
      document.removeEventListener("keydown", keys);
    };
  }, [open, closeMenu]);
  return (
    <>
      <header
        className={`site-header immersive-header ${isHome && !scrolled ? "over-film" : "on-paper"} ${scrolled ? "is-scrolled" : ""}`}
      >
        <a className="skip-link" href="#main">
          {t({ de: "Zum Inhalt", en: "Skip to content" })}
        </a>
        <nav
          className="nav-shell immersive-nav"
          aria-label={t({ de: "Hauptnavigation", en: "Main navigation" })}
          onPointerMove={moveGlassLight}
          onPointerLeave={resetGlassLight}
        >
          <div className="header-left">
            <button
              className="experience-menu-toggle"
              aria-label={t({ de: "Menü öffnen", en: "Open menu" })}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={openMenu}
            >
              <span className="menu-glyph">
                <i />
                <i />
              </span>
              <span>{t({ de: "Entdecken", en: "Explore" })}</span>
            </button>
            <button
              className="header-treatment-link"
              onClick={openMenu}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              {t({ de: "Behandlungen", en: "Treatments" })}
            </button>
          </div>
          <Link className="header-brand" to="/" aria-label="SATUUU99 — Home">
            <BrandMark />
          </Link>
          <div className="header-right">
            <LanguageToggle />
            <a
              className="header-reserve"
              href={CONTACT.booking}
              aria-label={t({ de: "Termin buchen", en: "Book a visit" })}
            >
              <span className="reserve-label-desktop">
                {t({ de: "Deine Auszeit", en: "Your time out" })}
              </span>
              <span className="reserve-label-mobile">
                {t({ de: "Buchen", en: "Book" })}
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </nav>
      </header>
      {!isHome && <div className="header-spacer" />}
      {open && (
        <div
          id="site-menu"
          className="immersive-menu"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label={t({
            de: "Unsere Welt entdecken",
            en: "Explore our world",
          })}
        >
          <div className="menu-topline">
            <p>
              {t({
                de: "Eine ruhigere Welt beginnt hier.",
                en: "A quieter world begins here.",
              })}
            </p>
            <Link to="/" className="header-brand" aria-label="SATUUU99 — Home">
              <BrandMark />
            </Link>
            <button
              ref={closeButton}
              className="menu-close"
              onClick={closeMenu}
              aria-label={t({ de: "Menü schließen", en: "Close menu" })}
            >
              <span>{t({ de: "Schließen", en: "Close" })}</span>
              <span className="close-glyph" aria-hidden="true">
                ×
              </span>
            </button>
          </div>
          <div className="menu-experience">
            <div className="menu-navigation">
              <p className="eyebrow">
                {t({ de: "Unsere Welt", en: "Our world" })}
              </p>
              <nav
                className="menu-editorial-links"
                aria-label={t({ de: "Alle Seiten", en: "All pages" })}
              >
                {[
                  ...NAV,
                  { href: "/kontakt", label: { de: "Kontakt", en: "Contact" } },
                ].map((item, index) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onMouseEnter={() => setPreview(item.href)}
                    onFocus={() => setPreview(item.href)}
                  >
                    <span className="menu-link-number">0{index + 1}</span>
                    <span>{t(item.label)}</span>
                    <span className="menu-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </NavLink>
                ))}
              </nav>
              <a className="text-link" href={CONTACT.booking}>
                {t({
                  de: "Zeit für mich buchen",
                  en: "Make time for yourself",
                })}
                <ArrowRightIcon />
              </a>
            </div>
            <div className="menu-rituals">
              <p className="eyebrow">
                {t({ de: "Finde dein Ritual", en: "Find your ritual" })}
              </p>
              {FOCUS_GROUPS.map((group) => (
                <div
                  key={group.id}
                  className="menu-ritual-group"
                  onMouseEnter={() => setPreview(group.id)}
                  onFocus={() => setPreview(group.id)}
                >
                  <Link
                    className="menu-ritual-title"
                    to={"/behandlungen?focus=" + group.id}
                  >
                    {t(group.word)} <span>↗</span>
                  </Link>
                  {group.treatments.map((item) => (
                    <Link key={item.id} to={"/behandlungen/" + item.id}>
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="menu-photo">
              {pictures.map((pic) => (
                <Photo
                  key={pic.id}
                  id={pic.photo}
                  sizes="(min-width: 900px) 34vw, 100vw"
                  className={activePreview.image === pic.id ? "is-visible" : ""}
                  alt=""
                />
              ))}
              <div
                className="menu-photo-caption"
                aria-live="polite"
                key={preview}
              >
                <span className="eyebrow">
                  {t(activePreview.eyebrow)} · AHRENSBURG
                </span>
                <p>{t(activePreview.title)}</p>
                <small>{t(activePreview.copy)}</small>
              </div>
            </div>
          </div>
          <div className="menu-bottomline">
            <a href={CONTACT.maps}>{CONTACT.addressLines.join(" · ")}</a>
            <a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a>
            <span>
              {t({
                de: "Langsamer werden. Bei dir ankommen.",
                en: "Slower days. More of you.",
              })}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
