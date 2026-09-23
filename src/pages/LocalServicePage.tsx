import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { StructuredData } from "../components/seo/StructuredData";
import { Photo } from "../components/media/Photo";
import { CONTACT } from "../data/content";
import type { PhotoId } from "../data/media/photos";
import { photoUrl } from "../data/media";
import type { Localized } from "../lib/i18n";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";
import { FinalCTA } from "../sections/FinalCTA";

type Page = {
  slug: string;
  title: Localized;
  meta: Localized;
  eyebrow: Localized;
  intro: Localized;
  answer: Localized;
  /** Lead photograph beside the heading. */
  hero: PhotoId;
  /** Two or three supporting photographs with their own captions. */
  gallery: { photo: PhotoId; caption: Localized }[];
  sections: { title: Localized; body: Localized[] }[];
  faqs: { q: Localized; a: Localized }[];
  related: { label: Localized; href: string }[];
};

export const LOCAL_PAGES: Page[] = [
  {
    slug: "japanese-head-spa-ahrensburg",
    hero: "head-spa-candlelight",
    gallery: [
      {
        photo: "head-spa-water-rinse",
        caption: {
          de: "Warmes Wasser läuft durch Haar und Kopfhaut",
          en: "Warm water runs through hair and scalp",
        },
      },
      {
        photo: "head-spa-cradled-head",
        caption: {
          de: "Der Kopf bleibt durchgehend gestützt",
          en: "The head stays supported throughout",
        },
      },
      {
        photo: "head-spa-scalp-touch",
        caption: {
          de: "Zum Abschluss Nacken und Schultern",
          en: "Neck and shoulders to finish",
        },
      },
    ],
    title: {
      de: "Japanese Head Spa in Ahrensburg | satuuu99",
      en: "Japanese Head Spa in Ahrensburg | satuuu99",
    },
    meta: {
      de: "Japanese Head Spa in Ahrensburg: Kopfhaut- und Haarpflege, warmes Wasser sowie Kopf- und Nackenmassage in persönlicher Studioatmosphäre.",
      en: "Japanese Head Spa in Ahrensburg: scalp and hair care, warm water and a head and neck massage in a personal studio setting.",
    },
    eyebrow: {
      de: "Japanese Head Spa · Ahrensburg",
      en: "Japanese Head Spa · Ahrensburg",
    },
    intro: {
      de: "Ein ruhiges Pflegeritual für Kopfhaut und Haar – mit warmem Wasser, behutsamer Berührung und Zeit zum Abschalten.",
      en: "A calm care ritual for scalp and hair, with warm water, gentle touch and time to switch off.",
    },
    answer: {
      de: "Ein Japanese Head Spa verbindet die Reinigung und Pflege von Kopfhaut und Haar mit einer entspannenden Massage von Kopf und Nacken. Bei satuuu99 findet die Anwendung in unserem persönlichen Wellnessstudio in der Manhagener Allee in Ahrensburg statt.",
      en: "A Japanese Head Spa combines scalp and hair cleansing and care with a relaxing head and neck massage. At satuuu99, the ritual takes place in our personal wellness studio on Manhagener Allee in Ahrensburg.",
    },
    sections: [
      {
        title: {
          de: "Was passiert bei einem Head Spa?",
          en: "What happens during a Head Spa?",
        },
        body: [
          {
            de: "Bevor das Ritual beginnt, sprechen wir kurz über dein Haar, deine Kopfhaut und darüber, was sich für dich angenehm anfühlt. Danach liegst du bequem zurück. Warmes Wasser, sorgfältige Reinigung und langsame Massagegriffe bilden einen ruhigen Ablauf, bei dem du nichts tun musst.",
            en: "Before the ritual begins, we talk briefly about your hair, scalp and what feels comfortable. You then lie back while warm water, attentive cleansing and slow massage form a calm sequence that asks nothing of you.",
          },
          {
            de: "Die Behandlung konzentriert sich bewusst auf Kopf, Kopfhaut und Nacken. Sie ersetzt keine medizinische oder dermatologische Behandlung, bietet aber einen gepflegten, wohltuenden Moment fern vom Alltag.",
            en: "The treatment deliberately focuses on the head, scalp and neck. It does not replace medical or dermatological care, but offers an attentive, soothing moment away from everyday life.",
          },
        ],
      },
      {
        title: {
          de: "Für wen passt das Ritual?",
          en: "Who is the ritual for?",
        },
        body: [
          {
            de: "Das Head Spa passt zu dir, wenn du dir Pflege für Kopfhaut und Haar wünschst und gleichzeitig gern bei einer Kopf- und Nackenmassage abschaltest. Viele Gäste wählen es auch als erste Wellnessbehandlung, weil der Ablauf ruhig, klar und vollständig im Liegen stattfindet.",
            en: "Head Spa may suit you if you want care for your scalp and hair while relaxing with a head and neck massage. Many guests also choose it as a first wellness ritual because the experience is calm, clear and takes place lying down.",
          },
          {
            de: "Wenn du empfindliche Haut, akute Beschwerden, Verletzungen oder kürzlich durchgeführte Behandlungen am Kopf hast, sprich bitte vor der Buchung mit uns und hole bei Bedarf medizinischen Rat ein.",
            en: "If you have sensitive skin, acute concerns, injuries or recent procedures around the head, please speak with us before booking and seek medical advice where appropriate.",
          },
        ],
      },
      {
        title: {
          de: "Head Spa in der Nähe von Hamburg",
          en: "Head Spa near Hamburg",
        },
        body: [
          {
            de: "Unser Studio liegt zentral in Ahrensburg, nordöstlich von Hamburg. Damit ist satuuu99 eine ruhige Alternative für Gäste aus Ahrensburg, den Hamburger Walddörfern, Bargteheide und dem Kreis Stormarn, die nicht für jede Auszeit in die Hamburger Innenstadt fahren möchten.",
            en: "Our studio is centrally located in Ahrensburg, northeast of Hamburg. It offers a calm option for guests from Ahrensburg, Hamburg's Walddörfer, Bargteheide and the Stormarn district.",
          },
          {
            de: "Parkplätze befinden sich laut aktueller Studioinformation direkt vor dem Eingang. Freie Termine und die derzeit angebotenen Varianten findest du im Online-Kalender; Preise und Dauer stehen in der offiziellen Preisliste.",
            en: "According to current studio information, parking is available directly outside. Current availability is shown in the online calendar, while prices and durations are listed in the official price list.",
          },
        ],
      },
      {
        title: {
          de: "Anfahrt aus Hamburg, Stormarn und den Walddörfern",
          en: "Getting here from Hamburg, Stormarn and the Walddörfer",
        },
        body: [
          {
            de: "Aus der Hamburger Innenstadt sind es rund 25 Kilometer nach Ahrensburg. Mit dem Auto führt der Weg über die A1 bis zur Anschlussstelle Ahrensburg, von dort sind es wenige Minuten in die Manhagener Allee — je nach Verkehr insgesamt etwa 25 bis 35 Minuten. Parkplätze befinden sich nach aktueller Studioinformation direkt vor dem Eingang, sodass die Suche entfällt.",
            en: "Ahrensburg is roughly 25 kilometres from central Hamburg. By car the route runs along the A1 to the Ahrensburg junction, and from there it is a few minutes to Manhagener Allee — around 25 to 35 minutes in total depending on traffic. According to current studio information, parking is directly outside the entrance, so there is no hunting for a space.",
          },
          {
            de: "Mit dem HVV erreichst du Ahrensburg über die U1 und die Regionalbahn; von der U-Bahn-Station und vom Bahnhof ist die Manhagener Allee in wenigen Minuten zu Fuß erreichbar. Aus Großhansdorf, Ammersbek, Bargteheide und den Hamburger Walddörfern bist du in gut zehn bis zwanzig Minuten da. Weil sich Fahrpläne ändern, prüfe die konkrete Verbindung bitte am Reisetag.",
            en: "By HVV you can reach Ahrensburg on the U1 underground and by regional rail; Manhagener Allee is a few minutes on foot from the underground stop and the station. From Großhansdorf, Ammersbek, Bargteheide and Hamburg's Walddörfer it is a little over ten to twenty minutes. Because timetables change, please check your connection on the day you travel.",
          },
          {
            de: "Plane den Termin so, dass du nicht direkt danach weiterhetzen musst. Weil beim Head Spa dein Haar nass wird, ist ein Termin ohne unmittelbar folgende Verpflichtung angenehmer — und der Rückweg nach Hamburg fühlt sich ruhiger an, wenn er nicht in die Rushhour fällt.",
            en: "Plan the appointment so that you do not have to rush straight on. Because your hair gets wet during a head spa, an appointment with nothing immediately afterwards is more comfortable — and the journey back to Hamburg feels calmer outside rush hour.",
          },
        ],
      },
      {
        title: {
          de: "Was ein Head Spa nicht ist",
          en: "What a head spa is not",
        },
        body: [
          {
            de: "Ein Japanese Head Spa ist keine dermatologische Kopfhautbehandlung und keine Therapie gegen Haarausfall. Wir stellen keine Diagnosen und versprechen keine Veränderung deiner Haarstruktur oder Haardichte. Bei Rötung, Entzündung, Juckreiz ohne bekannte Ursache, offenen Stellen oder Haarausfall, der abgeklärt wird, ist eine dermatologische oder ärztliche Praxis die richtige erste Adresse.",
            en: "A Japanese Head Spa is not a dermatological scalp treatment and not a therapy for hair loss. We do not diagnose and we promise no change to your hair structure or density. With redness, inflammation, unexplained itching, open areas or hair loss under investigation, a dermatology or medical practice is the right first step.",
          },
          {
            de: "Es ist außerdem kein Friseurtermin. Ein Schnitt, eine Färbung oder ein aufwendiges Styling gehören nicht zum Ritual — am Ende wird das Haar ausgespült und sanft getrocknet. Wenn du Extensions, ein Weaving oder frisch gefärbtes Haar trägst, sprich uns vor der Buchung an, damit wir die Eignung gemeinsam klären.",
            en: "Nor is it a hairdressing appointment. A cut, colour or elaborate styling is not part of the ritual — at the end the hair is rinsed and gently dried. If you wear extensions or a weave, or your hair has been freshly coloured, talk to us before booking so we can establish suitability together.",
          },
        ],
      },
      {
        title: {
          de: "Wann und wie oft buchen?",
          en: "When and how often to book",
        },
        body: [
          {
            de: "Es gibt keine empfohlene Frequenz, und wir verkaufen keine Kuren. Manche Gäste kommen einmal im Jahr, wenn ihnen danach ist. Andere buchen alle vier bis acht Wochen, weil ihnen die Stunde im Kalender hilft, sie überhaupt einzuplanen. Beides ist richtig. Was wir dir ehrlich sagen können: Ein Head Spa verändert deine Haarstruktur nicht dauerhaft, und häufiger ist nicht automatisch besser.",
            en: "There is no recommended frequency, and we do not sell courses of treatment. Some guests come once a year when they feel like it. Others book every four to eight weeks because having the hour in the calendar is what makes them take it at all. Both are fine. What we can tell you honestly: a head spa does not permanently change your hair structure, and more often is not automatically better.",
          },
          {
            de: "Für die Uhrzeit gilt eine praktische Regel: Lege den Termin dorthin, wo danach nichts Wichtiges kommt. Abendtermine bis 20 Uhr und Samstage bis 18 Uhr sind bei uns am beliebtesten, genau deshalb. Wenn du aus Hamburg kommst, ist ein Termin außerhalb der Rushhour zusätzlich angenehmer — du fährst dann nicht mit feuchtem Haar durch eine Stunde Stau zurück.",
            en: "For timing there is one practical rule: put the appointment where nothing important follows it. Evening slots up to 8pm and Saturdays up to 6pm are the most popular with us, for exactly that reason. If you are coming from Hamburg, a slot outside rush hour is more comfortable still — you then do not drive back through an hour of traffic with damp hair.",
          },
          {
            de: "Beliebte Zeiten sind früher ausgebucht als der Rest der Woche. Wenn du einen bestimmten Abend brauchst, schau ein bis zwei Wochen im Voraus in den Kalender. Wenn du flexibel bist, findet sich fast immer kurzfristig etwas — frag uns einfach an, auch wenn der Kalender gerade wenig zeigt.",
            en: "Popular slots fill earlier than the rest of the week. If you need a particular evening, look in the calendar one or two weeks ahead. If you are flexible, something almost always turns up at short notice — just ask, even when the calendar looks thin.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          de: "Werden die Haare beim Head Spa nass?",
          en: "Does your hair get wet during a Head Spa?",
        },
        a: {
          de: "Ja. Warmes Wasser und die Reinigung von Kopfhaut und Haar gehören zum Ritual. Plane deinen weiteren Tag entsprechend und frag uns vorab, wenn du besondere Anforderungen an deine Haare hast.",
          en: "Yes. Warm water and cleansing the scalp and hair are part of the ritual. Plan the rest of your day accordingly and ask us beforehand if your hair has particular requirements.",
        },
      },
      {
        q: {
          de: "Ist Head Spa eine medizinische Kopfhautbehandlung?",
          en: "Is Head Spa a medical scalp treatment?",
        },
        a: {
          de: "Nein. Unser Head Spa ist eine Wellness- und Pflegeanwendung. Bei Schmerzen, Entzündungen, starkem Haarausfall oder anderen Beschwerden wende dich bitte an eine medizinische Fachperson.",
          en: "No. Our Head Spa is a wellness and care treatment. For pain, inflammation, significant hair loss or other concerns, please consult a medical professional.",
        },
      },
      {
        q: {
          de: "Wo kann ich Head Spa in Ahrensburg buchen?",
          en: "Where can I book Head Spa in Ahrensburg?",
        },
        a: {
          de: "Freie Termine bei satuuu99 findest du im Online-Kalender. Das Studio liegt in der Manhagener Allee 45, 22926 Ahrensburg.",
          en: "Available appointments at satuuu99 are shown in the online calendar. The studio is at Manhagener Allee 45, 22926 Ahrensburg.",
        },
      },
      {
        q: {
          de: "Kann ich Head Spa verschenken?",
          en: "Can I give a Head Spa as a gift?",
        },
        a: {
          de: "Der Verkauf neuer Gutscheine ist derzeit pausiert. Bereits vorhandene satuuu99 Gutscheine können nach Absprache eingelöst werden.",
          en: "New gift card sales are currently paused. Existing satuuu99 gift cards can be redeemed by arrangement.",
        },
      },
    ],
    related: [
      {
        label: { de: "Head Spa Behandlung", en: "Head Spa treatment" },
        href: "/behandlungen/head-spa",
      },
      {
        label: { de: "Alle Behandlungen", en: "All treatments" },
        href: "/behandlungen",
      },
    ],
  },
  {
    slug: "wellnessmassage-ahrensburg",
    hero: "body-massage-shoulders",
    gallery: [
      {
        photo: "studio-candlelight-mood",
        caption: {
          de: "Ruhiges Licht gehört zu jedem Termin",
          en: "Calm light is part of every appointment",
        },
      },
      {
        photo: "body-cupping-glasses",
        caption: {
          de: "Schröpfmassage — bewegte Gläser auf geölter Haut",
          en: "Cupping massage — moving glasses on oiled skin",
        },
      },
      {
        photo: "foot-massage-candlelight",
        caption: {
          de: "Fußmassage im Relaxsessel",
          en: "Foot massage in the reclining chair",
        },
      },
    ],
    title: {
      de: "Wellnessmassage in Ahrensburg bei Hamburg | satuuu99",
      en: "Wellness massage in Ahrensburg near Hamburg | satuuu99",
    },
    meta: {
      de: "Wellnessmassage in Ahrensburg: Anti-Stress Gua Sha Massage, Bellabambi, persönliche Abstimmung und ein erfahrenes Team bei satuuu99 nahe Hamburg.",
      en: "Wellness massage in Ahrensburg: anti-stress gua sha massage, Bellabambi, personal consultation and an experienced team at satuuu99 near Hamburg.",
    },
    eyebrow: {
      de: "Wellnessmassage · Ahrensburg",
      en: "Wellness massage · Ahrensburg",
    },
    intro: {
      de: "Eine persönliche Auszeit für den Körper – ruhig, aufmerksam und passend zu deinem Empfinden.",
      en: "Personal time for your body, calm, attentive and tailored to how you feel.",
    },
    answer: {
      de: "satuuu99 bietet Wellnessmassagen im Zentrum von Ahrensburg an. Vor der Anwendung besprechen wir Druck, Schwerpunkt und dein persönliches Wohlbefinden. Die Massagen dienen der Entspannung und ersetzen keine medizinische Behandlung oder Physiotherapie.",
      en: "satuuu99 offers wellness massage in central Ahrensburg. Before the treatment, we discuss pressure, focus and your comfort. These massages are for relaxation and do not replace medical treatment or physiotherapy.",
    },
    sections: [
      {
        title: {
          de: "Welche Massage passt zu mir?",
          en: "Which massage suits me?",
        },
        body: [
          {
            de: "Manchmal möchtest du vor allem Rücken und Schultern loslassen, manchmal den ganzen Körper zur Ruhe kommen lassen. In unserem Angebot findest du die Anti-Stress Gua Sha Massage, Bellabambi sowie Anwendungen mit Wärme, Dampf oder Cupping-Elementen. Die aktuell buchbaren Varianten siehst du im Kalender und in der Preisliste.",
            en: "Sometimes you want to release your back and shoulders; sometimes you want your whole body to settle. Our menu includes the anti-stress gua sha massage, Bellabambi and rituals using warmth, steam or cupping elements. Current options appear in the booking calendar and price list.",
          },
          {
            de: "Du musst die perfekte Wahl nicht allein treffen. Schreib uns, wenn du unsicher bist. Wir erklären dir die Unterschiede und helfen dir, eine Wellnessanwendung auszuwählen, die zu deinem gewünschten Schwerpunkt passt.",
            en: "You do not have to make the perfect choice alone. If you are unsure, write to us. We explain the differences and help you choose a wellness treatment that matches your preferred focus.",
          },
        ],
      },
      {
        title: {
          de: "Erfahrung, die sich persönlich anfühlt",
          en: "Experience that still feels personal",
        },
        body: [
          {
            de: "Hinter satuuu99 steht ein Team mit Ausbildungen und langjähriger Erfahrung in Wellness-, Spa- und traditioneller Thai-Massage sowie Gua Sha. Inhaberin Nina bringt laut offizieller Studiovorstellung mehr als 20 Jahre Erfahrung mit; weitere Teammitglieder ergänzen das Angebot mit unterschiedlichen Schwerpunkten.",
            en: "The satuuu99 team brings training and long experience in wellness, spa and traditional Thai massage as well as gua sha. According to the official studio profile, owner Nina has more than 20 years of experience, supported by team members with complementary specialisms.",
          },
          {
            de: "Für deinen Termin zählt nicht nur die Technik. Wir fragen nach, hören zu und passen den Druck an. Sag jederzeit Bescheid, wenn du wärmer liegen, leiser sein oder eine Berührung verändern möchtest.",
            en: "Technique is only part of your appointment. We ask, listen and adjust the pressure. You can speak up at any time if you want more warmth, quiet or a change in touch.",
          },
        ],
      },
      {
        title: {
          de: "Wellness in Ahrensburg und Stormarn",
          en: "Wellness in Ahrensburg and Stormarn",
        },
        body: [
          {
            de: "Das Studio liegt in der Manhagener Allee 45 in Ahrensburg. Gäste erreichen uns aus dem Stadtgebiet, aus Stormarn und aus dem Nordosten Hamburgs. Parkmöglichkeiten befinden sich direkt vor dem Eingang. Geöffnet ist montags bis freitags von 10 bis 20 Uhr und samstags von 10 bis 18 Uhr.",
            en: "The studio is at Manhagener Allee 45 in Ahrensburg, welcoming guests from the town, Stormarn and northeast Hamburg. Parking is available directly outside. Opening hours are Monday to Friday, 10am to 8pm, and Saturday, 10am to 6pm.",
          },
          {
            de: "Du kannst deinen Termin online auswählen. Kartenzahlung, PayPal und Barzahlung werden laut aktueller Studioinformation akzeptiert.",
            en: "You can select your appointment online. According to current studio information, card payment, PayPal and cash are accepted.",
          },
        ],
      },
      {
        title: {
          de: "Wellnessmassage oder medizinische Massage?",
          en: "Wellness massage or medical massage?",
        },
        body: [
          {
            de: "Das ist die Frage, die uns am häufigsten erreicht. Eine medizinische Massage wird ärztlich verordnet, behandelt eine Diagnose und findet in einer Physiotherapiepraxis statt; sie wird unter bestimmten Voraussetzungen von der Krankenkasse getragen. Unsere Wellnessmassagen in Ahrensburg dienen Entspannung und Wohlbefinden. Sie werden nicht verordnet, nicht abgerechnet und behandeln keine Beschwerden.",
            en: "This is the question we are asked most. A medical massage is prescribed by a doctor, treats a diagnosis and takes place in a physiotherapy practice; under certain conditions it is covered by health insurance. Our wellness massages in Ahrensburg support relaxation and wellbeing. They are not prescribed, not billed to insurance and do not treat complaints.",
          },
          {
            de: "Praktisch heißt das: Wenn du seit Wochen Schmerzen hast, nach einem Unfall Beschwerden spürst oder eine Diagnose abklären möchtest, gehört der erste Termin in eine ärztliche oder physiotherapeutische Praxis. Wenn du angespannt bist, schlecht schläfst, viel am Schreibtisch sitzt oder einfach eine Stunde für dich möchtest, bist du bei uns richtig.",
            en: "In practice: if you have had pain for weeks, have symptoms after an accident or want a diagnosis assessed, the first appointment belongs with a medical or physiotherapy practice. If you are tense, sleeping poorly, spending long hours at a desk, or simply want an hour to yourself, we are the right place.",
          },
          {
            de: "Vor jeder Massage fragen wir nach Vorerkrankungen, Medikamenten, Schwangerschaft, Operationen und empfindlichen Stellen. Das ist keine Formalität: Es entscheidet darüber, ob und wie wir arbeiten. Im Zweifel sagen wir lieber ab oder verschieben, als eine Anwendung durchzuführen, die nicht zu deiner Situation passt.",
            en: "Before every massage we ask about medical history, medication, pregnancy, surgery and sensitive areas. That is not a formality: it determines whether and how we work. If in doubt we would rather cancel or postpone than carry out a treatment that does not fit your situation.",
          },
        ],
      },
      {
        title: {
          de: "Fünf Massagen — und wie du wählst",
          en: "Five massages — and how to choose",
        },
        body: [
          {
            de: "Die Anti-Stress Gua Sha Massage konzentriert sich auf Kopf, Nacken, Schultern und Rücken: sanfter Druck, rhythmische Thai-Massagebewegungen, achtsame Dehnungen und Gua Sha mit einem glatten Stein — buchbar ab 30 Minuten. Bellabambi ist die intensivere Wahl, wenn sich Rücken, Faszien oder Beine fest und verspannt anfühlen; mit einem Handstück wird gezielt an einzelnen Körperbereichen gearbeitet.",
            en: "The anti-stress gua sha massage concentrates on head, neck, shoulders and back: gentle pressure, rhythmic Thai massage movements, mindful stretches and gua sha with a smooth stone — bookable from 30 minutes. Bellabambi is the more intense choice when back, fascia or legs feel stiff and tense; a handpiece is used to work on individual areas of the body.",
          },
          {
            de: "Die Kerzenmassage stellt Wärme in den Mittelpunkt — Öl aus einer Massagekerze, gleichmäßig eingearbeitet, ohne kräftige Griffe. Die Dampfmassage arbeitet mit feuchter Wärme und ist besonders in der kalten Jahreshälfte beliebt; frag uns vorher nach der Verfügbarkeit. Die Schröpfmassage erzeugt durch bewegte Schröpfgläser ein ziehendes Gefühl, das viele Gäste als deutlich intensiver beschreiben als eine klassische Massage.",
            en: "Candle massage puts warmth at the centre — oil from a massage candle, worked in evenly and without firm strokes. Steam massage uses moist heat and is especially popular in the colder half of the year; ask us about availability first. Cupping massage creates a drawing sensation with moving cupping glasses, which many guests describe as considerably more intense than a classic massage.",
          },
          {
            de: "Wenn du zwischen zwei Varianten schwankst, beschreib uns einfach, wie es dir geht — wir empfehlen dir etwas. Eine Tabelle mit Fokus, Berührung, Wärme, Kleidung und Position für alle elf Anwendungen findest du auf unserer Behandlungsseite.",
            en: "If you are torn between two options, simply describe how you feel and we will suggest something. A table showing focus, touch, warmth, clothing and position for all eleven treatments is on our treatments page.",
          },
        ],
      },
      {
        title: {
          de: "Deine erste Wellnessmassage: was praktisch passiert",
          en: "Your first wellness massage: what actually happens",
        },
        body: [
          {
            de: "Du klingelst, wir öffnen — es gibt keine Empfangstheke und keinen Wartebereich mit anderen Gästen. Nach dem Vorgespräch über Fokus, Druck, empfindliche Stellen und Vorerkrankungen gehst du in den Behandlungsraum und ziehst dich in Ruhe und unbeobachtet um. Unterwäsche kannst du anbehalten. Du legst dich unter das Leinen, und wir klopfen, bevor wir hereinkommen.",
            en: "You ring, we let you in — there is no reception desk and no waiting area with other guests. After the consultation about focus, pressure, sensitive areas and medical history, you go into the treatment room and change privately and unobserved. You may keep your underwear on. You lie down under the linen, and we knock before coming in.",
          },
          {
            de: "Während der Massage ist nur der Bereich frei, an dem gerade gearbeitet wird; alles andere bleibt abgedeckt. Die ersten Minuten dienen dem Ankommen mit warmem Öl und langen Streichungen, danach vertieft sich die Arbeit dort, wo du es benannt hast. Wir fragen zwischendurch nach dem Druck. „Etwas weniger“ ist der hilfreichste Satz, den du sagen kannst — niemand nimmt ihn persönlich.",
            en: "During the massage only the area being worked is uncovered; everything else stays draped. The first few minutes are for arriving, with warm oil and long strokes, after which the work deepens where you asked for it. We check on the pressure as we go. 'A little less' is the most useful sentence you can say — nobody takes it personally.",
          },
          {
            de: "Am Ende bekommst du Zeit, liegen zu bleiben und langsam aufzustehen. Es folgt kein Verkaufsgespräch, kein Paketangebot und keine Empfehlung, die eigentlich ein Angebot ist. Ein Trinkgeld ist nicht erwartet und nicht eingerechnet. Bezahlt wird nach der Behandlung, nach aktueller Studioinformation mit Karte, PayPal oder bar.",
            en: "At the end you are given time to stay lying down and get up slowly. No sales conversation follows, no package offer and no recommendation that is really an offer. A tip is neither expected nor included. Payment is taken after the treatment; according to current studio information by card, PayPal or cash.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          de: "Ist eine Wellnessmassage medizinisch?",
          en: "Is a wellness massage medical?",
        },
        a: {
          de: "Nein. Sie dient dem Wohlbefinden und der Entspannung. Bei Schmerzen, akuten Beschwerden oder nach Operationen kläre bitte medizinisch ab, welche Behandlung geeignet ist.",
          en: "No. It supports wellbeing and relaxation. For pain, acute concerns or after surgery, please ask a medical professional which treatment is suitable.",
        },
      },
      {
        q: {
          de: "Kann ich den Druck bestimmen?",
          en: "Can I choose the pressure?",
        },
        a: {
          de: "Ja. Wir stimmen den Druck vorab ab und passen ihn während der Anwendung an dein Empfinden an.",
          en: "Yes. We agree the pressure beforehand and adapt it during the treatment to your comfort.",
        },
      },
      {
        q: {
          de: "Wie buche ich eine Massage in Ahrensburg?",
          en: "How do I book a massage in Ahrensburg?",
        },
        a: {
          de: "Im Online-Kalender findest du freie Zeiten und die aktuell buchbaren Anwendungen. Bei Fragen erreichst du uns per E-Mail oder telefonisch.",
          en: "The online calendar shows available times and treatments. For questions, contact us by email or phone.",
        },
      },
      {
        q: { de: "Gibt es Parkplätze?", en: "Is parking available?" },
        a: {
          de: "Ja, nach aktueller Studioinformation befinden sich Parkplätze direkt vor dem Eingang.",
          en: "Yes. According to current studio information, parking is available directly outside the entrance.",
        },
      },
    ],
    related: [
      {
        label: { de: "Körperbehandlungen", en: "Body treatments" },
        href: "/behandlungen?focus=body",
      },
      {
        label: { de: "Preise & Dauer", en: "Prices & duration" },
        href: "/preise",
      },
    ],
  },
  {
    slug: "gesichtsbehandlung-ahrensburg",
    hero: "facial-massage-warm-light",
    gallery: [
      {
        photo: "aqua-facial-mist",
        caption: {
          de: "Aqua Facial — wasserbasierte Reinigung",
          en: "Aqua Facial — water-based cleansing",
        },
      },
      {
        photo: "facial-gua-sha-pressure",
        caption: {
          de: "Gua Sha — langsame Züge mit glattem Stein",
          en: "Gua sha — slow strokes with a smooth stone",
        },
      },
      {
        photo: "skin-texture-freckles",
        caption: {
          de: "Natürliche Hauttextur, nicht weggeglättet",
          en: "Natural skin texture, not smoothed away",
        },
      },
    ],
    title: {
      de: "Gesichtsbehandlung in Ahrensburg | satuuu99",
      en: "Facial treatments in Ahrensburg | satuuu99",
    },
    meta: {
      de: "Gesichtspflege in Ahrensburg: Aqua Facial, Sleep & Glow und Gua Sha bei satuuu99. Persönlich abgestimmte Pflege nahe Hamburg.",
      en: "Facial care in Ahrensburg: Aqua Facial, Sleep & Glow and Gua Sha at satuuu99. Personally tailored care near Hamburg.",
    },
    eyebrow: {
      de: "Gesichtspflege · Ahrensburg",
      en: "Facial care · Ahrensburg",
    },
    intro: {
      de: "Sanfte Reinigung, Feuchtigkeit und Massage – Gesichtspflege mit Zeit für dich.",
      en: "Gentle cleansing, hydration and massage – facial care with time for you.",
    },
    answer: {
      de: "Bei satuuu99 in Ahrensburg kannst du zwischen Aqua Facial, Sleep & Glow und Gua Sha wählen. Jede Anwendung setzt einen anderen Schwerpunkt: wasserbasierte Reinigung und Feuchtigkeit, ein ruhiges Pflegeritual mit Massage oder langsame Massage mit einem Gua-Sha-Stein.",
      en: "At satuuu99 in Ahrensburg, you can choose Aqua Facial, Sleep & Glow or Gua Sha. Each has a different focus: water-based cleansing and hydration, a restful care ritual with massage, or slow massage using a gua sha stone.",
    },
    sections: [
      {
        title: {
          de: "Drei Wege zu deinem Pflegeritual",
          en: "Three paths to your care ritual",
        },
        body: [
          {
            de: "Aqua Facial richtet den Blick auf sanfte, wasserbasierte Reinigung und Feuchtigkeit für Gesicht und Dekolleté. Sleep & Glow verbindet Pflege mit entspannenden Massageelementen für Gesicht und Nacken. Gua Sha arbeitet langsam und sorgfältig mit einem glatten Stein an Gesicht, Kiefer, Hals und Nacken.",
            en: "Aqua Facial focuses on gentle, water-based cleansing and hydration for face and décolletage. Sleep & Glow combines care with relaxing massage for face and neck. Gua Sha uses a smooth stone in slow, attentive movements across face, jaw and neck.",
          },
          {
            de: "Welche Anwendung besser passt, hängt davon ab, ob du dir eher Reinigung und Feuchtigkeit, eine ruhige Auszeit oder eine konzentrierte Massage wünschst. Unsere Beschreibungen helfen bei der ersten Auswahl; bei Unsicherheit beraten wir dich gern.",
            en: "The right choice depends on whether you want cleansing and hydration, a restful pause or focused massage. Our descriptions help you choose, and we are happy to advise if you are unsure.",
          },
        ],
      },
      {
        title: {
          de: "Was du vor deinem Termin wissen solltest",
          en: "What to know before your appointment",
        },
        body: [
          {
            de: "Teile uns vor Beginn mit, wie deine Haut aktuell reagiert und welche Pflege du verwendest. Erwähne bekannte Unverträglichkeiten, sehr empfindliche Haut oder kürzlich erfolgte kosmetische und medizinische Behandlungen. So können wir den Ablauf verantwortungsvoll mit dir besprechen.",
            en: "Before we begin, tell us how your skin currently behaves and what care you use. Mention known sensitivities, very reactive skin or recent cosmetic and medical procedures so we can discuss the treatment responsibly.",
          },
          {
            de: "Unsere Anwendungen sind kosmetische Wellness- und Pflegerituale. Sie stellen keine Diagnose und behandeln keine Hauterkrankungen. Bei akuten oder ungeklärten Hautproblemen ist eine dermatologische Beratung die richtige erste Anlaufstelle.",
            en: "Our treatments are cosmetic wellness and care rituals. They do not diagnose or treat skin conditions. For acute or unexplained skin concerns, dermatological advice is the right first step.",
          },
        ],
      },
      {
        title: {
          de: "Gesichtspflege nahe Hamburg",
          en: "Facial care near Hamburg",
        },
        body: [
          {
            de: "satuuu99 liegt zentral in Ahrensburg und ist aus Stormarn sowie dem Nordosten Hamburgs erreichbar. Statt eines großen Day Spas erwartet dich ein persönlicher Ort, an dem wir deine Anwendung vor Beginn mit dir abstimmen.",
            en: "satuuu99 is centrally located in Ahrensburg and accessible from Stormarn and northeast Hamburg. Rather than a large day spa, you will find a personal place where we agree your treatment with you before it begins.",
          },
          {
            de: "Aktuelle Preise und Dauer findest du in der offiziellen Preisliste. Im Online-Kalender kannst du verfügbare Termine ansehen und direkt reservieren.",
            en: "Current prices and durations are listed in the official price list. The online calendar shows available appointments for direct booking.",
          },
        ],
      },
      {
        title: {
          de: "Aqua Facial, Sleep & Glow oder Gua Sha?",
          en: "Aqua Facial, Sleep & Glow or gua sha?",
        },
        body: [
          {
            de: "Die drei Gesichtsbehandlungen unterscheiden sich weniger im versprochenen Ergebnis als im Erlebnis. Das Aqua Facial ist die einzige der drei, die mit einem Gerät arbeitet: Wasser und ein sanfter Unterdruck lösen oberflächliche Verunreinigungen, danach folgen Feuchtigkeit und Pflege. Wähle es, wenn sich deine Haut stumpf oder unrein anfühlt.",
            en: "The three facial treatments differ less in promised outcome than in experience. Aqua Facial is the only one of the three that uses a device: water and gentle suction loosen surface impurities, followed by hydration and care. Choose it when your skin feels dull or congested.",
          },
          {
            de: "Sleep & Glow ist das ruhigste Ritual: kein Gerät, keine starken Wirkstoffe, gedämpftes Licht und eine lange, langsame Massage über Gesicht, Hals und Nacken. Viele Gäste schlafen dabei ein, und das ist ausdrücklich erlaubt. Wähle es, wenn du erschöpft bist und weniger an Reinigung interessiert.",
            en: "Sleep & Glow is the calmest ritual: no device, no strong actives, low light and a long, slow massage across face, throat and nape. Many guests fall asleep, and that is expressly allowed. Choose it when you are worn out and less interested in cleansing.",
          },
          {
            de: "Gua Sha arbeitet mit einem glatten Stein, der flach und in langsamen Zügen über Stirn, Wangen, Kiefer und Hals geführt wird. Es ist die Anwendung für Menschen, die ihr Gesicht als angespannt erleben — etwa wenn sie tagsüber die Zähne zusammenbeißen. Bei Rosazea, Couperose oder einer Neigung zu geplatzten Äderchen sprich uns vorher an.",
            en: "Gua sha uses a smooth stone guided flat and in slow strokes across forehead, cheeks, jaw and throat. It is the treatment for people who experience their face as held — if they clench during the day, for example. With rosacea, couperose or a tendency to broken capillaries, talk to us first.",
          },
        ],
      },
      {
        title: {
          de: "Was wir nicht anbieten",
          en: "What we do not offer",
        },
        body: [
          {
            de: "Unsere Gesichtsbehandlungen in Ahrensburg sind kosmetische Wellnessanwendungen. Wir bieten keine Unterspritzungen, kein Microneedling, keine Laserbehandlungen, keine medizinischen Peelings und keine Aknetherapie an. Wir stellen keine Diagnosen und versprechen keine Veränderung deiner Hautstruktur.",
            en: "Our facial treatments in Ahrensburg are cosmetic wellness treatments. We do not offer injectables, microneedling, laser treatment, medical peels or acne therapy. We do not diagnose and we promise no change to your skin structure.",
          },
          {
            de: "Wenn deine Haut akut entzündet ist, wenn du Isotretinoin oder ein anderes stark wirksames Medikament nimmst, wenn du in den letzten Wochen ein Peeling, Microneedling oder eine Unterspritzung hattest oder wenn eine Hautveränderung ungeklärt ist, melde dich vor der Buchung. Wir verschieben dann lieber oder empfehlen dir zuerst eine dermatologische Abklärung.",
            en: "If your skin is acutely inflamed, if you take isotretinoin or another strong medication, if you have had a peel, microneedling or injectables in recent weeks, or if a skin change is unexplained, contact us before booking. We would rather postpone or suggest dermatological advice first.",
          },
        ],
      },
      {
        title: {
          de: "Vorher und nachher: was deine Haut wirklich braucht",
          en: "Before and after: what your skin actually needs",
        },
        body: [
          {
            de: "Vor dem Termin ist weniger mehr. Verzichte am selben Tag auf ein eigenes Peeling und in den Tagen davor auf intensive Sonne oder Solarium. Wenn du Retinol oder Fruchtsäuren verwendest, setz sie nach Absprache ein paar Tage vorher aus — nicht, weil die Behandlung aggressiv wäre, sondern weil die Haut dann weniger reagiert. Ungeschminkt kommen kannst du, musst du aber nicht: Wir reinigen ohnehin.",
            en: "Before your appointment, less is more. Skip your own exfoliant on the day and strong sun or sunbeds in the days before. If you use retinol or acids, pause them a few days beforehand once we have discussed it — not because the treatment is aggressive, but because your skin then reacts less. You may arrive without makeup, but you do not have to: we cleanse in any case.",
          },
          {
            de: "Nach dem Termin ist Sonnenschutz die sinnvollste Nachpflege, die es gibt — deutlich wichtiger als jedes zusätzliche Serum. Lass die Haut für einige Stunden in Ruhe: milde Pflege, kein Peeling, keine Säuren, kein Retinol, kein intensives Training direkt danach. Eine leichte Rötung oder ein Spannungsgefühl ist normal und klingt in der Regel schnell ab.",
            en: "Afterwards, sun protection is the most sensible aftercare there is — considerably more important than any additional serum. Leave the skin alone for a few hours: mild care, no exfoliant, no acids, no retinol, no intense exercise straight afterwards. Mild redness or a feeling of tightness is normal and usually settles quickly.",
          },
          {
            de: "Wenn du einen Anlass hast, plane den Termin lieber ein bis zwei Tage davor als am selben Tag. Und wenn du wissen möchtest, welches Produkt wir verwendet haben, frag uns — wir sagen es dir und verkaufen dir danach nichts. Bei einer Reaktion, die länger als einen Tag deutlich sichtbar bleibt oder sich entzündet anfühlt, melde dich bei uns und bei anhaltenden Beschwerden bei einer dermatologischen Praxis.",
            en: "If you have an occasion coming up, book one or two days beforehand rather than the same day. And if you want to know which product we used, ask — we will tell you and we will not sell you anything afterwards. If a reaction stays clearly visible for more than a day or feels inflamed, contact us, and for persistent concerns a dermatology practice.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          de: "Welche Gesichtsbehandlung passt zu trockener Haut?",
          en: "Which facial suits dry skin?",
        },
        a: {
          de: "Aqua Facial legt den Schwerpunkt auf wasserbasierte Reinigung und Feuchtigkeit. Ob es für deine aktuelle Hautsituation passt, besprechen wir vor der Anwendung.",
          en: "Aqua Facial focuses on water-based cleansing and hydration. We discuss whether it suits your current skin before the treatment.",
        },
      },
      {
        q: {
          de: "Was ist der Unterschied zwischen Gua Sha und Sleep & Glow?",
          en: "What is the difference between Gua Sha and Sleep & Glow?",
        },
        a: {
          de: "Gua Sha konzentriert sich auf langsame Massage mit einem glatten Stein. Sleep & Glow verbindet ein ruhiges Pflegeritual mit Massageelementen für Gesicht und Nacken.",
          en: "Gua Sha focuses on slow massage with a smooth stone. Sleep & Glow combines a restful care ritual with massage for face and neck.",
        },
      },
      {
        q: {
          de: "Kann ich nach der Behandlung Make-up tragen?",
          en: "Can I wear makeup afterwards?",
        },
        a: {
          de: "Frag uns beim Termin, was für die gewählte Anwendung und deine Haut sinnvoll ist. Wenn möglich, plane danach etwas Zeit ohne starkes Make-up ein.",
          en: "Ask us what makes sense for your chosen treatment and skin. If possible, allow some time afterwards without heavy makeup.",
        },
      },
      {
        q: {
          de: "Wie vereinbare ich einen Termin?",
          en: "How do I make an appointment?",
        },
        a: {
          de: "Wähle im Online-Kalender die gewünschte Anwendung und einen freien Termin. Für Hilfe bei der Auswahl kannst du uns vorher kontaktieren.",
          en: "Choose your treatment and an available time in the online calendar. Contact us beforehand if you would like help choosing.",
        },
      },
    ],
    related: [
      {
        label: { de: "Aqua Facial", en: "Aqua Facial" },
        href: "/behandlungen/aqua-facial",
      },
      {
        label: { de: "Gua Sha", en: "Gua Sha" },
        href: "/behandlungen/gua-sha",
      },
    ],
  },
];

export function LocalServicePage({ slug }: { slug: string }) {
  const { t } = useLang();
  const page = LOCAL_PAGES.find((item) => item.slug === slug)!;
  usePageMeta(t(page.title), t(page.meta));
  const heading = t(page.title).split("|")[0].trim();
  return (
    <>
      <StructuredData
        data={serviceSchema({
          name: heading,
          description: t(page.answer),
          url: `/${page.slug}`,
          image: photoUrl(page.hero),
          serviceType: t(page.eyebrow),
        })}
      />
      <StructuredData data={faqSchema(page.faqs, t)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: heading, path: `/${page.slug}` },
        ])}
      />
      <header className="local-text-hero section-shell">
        <div>
          <p className="eyebrow">{t(page.eyebrow)}</p>
          <h1>{heading}</h1>
          <p className="local-lead">{t(page.intro)}</p>
          <a className="button" href={CONTACT.booking}>
            {t({ de: "Freie Termine ansehen", en: "View available times" })}
            <ArrowRightIcon />
          </a>
        </div>
        <figure className="local-hero-image">
          <Photo
            id={page.hero}
            sizes="(min-width: 900px) 44vw, 100vw"
            priority
          />
        </figure>
      </header>
      <section className="answer-first section-shell">
        <p className="eyebrow">
          {t({ de: "Kurz erklärt", en: "The short answer" })}
        </p>
        <h2>{t(page.answer)}</h2>
      </section>
      <section className="contact-photos section-shell">
        {page.gallery.map((item) => (
          <figure key={item.photo}>
            <Photo id={item.photo} sizes="(min-width: 900px) 32vw, 100vw" />
            <figcaption className="media-note">{t(item.caption)}</figcaption>
          </figure>
        ))}
      </section>
      <div className="local-content section-shell">
        {page.sections.map((section, index) => (
          <section key={section.title.de}>
            <span>0{index + 1}</span>
            <div>
              <h2>{t(section.title)}</h2>
              {section.body.map((p) => (
                <p key={p.de}>{t(p)}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="local-practical">
        <div className="section-shell practical-grid">
          <div>
            <p className="eyebrow">
              {t({ de: "Besuch planen", en: "Plan your visit" })}
            </p>
            <h2>
              {t({
                de: "Mitten in Ahrensburg. Gut vorbereitet ankommen.",
                en: "Central Ahrensburg. Arrive prepared.",
              })}
            </h2>
          </div>
          <div>
            <p>{CONTACT.addressLines.join(", ")}</p>
            <p>
              {t(CONTACT.hours.weekdays)}
              <br />
              {t(CONTACT.hours.saturday)}
            </p>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {t({ de: "Route öffnen", en: "Open directions" })}
              <ArrowUpRightIcon />
            </a>
          </div>
          <div>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <p>
              {t({
                de: "Parkplätze direkt vor dem Eingang · Karte, PayPal oder bar",
                en: "Parking directly outside · card, PayPal or cash",
              })}
            </p>
          </div>
        </div>
      </section>
      <section className="local-faq section-shell">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>
            {t({
              de: "Häufig gefragt. Klar beantwortet.",
              en: "Common questions. Clear answers.",
            })}
          </h2>
        </div>
        <div>
          {page.faqs.map((faq, index) => (
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
          {page.related.map((item) => (
            <Link key={item.href} to={item.href}>
              {t(item.label)}
              <ArrowRightIcon />
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
