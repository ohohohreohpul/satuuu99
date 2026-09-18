# Magnific asset brief

## Authenticity direction

The live site prioritizes the supplied original source media for the homepage hero and studio. These files show a modest, private treatment setting and do not imply a resort-scale property. Treatment-category images use tight ritual details with minimal visible architecture. Future photography should document the real Ahrensburg rooms, practitioners and equipment. Concept images must never be presented in a way that suggests they show the premises.

| File | Website role |
|---|---|
| `authentic/hero-scrub-poster.jpg` and `authentic/hero-scrub.mp4` | Homepage scroll-scrub hero, supplied by the studio owner |
| `authentic/studio.jpg` | Studio, gift and local editorial pages |
| `treatment-head.jpg`, `treatment-face.jpg`, `treatment-feet.jpg`, `treatment-body.jpg` | Close treatment details |

Status: complete, generated 10 September 2026. Stills were produced in Magnific with **Recraft V4.1** (catalog slug `recraft-v4-1`), the slug resolved from Magnific's image model catalog. Two variants were generated per shot at 896x1152 (3:2 shots at 1280x832); the selected variant of each was then enhanced 2x with Magnific's `ultra-photo` upscaler to 1792x2304 (studio: 2560x1664) and downsized locally to the delivery width.

Recraft V4.1 is a still-image model. The hero loop was produced separately with **Kling 3.0** (`kling-30`), image-to-video from the approved hero still; it is not Recraft output.

## Shared art direction

Contemporary wellness editorial photography. Quiet natural daylight, cream linen, warm skin, olive-grey shadows, restrained colour, natural skin texture and gentle optical softness. Intimate, observant camera; believable treatment gestures. No spa stock-photo clichés, stacked stones, orchids, candles as decoration, gold sparkle, plastic skin, excessive grain, logos or text. Anatomically natural hands. Adult clients and practitioners, professionally draped.

## Stills

1. **Hero — 4:5**, export at 1400px wide. Side-on close photograph of an adult client receiving a careful head and neck massage, eyes closed, therapist's hands at the base of the head. Beautiful soft daylight from upper left, cream towel underneath, understated warmth. Keep the client's face centred in the right half, leave space at the lower edge for a small caption and pause button. The image sits beside the heading, not behind it.
2. **Head — 4:5**, 1100px wide. Japanese head spa close-up, fine water streams passing over wet dark hair into a charcoal basin, a therapist's hands gently supporting the scalp. Face mostly outside frame. A calm, tactile image focused on water and touch.
3. **Face — 4:5**, 1100px wide. Adult client reclining under ivory linen, close crop of cheek and jaw receiving gentle gua sha. Practitioner holds a simple smooth stone naturally, honest skin texture, diffuse side daylight. No exaggerated beauty retouching.
4. **Feet — 4:5**, 1100px wide. Close editorial photograph of a professional foot massage, adult client's heel supported by two natural hands, cream linen background, muted olive-grey shadows. Delicate composition without medical equipment.
5. **Body — 4:5**, 1100px wide. Close editorial photograph of a practitioner massaging the upper back and shoulder of an adult client, professional linen draping. Subtle warm oil on skin, soft light, relaxed and respectful composition.
6. **Atmosphere — 3:2**, 1600px wide. An aspirational wellness treatment-room mood image: linen curtain filtering daylight, one neatly dressed treatment bed, modest room scale, natural muted materials, no people. Keep labelled as an atmosphere image; use actual studio photography when supplied instead of representing an invented space as the premises.

## Hero film

The live hero uses the owner-supplied `4929348_Headache_Therapy_1280x720.mp4`. Its timeline is controlled by page scroll and remains paused, with no autoplay audio or playback controls. Reduced-motion visitors receive the matching poster frame.

## Delivered files

All files are local under `public/assets/` and wired through `src/data/media.ts`.

| File | Shot | Delivered | Size |
|---|---|---|---|
| `hero-poster.jpg` | Hero | 1200x1543 | 242 KB |
| `hero.mp4` | Hero loop | 900x1158, 5.0s, H.264, silent | 346 KB |
| `hero-scrub-poster.jpg` | Scroll-scrub hero poster | 1280x720 | 64 KB |
| `hero-scrub.mp4` | Scroll-scrub hero | 1280x720, 21.1s, H.264, silent | 4.8 MB |
| `treatment-head.jpg` | Head | 1100x1414 | 219 KB |
| `treatment-face.jpg` | Face | 1100x1414 | 214 KB |
| `treatment-feet.jpg` | Feet | 1100x1414 | 209 KB |
| `treatment-body.jpg` | Body | 1100x1414 | 224 KB |
| `treatment-cupping.jpg` | Cupping massage | 1100x1414 | 236 KB |
| `studio.jpg` | Atmosphere | 1800x1170 | 344 KB |

Total media 2.0 MB.

## Creation record

