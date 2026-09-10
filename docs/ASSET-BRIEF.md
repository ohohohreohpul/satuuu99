# Magnific asset brief

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

A 5–6 second muted loop, based on the approved hero still. Locked camera, slow continuous massage movement, subtle breathing, no cuts, no exaggerated camera drift, no sound required. Preserve face, hands, linen and daylight from the still. Select and validate an image-to-video model through Magnific's video planning/catalog tools. Do not claim that a still-image model produced the video. Export web-optimized H.264 MP4 plus the still as fallback. Retain the current pause control, offscreen pause and reduced-motion poster mode.

## Delivered files

All files are local under `public/assets/` and wired through `src/data/media.ts`.

| File | Shot | Delivered | Size |
|---|---|---|---|
| `hero-poster.jpg` | Hero | 1200x1543 | 242 KB |
| `hero.mp4` | Hero loop | 900x1158, 5.0s, H.264, silent | 346 KB |
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

## Review notes

Each selected still was inspected at full size for hand and face anatomy before acceptance; finger counts and joints are correct in all seven. The upscaled hero was compared against its source at 1:1 to confirm the enhancer preserved content rather than reinterpreting it.

The atmosphere image remains an **atmosphere image**, not documentary photography of the real premises, and is labelled as such in the interface. Replace it with actual studio photography when the owner supplies it.
