// The hero and studio use the supplied original source media so the site
// represents the scale and atmosphere of the private Ahrensburg studio.
// Treatment images stay tightly cropped around the ritual and do not present
// invented rooms as the premises. Provenance is recorded in docs/ASSET-BRIEF.md.
export const MEDIA = {
  hero: {
    poster: "/assets/authentic/hero-poster.jpg",
    video: "/assets/authentic/hero.mp4",
  },
  studio: "/assets/authentic/studio.jpg",
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
  editorial: {
    gift: "/assets/authentic/studio.jpg",
    journalHeadSpa: "/assets/treatment-head.jpg",
    journalFace: "/assets/treatment-face.jpg",
    journalBody: "/assets/treatment-body.jpg",
    journalStudio: "/assets/authentic/studio.jpg",
  },
};
