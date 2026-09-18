import type { FocusGroup, Treatment } from "../../data/content";
import { CONTACT } from "../../data/content";
import { treatmentCopy } from "../../data/treatments";
import { useLang } from "../../lib/i18n";
import { Photo } from "../media/Photo";
import { AmbientFilm } from "../media/AmbientFilm";
import { groupFilm } from "../../data/media";

interface TreatmentEditorialProps {
  group: FocusGroup;
  treatment: Treatment;
}

/**
 * The editorial body of a treatment page: an answer-first summary, the
 * treatment sequence in words and pictures, suitability, preparation,
 * aftercare and treatment-specific questions.
 */
export function TreatmentEditorial({
  group,
  treatment,
}: TreatmentEditorialProps) {
  const { t } = useLang();
  const copy = treatmentCopy(treatment.id);
  const film = groupFilm(group.id);
  if (!copy) return null;

  return (
    <>
      <section className="treatment-answer section-shell">
        <p className="eyebrow">
          {t({ de: "Kurz erklärt", en: "The short answer" })}
        </p>
        <div>
          <h2>
            {t({
              de: `Was ist ${treatment.name.de}?`,
              en: `What is ${treatment.name.en}?`,
            })}
          </h2>
          <p className="answer-lead">{t(copy.answer)}</p>
          <p>{t(copy.definition)}</p>
        </div>
      </section>

      <section className="treatment-process">
        <div className="section-shell">
          <div>
            <p className="eyebrow">
              {t({ de: "Dein Termin", en: "Your appointment" })}
            </p>
            <h2>
              {t({
                de: "Schritt für Schritt.",
                en: "Step by step.",
              })}
            </h2>
          </div>
          <ol>
            {copy.steps.map((step, index) => (
              <li key={step.de}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{t(step)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="treatment-sequence section-shell">
        <div className="treatment-sequence-heading">
          <p className="eyebrow">{t({ de: "Im Detail", en: "In detail" })}</p>
          <h2>
            {t({
              de: "So sieht das Ritual aus.",
              en: "What the ritual looks like.",
            })}
          </h2>
        </div>
        <div className="treatment-sequence-grid">
          {copy.sequence.map((photoId, index) => (
            <figure key={photoId}>
              <Photo
                id={photoId}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {t(copy.sequenceCaptions[index])}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="treatment-reading section-shell">
        <article>
          <p className="eyebrow">
            {t({ de: "Wie es sich anfühlt", en: "How it feels" })}
          </p>
          <h2>
            {t({
              de: "Was du während der Anwendung bemerken kannst.",
              en: "What you may notice during the treatment.",
            })}
          </h2>
          <p>{t(copy.experience)}</p>
        </article>
        <article>
          <p className="eyebrow">
            {t({ de: "Passt das zu mir?", en: "Is this for me?" })}
          </p>
          <h2>
            {t({
              de: "Wähle nach dem Gefühl, das du dir wünschst.",
              en: "Choose by how you want to feel.",
            })}
          </h2>
          <p>{t(copy.suited)}</p>
        </article>
      </section>

      {film && (
        <section className="treatment-film section-shell">
          <figure className="ambient-film">
            <AmbientFilm id={film} />
          </figure>
          <figcaption className="media-note">
            {t({
              de: "Stimmungsaufnahme einer vergleichbaren Anwendung — keine Aufnahme aus unseren Räumen",
              en: "Mood footage of a comparable treatment — not filmed in our rooms",
            })}
          </figcaption>
        </section>
      )}

      <section className="treatment-boundary section-shell">
        <div>
          <p className="eyebrow">
            {t({ de: "Vor der Buchung", en: "Before you book" })}
          </p>
          <h2>
            {t({
              de: "Wann du uns zuerst schreiben solltest.",
              en: "When to write to us first.",
            })}
          </h2>
        </div>
        <div>
          <p>{t(copy.beforeBooking)}</p>
          <p>
            {t({
              de: "Sprich uns außerdem während der Anwendung jederzeit an. Weniger Druck, eine andere Temperatur, eine Pause oder mehr Ruhe sind keine Umstände, sondern Teil einer persönlichen Behandlung.",
              en: "You can also talk to us at any point during the treatment. Less pressure, a different temperature, a pause or more quiet are not an inconvenience; they are part of personal care.",
            })}
          </p>
        </div>
      </section>

      <section className="treatment-more section-shell">
        <article>
          <span>01</span>
          <h2>{t({ de: "Vor deinem Besuch", en: "Before your visit" })}</h2>
          <p>{t(copy.prepare)}</p>
        </article>
        <article>
          <span>02</span>
          <h2>{t({ de: "Nach deinem Ritual", en: "After your ritual" })}</h2>
          <p>{t(copy.after)}</p>
        </article>
        <article>
          <span>03</span>
          <h2>
            {t({
              de: "Buchung ohne Rätselraten",
              en: "Booking without guesswork",
            })}
          </h2>
          <p>
            {t({
              de: "Im Online-Kalender siehst du freie Termine und die aktuell angebotenen Varianten. Die offizielle Preisliste nennt die verbindlichen Preise und Behandlungszeiten. Wenn du zwischen zwei Ritualen schwankst oder nicht sicher bist, ob eine Anwendung zu deiner Situation passt, kontaktiere uns vor der Buchung per E-Mail oder Telefon.",
              en: "The online calendar shows available appointments and current options. The official price list provides confirmed prices and durations. If you are choosing between two rituals or are unsure whether a treatment suits your situation, contact us by email or phone before booking.",
            })}
          </p>
          <p>
            {t({
              de: `Du findest uns in der ${CONTACT.addressLines[0]}, ${CONTACT.addressLines[1]} — wenige Minuten von der Ahrensburger Innenstadt und rund 25 Kilometer nordöstlich der Hamburger Innenstadt. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang.`,
              en: `Find us at ${CONTACT.addressLines.join(", ")} — minutes from central Ahrensburg and roughly 25 kilometres northeast of central Hamburg. According to current studio information, parking is directly outside.`,
            })}
          </p>
        </article>
      </section>

      <section className="treatment-faq section-shell">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>
            {t({
              de: `Fragen zu ${treatment.name.de}`,
              en: `Questions about ${treatment.name.en}`,
            })}
          </h2>
        </div>
        <div>
          {copy.questions.map((item, index) => (
            <details key={item.q.de}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {t(item.q)}
              </summary>
              <p>{t(item.a)}</p>
            </details>
          ))}
          <details>
            <summary>
              <span>{String(copy.questions.length + 1).padStart(2, "0")}</span>
              {t({
                de: "Wo finde ich Preis, Dauer und freie Termine?",
                en: "Where can I find price, duration and availability?",
              })}
            </summary>
            <p>
              {t({
                de: "Die verbindlichen Angaben stehen in der offiziellen Preisliste und im Online-Kalender. Dort siehst du auch, welche Varianten aktuell buchbar sind.",
                en: "Confirmed details appear in the official price list and booking calendar, including the options currently available.",
              })}
            </p>
            <div className="faq-links">
              <a href={CONTACT.prices}>
                {t({ de: "Preisliste", en: "Price list" })}
              </a>
              <a href={CONTACT.booking}>
                {t({ de: "Termine", en: "Appointments" })}
              </a>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
