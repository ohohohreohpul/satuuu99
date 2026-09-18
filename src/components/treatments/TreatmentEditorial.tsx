import type { FocusGroup, Treatment } from "../../data/content";
import { CONTACT } from "../../data/content";
import type { Localized } from "../../lib/i18n";
import { useLang } from "../../lib/i18n";

const focusCopy: Record<
  string,
  {
    definition: Localized;
    suited: Localized;
    prepare: Localized;
    steps: Localized[];
    questions: { q: Localized; a: Localized }[];
  }
> = {
  head: {
    definition: {
      de: "Im Mittelpunkt stehen Kopfhaut, Haar, Kopf und Nacken. Warmes Wasser, sorgfältige Pflege und langsame Massagegriffe verbinden sich zu einem Ablauf, bei dem du bequem liegst und nichts leisten musst. Das Ritual ist eine Wellness- und Pflegeanwendung; es ersetzt keine dermatologische oder medizinische Behandlung.",
      en: "The focus is your scalp, hair, head and neck. Warm water, attentive care and slow massage form a ritual in which you lie back and have nothing to do. This is a wellness and care treatment, not dermatological or medical care.",
    },
    suited: {
      de: "Das Ritual kann zu dir passen, wenn du dir bewusste Pflege für Kopfhaut und Haar wünschst und Berührung an Kopf und Nacken als angenehm empfindest. Viele Gäste wählen es, wenn sie schwer abschalten können oder eine Wellnessbehandlung suchen, die vollständig im Liegen stattfindet.",
      en: "This ritual may suit you if you want attentive scalp and hair care and enjoy touch around your head and neck. Many guests choose it when switching off feels difficult or when they want a treatment experienced entirely lying down.",
    },
    prepare: {
      de: "Komm mit deinem Haar so, wie es für dich unkompliziert ist. Informiere uns vorab über Extensions, empfindliche Kopfhaut, Allergien, akute Reizungen oder kürzlich erfolgte Behandlungen. Da dein Haar nass wird, plane deinen weiteren Tag entsprechend und frag uns vor dem Termin, wenn du besondere Wünsche zum Trocknen oder Styling hast.",
      en: "Come with your hair in whatever state feels easiest. Tell us about extensions, scalp sensitivity, allergies, irritation or recent procedures. Your hair gets wet, so plan the rest of your day accordingly and ask beforehand about drying or styling.",
    },
    steps: [
      {
        de: "Wir beginnen mit einem kurzen Gespräch über Kopfhaut, Haar und deine Wünsche.",
        en: "We begin with a short conversation about your scalp, hair and preferences.",
      },
      {
        de: "Du legst dich bequem zurück; wir erklären dir den Ablauf und stimmen Temperatur und Berührung ab.",
        en: "You lie back comfortably while we explain the ritual and agree temperature and touch.",
      },
      {
        de: "Warmes Wasser, Reinigung, Pflege sowie Kopf- und Nackenmassage folgen in ruhigem Tempo.",
        en: "Warm water, cleansing, care and head and neck massage follow at an unhurried pace.",
      },
      {
        de: "Am Ende bekommst du einen Moment, um wieder anzukommen, bevor du aufstehst.",
        en: "At the end, you have a moment to return before getting up.",
      },
    ],
    questions: [
      {
        q: { de: "Werden meine Haare nass?", en: "Will my hair get wet?" },
        a: {
          de: "Ja. Warmes Wasser sowie die Reinigung von Kopfhaut und Haar gehören zum Japanese Head Spa.",
          en: "Yes. Warm water and cleansing the scalp and hair are part of Japanese Head Spa.",
        },
      },
      {
        q: {
          de: "Kann ich mit Extensions buchen?",
          en: "Can I book with extensions?",
        },
        a: {
          de: "Bitte kontaktiere uns vor der Buchung mit Angaben zu deiner Haarverlängerung. Wir klären, ob und wie die Anwendung geeignet ist.",
          en: "Please contact us before booking with details of your extensions so we can determine whether and how the treatment is suitable.",
        },
      },
      {
        q: {
          de: "Ist das eine medizinische Kopfhautbehandlung?",
          en: "Is this a medical scalp treatment?",
        },
        a: {
          de: "Nein. Es ist ein Wellness- und Pflegeritual. Bei Schmerzen, Entzündungen oder ungeklärten Beschwerden wende dich bitte an eine medizinische Fachperson.",
          en: "No. It is a wellness and care ritual. For pain, inflammation or unexplained concerns, consult a medical professional.",
        },
      },
    ],
  },
  face: {
    definition: {
      de: "Diese Anwendung verbindet kosmetische Gesichtspflege mit einem ruhigen Wellnessmoment. Je nach gewähltem Ritual stehen wasserbasierte Reinigung, Feuchtigkeit, Massage oder die Arbeit mit einem glatten Gua-Sha-Stein im Mittelpunkt. Vor Beginn sprechen wir darüber, wie sich deine Haut aktuell anfühlt.",
      en: "This treatment combines cosmetic facial care with a calm wellness moment. Depending on the ritual, the focus may be water-based cleansing, hydration, massage or a smooth gua sha stone. We begin by discussing how your skin currently feels.",
    },
    suited: {
      de: "Die Anwendung passt zu Menschen, die sich Zeit für Gesicht und Dekolleté nehmen möchten. Aqua Facial richtet den Blick stärker auf Reinigung und Feuchtigkeit; Sleep & Glow auf Ruhe und Massage; Gua Sha auf langsame, konzentrierte Berührung. Unsere Beschreibungen helfen bei der Auswahl, und bei Unsicherheit beraten wir dich gern.",
      en: "The treatment suits guests who want time for face and décolletage. Aqua Facial focuses more on cleansing and hydration, Sleep & Glow on rest and massage, and gua sha on slow, focused touch. Our descriptions help you choose, and we are happy to advise.",
    },
    prepare: {
      de: "Teile uns bekannte Unverträglichkeiten, sehr empfindliche Haut und kürzlich erfolgte kosmetische oder medizinische Behandlungen mit. Du kannst ungeschminkt kommen, musst es aber nicht. Plane nach dem Termin möglichst etwas Zeit ohne starkes Make-up und frage uns, welche Pflege für die gewählte Anwendung sinnvoll ist.",
      en: "Tell us about known sensitivities, very reactive skin and recent cosmetic or medical procedures. You may arrive without makeup, but do not have to. If possible, allow time without heavy makeup afterwards and ask what care suits your treatment.",
    },
    steps: [
      {
        de: "Wir sprechen über deine Haut, deine Pflegeroutine und das gewünschte Gefühl nach dem Termin.",
        en: "We discuss your skin, care routine and how you would like to feel afterwards.",
      },
      {
        de: "Du legst dich bequem zurück; Haare und Kleidung werden für die Anwendung geschützt.",
        en: "You lie back comfortably while hair and clothing are protected.",
      },
      {
        de: "Reinigung, Pflege und die gewählten Massageelemente folgen in abgestimmtem Tempo.",
        en: "Cleansing, care and chosen massage elements follow at an agreed pace.",
      },
      {
        de: "Zum Abschluss besprechen wir, was du direkt danach beachten möchtest.",
        en: "We finish by discussing what to consider immediately afterwards.",
      },
    ],
    questions: [
      {
        q: {
          de: "Welche Gesichtsbehandlung passt zu mir?",
          en: "Which facial treatment suits me?",
        },
        a: {
          de: "Wähle Aqua Facial für den Schwerpunkt Reinigung und Feuchtigkeit, Sleep & Glow für ein ruhiges Pflegeritual oder Gua Sha für langsame Steinmassage. Schreib uns, wenn du schwankst.",
          en: "Choose Aqua Facial for cleansing and hydration, Sleep & Glow for a restful care ritual, or gua sha for slow stone massage. Contact us if you are unsure.",
        },
      },
      {
        q: {
          de: "Ist die Anwendung für empfindliche Haut geeignet?",
          en: "Is it suitable for sensitive skin?",
        },
        a: {
          de: "Das hängt von deiner aktuellen Hautsituation ab. Informiere uns vorab über Empfindlichkeiten; bei akuten oder ungeklärten Problemen hole bitte dermatologischen Rat ein.",
          en: "That depends on your current skin. Tell us about sensitivities beforehand; seek dermatological advice for acute or unexplained concerns.",
        },
      },
      {
        q: {
          de: "Kann ich danach Make-up tragen?",
          en: "Can I wear makeup afterwards?",
        },
        a: {
          de: "Wir empfehlen, das passend zur gebuchten Anwendung und deiner Haut beim Termin zu besprechen.",
          en: "We recommend discussing this during your appointment based on the treatment and your skin.",
        },
      },
    ],
  },
  feet: {
    definition: {
      de: "Unsere Fußrituale schenken einem oft übersehenen Körperbereich bewusste Aufmerksamkeit. Wellness-Fußpflege konzentriert sich auf gepflegte Füße und Nägel; die Fußmassage auf Berührung, Öl und Entspannung im Relaxsessel. Beide Anwendungen bleiben im nicht-medizinischen Wellnessbereich.",
      en: "Our foot rituals give conscious attention to an often overlooked area. Wellness foot care focuses on cared-for feet and nails; foot massage focuses on touch, oil and rest in a reclining chair. Both are non-medical wellness treatments.",
    },
    suited: {
      de: "Wähle Fußpflege, wenn Pflege und ein sauberes, angenehmes Gefühl im Vordergrund stehen. Wähle die Fußmassage, wenn du dich zurücklehnen und Füßen und Unterschenkeln eine Pause geben möchtest. Bei Schmerzen, Entzündungen, offenen Stellen oder medizinischem Fußpflegebedarf ist eine entsprechend qualifizierte Fachpraxis die richtige Adresse.",
      en: "Choose foot care when grooming and a comfortable cared-for feeling matter most. Choose foot massage when you want to lean back and give feet and lower legs a pause. For pain, inflammation, wounds or medical foot-care needs, consult an appropriately qualified practice.",
    },
    prepare: {
      de: "Trage Kleidung, in der Unterschenkel gut erreichbar sind, und teile uns empfindliche Stellen mit. Nagellack, Hautveränderungen oder kürzlich erfolgte Behandlungen solltest du vorab erwähnen. Wir erklären dir, was zur gebuchten Anwendung gehört und stimmen Berührung und Druck mit dir ab.",
      en: "Wear clothing that allows easy access to the lower legs and tell us about sensitive areas. Mention nail polish, skin changes or recent treatments. We explain what is included and agree touch and pressure with you.",
    },
    steps: [
      {
        de: "Wir klären, ob Pflege oder Massage im Mittelpunkt deines Termins steht.",
        en: "We clarify whether care or massage is the focus of your appointment.",
      },
      {
        de: "Du nimmst bequem Platz und kommst bei einem ruhigen Beginn an.",
        en: "You settle comfortably into the chair and arrive through a calm beginning.",
      },
      {
        de: "Die gebuchten Pflege- oder Massageelemente werden sorgfältig durchgeführt.",
        en: "The booked care or massage elements are carried out attentively.",
      },
      {
        de: "Eine abschließende Pflege lässt den Termin ruhig ausklingen.",
        en: "Finishing care brings the appointment to a gentle close.",
      },
    ],
    questions: [
      {
        q: {
          de: "Ist das medizinische Fußpflege?",
          en: "Is this medical foot care?",
        },
        a: {
          de: "Nein. Unser Angebot ist eine Wellness-Fußpflege. Medizinische Beschwerden gehören in eine entsprechend qualifizierte Praxis.",
          en: "No. Our service is wellness foot care. Medical concerns belong with an appropriately qualified practice.",
        },
      },
      {
        q: {
          de: "Wie kräftig ist die Fußmassage?",
          en: "How firm is the foot massage?",
        },
        a: {
          de: "Von sanft bis kräftiger: Wir fragen nach deinem Empfinden und passen den Druck an.",
          en: "From gentle to firmer pressure: we ask how it feels and adjust accordingly.",
        },
      },
      {
        q: {
          de: "Werden auch die Unterschenkel massiert?",
          en: "Are the lower legs included?",
        },
        a: {
          de: "Die konkrete Leistung hängt von der gebuchten Variante ab. Prüfe den Kalender oder frage uns vorab.",
          en: "The exact service depends on the booked option. Check the calendar or ask us beforehand.",
        },
      },
    ],
  },
  body: {
    definition: {
      de: "Unsere Körperrituale sind Wellnessmassagen mit unterschiedlichen Schwerpunkten: fließende Berührung, angenehm warmes Öl, Massagekerzenöl, Dampf oder bewegte Schröpfgläser. Vor Beginn stimmen wir Körperbereiche, Druck und Komfort ab. Es handelt sich nicht um Physiotherapie oder medizinische Massage.",
      en: "Our body rituals are wellness massages with different focuses: flowing touch, warm oil, massage candle oil, steam or moving cupping glasses. Before beginning, we agree areas, pressure and comfort. This is not physiotherapy or medical massage.",
    },
    suited: {
      de: "Die Spa-Massage ist der vielseitige Einstieg mit ruhigen, fließenden Griffen. Kerzenmassage betont Wärme und Öl; Dampfmassage verbindet Wärme mit Massage; Schröpfmassage erzeugt durch Unterdruck ein intensiver wahrgenommenes Gefühl. Entscheide nach deinem gewünschten Erlebnis, nicht nach einem versprochenen medizinischen Ergebnis.",
      en: "Spa massage is a versatile introduction with calm, flowing strokes. Candle massage focuses on warmth and oil; steam massage combines warmth with massage; cupping creates a more intense sensation through suction. Choose by the experience you want, not a promised medical outcome.",
    },
    prepare: {
      de: "Informiere uns über Schwangerschaft, akute Beschwerden, Verletzungen, Operationen, Hautveränderungen, Medikamente oder Kreislaufprobleme, bevor du buchst. Im Zweifel kläre medizinisch, ob eine Wellnessmassage geeignet ist. Vor Ort kannst du jederzeit um weniger Druck, eine andere Position, mehr Wärme oder eine Pause bitten.",
      en: "Tell us about pregnancy, acute concerns, injuries, surgery, skin changes, medication or circulatory issues before booking. If in doubt, seek medical advice on whether wellness massage is appropriate. You can ask for less pressure, another position, warmth or a pause at any time.",
    },
    steps: [
      {
        de: "Im Vorgespräch klären wir Fokus, Druck, empfindliche Bereiche und deinen Komfort.",
        en: "We discuss focus, pressure, sensitive areas and comfort.",
      },
      {
        de: "Du richtest dich in Ruhe ein; nur die behandelten Körperbereiche werden aufgedeckt.",
        en: "You settle in privately; only the areas being treated are uncovered.",
      },
      {
        de: "Die gewählte Massage folgt in einem ruhigen, mit dir abgestimmten Ablauf.",
        en: "The chosen massage follows at a calm pace agreed with you.",
      },
      {
        de: "Nach der Anwendung hast du Zeit, langsam wieder aufzustehen und nachzuspüren.",
        en: "Afterwards, you have time to get up slowly and notice how you feel.",
      },
    ],
    questions: [
      {
        q: {
          de: "Ist die Massage medizinisch?",
          en: "Is the massage medical?",
        },
        a: {
          de: "Nein. Unsere Anwendungen dienen Wellness und Entspannung und ersetzen weder Diagnose noch Therapie.",
          en: "No. Our treatments support wellness and relaxation and do not replace diagnosis or therapy.",
        },
      },
      {
        q: {
          de: "Kann ich den Druck bestimmen?",
          en: "Can I choose the pressure?",
        },
        a: {
          de: "Ja. Wir stimmen ihn vorab ab und verändern ihn jederzeit auf deinen Wunsch.",
          en: "Yes. We agree it beforehand and change it whenever you ask.",
        },
      },
      {
        q: {
          de: "Welche Massage soll ich wählen?",
          en: "Which massage should I choose?",
        },
        a: {
          de: "Wähle Spa für fließende klassische Wellnessgriffe, Kerze für warmes Öl, Dampf für zusätzliche Wärme und Schröpfen für ein intensiveres Soggefühl.",
          en: "Choose spa for flowing wellness strokes, candle for warm oil, steam for added warmth, and cupping for a more intense suction sensation.",
        },
      },
    ],
  },
};

