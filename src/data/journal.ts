import type { Localized } from "../lib/i18n";
export interface JournalArticle {
  slug: string;
  category: Localized;
  title: Localized;
  intro: Localized;
  image: string;
  related: string;
  sections: { title: Localized; text: Localized }[];
}
export const JOURNAL: JournalArticle[] = [
  {
    slug: "dein-erster-head-spa-besuch",
    category: { de: "Head Spa", en: "Head spa" },
    title: {
      de: "Dein erster Head-Spa-Besuch",
      en: "Your first head spa visit",
    },
    intro: {
      de: "Was dich bei einem Japanese Head Spa in Ahrensburg erwartet und wie du deine Auszeit planst.",
      en: "What to expect from a Japanese head spa in Ahrensburg and how to plan your time with us.",
    },
    image: "/assets/generated/head-spa-ritual-v2.jpg",
    related: "head-spa",
    sections: [
      {
        title: {
          de: "Zeit für Kopfhaut und Haar",
          en: "Time for your scalp and hair",
        },
        text: {
          de: "Beim Japanese Head Spa stehen die Pflege von Kopfhaut und Haar sowie entspannende Berührungen im Mittelpunkt. Warmes Wasser und eine behutsame Kopf- und Nackenmassage begleiten das Ritual. Bei satuuu99 in Ahrensburg kannst du dich im Liegen zurücklehnen. Die konkreten Schritte hängen von der gebuchten Anwendung ab. Besprich deine Wünsche deshalb vorab mit uns.",
          en: "Japanese head spa brings together scalp and hair care with relaxing touch. Warm water and a gentle head and neck massage accompany the ritual. At satuuu99 in Ahrensburg, you can lie back throughout. The exact steps depend on the treatment you book, so discuss your preferences with us beforehand.",
        },
      },
      {
        title: { de: "Vor deinem Termin", en: "Before your appointment" },
        text: {
          de: "Wähle im Buchungskalender eine verfügbare Anwendung und plane deinen Weg zur Manhagener Allee 45. Wenn du Fragen zu Haarverlängerungen, Styling oder den verwendeten Produkten hast, schreib uns vor der Buchung. So können wir klären, ob die gewünschte Anwendung zu dir passt. Angaben zu Dauer und Preis findest du in der offiziellen Preisliste und im Buchungskalender.",
          en: "Choose an available treatment in the booking calendar and plan your journey to Manhagener Allee 45. If you have questions about hair extensions, styling or the products we use, email us before booking. We can then check whether your chosen treatment suits you. The official price list and booking calendar provide durations and prices.",
        },
      },
      {
        title: { de: "Deine Wünsche zählen", en: "Your preferences matter" },
        text: {
          de: "Sag uns, welchen Druck du angenehm findest und ob du lieber in Ruhe entspannen möchtest. Du kannst während der Anwendung jederzeit um eine Anpassung bitten. Plane danach etwas Freiraum, wenn du deine Pause ohne Eile ausklingen lassen möchtest. Für Fragen zum Trocknen oder Stylen der Haare nach dem Ritual kontaktiere uns bitte vor deinem Besuch.",
          en: "Tell us what pressure feels comfortable and whether you would prefer a quiet treatment. You can ask for an adjustment at any time. Leave yourself some space afterwards if you want an unhurried end to your visit. Please contact us before your appointment with questions about drying or styling your hair after the ritual.",
        },
      },
    ],
  },
  {
    slug: "welches-ritual-passt-zu-dir",
    category: { de: "Rituale", en: "Rituals" },
    title: {
      de: "Eine Pause, die zu dir passt",
      en: "A pause that feels like you",
    },
    intro: {
      de: "Kopf, Gesicht, Körper oder Füße: Ein kleiner Wegweiser durch unsere Wellnessanwendungen.",
      en: "Head, face, body or feet: a guide to finding your next wellness ritual.",
    },
    image: "/assets/generated/shoulder-ritual-v2.jpg",
    related: "spa-massage",
    sections: [
      {
        title: {
          de: "Womit möchtest du beginnen?",
          en: "Where would you like to begin?",
        },
        text: {
          de: "Manchmal weißt du genau, wonach dir ist. Manchmal brauchst du eine kleine Orientierung. Beginne mit der Frage, welchem Bereich du heute Aufmerksamkeit schenken möchtest. Unser Behandlungsfinder führt dich zu den passenden Kategorien. Er ist eine Orientierung im Angebot. Die Auswahl und Verfügbarkeit der einzelnen Anwendungen zeigt dir der Buchungskalender.",
          en: "Sometimes you know exactly what you want. Sometimes a little guidance helps. Start by thinking about which area you would like to give attention to today. Our treatment finder takes you to the relevant categories. It is a guide to the catalogue. The booking calendar shows which individual treatments are available.",
        },
      },
      {
        title: { de: "Kopf und Gesicht", en: "Head and face" },
        text: {
          de: "Wenn du dir warmes Wasser und sanfte Berührungen an Kopf und Nacken wünschst, entdecke Japanese Head Spa. Für Gesichtspflege stehen unter anderem Aqua Facial, Sleep & Glow und Gua Sha im Katalog. Die Rituale haben unterschiedliche Schwerpunkte. Lies die jeweilige Beschreibung und frag uns, wenn du zwischen zwei Anwendungen schwankst.",
          en: "If you like the idea of warm water and gentle touch around your head and neck, explore Japanese head spa. Facial treatments in the catalogue include Aqua Facial, Sleep & Glow and Gua Sha. Each ritual has a different focus. Read the individual descriptions and ask us if you are deciding between two options.",
        },
      },
      {
        title: { de: "Körper und Füße", en: "Body and feet" },
        text: {
          de: "In unseren Kategorien Körper und Füße findest du Wellnessmassagen und Anwendungen für gepflegte Füße. Wähle nach deinen persönlichen Vorlieben und der Zeit, die du dir nehmen möchtest. Wir helfen dir gern per E-Mail bei der Auswahl. Druck, Komfort und Wünsche besprechen wir gemeinsam, damit du dich während deiner Auszeit gut aufgehoben fühlst.",
          en: "Our body and feet categories include wellness massages and foot care. Choose according to your preferences and the time you want to set aside. We are happy to help by email. We discuss pressure, comfort and your preferences together so that you feel cared for during your visit.",
        },
      },
    ],
  },
  {
    slug: "auszeit-in-ahrensburg",
    category: { de: "Unser Ort", en: "Our place" },
    title: {
      de: "Eine Auszeit in Ahrensburg",
      en: "A little time in Ahrensburg",
    },
    intro: {
      de: "Ein ruhiger Gegenpol zum Alltag, in der Manhagener Allee und in der Nähe von Hamburg.",
      en: "A quiet counterpoint to everyday life on Manhagener Allee, near Hamburg.",
    },
    image: "/assets/generated/studio-architecture-v2.jpg",
    related: "head-spa",
    sections: [
      {
        title: { de: "Dein Weg zu uns", en: "Your way here" },
        text: {
          de: "Du findest satuuu99 in der Manhagener Allee 45, 22926 Ahrensburg. Wenn du aus Hamburg oder der Umgebung kommst, plane deine Anreise passend zu deinem Termin. Auf unserer Kontaktseite kannst du die Adresse direkt in der Kartenansicht öffnen. Prüfe dort die aktuelle Route und Fahrzeit für dein Verkehrsmittel.",
          en: "You will find satuuu99 at Manhagener Allee 45, 22926 Ahrensburg. If you are travelling from Hamburg or the surrounding area, plan your journey around your appointment. Our contact page opens the address directly in a map. Check the current route and journey time for your preferred way of travelling.",
        },
      },
      {
        title: {
          de: "Ein Ort für persönliche Aufmerksamkeit",
          en: "A place for personal attention",
        },
        text: {
          de: "Unser Angebot verbindet Wellness mit Pflege und entspannenden Massageelementen. Kopfhaut und Haar, Gesicht, Körper oder Füße können dabei im Mittelpunkt stehen. Die gemeinsame Idee ist einfach: Zeit, in der deine Wünsche Raum bekommen. Erfahre auf unserer Studioseite mehr über unsere Haltung und entdecke die Anwendungen im Behandlungskatalog.",
          en: "Our treatments combine wellness with care and relaxing massage. The focus may be your scalp and hair, face, body or feet. The shared idea is simple: time that leaves room for your preferences. Visit our studio page to learn about our approach and explore the treatment catalogue.",
        },
      },
      {
        title: { de: "Ohne Eile planen", en: "An unhurried visit" },
        text: {
          de: "Wähle einen Termin, der dir auch davor und danach etwas Freiraum lässt. Bei Fragen zur Anreise oder zu deinem Besuch erreichst du uns per E-Mail. Die aktuellen buchbaren Zeiten findest du im Online-Kalender. Verbindliche Preise und Behandlungsdauer stehen in der offiziellen Preisliste beziehungsweise bei der ausgewählten Buchung.",
          en: "Choose an appointment that gives you a little room before and afterwards. Email us with questions about getting here or your visit. The online calendar shows available appointments. Check the official price list or the selected booking for confirmed prices and treatment durations.",
        },
      },
    ],
  },
  {
    slug: "gua-sha-ritual-gesicht",
    category: { de: "Gesichtspflege", en: "Facial care" },
    title: {
      de: "Gua Sha: Berührung mit Ruhe",
      en: "Gua sha: care at a slower pace",
    },
    intro: {
      de: "Was hinter dem stillen Gesichtspflege-Ritual steckt und wie wir Druck, Tempo und Ablauf auf dich abstimmen.",
      en: "What shapes this quiet facial ritual and how we adapt its pressure, pace and flow to you.",
    },
    image: "/assets/generated/gua-sha-ritual-v2.jpg",
    related: "gua-sha",
    sections: [
      {
        title: { de: "Ein glatter Stein, langsame Bewegungen", en: "A smooth stone, unhurried movements" },
        text: {
          de: "Gua Sha ist bei satuuu99 ein ruhiges Pflegeritual für Gesicht, Kiefer und Hals. Der glatte Stein wird in langsamen, geführten Bewegungen über die Haut geführt. Es geht nicht darum, möglichst viel Druck auszuhalten. Entscheidend ist, dass sich die Berührung für dich angenehm anfühlt und du loslassen kannst.",
          en: "At satuuu99, gua sha is a quiet care ritual for the face, jaw and neck. A smooth stone moves slowly and deliberately across the skin. The aim is never to tolerate as much pressure as possible. What matters is that the touch feels comfortable and gives you room to let go.",
        },
      },
      {
        title: { de: "Vorher kurz ankommen", en: "A moment to arrive first" },
        text: {
          de: "Zu Beginn sprechen wir darüber, wie sich deine Haut heute anfühlt und welche Bereiche besondere Aufmerksamkeit bekommen dürfen. Teile uns bitte mit, wenn deine Haut empfindlich ist oder du kürzlich eine kosmetische oder medizinische Behandlung hattest. So können wir gemeinsam klären, was für deinen Termin passend ist.",
          en: "We begin by asking how your skin feels today and which areas deserve particular attention. Please tell us if your skin is sensitive or if you have recently had a cosmetic or medical procedure. That gives us the context to decide together what suits your appointment.",
        },
      },
      {
        title: { de: "Dein Tempo zählt", en: "Your pace matters" },
        text: {
          de: "Du kannst während des Rituals jederzeit um weniger Druck, eine Pause oder mehr Ruhe bitten. Manche Gäste möchten wissen, was als Nächstes passiert; andere schließen lieber die Augen. Beides ist willkommen. Eine gute Auszeit beginnt dort, wo du dich nicht erklären musst.",
          en: "You can ask for less pressure, a pause or more quiet at any point. Some guests like to know what comes next; others prefer to close their eyes. Both are welcome. A good pause begins where you do not have to perform.",
        },
      },
    ],
  },
  {
    slug: "wellness-termin-richtig-planen",
    category: { de: "Vor deinem Besuch", en: "Before your visit" },
    title: {
      de: "So wird aus einem Termin eine echte Pause",
      en: "How an appointment becomes a real pause",
    },
    intro: {
      de: "Ein kleiner Leitfaden für Anreise, Wünsche und die Zeit nach deinem Wellness-Ritual in Ahrensburg.",
      en: "A simple guide to arrival, preferences and the time after your wellness ritual in Ahrensburg.",
    },
    image: "/assets/generated/ritual-still-life-v2.jpg",
    related: "spa-massage",
    sections: [
      {
        title: { de: "Lass etwas Luft im Kalender", en: "Leave some room in your day" },
        text: {
          de: "Plane deine Anreise zur Manhagener Allee 45 so, dass du ohne Eile ankommst. Wenn es möglich ist, halte auch die Zeit direkt nach deinem Termin frei. So endet dein Ritual nicht mit einem Blick auf die Uhr, sondern darf noch ein wenig nachwirken.",
          en: "Plan your journey to Manhagener Allee 45 so you can arrive without rushing. If possible, leave the time immediately after your appointment open too. Your ritual can then end without a glance at the clock and settle for a little longer.",
        },
      },
      {
        title: { de: "Sag uns, was du brauchst", en: "Tell us what you need" },
        text: {
          de: "Vor jeder Anwendung ist Raum für ein kurzes Gespräch. Nenne uns empfindliche Bereiche, deine bevorzugte Druckstärke und alles, was deinen Komfort beeinflusst. Auch der Wunsch nach einer besonders ruhigen Behandlung gehört dazu. Je klarer wir dich verstehen, desto persönlicher kann sich deine Zeit anfühlen.",
          en: "Every treatment begins with room for a short conversation. Tell us about sensitive areas, your preferred pressure and anything that affects your comfort. That includes wanting a particularly quiet treatment. The better we understand you, the more personal your time can feel.",
        },
      },
      {
        title: { de: "Wähle nach Gefühl und Fokus", en: "Choose by feeling and focus" },
        text: {
          de: "Kopf, Gesicht, Körper oder Füße: Beginne bei dem Bereich, dem du heute Aufmerksamkeit schenken möchtest. Die Beschreibungen im Behandlungskatalog geben dir Orientierung. Wenn du zwischen zwei Ritualen schwankst, schreib uns vor der Buchung. Aktuelle Verfügbarkeit, Dauer und verbindliche Preise findest du im Buchungskalender und in der Preisliste.",
          en: "Head, face, body or feet: begin with the area you would like to care for today. The treatment catalogue gives you a clear starting point. If you are choosing between two rituals, email us before booking. The calendar and official price list show current availability, duration and confirmed prices.",
        },
      },
    ],
  },
];
