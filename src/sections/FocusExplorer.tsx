import { useState } from "react";
import type { KeyboardEvent } from "react";
import { useLang } from "../lib/i18n";
import { CONTACT, FOCUS_GROUPS } from "../data/content";
import { MEDIA } from "../data/media";
import { ArrowRightIcon } from "../components/ui/Icons";
import { Link } from "react-router-dom";

export function FocusExplorer() {
  const { t } = useLang();
  const [active, setActive] = useState(() => {
    const focus = new URLSearchParams(window.location.search).get("focus");
    return Math.max(
      0,
      FOCUS_GROUPS.findIndex((group) => group.id === focus),
    );
  });
  const [opened, setOpened] = useState<string | null>(
    FOCUS_GROUPS[active].treatments[0].id,
  );
  const group = FOCUS_GROUPS[active];
  const select = (index: number) => {
    setActive(index);
    setOpened(FOCUS_GROUPS[index].treatments[0].id);
  };
  const keydown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % FOCUS_GROUPS.length;
    else if (event.key === "ArrowLeft")
      next = (index + FOCUS_GROUPS.length - 1) % FOCUS_GROUPS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = FOCUS_GROUPS.length - 1;
    else return;
    event.preventDefault();
    select(next);
    document.getElementById(`tab-${FOCUS_GROUPS[next].id}`)?.focus();
  };
  const openedTreatment = group.treatments.find((item) => item.id === opened);
  const programmeImage = opened ? MEDIA.programmes[opened] : undefined;
  const image = programmeImage || MEDIA.treatments[group.id];
  const imageAlt =
    programmeImage && openedTreatment ? t(openedTreatment.name) : t(group.word);
  return (
    <section
      id="rituale"
      className="treatments section-shell"
      aria-labelledby="ritual-title"
    >
      <div className="section-heading">
        <p className="eyebrow">
          {t({ de: "01 / Unsere Behandlungen", en: "01 / Our treatments" })}
        </p>
        <h2 id="ritual-title">
          {t({ de: "Was brauchst du", en: "What feels right" })}
          <br />
          <span className="soft-text">{t({ de: "heute?", en: "today?" })}</span>
        </h2>
        <p>
          {t({
            de: "Ein klarer Kopf. Gepflegte Haut. Oder einfach eine gute Pause. Finde die Behandlung, die zu dir passt.",
            en: "A clearer head. Cared-for skin. Or simply a good pause. Find the treatment that suits you.",
          })}
        </p>
      </div>
      <div className="treatment-layout">
        <figure className="treatment-art">
          <img
            key={image || "existing-treatment"}
            src={image || MEDIA.hero.poster}
            alt={
              image
                ? imageAlt
                : t({
                    de: "Detail einer behutsamen Kopf- und Nackenmassage",
                    en: "Close detail of a gentle head and neck massage",
                  })
            }
            loading="lazy"
          />
        </figure>
        <div className="treatment-content">
          <div
            className="treatment-tabs"
            role="tablist"
            aria-label={t({ de: "Behandlungsbereich", en: "Treatment area" })}
          >
            {FOCUS_GROUPS.map((item, index) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="treatment-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => keydown(event, index)}
              >
                {t(item.word)}
              </button>
            ))}
          </div>
          <div
            key={group.id}
            id="treatment-panel"
            role="tabpanel"
            aria-labelledby={`tab-${group.id}`}
            tabIndex={0}
            className="treatment-panel"
          >
            <h3>{t(group.title)}</h3>
            <p className="treatment-blurb">{t(group.blurb)}</p>
            <div className="treatment-list">
              {group.treatments.map((item, index) => (
                <article key={item.id} className="treatment-item">
                  <h4>
                    <button
                      type="button"
                      aria-expanded={opened === item.id}
                      aria-controls={`detail-${item.id}`}
                      onClick={() =>
                        setOpened(opened === item.id ? null : item.id)
                      }
                    >
                      <span className="treatment-number">0{index + 1}</span>
                      {t(item.name)}
                      {item.isNew && (
                        <span className="treatment-new">
                          {t({ de: "Neu", en: "New" })}
                        </span>
                      )}
                      <span className="expand-mark" aria-hidden>
                        {opened === item.id ? "−" : "+"}
                      </span>
                    </button>
                  </h4>
                  <div
                    id={`detail-${item.id}`}
                    hidden={opened !== item.id}
                    className="treatment-detail"
                  >
                    <p>{t(item.description)}</p>
                    {item.highlights && (
                      <ul className="treatment-highlights">
                        {item.highlights.map((highlight) => (
                          <li key={highlight.de}>{t(highlight)}</li>
                        ))}
                      </ul>
                    )}
                    <Link className="text-link" to={`/behandlungen/${item.id}`}>
                      {t({
                        de: "Behandlung entdecken",
                        en: "Explore this treatment",
                      })}
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="treatment-bottom">
              <a className="text-link" href={CONTACT.prices}>
                {t({
                  de: "Preise & Dauer ansehen",
                  en: "View prices & durations",
                })}
                <ArrowRightIcon />
              </a>
              <span>
                {t({
                  de: "Wir beraten dich gern.",
                  en: "We’re here to help you choose.",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
