import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { CONTACT } from "../data/content";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

/**
 * Practical facts only. Anything that could change — hours, payment, parking
 * — is attributed to current studio information rather than stated as
 * permanent, and the booked appointment always takes precedence.
 */
export function ContactPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Anfahrt, Parken & Kontakt | satuuu99 Ahrensburg bei Hamburg",
      en: "Directions, parking & contact | satuuu99 Ahrensburg near Hamburg",
    }),
    t({
      de: "satuuu99 findest du in der Manhagener Allee 45 in Ahrensburg, mit Parkplätzen vor dem Eingang und wenigen Minuten vom Bahnhof. Termin, Telefon und E-Mail auf einen Blick.",
      en: "Find satuuu99 at Manhagener Allee 45 in Ahrensburg, with parking outside the entrance and a few minutes from the station. Booking, phone and email at a glance.",
    }),
  );

  const faqs = [
    {
      q: {
        de: "Wie komme ich mit dem Auto zu satuuu99 und kann ich dort parken?",
        en: "How do I reach satuuu99 by car, and can I park there?",
      },
      a: {
        de: "Die Manhagener Allee 45 liegt zentral in Ahrensburg, wenige Minuten von der A1-Anschlussstelle Ahrensburg. Nach aktueller Studioinformation befinden sich Parkplätze direkt vor unserem Eingang. Aus Hamburg sind es je nach Verkehr rund 25 bis 35 Minuten.",
        en: "Manhagener Allee 45 is central in Ahrensburg, a few minutes from the A1 Ahrensburg junction. According to current studio information, parking is available directly outside our entrance. From Hamburg, allow roughly 25 to 35 minutes depending on traffic.",
      },
    },
    {
      q: {
        de: "Erreiche ich das Studio mit öffentlichen Verkehrsmitteln?",
        en: "Can I reach the studio by public transport?",
      },
      a: {
        de: "Ja. Ahrensburg ist über die U1 und die Regionalbahn an den Hamburger Verkehrsverbund angebunden. Vom Bahnhof Ahrensburg und von der U-Bahn-Station Ahrensburg erreichst du die Manhagener Allee zu Fuß in wenigen Minuten. Prüfe die konkrete Verbindung am Reisetag beim HVV.",
        en: "Yes. Ahrensburg is connected to the Hamburg transport network by the U1 underground and regional rail. Manhagener Allee is a few minutes' walk from Ahrensburg station and the Ahrensburg underground stop. Check the exact connection with HVV on the day you travel.",
      },
    },
    {
      q: {
        de: "Ist das Studio barrierefrei zugänglich?",
        en: "Is the studio wheelchair accessible?",
      },
      a: {
        de: "Bitte frag uns vor der Buchung. Wir sind ein kleines Studio und möchten dir ehrlich sagen, was in unseren Räumen möglich ist, statt eine pauschale Aussage zu treffen. Ruf uns an oder schreib uns, welche Unterstützung du brauchst.",
        en: "Please ask us before booking. We are a small studio and would rather tell you honestly what is possible in our rooms than make a blanket claim. Call or write to us describing the support you need.",
      },
    },
    {
      q: {
        de: "Wann sollte ich zu meinem Termin da sein?",
        en: "When should I arrive for my appointment?",
      },
      a: {
        de: "Komm möglichst fünf Minuten vor der vereinbarten Zeit, damit noch Raum für das Vorgespräch bleibt und du nicht direkt aus der Eile auf die Liege wechselst. Wenn du dich verspätest, ruf kurz an — wir behandeln dann in der Regel innerhalb der gebuchten Zeit weiter.",
        en: "Arrive about five minutes before your booked time so there is room for the consultation and you are not stepping straight from a rush onto the table. If you are running late, give us a quick call — we will usually continue within the time already booked.",
      },
    },
    {
      q: {
        de: "Wann ist das Studio geöffnet?",
        en: "When is the studio open?",
      },
      a: {
        de: "Mittwochs bis freitags von 10:00 bis 19:00 Uhr, samstags von 10:00 bis 18:00 Uhr. Maßgeblich für deinen Besuch ist immer der konkret gebuchte Termin im Online-Kalender.",
        en: "Wednesday to Friday from 10am to 7pm and Saturday from 10am to 6pm. What matters for your visit is always the specific appointment booked in the online calendar.",
      },
    },
    {
      q: {
        de: "Welche Zahlungsarten werden akzeptiert?",
        en: "Which payment methods are accepted?",
      },
      a: {
        de: "Nach aktueller Studioinformation kannst du mit Karte, PayPal oder bar bezahlen. Bezahlt wird nach der Behandlung; für die Online-Buchung ist keine Vorauszahlung nötig.",
        en: "According to current studio information you can pay by card, PayPal or cash. Payment is taken after the treatment; no prepayment is needed to book online.",
      },
    },
    {
      q: {
        de: "Wie erreiche ich satuuu99 telefonisch?",
        en: "How can I call satuuu99?",
      },
      a: {
        de: `Du erreichst uns unter ${CONTACT.phone}, telefonisch oder per WhatsApp. Wenn wir gerade in einer Behandlung sind, geht niemand ans Telefon — schreib uns dann per WhatsApp oder eine E-Mail an ${CONTACT.email}, wir antworten zwischen den Terminen.`,
        en: `Call or WhatsApp us on ${CONTACT.phone}. If we are with a guest nobody will pick up — in that case send a WhatsApp message or an email to ${CONTACT.email} and we will reply between appointments.`,
      },
    },
    {
      q: {
        de: "Welche Behandlung passt zu mir?",
        en: "Which treatment is right for me?",
      },
      a: {
        de: "Schreib uns kurz, wie es dir geht und was du dir wünschst — nicht, welche Anwendung du meinst. Daraus empfehlen wir dir etwas Passendes, ohne Buchungsdruck. Eine Übersicht aller elf Anwendungen mit Fokus, Berührung und Kleidung findest du auf der Behandlungsseite.",
        en: "Write to us about how you feel and what you are looking for — not which treatment you have in mind. We will suggest something suitable, with no pressure to book. An overview of all eleven treatments with focus, touch and clothing is on the treatments page.",
      },
    },
    {
      q: {
        de: "Wie buche ich meinen Termin?",
        en: "How do I book?",
      },
      a: {
        de: "Über den Online-Kalender siehst du die aktuell verfügbaren Termine und kannst direkt buchen. Wenn du eine Frage zur Eignung einer Anwendung hast, kontaktiere uns bitte vor der Buchung.",
        en: "The online calendar shows current availability and lets you book directly. If you have a question about whether a treatment is suitable, please contact us before booking.",
      },
    },
    {
      q: {
        de: "Wo finde ich die aktuellen Preise?",
        en: "Where can I find current prices?",
      },
      a: {
        de: "Die offizielle Preisliste enthält die verbindlichen Preise, Behandlungszeiten und buchbaren Varianten. Wie die Preise zustande kommen, erklären wir auf der Preisseite.",
        en: "The official price list contains confirmed prices, durations and available options. How those prices are structured is explained on the prices page.",
      },
    },
  ];

  return (
    <>
      <StructuredData data={faqSchema(faqs, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: t({ de: "Kontakt", en: "Contact" }), path: "/kontakt" },
        ])}
      />
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
          <p className="answer-lead">
            {t({
              de: `satuuu99 liegt in der ${CONTACT.addressLines[0]}, ${CONTACT.addressLines[1]} — zentral in Ahrensburg, mit Parkplätzen direkt vor dem Eingang und wenige Minuten vom Bahnhof entfernt. Termine buchst du online; bei Fragen zur Eignung einer Anwendung schreib oder ruf uns bitte vorher an.`,
              en: `satuuu99 is at ${CONTACT.addressLines.join(", ")} — central in Ahrensburg, with parking directly outside the entrance and a few minutes from the station. Appointments are booked online; for questions about whether a treatment suits you, please write or call first.`,
            })}
          </p>
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
          <a href={CONTACT.phoneHref}>
            <span>04</span>
            <div>
              <small>{t({ de: "Telefon", en: "Phone" })}</small>
              <h2>{CONTACT.phone}</h2>
            </div>
            <ArrowRightIcon />
          </a>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
            <span>05</span>
            <div>
              <small>WhatsApp</small>
              <h2>{CONTACT.phone}</h2>
            </div>
            <ArrowUpRightIcon />
          </a>
          <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer">
            <span>06</span>
            <div>
              <small>Instagram</small>
              <h2>{CONTACT.instagram}</h2>
            </div>
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>

      <section className="arrival-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">{t({ de: "Anfahrt", en: "Getting here" })}</p>
          <h2>
            {t({
              de: "So findest du uns in Ahrensburg.",
              en: "How to find us in Ahrensburg.",
            })}
          </h2>
        </div>
        <div className="arrival-grid">
          <article>
            <span>01</span>
            <h3>{t({ de: "Mit dem Auto", en: "By car" })}</h3>
            <p>
              {t({
                de: "Von der A1, Anschlussstelle Ahrensburg, sind es wenige Minuten in die Manhagener Allee. Aus der Hamburger Innenstadt rechne je nach Verkehr mit rund 25 bis 35 Minuten; aus Bargteheide, Großhansdorf und Ammersbek bist du in gut zehn Minuten da.",
                en: "From the A1 at the Ahrensburg junction it is a few minutes to Manhagener Allee. From central Hamburg allow roughly 25 to 35 minutes depending on traffic; from Bargteheide, Großhansdorf and Ammersbek it is a little over ten minutes.",
              })}
            </p>
            <p>
              {t({
                de: "Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang — du musst also keinen Parkplatz suchen und keine Parkuhr im Blick behalten.",
                en: "According to current studio information, parking is directly outside the entrance — so there is no hunting for a space and no parking meter to watch.",
              })}
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>{t({ de: "Mit Bahn und Bus", en: "By train and bus" })}</h3>
            <p>
              {t({
                de: "Ahrensburg ist über die U1 und die Regionalbahn an den Hamburger Verkehrsverbund angebunden. Von der U-Bahn-Station Ahrensburg und vom Bahnhof erreichst du die Manhagener Allee zu Fuß in wenigen Minuten.",
                en: "Ahrensburg is connected to the Hamburg transport network by the U1 underground and regional rail. Manhagener Allee is a few minutes on foot from the Ahrensburg underground stop and the station.",
              })}
            </p>
            <p>
              {t({
                de: "Weil Fahrpläne sich ändern, prüfe die konkrete Verbindung am Reisetag bitte beim HVV. Wenn du knapp dran bist, ruf uns kurz an, statt zu hetzen.",
                en: "Because timetables change, please check the exact connection with HVV on the day. If you are cutting it fine, give us a quick call rather than rushing.",
              })}
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>{t({ de: "Beim Ankommen", en: "On arrival" })}</h3>
            <p>
              {t({
                de: "Es gibt keinen Wartebereich mit Publikum und keine Empfangstheke, an der du dich anmelden musst. Wir öffnen dir, nehmen dir die Jacke ab und beginnen mit einem kurzen Gespräch über die gebuchte Anwendung.",
                en: "There is no public waiting area and no reception desk to check in at. We let you in, take your coat and begin with a short conversation about the treatment you have booked.",
              })}
            </p>
            <p>
              {t({
                de: "Komm am besten fünf Minuten früher. Wenn du Fragen zu Vorerkrankungen, Schwangerschaft, Medikamenten oder empfindlichen Stellen hast, ist genau dieses Gespräch der richtige Moment dafür.",
                en: "It helps to arrive five minutes early. If you have questions about medical history, pregnancy, medication or sensitive areas, that conversation is exactly the right moment for them.",
              })}
            </p>
          </article>
        </div>
      </section>

      <section className="contact-photos section-shell">
        <figure>
          <Photo
            id="studio-room-atmosphere"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Atmosphärenbild — ein Behandlungsraum, keine Aufnahme unserer Räume",
              en: "Atmosphere image — a treatment room, not a photograph of our rooms",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="studio-candlelight-mood"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Ruhiges Licht gehört zu jedem Termin",
              en: "Calm light is part of every appointment",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="hands-light-study"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Persönliche Behandlung statt anonymer Ablauf",
              en: "Personal care rather than an anonymous routine",
            })}
          </figcaption>
        </figure>
      </section>

      <section className="contact-map section-shell">
        <div className="section-heading">
          <p className="eyebrow">{t({ de: "Karte", en: "Map" })}</p>
          <h2>
            {t({
              de: "Manhagener Allee 45, 22926 Ahrensburg.",
              en: "Manhagener Allee 45, 22926 Ahrensburg.",
            })}
          </h2>
        </div>
        <iframe
          title={t({
            de: "Karte mit dem Standort von satuuu99 in Ahrensburg",
            en: "Map showing the location of satuuu99 in Ahrensburg",
          })}
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.2340%2C53.6655%2C10.2535%2C53.6735&amp;layer=mapnik&amp;marker=53.66942%2C10.24376"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="comparison-note">
          {t({
            de: "Kartendaten von OpenStreetMap. Falls die Karte nicht lädt: ",
            en: "Map data from OpenStreetMap. If the map does not load: ",
          })}
          <a
            href="https://www.openstreetmap.org/?mlat=53.66942&amp;mlon=10.24376#map=17/53.66942/10.24376"
            target="_blank"
            rel="noreferrer"
          >
            {t({
              de: "bei OpenStreetMap öffnen",
              en: "open in OpenStreetMap",
            })}
          </a>
          {t({ de: " oder ", en: " or " })}
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            {t({
              de: "Route mit Google Maps planen",
              en: "plan a route with Google Maps",
            })}
          </a>
          {"."}
        </p>
      </section>

      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Gut zu wissen", en: "Good to know" })}
        </p>
        <div>
          {faqs.map((faq, index) => (
            <article key={faq.q.de}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
