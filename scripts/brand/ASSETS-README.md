# SATUUU99 — Logo & supergraphics

Production artwork for the SATUUU99 identity. Read `SATUUU99-Logo-and-Supergraphics-Master.pdf` first: it has the rules and shows every lockup, crop, tone and pattern.

## Logos — `logos/`

Three lockups: **mark** (symbol only), **stacked** (symbol with wordmark below, the primary signature) and **inline** (symbol with wordmark beside it).

| Format | Backgrounds | Inks |
| --- | --- | --- |
| SVG `logos/svg/{lockup}/` | transparent | earth, ivory, stone, black, white |
| PNG `logos/png/{lockup}/light/` | ivory | earth |
| PNG `logos/png/{lockup}/light-white/` | white | earth |
| PNG `logos/png/{lockup}/dark/` | earth | ivory |
| PNG `logos/png/{lockup}/dark-shadow/` | shadow | ivory |
| PNG `logos/png/{lockup}/transparent/` | transparent | earth, ivory, stone, black, white |

PNGs come 1200 px and 4000 px wide and include clear space (one diamond height on every side). SVGs are cropped tight to the artwork for placement. Earth on ivory is the primary identity. Use black and white for single-colour production only.

## Supergraphics — `supergraphics/`

- **gesture/** — the symbol at supergraphic scale, cropped by the frame. Two crops: *rise* (off-centre, beside the copy) and *centre* (on axis, blades past both edges). Three tones: paper, taupe, dark.
- **pattern/** — the tonal repeat, full-bleed and *quiet* (centre left open for a headline). Tones: paper and dark.
- **pattern-tile/** — one seamless repeat (460 × 360 symbol units) as a swatch, in paper, taupe and dark, plus transparent sand, stone and earth.

Formats: slide 16:9 (1920 × 1080), square (1080 × 1080), portrait 4:5 (1080 × 1350), story 9:16 (1080 × 1920), web banner 3:1 (2400 × 800) and A4 portrait (210 × 297 mm, 300 dpi). Every master is an editable SVG with a PNG render at full size.

## Palette

| Name | Hex | Use |
| --- | --- | --- |
| Earth | `#3A332B` | Primary text and logo |
| Stone | `#A69A8C` | Secondary surfaces |
| Sand | `#D9CEC2` | Dividers and texture |
| Ivory | `#F6F3ED` | Primary canvas |
| Shadow | `#1B1B1B` | Deep contrast |

## Source

The symbol uses the vector curves from the website (`src/components/brand/markGeometry.ts`). The only supplied wordmark was a small raster, so it was redrawn as geometric monoline vector outlines matching that artwork's proportions, stroke and letter spacing, with no font dependency. Please check it against the original master artwork, if one exists, before large-format print.

To regenerate everything, run `python3 scripts/brand/build_all.py` in the website repository.
