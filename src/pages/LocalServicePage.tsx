import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import type { Localized } from "../lib/i18n";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

type Page = {
  slug: string;
  title: Localized;
  meta: Localized;
  eyebrow: Localized;
  intro: Localized;
  answer: Localized;
  sections: { title: Localized; body: Localized[] }[];
  faqs: { q: Localized; a: Localized }[];
  related: { label: Localized; href: string }[];
};

export const LOCAL_PAGES: Page[] = [
  {
    slug: "japanese-head-spa-ahrensburg",
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
    title: {
      de: "Wellnessmassage in Ahrensburg bei Hamburg | satuuu99",
      en: "Wellness massage in Ahrensburg near Hamburg | satuuu99",
    },
    meta: {
      de: "Wellnessmassage in Ahrensburg: ruhige Spa-Massagen, persönliche Abstimmung und ein erfahrenes Team bei satuuu99 nahe Hamburg.",
      en: "Wellness massage in Ahrensburg: calm spa massage, personal consultation and an experienced team at satuuu99 near Hamburg.",
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
      de: "satuuu99 bietet Wellness- und Spa-Massagen im Zentrum von Ahrensburg an. Vor der Anwendung besprechen wir Druck, Schwerpunkt und dein persönliches Wohlbefinden. Die Massagen dienen der Entspannung und ersetzen keine medizinische Behandlung oder Physiotherapie.",
      en: "satuuu99 offers wellness and spa massage in central Ahrensburg. Before the treatment, we discuss pressure, focus and your comfort. These massages are for relaxation and do not replace medical treatment or physiotherapy.",
    },
    sections: [
      {
        title: {
          de: "Welche Massage passt zu mir?",
          en: "Which massage suits me?",
        },
        body: [
          {
            de: "Manchmal möchtest du vor allem Rücken und Schultern loslassen, manchmal den ganzen Körper zur Ruhe kommen lassen. In unserem Angebot findest du Spa-Massagen sowie Anwendungen mit Wärme, Dampf oder Cupping-Elementen. Die aktuell buchbaren Varianten siehst du im Kalender und in der Preisliste.",
            en: "Sometimes you want to release your back and shoulders; sometimes you want your whole body to settle. Our menu includes spa massage and rituals using warmth, steam or cupping elements. Current options appear in the booking calendar and price list.",
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(page.eyebrow),
    description: t(page.answer),
    provider: { "@id": "https://satuuu99.de/#business" },
    areaServed: ["Ahrensburg", "Stormarn", "Hamburg"],
    url: `https://satuuu99.de/${page.slug}`,
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <header className="local-text-hero section-shell">
        <div>
          <p className="eyebrow">{t(page.eyebrow)}</p>
          <h1>{t(page.title).split("|")[0]}</h1>
          <p className="local-lead">{t(page.intro)}</p>
          <a className="button" href={CONTACT.booking}>
            {t({ de: "Freie Termine ansehen", en: "View available times" })}
            <ArrowRightIcon />
          </a>
        </div>
        <div className="local-image-placeholder" aria-hidden="true" />
      </header>
      <section className="answer-first section-shell">
        <p className="eyebrow">
          {t({ de: "Kurz erklärt", en: "The short answer" })}
        </p>
        <h2>{t(page.answer)}</h2>
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
