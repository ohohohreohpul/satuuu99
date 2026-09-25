import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon, SparkIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { TEAM } from "../data/team";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema } from "../lib/schema";
import { FinalCTA } from "../sections/FinalCTA";

const STUDIO_FAQS = [
  {
    q: {
      de: "Wie groß ist das Studio von satuuu99?",
      en: "How big is the satuuu99 studio?",
    },
    a: {
      de: "satuuu99 ist ein kleines, privates Studio in der Manhagener Allee 45 in Ahrensburg — kein Day Spa und keine Wellnessanlage, sondern ein einziger, ruhiger Behandlungsraum ohne offenen Wartebereich. Während deines Termins bist du in der Regel der einzige Gast im Raum.",
      en: "satuuu99 is a small, private studio at Manhagener Allee 45 in Ahrensburg — not a day spa or a wellness complex, but a single, quiet treatment room with no open waiting area. During your appointment you are usually the only guest in the room.",
    },
  },
  {
    q: {
      de: "Wer wird mich behandeln?",
      en: "Who will treat me?",
    },
    a: {
      de: "Eine von vier Personen: Inhaberin Nina, Sue, Pim oder Tuk. Wer deinen Termin übernimmt, hängt von der Einteilung ab. Wenn du eine bestimmte Person oder einen bestimmten Arbeitsstil bevorzugst, sag es bei der Buchung — wir versuchen, es zu berücksichtigen, können es aber nicht garantieren.",
      en: "One of four people: owner Nina, Sue, Pim or Tuk. Who takes your appointment depends on scheduling. If you prefer a particular person or working style, mention it when booking — we try to accommodate it but cannot guarantee it.",
    },
  },
  {
    q: {
      de: "Wie privat ist ein Termin bei satuuu99?",
      en: "How private is an appointment at satuuu99?",
    },
    a: {
      de: "Sehr. Du kommst nicht in einen Betrieb mit Publikum. Du ziehst dich unbeobachtet um, wir klopfen, bevor wir hereinkommen, und während der Körpermassagen liegst du mit Leinen abgedeckt — nur der Bereich, an dem gerade gearbeitet wird, ist frei.",
      en: "Very. You are not entering a business with an audience. You change unobserved, we knock before coming in, and during body massages you lie draped in linen — only the area currently being worked is uncovered.",
    },
  },
  {
    q: {
      de: "Ist das Studio barrierefrei?",
      en: "Is the studio accessible?",
    },
    a: {
      de: "Frag uns bitte vor der Buchung. Wir geben lieber eine ehrliche Auskunft zu unseren konkreten Räumen als eine pauschale Zusage. Ruf uns an oder schreib uns, welche Unterstützung du brauchst.",
      en: "Please ask us before booking. We would rather give you an honest answer about our actual rooms than a blanket promise. Call or write to us describing the support you need.",
    },
  },
  {
    q: {
      de: "Muss ich während der Behandlung reden?",
      en: "Do I have to talk during the treatment?",
    },
    a: {
      de: "Nein. Nach dem Vorgespräch kannst du die Augen schließen und schweigen — das ist bei vielen Gästen der Normalfall. Wenn du lieber reden möchtest, ist das genauso in Ordnung. Sag am Anfang einfach, was dir lieber ist.",
      en: "No. After the consultation you can close your eyes and stay quiet — for many guests that is the norm. If you would rather chat, that is equally fine. Just say at the start which you prefer.",
    },
  },
  {
    q: {
      de: "Kann ich das Studio vorher ansehen?",
      en: "Can I see the studio beforehand?",
    },
    a: {
      de: "Ruf uns an und frag nach einem Zeitpunkt zwischen den Terminen. Weil wir nur einen Behandlungsraum haben und nicht durchgehend am Empfang sind, geht es nicht spontan — mit einer kurzen Absprache aber meistens schon.",
      en: "Call us and ask for a time between appointments. Because we have only one treatment room and are not permanently at a reception desk, it does not work spontaneously — but with a short arrangement it usually does.",
    },
  },
];

