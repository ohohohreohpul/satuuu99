"""
Build the SATUUU99 logo kit: three lockups as SVG (transparent) and PNG
(light, dark and transparent backgrounds) in every colour variant.

    python3 scripts/brand/build_logos.py

SVGs are cropped tight to the artwork for placement. PNGs carry the clear
space (one diamond height) on every side so they can be dropped in as-is.
"""

from dataclasses import dataclass
from pathlib import Path

import geometry as g
from render import (
    BLACK,
    EARTH,
    IVORY,
    OUT,
    SHADOW,
    STONE,
    WHITE,
    Colour,
    svg_document,
    to_png,
    write,
)

# Stacked lockup: wordmark cap height and gap both match the artwork.
STACKED_CAP = 29.5
STACKED_GAP = STACKED_CAP
# Inline lockup: the wordmark grows so it holds its own beside the symbol.
INLINE_CAP = 58.0
INLINE_GAP = 1.6 * INLINE_CAP
# Wordmark baseline sits on the blade tips, as the roofline meets the ground.
INLINE_BASELINE = g.MARK_BOTTOM

PNG_WIDTHS = (1200, 4000)
LOGO_DIR = OUT / "logos"


@dataclass(frozen=True)
class Lockup:
    slug: str
    label: str
    body: str
    bounds: tuple[float, float, float, float]  # x, y, w, h of the ink


def _mark() -> Lockup:
    return Lockup("mark", "Symbol", g.mark_svg(), (g.MARK_LEFT, g.MARK_TOP, g.MARK_W, g.MARK_H))


def _stacked() -> Lockup:
    width = g.wordmark_width() * STACKED_CAP / g.CAP
    word_x = g.MARK_AXIS - width / 2
    word_y = g.MARK_BOTTOM + STACKED_GAP
    left = min(g.MARK_LEFT, word_x)
    right = max(g.MARK_RIGHT, word_x + width)
    bottom = word_y + STACKED_CAP
    body = g.mark_svg() + g.wordmark_svg(word_x, word_y, STACKED_CAP)
    return Lockup("stacked", "Symbol with wordmark below", body, (left, g.MARK_TOP, right - left, bottom - g.MARK_TOP))


def _inline() -> Lockup:
    width = g.wordmark_width() * INLINE_CAP / g.CAP
    word_x = g.MARK_RIGHT + INLINE_GAP
    word_y = INLINE_BASELINE - INLINE_CAP
    body = g.mark_svg() + g.wordmark_svg(word_x, word_y, INLINE_CAP)
    right = word_x + width
    return Lockup("inline", "Symbol with wordmark inline", body, (g.MARK_LEFT, g.MARK_TOP, right - g.MARK_LEFT, g.MARK_H))


LOCKUPS = (_mark(), _stacked(), _inline())

# Transparent variants: every lockup, every production colour.
INK_VARIANTS = (EARTH, IVORY, STONE, BLACK, WHITE)


@dataclass(frozen=True)
class Background:
    slug: str
    ink: Colour
    fill: Colour


# PNG backgrounds. Earth on ivory is the primary identity.
BACKGROUNDS = (
    Background("light", EARTH, IVORY),
    Background("light-white", EARTH, WHITE),
    Background("dark", IVORY, EARTH),
    Background("dark-shadow", IVORY, SHADOW),
)


def _ink(lockup: Lockup, ink: Colour) -> str:
    return f'<g fill="{ink.hex}">{lockup.body}</g>'


def build_svgs() -> list[Path]:
    written = []
    for lockup in LOCKUPS:
        for ink in INK_VARIANTS:
            title = f"SATUUU99 — {lockup.label}, {ink.name}"
            doc = svg_document(lockup.bounds, _ink(lockup, ink), title)
            written.append(write(LOGO_DIR / "svg" / lockup.slug / f"satuuu99-{lockup.slug}-{ink.name}.svg", doc))
    return written


def _padded(lockup: Lockup) -> tuple[float, float, float, float]:
    x, y, w, h = lockup.bounds
    pad = g.CLEAR_SPACE
    return x - pad, y - pad, w + 2 * pad, h + 2 * pad


def _png_set(lockup: Lockup, name: str, body: str, folder: Path, work: Path) -> list[Path]:
    title = f"SATUUU99 — {lockup.label}"
    source = write(work / f"{name}.svg", svg_document(_padded(lockup), body, title))
    pngs = []
    for width in PNG_WIDTHS:
        png = folder / f"{name}-{width}w.png"
        to_png(source, png, width)
        pngs.append(png)
    return pngs


def build_pngs(work: Path) -> list[Path]:
    written = []
    for lockup in LOCKUPS:
        base = LOGO_DIR / "png" / lockup.slug
        x, y, w, h = _padded(lockup)
        for bg in BACKGROUNDS:
            rect = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{bg.fill.hex}"/>'
            name = f"satuuu99-{lockup.slug}-{bg.slug}"
            written += _png_set(lockup, name, rect + _ink(lockup, bg.ink), base / bg.slug, work)
        for ink in INK_VARIANTS:
            name = f"satuuu99-{lockup.slug}-transparent-{ink.name}"
            written += _png_set(lockup, name, _ink(lockup, ink), base / "transparent", work)
    return written


def main() -> None:
    work = OUT / ".work" / "logos"
    svgs = build_svgs()
    pngs = build_pngs(work)
    print(f"logos: {len(svgs)} SVG, {len(pngs)} PNG -> {LOGO_DIR.relative_to(OUT.parents[1])}")


if __name__ == "__main__":
    main()