Magnific creation identifiers, selected variant first. Stills `recraft-v4-1`; enhancement `ultra-photo` 2x.

| Shot | Selected | Rejected variant | Upscale |
|---|---|---|---|
| Hero | `mE1HnwYhJQ` | `lJR4fTUgv9` | `LwiyuBTswO` |
| Head | `VXfI4UCMMU` | `LwiyvBeswO` | `mE1HpQxhJQ` |
| Face | `bxJlXe25Y2` | `4R0GKb39Aa` | `ovbETFF829` |
| Feet | `w4GiQqx7EI` | `XmHfRAiBfo` | `ksPUE4j16B` |
| Body | `6AMYx3xiJO` | `dtFaRoBXSL` | `w4GircY7EI` |
| Cupping | `xSNJhUejfW` | `O6YZbiJynm` | `MBCtG1bDCm` |
| Atmosphere | `Sy2Nu3sUb8` | `tCkFnbGmZJ` | `4R0GjqP9Aa` |

Hero loop: `gOZ9bqrSXO` (`kling-30`, 1080p, 5s, start frame `mE1HnwYhJQ`). An earlier `kling-25` attempt, `O6YZ1Nlynm`, was rejected: its framing drifted across the five seconds, which showed as a jump at the loop point.

The exact prompts used are the shot descriptions above plus the shared art direction, passed as a single prompt per shot with the negative constraints appended.

## Local post-processing

- Stills resized with Lanczos and encoded as progressive JPEG, quality 82 (hero 80), 4:2:0.
- The atmosphere still was generated with a green cast; corrected locally toward the site's warm palette (red +12%, green -4%, blue -12%, saturation -12%). No content was altered.
- Hero loop re-encoded to H.264, CRF 28, `-preset slow`, audio stripped, `faststart`.
- Owner-supplied scrub film re-encoded to H.264, CRF 24, six-frame GOP, audio stripped and `faststart` for responsive bidirectional seeking.

## Review notes

Each selected still was inspected at full size for hand and face anatomy before acceptance; finger counts and joints are correct in all seven. The upscaled hero was compared against its source at 1:1 to confirm the enhancer preserved content rather than reinterpreting it.

The atmosphere image remains an **atmosphere image**, not documentary photography of the real premises, and is labelled as such in the interface. Replace it with actual studio photography when the owner supplies it.

---

# Relaunch media set — September 2026

## Provenance and honesty

The relaunch set is **licensed professional wellness photography of comparable
rituals**, supplied by the studio owner. It is **not documentation of the
Ahrensburg premises, team or guests**. Every placement follows two rules:

1. A photograph that could be read as "this is our room" carries a visible
   caption saying it is an atmosphere image (`figcaption.media-note`).
2. No photograph is used in a way that implies a facility the studio does not
   have — no pool, sauna, steam landscape, reception hall or resort grounds
   appears anywhere in the set.

The ambient films carry the same caption on treatment pages: *"Stimmungsaufnahme
einer vergleichbaren Anwendung — keine Aufnahme aus unseren Räumen."*

## Still outstanding

These shots are in the original brief and still require a real shoot in
Ahrensburg. Until they exist, the pages that would use them either carry an
atmosphere image with a caption, or carry no image at all.

- Studio exterior, entrance and signage (4–5 selects)
- The actual reception, treatment room and reclining chair (6–8 selects)
- Team portraits for Nina, Sue, Pim and Tuk (6–8 selects) — the `/studio`
  team block and the homepage `TeamProof` section are built and will take
  portraits as soon as each person approves one
- Cupping glasses, massage candle and steam equipment in use (3–4 selects)
- Parking and the arrival detail for `/kontakt`

Once those exist, replace the corresponding entries in
`src/data/media/photos.ts` and drop the `media-note` captions from the
placements that become documentary.

## Build pipeline

Derived renditions are produced by `node scripts/media/build-media.mjs`, driven
by `scripts/media/manifest.json`. Originals stay outside the repository (the
supplied `SATUUU` folder); only the derived files under `public/assets/photo`
and `public/assets/film` are committed.

Each still is rendered at 480, 768, 1200 and 1600 px (2000 px for lead images;
the 2026 generated set stops at its 1100 px master and is never upscaled) in
three formats:

| Format | Encoder | Settings | Avg. at 1200 px |
|---|---|---|---:|
| AVIF | ffmpeg `libaom-av1` | CRF 32, still-picture, yuv420p | 48 KB |
| WebP | `cwebp` | q 74, method 6, metadata stripped | 76 KB |
| JPEG | ImageMagick | q 80, progressive, 4:2:0, unsharp 0x0.6+0.5 | 136 KB |

Films are trimmed to 7 seconds, scaled to 1280 px wide at 25 fps, encoded with
H.264 CRF 30 `-preset slow`, stripped of audio and given `+faststart`, with a
JPEG and WebP poster frame each.

