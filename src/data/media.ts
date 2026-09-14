// Media generated in Magnific: stills with Recraft V4.1 (`recraft-v4-1`), each
// enhanced 2x with the Magnific `ultra-photo` upscaler; the hero loop with
// Kling, using the hero still as its start frame. Prompts and creation
// identifiers are recorded in docs/ASSET-BRIEF.md.
export const MEDIA = {
  hero: {
    poster: "/assets/generated/head-spa-ritual-v2.jpg",
    video: "/assets/generated/hero-ritual-loop-v2.mp4",
  },
  studio: "/assets/generated/studio-architecture-v2.jpg",
  // Keyed by FocusGroup id.
  treatments: {
    head: "/assets/generated/head-spa-ritual-v2.jpg",
    face: "/assets/generated/gua-sha-ritual-v2.jpg",
    feet: "/assets/generated/foot-ritual-v2.jpg",
    body: "/assets/generated/shoulder-ritual-v2.jpg",
  } as Partial<Record<string, string>>,
  // Keyed by Treatment id. Shown instead of the group image while that
  // programme is expanded, so a programme with its own photograph shows it.
  programmes: {
    "cupping-massage": "/assets/treatment-cupping.jpg",
    "gua-sha": "/assets/generated/gua-sha-ritual-v2.jpg",
  } as Partial<Record<string, string>>,
  editorial: {
    gift: "/assets/generated/ritual-still-life-v2.jpg",
    journalHeadSpa: "/assets/generated/head-spa-ritual-v2.jpg",
    journalFace: "/assets/generated/gua-sha-ritual-v2.jpg",
    journalBody: "/assets/generated/shoulder-ritual-v2.jpg",
    journalStudio: "/assets/generated/studio-architecture-v2.jpg",
  },
};
