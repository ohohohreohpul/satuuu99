import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA, photoUrl } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";
import { FinalCTA } from "../sections/FinalCTA";

const HAMBURG_FAQS = [
  {
    q: {
      de: "Wie weit ist satuuu99 von Hamburg entfernt?",
      en: "How far is satuuu99 from Hamburg?",
    },
    a: {
      de: "Rund 25 Kilometer nordöstlich der Hamburger Innenstadt. Mit dem Auto über die A1 bis zur Anschlussstelle Ahrensburg sind es je nach Verkehr etwa 25 bis 35 Minuten. Mit der U1 erreichst du Ahrensburg direkt aus Hamburg; von der Station sind es wenige Minuten zu Fuß in die Manhagener Allee.",
      en: "Roughly 25 kilometres northeast of central Hamburg. By car via the A1 to the Ahrensburg junction it is about 25 to 35 minutes depending on traffic. The U1 underground connects Ahrensburg directly with Hamburg; from the stop it is a few minutes on foot to Manhagener Allee.",
    },
  },
  {
    q: {
      de: "Warum sollte ich für ein Head Spa aus Hamburg herausfahren?",
      en: "Why travel out of Hamburg for a head spa?",
    },
    a: {
      de: "Weil du hier in einem Studio mit einem einzigen Behandlungsraum bist und nicht in einem Betrieb mit Wartebereich und getakteten Terminen. Kein Publikum, keine Durchgangsgeräusche, kein Verkaufsgespräch am Ende. Ob dir das den Weg wert ist, entscheidest du — wir behaupten nicht, dass wir für jeden die richtige Wahl sind.",
      en: "Because here you are in a studio with a single treatment room rather than an operation with a waiting area and tightly scheduled slots. No audience, no passing noise, no sales conversation at the end. Whether that is worth the journey is your call — we do not claim to be the right choice for everyone.",
    },
  },
  {
    q: {
      de: "Kann ich das Head Spa in der Mittagspause machen?",
      en: "Can I fit a head spa into a lunch break?",
    },
    a: {
      de: "Wenn du in Hamburg arbeitest, eher nicht: Hin- und Rückweg zusammen brauchen schon rund eine Stunde, und dein Haar ist danach feucht. Sinnvoller ist ein Termin am späten Nachmittag, am Abend bis 20 Uhr oder am Samstag — dann fällt auch die Rushhour weg.",
      en: "If you work in Hamburg, probably not: the round trip alone takes about an hour, and your hair is damp afterwards. A late afternoon, an evening slot up to 8pm, or a Saturday makes more sense — and avoids rush hour too.",
    },
  },
  {
    q: {
      de: "Werden beim Head Spa die Haare nass?",
      en: "Does hair get wet during a head spa?",
    },
    a: {
      de: "Ja. Warmes Wasser und die Reinigung von Kopfhaut und Haar gehören dazu. Am Ende wird das Haar ausgespült und sanft getrocknet, aber ein aufwendiges Styling ist nicht Teil des Rituals. Plane deinen Rückweg und den restlichen Tag entsprechend.",
      en: "Yes. Warm water and cleansing of scalp and hair are part of it. At the end the hair is rinsed and gently dried, but elaborate styling is not part of the ritual. Plan your journey home and the rest of your day accordingly.",
    },
  },
  {
    q: {
      de: "Gibt es Parkplätze, wenn ich mit dem Auto komme?",
      en: "Is there parking if I come by car?",
    },
    a: {
      de: "Nach aktueller Studioinformation befinden sich Parkplätze direkt vor dem Eingang in der Manhagener Allee 45. Anders als in vielen Hamburger Stadtteilen musst du also keinen Parkplatz suchen und keine Parkuhr im Blick behalten.",
      en: "According to current studio information, parking is available directly outside the entrance at Manhagener Allee 45. Unlike in many Hamburg districts, there is no hunting for a space and no parking meter to watch.",
    },
  },
  {
    q: {
      de: "Aus welchen Hamburger Stadtteilen ist die Anfahrt kurz?",
      en: "Which Hamburg districts are closest?",
    },
    a: {
      de: "Aus den Walddörfern — Volksdorf, Bergstedt, Wohldorf-Ohlstedt — sowie aus Rahlstedt, Farmsen-Berne und Bramfeld bist du in gut 15 bis 25 Minuten da. Aus Eimsbüttel, Altona oder den Elbvororten dauert es entsprechend länger; dann lohnt sich ein Termin außerhalb der Hauptverkehrszeit.",
      en: "From the Walddörfer — Volksdorf, Bergstedt, Wohldorf-Ohlstedt — and from Rahlstedt, Farmsen-Berne and Bramfeld it is around 15 to 25 minutes. From Eimsbüttel, Altona or the Elbe suburbs it takes correspondingly longer, so a slot outside peak traffic is worth it.",
    },
  },
];