export function StudioPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Wellnessstudio in Ahrensburg bei Hamburg | Das satuuu99 Studio",
      en: "Wellness studio in Ahrensburg near Hamburg | The satuuu99 studio",
    }),
    t({
      de: "Ein kleines, privates Wellnessstudio in der Manhagener Allee 45 in Ahrensburg: ein Behandlungsraum, vier Behandlerinnen, kein Publikum. Was dich bei deinem Besuch erwartet.",
      en: "A small, private wellness studio at Manhagener Allee 45 in Ahrensburg: one treatment room, four practitioners, no audience. What to expect from your visit.",
    }),
  );

  return (
    <>
      <StructuredData data={faqSchema(STUDIO_FAQS, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: t({ de: "Das Studio", en: "The studio" }), path: "/studio" },
        ])}
      />
      <PageHero
        eyebrow={t({ de: "Das Studio", en: "The studio" })}
        title={
          <>
            {t({ de: "Draußen ist Alltag.", en: "Leave the day outside." })}
            <br />
            <span className="soft-text">
              {t({ de: "Hier ist deine Zeit.", en: "This time is yours." })}
            </span>
          </>
        }
        copy={t({
          de: "Ein kleines, privates Studio in der Manhagener Allee in Ahrensburg: ein Behandlungsraum, vier Behandlerinnen, kein Wartebereich mit Publikum. Für Pflege, Berührung und die Momente, in denen du wieder bei dir ankommst.",
          en: "A small, private studio on Manhagener Allee in Ahrensburg: one treatment room, four practitioners, no public waiting area. For care, touch and the moments that bring you back to yourself.",
        })}
        photo={MEDIA.studio}
        caption={t({
          de: "Atmosphärenbild — ruhiger Behandlungsmoment bei Kerzenlicht",
          en: "Atmosphere image — a quiet treatment moment by candlelight",
        })}
      >
        <a
          className="button"
          href={CONTACT.maps}
          target="_blank"
          rel="noreferrer"
        >
          {t({ de: "Route öffnen", en: "Open directions" })}
          <ArrowRightIcon />
        </a>
      </PageHero>

      <section className="story-section section-shell">
        <div>
          <SparkIcon className="story-mark" />
          <p className="eyebrow">
            {t({ de: "Unsere Haltung", en: "Our approach" })}
          </p>
        </div>
        <div>
          <h2>
            {t({
              de: "Persönlich, unaufgeregt und mit viel Gefühl für Details.",
              en: "Personal, unhurried and attentive to every detail.",
            })}
          </h2>
          <p className="answer-lead">
            {t({
              de: "satuuu99 ist ein kleines, privates Wellnessstudio in Ahrensburg bei Hamburg mit einem Behandlungsraum und einem Team von vier Behandlerinnen. Angeboten werden elf Anwendungen für Kopf, Gesicht, Füße und Körper. Jeder Termin beginnt mit einem Gespräch, und Druck, Tempo und Wärme stimmen wir während der Behandlung mit dir ab.",
              en: "satuuu99 is a small, private wellness studio in Ahrensburg near Hamburg with one treatment room and a team of four practitioners. Eleven treatments are offered for head, face, feet and body. Every appointment begins with a conversation, and pressure, pace and warmth are agreed with you as we go.",
            })}
          </p>
          <p>
            {t({
              de: "Wir nehmen uns Zeit, hören zu und arbeiten ohne die Taktung eines großen Betriebs. Komm so, wie du bist. Um den Rest kümmern wir uns.",
              en: "We take time, we listen, and we work without the timetable of a large operation. Come as you are. We will take care of the rest.",
            })}
          </p>
        </div>
      </section>

      <section className="studio-gallery section-shell">
        <figure>
          <Photo
            id="studio-room-atmosphere"
            sizes="(min-width: 900px) 24vw, 45vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Atmosphärenbild — Behandlungsraum",
              en: "Atmosphere image — treatment room",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="head-spa-cradled-head"
            sizes="(min-width: 900px) 24vw, 45vw"
          />
          <figcaption>
            {t({
              de: "Der Kopf bleibt beim Head Spa durchgehend gestützt",
              en: "During head spa the head stays supported throughout",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="body-massage-shoulders"
            sizes="(min-width: 900px) 24vw, 45vw"
          />
          <figcaption>
            {t({
              de: "Leinenabdeckung: nur der Arbeitsbereich ist frei",
              en: "Linen draping: only the working area is uncovered",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="foot-ritual-detail"
            sizes="(min-width: 900px) 24vw, 45vw"
          />
          <figcaption>
            {t({
              de: "Fußrituale finden im Relaxsessel statt",
              en: "Foot rituals take place in the reclining chair",
            })}
          </figcaption>
        </figure>
      </section>

      <section className="team-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">{t({ de: "Das Team", en: "The team" })}</p>
          <h2>
            {t({
              de: "Vier Menschen, vier Schwerpunkte.",
              en: "Four people, four emphases.",
            })}
          </h2>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <article key={member.name}>
              <h3>{member.name}</h3>
              <p className="team-role">{t(member.role)}</p>
              <p>{t(member.bio)}</p>
            </article>
          ))}
        </div>
        <p className="team-note">
          {t({
            de: "Die Angaben stammen aus der offiziellen Studiovorstellung. Porträtfotos und ausführlichere persönliche Texte veröffentlichen wir erst, wenn jede Person sie freigegeben hat. Wenn du eine bestimmte Behandlerin bevorzugst, sag es bei der Buchung — wir berücksichtigen es, soweit die Einteilung es zulässt.",
            en: "These details come from the official studio profile. Portraits and fuller personal statements will be published only once each person has approved them. If you prefer a particular practitioner, mention it when booking — we accommodate it as far as scheduling allows.",
          })}
        </p>
      </section>

      <section className="local-content section-shell studio-depth">
        <section>
          <span>01</span>
          <div>
            <h2>
              {t({
                de: "Wie ein Besuch tatsächlich abläuft.",
                en: "What a visit is actually like.",
              })}
            </h2>
            <p>
              {t({
                de: "Du klingelst, wir öffnen — es gibt keine Theke, an der du dich anmelden musst, und keinen offenen Wartebereich, in dem andere Gäste sitzen. Nach einem kurzen Gespräch über die gebuchte Anwendung, Empfindlichkeiten und Vorerkrankungen gehst du in den Behandlungsraum und richtest dich in Ruhe ein. Wir klopfen, bevor wir hereinkommen.",
                en: "You ring, we let you in — there is no desk to check in at and no open waiting area with other guests sitting in it. After a short conversation about the treatment booked, any sensitivities and your medical history, you go into the treatment room and settle in privately. We knock before coming in.",
              })}
            </p>
            <p>
              {t({
                de: "Während der Anwendung kannst du jederzeit um weniger Druck, eine andere Temperatur, eine andere Position oder eine Pause bitten. Das ist ausdrücklich kein Störfaktor: Es ist der Unterschied zwischen einem Standardablauf und einer Behandlung, die zu dir passt. Am Ende bekommst du Zeit, liegen zu bleiben und langsam wieder aufzustehen.",
                en: "During the treatment you can ask for less pressure, a different temperature, another position or a pause at any point. That is expressly not a disruption: it is the difference between a standard routine and a treatment that fits you. At the end you are given time to stay lying down and get up slowly.",
              })}
            </p>
          </div>
        </section>
        <section>
          <span>02</span>
          <div>
            <h2>
              {t({
                de: "Ein Studio für Ahrensburg, Stormarn und Hamburgs Nordosten.",
                en: "A studio for Ahrensburg, Stormarn and northeast Hamburg.",
              })}
            </h2>
            <p>
              {t({
                de: "Du findest uns zentral in der Manhagener Allee 45, wenige Minuten von der Ahrensburger Innenstadt und von der A1-Anschlussstelle. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang, und vom Bahnhof Ahrensburg sowie von der U1 sind es wenige Minuten zu Fuß.",
                en: "Find us centrally at Manhagener Allee 45, a few minutes from central Ahrensburg and from the A1 junction. According to current studio information, parking is directly outside the entrance, and it is a short walk from Ahrensburg station and the U1.",
              })}
            </p>
            <p>
              {t({
                de: "Damit sind wir eine persönliche Alternative für Menschen aus Ahrensburg, Bargteheide, Großhansdorf, Ammersbek und den Hamburger Walddörfern, die eine Wellnessauszeit in der Nähe suchen — ohne in die Hamburger Innenstadt zu fahren und ohne in einem großen Betrieb Nummer zu ziehen.",
                en: "That makes us a personal alternative for people in Ahrensburg, Bargteheide, Großhansdorf, Ammersbek and Hamburg's Walddörfer looking for wellness time nearby — without driving into central Hamburg and without taking a ticket at a large operation.",
              })}
            </p>
            <p>
              {t({
                de: "Mittwochs bis freitags ist das Studio von 10:00 bis 19:00 Uhr geöffnet, samstags von 10:00 bis 18:00 Uhr. Die im Online-Kalender angezeigten Zeiten sind für deine Buchung maßgeblich.",
                en: "The studio is open Wednesday to Friday from 10am to 7pm and Saturday from 10am to 6pm. The times shown in the online calendar determine current availability.",
              })}
            </p>
          </div>
        </section>
        <section>
          <span>03</span>
          <div>
            <h2>
              {t({
                de: "Was es bei uns nicht gibt.",
                en: "What we do not have.",
              })}
            </h2>
            <p>
              {t({
                de: "Wir haben einen Behandlungsraum und keinen Ruhebereich mit Liegen. Wer eine Hotel- oder Resort-Anlage erwartet, wird bei uns enttäuscht — und das sagen wir lieber vorher als hinterher.",
                en: "We have one treatment room and no relaxation lounge with loungers. If you are expecting a hotel or resort facility you will be disappointed — and we would rather say so in advance than afterwards.",
              })}
            </p>
            <p>
              {t({
                de: "Genauso wenig sind wir eine medizinische Einrichtung. Wir stellen keine Diagnosen, verordnen nichts und behandeln keine Beschwerden. Für Physiotherapie, medizinische Massage, dermatologische Behandlungen oder podologische Fußpflege ist eine entsprechend qualifizierte Praxis zuständig.",
                en: "Nor are we a medical facility. We do not diagnose, prescribe or treat complaints. Physiotherapy, medical massage, dermatological treatment and podiatry belong with an appropriately qualified practice.",
              })}
            </p>
          </div>
        </section>
      </section>

      <section className="visit-section">
        <div className="section-shell visit-grid">
          <div>
            <p className="eyebrow">{t({ de: "Besuch", en: "Visit" })}</p>
            <h2>
              {t({
                de: "Ahrensburg bei Hamburg.",
                en: "Ahrensburg near Hamburg.",
              })}
            </h2>
          </div>
          <address>
            {CONTACT.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="visit-links">
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {t({ de: "Google Maps", en: "Google Maps" })}
              <ArrowRightIcon />
            </a>
            <Link to="/kontakt">
              {t({ de: "Anfahrt & Kontakt", en: "Directions & contact" })}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell">
        <p className="eyebrow">
          {t({ de: "Fragen zum Studio", en: "About the studio" })}
        </p>
        <div>
          {STUDIO_FAQS.map((faq, index) => (
            <article key={faq.q.de}>
              <span>0{index + 1}</span>
              <h2>{t(faq.q)}</h2>
              <p>{t(faq.a)}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