export function TreatmentEditorial({
  group,
  treatment,
}: {
  group: FocusGroup;
  treatment: Treatment;
}) {
  const { t } = useLang();
  const copy = focusCopy[group.id];
  return (
    <>
      <section className="treatment-answer section-shell">
        <p className="eyebrow">
          {t({ de: "Kurz erklärt", en: "The short answer" })}
        </p>
        <div>
          <h2>
            {t(treatment.name)}{" "}
            {t({
              de: "bei satuuu99 in Ahrensburg",
              en: "at satuuu99 in Ahrensburg",
            })}
          </h2>
          <p>{t(treatment.description)}</p>
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
                de: "So kann dein Ritual ablaufen.",
                en: "How your ritual may unfold.",
              })}
            </h2>
          </div>
          <ol>
            {copy.steps.map((step, index) => (
              <li key={step.de}>
                <span>0{index + 1}</span>
                <p>{t(step)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="treatment-reading section-shell">
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
        <article>
          <p className="eyebrow">
            {t({ de: "Vor deinem Besuch", en: "Before your visit" })}
          </p>
          <h2>
            {t({
              de: "Ein wenig Vorbereitung schafft mehr Ruhe.",
              en: "A little preparation creates more ease.",
            })}
          </h2>
          <p>{t(copy.prepare)}</p>
        </article>
      </section>
      <section className="treatment-boundary section-shell">
        <div>
          <p className="eyebrow">
            {t({ de: "Gut zu wissen", en: "Good to know" })}
          </p>
          <h2>
            {t({
              de: "Dein Komfort gibt den Ton an.",
              en: "Your comfort sets the tone.",
            })}
          </h2>
        </div>
        <div>
          <p>
            {t({
              de: "Sprich während der Anwendung jederzeit mit uns. Weniger Druck, eine andere Temperatur, eine Pause oder mehr Ruhe sind keine Umstände, sondern Teil einer persönlichen Behandlung.",
              en: "Talk to us at any time. Less pressure, a different temperature, a pause or more quiet are not an inconvenience; they are part of personal care.",
            })}
          </p>
          <p>
            {t({
              de: "Unsere Rituale dienen Pflege, Entspannung und Wohlbefinden. Bei akuten Schmerzen, Entzündungen, Verletzungen oder ungeklärten Beschwerden ist medizinischer Rat die richtige erste Anlaufstelle.",
              en: "Our rituals support care, relaxation and wellbeing. For acute pain, inflammation, injury or unexplained symptoms, medical advice is the right first step.",
            })}
          </p>
        </div>
      </section>
      <section className="treatment-more section-shell">
        <article>
          <span>01</span>
          <h2>{t({ de: "Nach deinem Ritual", en: "After your ritual" })}</h2>
          <p>
            {t({
              de: "Du musst nach der Anwendung nicht sofort aufspringen. Nimm dir einen Moment, setz dich langsam auf und spüre nach, wie du dich fühlst. Ein Glas Wasser und etwas freie Zeit im Anschluss helfen dabei, den Übergang zurück in den Alltag ruhig zu gestalten. Wenn für dein gewähltes Ritual besondere Hinweise gelten, erklären wir sie dir persönlich.",
              en: "There is no need to jump up immediately afterwards. Take a moment, sit up slowly and notice how you feel. A glass of water and some free time afterwards can make the return to everyday life gentler. We explain any advice specific to your chosen ritual in person.",
            })}
          </p>
          <p>
            {t({
              de: "Plane nach Möglichkeit keinen eng getakteten Folgetermin. Besonders nach einem stillen Wellnessmoment fühlt es sich oft angenehmer an, nicht direkt weiterhetzen zu müssen. Höre auf dein eigenes Empfinden; es gibt keine vorgeschriebene Art, wie Entspannung aussehen muss.",
              en: "If possible, avoid a tightly scheduled commitment immediately afterwards. After a quiet wellness moment, it often feels better not to rush straight on. Listen to your own experience; there is no prescribed way relaxation has to feel.",
            })}
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>
            {t({
              de: "Persönlich statt anonym",
              en: "Personal, never anonymous",
            })}
          </h2>
          <p>
            {t({
              de: "satuuu99 ist ein persönliches Wellnessstudio in der Manhagener Allee in Ahrensburg. Du kommst nicht in einen großen Hotel-Spa-Betrieb, sondern an einen Ort, an dem Gespräch, Komfort und deine Wünsche Teil des Termins sind. Unser Team bringt unterschiedliche Ausbildungen und langjährige Erfahrung in Wellness-, Spa- und Massageanwendungen zusammen.",
              en: "satuuu99 is a personal wellness studio on Manhagener Allee in Ahrensburg. Rather than a large hotel spa, you visit a place where conversation, comfort and your preferences are part of the appointment. Our team combines different training backgrounds and long experience in wellness, spa and massage.",
            })}
          </p>
          <p>
            {t({
              de: "Wir erklären nur das, was für deine Anwendung relevant ist, und lassen dir gleichzeitig Raum für Ruhe. Manche Gäste möchten während ihres Rituals sprechen, andere lieber die Augen schließen. Beides ist willkommen. Persönliche Aufmerksamkeit bedeutet für uns auch, diese Unterschiede wahrzunehmen.",
              en: "We explain what matters for your treatment while leaving room for quiet. Some guests like to talk during their ritual; others prefer to close their eyes. Both are welcome. Personal attention also means noticing these differences.",
            })}
          </p>
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
              de: `Du findest uns in der ${CONTACT.addressLines[0]}, ${CONTACT.addressLines[1]}. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang. Geöffnet ist montags bis freitags von 10 bis 20 Uhr und samstags von 10 bis 18 Uhr; für deinen Besuch gilt der konkret gebuchte Termin.`,
              en: `Find us at ${CONTACT.addressLines.join(", ")}. According to current studio information, parking is directly outside. We open Monday to Friday from 10am to 8pm and Saturday from 10am to 6pm; your booked appointment determines your visit time.`,
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
                <span>0{index + 1}</span>
                {t(item.q)}
              </summary>
              <p>{t(item.a)}</p>
            </details>
          ))}
          <details>
            <summary>
              <span>0{copy.questions.length + 1}</span>
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