/**
 * Regional discovery page for visitors searching from Hamburg. Its job is to
 * answer the travel question honestly rather than to claim the studio is in
 * Hamburg — it is in Ahrensburg, and the page says so throughout.
 */
export function HeadSpaHamburgPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Japanese Head Spa nahe Hamburg — in Ahrensburg | satuuu99",
      en: "Japanese Head Spa near Hamburg — in Ahrensburg | satuuu99",
    }),
    t({
      de: "Japanese Head Spa rund 25 km von der Hamburger Innenstadt: privates Studio in Ahrensburg, Parkplätze vor der Tür, direkt mit der U1 erreichbar. Anfahrt, Ablauf und Antworten.",
      en: "Japanese Head Spa around 25 km from central Hamburg: a private studio in Ahrensburg, parking outside the door, direct U1 connection. Travel, ritual and answers.",
    }),
  );

  return (
    <>
      <StructuredData
        data={serviceSchema({
          name: t({
            de: "Japanese Head Spa nahe Hamburg",
            en: "Japanese Head Spa near Hamburg",
          }),
          description: t({
            de: "Japanese Head Spa im privaten satuuu99 Studio in Ahrensburg, rund 25 Kilometer nordöstlich der Hamburger Innenstadt und direkt mit der U1 erreichbar.",
            en: "Japanese Head Spa at the private satuuu99 studio in Ahrensburg, roughly 25 kilometres northeast of central Hamburg and directly connected by the U1.",
          }),
          url: "/head-spa-hamburg",
          image: photoUrl(MEDIA.programmes["head-spa"]),
          serviceType: "Japanese Head Spa",
        })}
      />
      <StructuredData data={faqSchema(HAMBURG_FAQS, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          {
            name: t({
              de: "Head Spa nahe Hamburg",
              en: "Head Spa near Hamburg",
            }),
            path: "/head-spa-hamburg",
          },
        ])}
      />
      <PageHero
        eyebrow={t({
          de: "Head Spa nahe Hamburg",
          en: "Head Spa near Hamburg",
        })}
        title={
          <>
            {t({ de: "Japanese Head Spa", en: "Japanese Head Spa" })}
            <br />
            <span className="soft-text">
              {t({
                de: "25 Kilometer vor Hamburg.",
                en: "25 kilometres from Hamburg.",
              })}
            </span>
          </>
        }
        copy={t({
          de: "Unser Studio liegt nicht in Hamburg, sondern in Ahrensburg — rund 25 Kilometer nordöstlich der Innenstadt, direkt mit der U1 erreichbar und mit Parkplätzen vor der Tür. Genau deshalb ist es ruhig: ein Behandlungsraum, kein Wartebereich, kein Publikum.",
          en: "Our studio is not in Hamburg but in Ahrensburg — roughly 25 kilometres northeast of the city centre, directly on the U1 and with parking outside the door. That is exactly why it is quiet: one treatment room, no waiting area, no audience.",
        })}
        photo={MEDIA.programmes["head-spa"]}
      >
        <a className="button" href={CONTACT.booking}>
          {t({ de: "Head Spa buchen", en: "Book a Head Spa" })}
          <ArrowRightIcon />
        </a>
      </PageHero>

      <section className="answer-first section-shell">
        <p className="eyebrow">
          {t({ de: "Kurz erklärt", en: "The short answer" })}
        </p>
        <h2>
          {t({
            de: "satuuu99 bietet Japanese Head Spa in Ahrensburg an, rund 25 Kilometer nordöstlich der Hamburger Innenstadt und mit der U1 direkt erreichbar. Das Ritual verbindet Reinigung und Pflege von Kopfhaut und Haar mit einer Kopf-, Nacken- und Schultermassage im Liegen. Dein Haar wird dabei nass.",
            en: "satuuu99 offers Japanese Head Spa in Ahrensburg, roughly 25 kilometres northeast of central Hamburg and directly reachable on the U1. The ritual combines cleansing and care of scalp and hair with a head, neck and shoulder massage, lying down. Your hair does get wet.",
          })}
        </h2>
      </section>

      <section className="local-story section-shell">
        <div>
          <p className="eyebrow">
            {t({
              de: "Deine Auszeit bei Hamburg",
              en: "Your pause near Hamburg",
            })}
          </p>
          <h2>
            {t({
              de: "Raus aus dem Tempo. Rein in einen ruhigeren Moment.",
              en: "Step away from the pace and into a quieter moment.",
            })}
          </h2>
        </div>
        <div>
          <p>
            {t({
              de: "Beim Japanese Head Spa verbindest du Pflege für Kopfhaut und Haar mit einer entspannenden Kopf-, Nacken- und Schultermassage. Du liegst bequem auf dem Rücken, der Kopf ruht gestützt, warmes Wasser läuft durch dein Haar — und du musst selbst nichts tun. Der Ablauf ist bewusst langsam: Zuerst ein kurzes Gespräch, dann eine Trockenmassage der Kopfhaut, dann Wasser, Reinigung und Pflege, zum Schluss die Massage von Nacken und Schultern.",
              en: "Japanese Head Spa combines care for scalp and hair with a relaxing head, neck and shoulder massage. You lie comfortably on your back with your head supported, warm water runs through your hair — and there is nothing for you to do. The sequence is deliberately slow: first a short conversation, then a dry scalp massage, then water, cleansing and care, and finally the massage of neck and shoulders.",
            })}
          </p>
          <p>
            {t({
              de: "Es ist eine Wellness- und Pflegeanwendung, keine dermatologische Behandlung und keine Therapie gegen Haarausfall. Wir versprechen keine Veränderung deiner Haarstruktur. Was wir zusagen können, ist ein sorgfältiger Ablauf in einem Raum, in dem außer dir niemand ist.",
              en: "It is a wellness and care treatment, not dermatological care and not a therapy for hair loss. We promise no change to your hair structure. What we can promise is an attentive ritual in a room where nobody else is present.",
            })}
          </p>
          <Link className="text-link" to="/behandlungen/head-spa">
            {t({ de: "Behandlung im Detail", en: "Treatment details" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="contact-photos section-shell">
        <figure>
          <Photo
            id="head-spa-water-rinse"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Warmes Wasser läuft durch Haar und Kopfhaut",
              en: "Warm water runs through hair and scalp",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="head-spa-forehead-hold"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Die Massage beginnt an Stirn und Haaransatz",
              en: "The massage begins at forehead and hairline",
            })}
          </figcaption>
        </figure>
        <figure>
          <Photo
            id="head-spa-scalp-touch"
            sizes="(min-width: 900px) 32vw, 100vw"
          />
          <figcaption className="media-note">
            {t({
              de: "Zum Abschluss Nacken und Schultern",
              en: "Neck and shoulders to finish",
            })}
          </figcaption>
        </figure>
      </section>

      <div className="local-content section-shell">
        <section>
          <span>01</span>
          <div>
            <h2>
              {t({
                de: "Die Anfahrt, ehrlich gerechnet",
                en: "The journey, honestly calculated",
              })}
            </h2>
            <p>
              {t({
                de: "Mit dem Auto führt der Weg aus Hamburg über die A1 bis zur Anschlussstelle Ahrensburg; von dort sind es wenige Minuten in die Manhagener Allee. Aus der Innenstadt rechne mit 25 bis 35 Minuten, außerhalb der Rushhour eher mit 25. Aus den Walddörfern, Rahlstedt, Farmsen-Berne oder Bramfeld bist du in gut 15 bis 25 Minuten da; aus Altona, Eimsbüttel oder den Elbvororten dauert es deutlich länger.",
                en: "By car the route from Hamburg runs along the A1 to the Ahrensburg junction; from there it is a few minutes to Manhagener Allee. From the city centre allow 25 to 35 minutes, or closer to 25 outside rush hour. From the Walddörfer, Rahlstedt, Farmsen-Berne or Bramfeld it is around 15 to 25 minutes; from Altona, Eimsbüttel or the Elbe suburbs it takes considerably longer.",
              })}
            </p>
            <p>
              {t({
                de: "Mit dem HVV erreichst du Ahrensburg über die U1 sowie über die Regionalbahn. Von der U-Bahn-Station Ahrensburg und vom Bahnhof ist die Manhagener Allee in wenigen Minuten zu Fuß erreichbar. Weil sich Fahrpläne ändern, prüfe die konkrete Verbindung am Reisetag bitte beim HVV und plane einen kleinen Puffer ein.",
                en: "By HVV you can reach Ahrensburg on the U1 and by regional rail. Manhagener Allee is a few minutes on foot from the Ahrensburg underground stop and the station. Because timetables change, please check your connection with HVV on the day and allow a small buffer.",
              })}
            </p>
            <p>
              {t({
                de: "Der praktische Unterschied zu einem Termin in der Hamburger Innenstadt: Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang. Du suchst keinen Platz, zahlst keine Parkuhr und musst nach der Behandlung nicht durch die Innenstadt zurück.",
                en: "The practical difference from an appointment in central Hamburg: according to current studio information, parking is directly outside the entrance. You do not hunt for a space, do not feed a meter, and do not have to cross the city centre on the way back.",
              })}
            </p>
          </div>
        </section>
        <section>
          <span>02</span>
          <div>
            <h2>
              {t({
                de: "Kleines Studio statt großer Betrieb",
                en: "A small studio rather than a large operation",
              })}
            </h2>
            <p>
              {t({
                de: "In Hamburg gibt es inzwischen mehrere Anbieter für Head Spa, darunter größere Salons mit mehreren Plätzen und dicht getakteten Terminen. Das kann praktisch sein, wenn du spontan und zentral einen Platz brauchst. satuuu99 funktioniert anders: Wir haben einen Behandlungsraum, vier Behandlerinnen und keinen offenen Wartebereich. Während deines Termins bist du in der Regel der einzige Gast im Raum.",
                en: "Hamburg now has several head spa providers, including larger salons with multiple stations and tightly scheduled slots. That can be practical if you need a central, spontaneous appointment. satuuu99 works differently: we have one treatment room, four practitioners and no open waiting area. During your appointment you are usually the only guest in the room.",
              })}
            </p>
            <p>
              {t({
                de: "Konkret heißt das: Das Vorgespräch ist kein Formular, sondern ein Gespräch. Du kannst während der Anwendung jederzeit um weniger Druck, eine andere Temperatur oder eine Pause bitten. Am Ende gibt es kein Verkaufsgespräch — wenn du wissen möchtest, welches Produkt verwendet wurde, sagen wir es dir, und damit ist das Thema erledigt.",
                en: "In practice: the consultation is a conversation, not a form. You can ask for less pressure, a different temperature or a pause at any point. At the end there is no sales pitch — if you want to know which product was used we will tell you, and that is the end of it.",
              })}
            </p>
            <p>
              {t({
                de: "Was es bei uns nicht gibt: Sauna, Pool, Dampfkabine, Ruhebereich mit Liegen oder eine Spa-Landschaft. Wenn du eine Anlage suchst, in der du einen halben Tag verbringst, sind die großen Hamburger Häuser die bessere Adresse. Wenn du einen ruhigen, persönlichen Termin möchtest, sind wir es.",
                en: "What we do not have: a sauna, pool, steam cabin, relaxation lounge or spa landscape. If you are looking for a facility to spend half a day in, the larger Hamburg venues are the better address. If you want a quiet, personal appointment, we are.",
              })}
            </p>
          </div>
        </section>
        <section>
          <span>03</span>
          <div>
            <h2>
              {t({
                de: "Wann du den Termin am besten legst",
                en: "When to schedule your appointment",
              })}
            </h2>
            <p>
              {t({
                de: "Weil dein Haar nass wird, ist ein Termin ohne unmittelbar folgende Verpflichtung angenehmer. Für Gäste aus Hamburg heißt das in der Praxis: später Nachmittag, Abend bis 20 Uhr oder Samstag bis 18 Uhr. Dann fällt die Rushhour auf der A1 weg, und du kannst nach der Behandlung noch zwanzig Minuten sitzen bleiben, statt sofort loszufahren.",
                en: "Because your hair gets wet, an appointment with nothing immediately afterwards is more comfortable. For guests from Hamburg that usually means a late afternoon, an evening slot up to 8pm, or a Saturday up to 6pm. That avoids rush hour on the A1, and you can sit for twenty minutes afterwards rather than setting off straight away.",
              })}
            </p>
            <p>
              {t({
                de: "Wenn du Haarverlängerungen, ein Weaving oder frisch gefärbtes Haar trägst, schreib uns vor der Buchung. Das Gleiche gilt bei empfindlicher, gereizter oder entzündeter Kopfhaut und bei Haarausfall, der medizinisch abgeklärt wird — dann klären wir gemeinsam, ob das Ritual sinnvoll ist, statt dich umsonst herausfahren zu lassen.",
                en: "If you wear extensions or a weave, or your hair has been freshly coloured, write to us before booking. The same applies to a sensitive, irritated or inflamed scalp and to hair loss under medical investigation — we will then work out together whether the ritual makes sense, rather than letting you travel out here for nothing.",
              })}
            </p>
            <p>
              {t({
                de: "Freie Termine und die aktuell angebotenen Varianten findest du im Online-Kalender. Die verbindlichen Preise und Behandlungszeiten stehen in der offiziellen Preisliste.",
                en: "Available appointments and the options currently offered are in the online calendar. Confirmed prices and durations are in the official price list.",
              })}
            </p>
          </div>
        </section>
      </div>

      <section className="local-facts">
        <div className="section-shell local-facts-grid">
          <div>
            <span>01</span>
            <h2>
              {t({ de: "Studio in Ahrensburg", en: "Studio in Ahrensburg" })}
            </h2>
            <p>
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[1]}
            </p>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {t({ de: "Route planen", en: "Plan your route" })}
              <ArrowUpRightIcon />
            </a>
          </div>
          <div>
            <span>02</span>
            <h2>{t({ de: "Öffnungszeiten", en: "Opening hours" })}</h2>
            <p>
              {t(CONTACT.hours.weekdays)}
              <br />
              {t(CONTACT.hours.saturday)}
            </p>
            <Link to="/kontakt">
              {t({ de: "Anfahrt & Kontakt", en: "Directions & contact" })}
              <ArrowRightIcon />
            </Link>
          </div>
          <div>
            <span>03</span>
            <h2>{t({ de: "Online buchbar", en: "Book online" })}</h2>
            <p>
              {t({
                de: "Im Kalender siehst du freie Termine und kannst deine Auszeit direkt reservieren.",
                en: "See available appointments in the calendar and reserve your time directly.",
              })}
            </p>
            <a href={CONTACT.booking}>
              {t({ de: "Termine ansehen", en: "View appointments" })}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="local-faq section-shell">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>
            {t({
              de: "Fragen aus Hamburg. Klar beantwortet.",
              en: "Questions from Hamburg. Clear answers.",
            })}
          </h2>
        </div>
        <div>
          {HAMBURG_FAQS.map((faq, index) => (
            <details key={faq.q.de}>
              <summary>
                <span>0{index + 1}</span>
                {t(faq.q)}
              </summary>
              <p>{t(faq.a)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-reading section-shell">
        <p className="eyebrow">
          {t({ de: "Weiterlesen", en: "Continue exploring" })}
        </p>
        <div>
          <Link to="/behandlungen/head-spa">
            {t({
              de: "Japanese Head Spa im Detail",
              en: "Japanese Head Spa in detail",
            })}
            <ArrowRightIcon />
          </Link>
          <Link to="/japanese-head-spa-ahrensburg">
            {t({
              de: "Head Spa in Ahrensburg",
              en: "Head Spa in Ahrensburg",
            })}
            <ArrowRightIcon />
          </Link>
          <Link to="/studio">
            {t({ de: "Das Studio ansehen", en: "See the studio" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
