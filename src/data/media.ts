// Media generated in Magnific: stills with Recraft V4.1 (`recraft-v4-1`), each
// enhanced 2x with the Magnific `ultra-photo` upscaler; the hero loop with
// Kling, using the hero still as its start frame. Prompts and creation
// identifiers are recorded in docs/ASSET-BRIEF.md.
export const MEDIA = {
  hero: { poster: "/assets/hero-poster.jpg", video: "/assets/hero.mp4" },
  studio: "/assets/studio.jpg",
  // Keyed by FocusGroup id.
  treatments: {
    head: "/assets/treatment-head.jpg",
    face: "/assets/treatment-face.jpg",
    feet: "/assets/treatment-feet.jpg",
    body: "/assets/treatment-body.jpg",
  } as Partial<Record<string, string>>,
  // Keyed by Treatment id. Shown instead of the group image while that
  // programme is expanded, so a programme with its own photograph shows it.
  programmes: {
    "cupping-massage": "/assets/treatment-cupping.jpg",
  } as Partial<Record<string, string>>,
};
