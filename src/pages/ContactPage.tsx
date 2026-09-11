import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";

export function ContactPage() {
  const { t } = useLang();
  usePageMeta(
    t({ de: "Kontakt — satuuu99", en: "Contact — satuuu99" }),
    t({
      de: "Termin, Anfahrt und Kontakt zu satuuu99 in Ahrensburg.",
      en: "Booking, directions and contact for satuuu99 in Ahrensburg.",
    }),
  );
  const faqs = [
    {
      q: {
        de: "Welche Behandlung passt zu mir?",
        en: "Which treatment is right for me?",
      },
      a: {
        de: "Wenn du noch unsicher bist, schreib uns vorab. Wir helfen dir, aus den verfügbaren Anwendungen zu wählen.",
        en: "If you are unsure, send us a note before booking. We’ll help you choose from the available treatments.",
      },
    },
    {
      q: { de: "Wie buche ich meinen Termin?", en: "How do I book?" },
      a: {
        de: "Über den Online-Kalender siehst du die aktuell verfügbaren Termine und kannst direkt buchen.",
        en: "The online calendar shows current availability and lets you book directly.",
      },
    },
    {
      q: {
        de: "Wo finde ich die aktuellen Preise?",
        en: "Where can I find current prices?",
      },
      a: {
        de: "Unsere offizielle Preisliste enthält Preise, Dauer und buchbare Varianten.",
        en: "Our official price list includes prices, durations and available options.",
      },
    },
  ];
  return (
    <>
      <section className="contact-page section-shell">
        <div className="contact-page-intro">
          <p className="eyebrow">{t({ de: "Kontakt", en: "Contact" })}</p>
          <h1>
            {t({ de: "Wir halten dir", en: "A little space," })}
            <br />
            <span className="soft-text">
              {t({ de: "eine Pause frei.", en: "just for you." })}
            </span>
          </h1>
        </div>
        <div className="contact-options">
          <a href={CONTACT.booking}>
            <span>01</span>
            <div>
              <small>{t({ de: "Termin", en: "Appointment" })}</small>
              <h2>{t({ de: "Online buchen", en: "Book online" })}</h2>
            </div>
            <ArrowUpRightIcon />
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            <span>02</span>
            <div>
              <small>E-Mail</small>
              <h2>{CONTACT.email}</h2>
            </div>
            <ArrowRightIcon />
          </a>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            <span>03</span>
            <div>
              <small>{t({ de: "Studio", en: "Studio" })}</small>
              <h2>
                {CONTACT.addressLines[0]}
                <br />
                {CONTACT.addressLines[1]}
              </h2>
            </div>
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>
      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Gut zu wissen", en: "Good to know" })}
        </p>
        <div>
          {faqs.map((faq, index) => (
            <article key={faq.q.de}>
              <span>0{index + 1}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
