import { CONTACT } from "../data/content";
import type { Localized } from "./i18n";

export const SITE_URL = "https://satuuu99.de";
export const BUSINESS_ID = `${SITE_URL}/#business`;

export interface SchemaQuestion {
  q: Localized;
  a: Localized;
}

type Translate = (value: Localized) => string;

/** Absolute URL for a site-relative path. */
export function absolute(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/** A single service offered by the studio, tied to the business entity. */
export function serviceSchema({
  name,
  description,
  url,
  image,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolute(url)}#service`,
    name,
    description,
    serviceType,
    url: absolute(url),
    image: absolute(image),
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": BUSINESS_ID,
      name: CONTACT.brand,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.addressLines[0],
        postalCode: "22926",
        addressLocality: "Ahrensburg",
        addressRegion: "Schleswig-Holstein",
        addressCountry: "DE",
      },
    },
    areaServed: [
      { "@type": "City", name: "Ahrensburg" },
      { "@type": "City", name: "Hamburg" },
      { "@type": "City", name: "Großhansdorf" },
      { "@type": "City", name: "Bargteheide" },
      { "@type": "City", name: "Ammersbek" },
      { "@type": "AdministrativeArea", name: "Kreis Stormarn" },
    ],
    isRelatedTo: { "@type": "WebPage", url: CONTACT.prices },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: CONTACT.booking,
        actionPlatform: "http://schema.org/DesktopWebPlatform",
      },
    },
  };
}

/** Question-and-answer set for a page that shows those answers on screen. */
export function faqSchema(questions: SchemaQuestion[], t: Translate) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: t(item.q),
      acceptedAnswer: { "@type": "Answer", text: t(item.a) },
    })),
  };
}

/** Trail from the homepage to the current page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: absolute(step.path),
    })),
  };
}

/** An editorial article, credited to the studio as publisher. */
export function articleSchema({
  headline,
  description,
  path,
  image,
  section,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  section: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    articleSection: section,
    mainEntityOfPage: { "@type": "WebPage", "@id": absolute(path) },
    image: absolute(image),
    author: {
      "@type": "Organization",
      name: CONTACT.brand,
      "@id": BUSINESS_ID,
    },
    publisher: {
      "@type": "Organization",
      name: CONTACT.brand,
      "@id": BUSINESS_ID,
    },
    isAccessibleForFree: true,
  };
}
