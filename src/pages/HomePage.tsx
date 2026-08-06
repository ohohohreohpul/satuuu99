import { useLang } from '../lib/i18n';
import { usePageMeta } from '../lib/usePageMeta';
import {
  CONTACT,
  EDITORIAL_AUSWAHL,
  EDITORIAL_BESTSELLER,
  AUSWAHL_IDS,
  BESTSELLER_IDS,
  treatmentsByIds,
} from '../data/content';
import { Hero } from '../sections/Hero';
import { RitualFinder } from '../sections/RitualFinder';
import { CategoryTiles } from '../sections/CategoryTiles';
import { PressMarquee } from '../sections/PressMarquee';
import { TreatmentCarousel } from '../components/ui/TreatmentCarousel';
import { FocusExplorer } from '../sections/FocusExplorer';
import { Studio } from '../sections/Studio';
import { Reviews } from '../sections/Reviews';
import { VideoTestimonialWall } from '../sections/VideoTestimonialWall';
import { FinalCTA } from '../sections/FinalCTA';

export function HomePage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: 'satuuu99 — Premium Spa & Wellness · Ahrensburg',
      en: 'satuuu99 — Premium Spa & Wellness · Ahrensburg',
    }),
    t({
      de: 'Premium Spa in Ahrensburg für Japanese Head Spa, Gesichtsbehandlungen, Fußpflege und Wellness-Massagen. Ein stilles Ritual für Kopf, Gesicht und Füße.',
      en: 'Premium spa in Ahrensburg for Japanese head spa, facials, foot care, and wellness massage. A quiet ritual for head, face, and feet.',
    }),
  );

  return (
    <>
      <Hero />
      <RitualFinder />
      <CategoryTiles />
      <PressMarquee />

      <TreatmentCarousel
        id="rituale"
        eyebrow={EDITORIAL_AUSWAHL.kicker}
        titleLead={{ de: 'Unsere', en: 'Our' }}
        titleItalic={{ de: 'Auswahl.', en: 'selection.' }}
        editorial={EDITORIAL_AUSWAHL}
        treatments={treatmentsByIds(AUSWAHL_IDS)}
        bookingHref={CONTACT.booking}
      />

      <FocusExplorer />

      <TreatmentCarousel
        eyebrow={EDITORIAL_BESTSELLER.kicker}
        titleLead={{ de: 'Unsere', en: 'Our' }}
        titleItalic={{ de: 'Bestseller.', en: 'bestsellers.' }}
        editorial={EDITORIAL_BESTSELLER}
        treatments={treatmentsByIds(BESTSELLER_IDS)}
        bookingHref={CONTACT.booking}
        className="bg-sand/40"
      />

      <Studio />
      <Reviews />
      <VideoTestimonialWall />
      <FinalCTA />
    </>
  );
}
