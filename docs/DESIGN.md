# Satuuu99 redesign

## Direction

A small, contemporary wellness studio with quiet confidence. Warm white, olive-grey and deep charcoal; one locally hosted sans-serif family; generous space; close, tactile photography. Clear service information before promotional material.

Reference review: [Soulhouse](https://soulhouse.me/) contributes the warmth and attentive treatment imagery. [Rostudios](https://www.ro-studios.com/) contributes confident type scale and direct navigation. The redesign keeps Satuuu's own voice and does not copy their testimonials, brand marks or photographs.

## What changed

- Split hero: readable typography beside a single film, rather than text buried under a tinted video.
- One keyboard-accessible treatment explorer replaces the finder, category tiles, repeated carousels and second explorer. Expandable treatment details lead to contextual email enquiries; prices link to the existing price page.
- Studio, voucher information and booking follow in one sequence. German and English remain available throughout.
- Removed unsupported ratings, adapted third-party testimonials, missing testimonial videos, inactive search/account controls, medical claims, invented scarcity and founding year.
- Real external booking, pricing, privacy and imprint destinations replace broken anchors. The existing website remains the booking system; no booking is submitted by the local site.
- Native scrolling, pauseable video, reduced-motion handling, visible focus, mobile menu dismissal, direct section links and a 404 page.
- Removed unused components and animation dependencies. Formatting commands keep the code consistent. A locked transitive nanoid vulnerability was fixed without a major dependency migration.
- Existing images compressed from about 6.8 MB combined to 1.3 MB. Fonts served locally.
- Added the Schröpfmassage / cupping massage programme, supplied by the owner, as the lead treatment under Körper with a `Neu` flag. Treatment entries gained an optional highlight list, and every existing programme was filled out with one; the copy stays descriptive, with no prices, durations or health claims invented locally.
- Fixed the hero poster's `fetchPriority` prop: React 18 does not recognise the camelCase form, so the attribute was being dropped with a console warning and the LCP priority hint never reached the browser.

## Asset status — complete

Generated in Magnific on 10 September 2026 after reauthentication. Seven stills with **Recraft V4.1** (`recraft-v4-1`), two variants each, the selected one enhanced 2x with the `ultra-photo` upscaler. The hero loop with **Kling 3.0** (`kling-30`), image-to-video from the approved hero still — Recraft V4.1 is a still-image model and did not produce the video.

Every previous placeholder is replaced. The treatment section no longer reuses one photograph across categories: head, face, feet and body each have their own image, and the new cupping programme has a dedicated photograph that replaces the group image while it is expanded. The previous project media were moved to `docs/original-media/` — they were still being copied into `dist` from `public/` despite being unreferenced.

Total media is 2.0 MB across eight files. `ASSET-BRIEF.md` holds the creation identifiers, delivered sizes, post-processing and review notes.

The studio image remains an atmosphere image, labelled as such, not documentary photography of the real premises.

## Content sources and limits

Checked 10 September 2026:
- https://satuuu99.de/ — revised wellness concept, services, founding in May 2025 and notice that new voucher sales are paused.
- https://satuuu99.de/kalender/ — existing booking destination.
- https://satuuu99.de/preisliste-ab-01-03-2026/ — published prices; no unsupported amounts invented locally.
- https://satuuu99.de/datenschutz/ — address and public contact email.
- https://satuuu99.de/impressum/ — legal link destination.

The official site contains overlapping restructuring notices. Final service availability, voucher policy and documentary studio photography need owner verification before public release. This local redesign has not been deployed.

## Recovery

`original-source.tar.gz` contains the full original `src` and `index.html`. The original project media (PNG stills, their compressed JPEG copies and the original hero video) are kept in `docs/original-media/`, out of `public/` so they are no longer shipped in the build. No git repository was present in this downloaded project.

## Validation

- Production TypeScript/Vite build and Prettier checks passed.
- Visual checks at 1280px, 768px, 390px and 320px; no horizontal page overflow in checked layouts.
- Both languages, mobile menu opening/closing, Escape focus return, treatment selection, expanded details and arrow-key navigation verified in the browser.
- Category deep links select the correct treatment group; section navigation lands below the header.
- Hero video pause/play and offscreen pausing verified. Reduced-motion behavior is implemented; OS preference switching was not emulated in these checks.
- 404 page and return-home link verified.
- Production browser error log empty, no broken loaded images or unresolved local anchors detected.
- npm audit reported zero vulnerabilities after the lockfile repair.

Re-checked after the asset and content work:
- Production TypeScript/Vite build and Prettier checks pass. Bundle 68.2 kB JS and 5.0 kB CSS gzipped.
- All eight media files load at their expected intrinsic dimensions; hero loop reaches `readyState` 4 and autoplays.
- Browser console clean on a fresh load, including the previously warned `fetchPriority` prop.
- Treatment art swaps correctly per category and per programme, with alt text following the visible subject, in both languages.
- Deep link `?focus=body` selects Körper with the cupping programme expanded.
- No horizontal overflow at 1440px or 375px.