Delivery happens through `src/components/media/Photo.tsx`, which emits a
`<picture>` with AVIF, WebP and JPEG sources, explicit `width`/`height` and
`sizes`, lazy loading by default and `fetchpriority="high"` only on the one
above-the-fold image per page.

## Delivered stills

| Asset id | Aspect | Source file |
|---|---|---|
| `head-spa-forehead-hold` | 4:5 | `close-up-forehead-massage.jpg` |
| `head-spa-candlelight` | 4:5 | `close-up-relaxed-woman-getting-massage.jpg` |
| `head-spa-cradled-head` | 3:2 | `close-up-woman-experiencing-therapy.jpg` |
| `head-spa-scalp-touch` | 3:2 | `person-conducting-reiki-therapy.jpg` |
| `facial-massage-warm-light` | 3:2 | `woman-getting-facial-massage-spa-ideal-beauty-relaxation-concepts.jpg` |
| `facial-massage-towel` | 3:2 | `young-woman-massaging-her-client-s-face.jpg` |
| `facial-gua-sha-pressure` | 4:5 | `thai-facial-rejuvenation-massage-treatment-wellness-spa-center.jpg` |
| `facial-overhead-view` | 3:2 | `top-view-young-woman-getting-spa-massage-treatment-beauty-spa-salon-face-massage-spa-skin-body-care.jpg` |
| `aqua-facial-mist` | 3:2 | `cosmetologist-sprays-refreshing-spray-girl-s-face-white-background.jpg` |
| `facial-care-application` | 3:2 | `spa-concept-with-woman-with-creme-face (1).jpg` |
| `studio-candlelight-mood` | 3:2 | `young-woman-having-face-massage-relaxing-spa-salon.jpg` |
| `skin-texture-freckles` | 4:5 | `front-view-woman-with-skin-imperfections.jpg` |
| `skin-texture-profile` | 4:5 | `side-view-woman-normal-skin-texture.jpg` |
| `skin-texture-eye-detail` | 1:1 | `young-woman-skin-texture-side-view.jpg` |
| `skin-texture-beard` | 3:2 | `side-view-young-man-with-beard-skin-texture.jpg` |
| `skin-texture-cheek` | 3:2 | `close-up-face-pores-texture (1).jpg` |
| `resting-hand-cheek` | 4:5 | `side-view-woman-with-freckles.jpg` |
| `face-eyes-closed` | 4:5 | `close-up-face-pores-texture.jpg` |
| `face-calm-profile` | 3:2 | `close-up-relaxed-young-woman-s-face-spa.jpg` |
| `face-warm-light-portrait` | 3:2 | `young-attractive-woman-enjoying-massage-spa-salon-beauty-treatment-natural-skin-care-cosmetic-natural-woman-beauty-skincare.jpg` |
| `foot-massage-candlelight` | 4:5 | `masseur-doing-foot-massage-with-candles-background-high-quality-photo.jpg` |
| `foot-care-towel` | 3:2 | `pedicure-foot-hands-massage-therapist-spa-acupressure-treatment-wellness-circulation-therapy-closeup-client-feet-beauty-salon-muscle-reflexology-skincare-relax.jpg` |
| `hands-light-study` | 4:5 | `beautiful-sensitive-hands-concept.jpg` |

### Carried over from the 2026 generated set

| Asset id | Aspect | Source |
|---|---|---|
| `head-spa-water-rinse` | 4:5 | `public/assets/treatment-head.jpg` (2026 generated set) |
| `facial-stone-detail` | 4:5 | `public/assets/treatment-face.jpg` (2026 generated set) |
| `foot-ritual-detail` | 4:5 | `public/assets/treatment-feet.jpg` (2026 generated set) |
| `body-massage-shoulders` | 4:5 | `public/assets/treatment-body.jpg` (2026 generated set) |
| `body-cupping-glasses` | 4:5 | `public/assets/treatment-cupping.jpg` (2026 generated set) |
| `studio-room-atmosphere` | 3:2 | `public/assets/authentic/studio.jpg` (2026 generated set) |

## Delivered films

| Asset id | Trim | Source file |
|---|---|---|
| `head-massage` | 7s from 4s | `0_Head_Massage_Scalp_Massage_1280x720.mp4` |
| `foot-massage` | 7s from 2s | `0_Foot_Massage_Spa_1280x720.mp4` |
| `spa-massage` | 7s from 2s | `6001916_Massage_Spa_1280x720.mp4` |
| `leg-massage` | 7s from 2s | `0_Massage_Leg_Massage_1280x720.mp4` |
| `foot-detail` | 7s from 3s | `0_Massage_Foot_1280x720.mp4` |

Ambient loops are mapped to treatment families in `src/data/media.ts` and shown
through `AmbientFilm`, which reuses `VideoLoop`: reduced-motion visitors and
browsers that fail to play the file see the poster frame, and every loop has a
visible pause control.
