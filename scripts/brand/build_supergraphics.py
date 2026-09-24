"""
Build the SATUUU99 supergraphics master: the gesture (the symbol at
supergraphic scale, cropped by the frame) and the pattern (the symbol as a
tonal repeat), laid out on standard formats in the brand's quiet tones.

    python3 scripts/brand/build_supergraphics.py

Rules from the brand deck, slides 06 and 07:
  Gesture - let the curves extend beyond the edge; a generous crop and a
            quiet contrast; give the graphic its own space.
  Pattern - keep it tonal; leave areas of quiet around words and images.
"""

from dataclasses import dataclass
from pathlib import Path

import geometry as g
from render import EARTH, IVORY, OUT, SAND, STONE, Colour, fmt, svg_document, to_png, write

SG_DIR = OUT / "supergraphics"

# Pattern lattice in symbol units, shared with src/components/brand/PatternField.tsx:
# each mark stands on its own, blade tips ending just short of the diamond below.
COLUMN_STEP = 460.0
ROW_STEP = 180.0
TILE_W, TILE_H = COLUMN_STEP, ROW_STEP * 2


@dataclass(frozen=True)
class Tone:
    slug: str
    ground: Colour
    light: str  # gesture fill near the diamond
    shade: str  # gesture fill toward the blade tips
    pattern: str  # pattern ink


# Tonal steps, matching src/styles/supergraphics.css.
TONES = (
    Tone("paper", IVORY, "#E4DBCF", "#EEE8DF", "#E6DED3"),
    Tone("taupe", STONE, "rgb(255 255 255 / 0.42)", "rgb(255 255 255 / 0.12)", "#B1A698"),
    Tone("dark", EARTH, "rgb(214 198 180 / 0.2)", "rgb(214 198 180 / 0.05)", "#483F36"),
)
PATTERN_TONES = tuple(t for t in TONES if t.slug in ("paper", "dark"))


@dataclass(frozen=True)
class Crop:
    """Gesture placement: mark width as a multiple of the frame width, the
    symbol's axis as a fraction of the width, the diamond's top as a fraction
    of the height."""

    width: float
    axis: float
    top: float


@dataclass(frozen=True)
class Format:
    slug: str
    label: str
    size: tuple[int, int]
    rise: Crop  # off-centre, the gesture rising beside the copy (deck slide 06)
    centre: Crop  # on axis, the blades opening past both edges
    pattern_mark: float  # pattern mark width as a fraction of the frame width
    physical: tuple[str, str] | None = None


FORMATS = (
    Format("slide-16x9", "Slide 16:9", (1920, 1080), Crop(2.1, 0.28, 0.06), Crop(1.6, 0.5, 0.08), 0.24),
    Format("square-1x1", "Social square", (1080, 1080), Crop(2.4, 0.74, 0.05), Crop(1.9, 0.5, 0.1), 0.42),
    Format("portrait-4x5", "Social portrait 4:5", (1080, 1350), Crop(2.5, 0.74, 0.05), Crop(2.0, 0.5, 0.14), 0.42),
    Format("story-9x16", "Story 9:16", (1080, 1920), Crop(2.9, 0.74, 0.06), Crop(2.3, 0.5, 0.24), 0.5),
    Format("banner-3x1", "Web banner 3:1", (2400, 800), Crop(1.2, 0.78, 0.06), Crop(1.0, 0.5, 0.08), 0.16),
    Format("a4-portrait", "A4 portrait, 300 dpi", (2480, 3508), Crop(2.5, 0.74, 0.05), Crop(2.0, 0.5, 0.18), 0.4, ("210mm", "297mm")),
)


def _mark_defs(mark_id: str) -> str:
    return f'<g id="{mark_id}">{g.mark_svg()}</g>'


def gesture_svg(fmt_: Format, crop: Crop, tone: Tone) -> str:
    w, h = fmt_.size
    scale = crop.width * w / g.MARK_W
    x = crop.axis * w - g.MARK_AXIS * scale
    y = crop.top * h - g.MARK_TOP * scale
    grad = (
        '<linearGradient id="gesture-light" gradientUnits="userSpaceOnUse" '
        f'x1="0" y1="{fmt(g.MARK_TOP)}" x2="0" y2="{fmt(g.MARK_BOTTOM)}">'
        f'<stop offset="0" stop-color="{tone.light}"/><stop offset="1" stop-color="{tone.shade}"/>'
        "</linearGradient>"
    )
    body = (
        f"<defs>{grad}</defs>"
        f'<rect width="{w}" height="{h}" fill="{tone.ground.hex}"/>'
        f'<g fill="url(#gesture-light)">{g.mark_svg(x, y, scale)}</g>'
    )
    title = f"SATUUU99 gesture — {fmt_.label}, {tone.slug}"
    return svg_document((0, 0, w, h), body, title, fmt_.physical)


def _lattice(scale: float, w: float, h: float, mark_id: str) -> str:
    """Brick lattice of marks covering the frame, a mark's axis on the centre."""
    step_x, step_y = COLUMN_STEP * scale, ROW_STEP * scale
    cx, cy = w / 2, h / 2
    cols = int(w / step_x / 2) + 2
    rows = int(h / step_y / 2) + 3
    uses = []
    for row in range(-rows, rows + 1):
        shift = step_x / 2 if row % 2 else 0
        for col in range(-cols, cols + 1):
            ax = cx + col * step_x + shift
            top = cy + row * step_y - (g.MARK_H / 2) * scale
            x = ax - g.MARK_AXIS * scale
            y = top - g.MARK_TOP * scale
            uses.append(
                f'<use href="#{mark_id}" transform="translate({fmt(x)} {fmt(y)}) scale({scale:.5f})"/>'
            )
    return "".join(uses)


def pattern_svg(fmt_: Format, tone: Tone, quiet: bool) -> str:
    w, h = fmt_.size
    scale = fmt_.pattern_mark * w / g.MARK_W
    mask_def, mask_attr = "", ""
    if quiet:
        # "Leave areas of quiet around words": the centre opens to the ground.
        # The gradient pads with its last stop, so the corners stay patterned.
        mask_def = (
            '<radialGradient id="quiet" cx="0.5" cy="0.5" r="0.5">'
            '<stop offset="0.42" stop-color="#000"/><stop offset="0.96" stop-color="#fff"/>'
            "</radialGradient>"
            f'<mask id="quiet-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="{w}" height="{h}">'
            f'<rect width="{w}" height="{h}" fill="url(#quiet)"/></mask>'
        )
        mask_attr = ' mask="url(#quiet-mask)"'
    body = (
        f"<defs>{_mark_defs('pattern-mark')}{mask_def}</defs>"
        f'<rect width="{w}" height="{h}" fill="{tone.ground.hex}"/>'
        f'<g fill="{tone.pattern}"{mask_attr}>{_lattice(scale, w, h, "pattern-mark")}</g>'
    )
    title = f"SATUUU99 pattern — {fmt_.label}, {tone.slug}{', quiet centre' if quiet else ''}"
    return svg_document((0, 0, w, h), body, title, fmt_.physical)


def tile_svg(ink: str, ground: str | None) -> str:
    """One seamless repeat of the pattern, TILE_W x TILE_H symbol units."""
    uses = []
    for row in range(-1, 3):
        shift = COLUMN_STEP / 2 if row % 2 else 0
        for col in range(-1, 2):
            ax = col * COLUMN_STEP + shift
            top = row * ROW_STEP - g.MARK_H / 2
            uses.append(f'<use href="#tile-mark" x="{fmt(ax - g.MARK_AXIS)}" y="{fmt(top - g.MARK_TOP)}"/>')
    ground_rect = f'<rect width="{fmt(TILE_W)}" height="{fmt(TILE_H)}" fill="{ground}"/>' if ground else ""
    body = (
        f"<defs>{_mark_defs('tile-mark')}"
        f'<clipPath id="tile"><rect width="{fmt(TILE_W)}" height="{fmt(TILE_H)}"/></clipPath></defs>'
        f'{ground_rect}<g clip-path="url(#tile)" fill="{ink}">{"".join(uses)}</g>'
    )
    return svg_document((0, 0, TILE_W, TILE_H), body, "SATUUU99 pattern tile — seamless repeat")


def _emit(svg_path: Path, doc: str, png_width: int) -> list[Path]:
    write(svg_path, doc)
    png = svg_path.parents[2] / "png" / svg_path.parent.name / svg_path.with_suffix(".png").name
    to_png(svg_path, png, png_width)
    return [svg_path, png]


def build() -> list[Path]:
    written: list[Path] = []
    for f in FORMATS:
        width = f.size[0]
        for tone in TONES:
            for name, crop in (("rise", f.rise), ("centre", f.centre)):
                path = SG_DIR / "gesture" / "svg" / f.slug / f"satuuu99-gesture-{name}-{tone.slug}.svg"
                written += _emit(path, gesture_svg(f, crop, tone), width)
        for tone in PATTERN_TONES:
            for quiet in (False, True):
                suffix = "-quiet" if quiet else ""
                path = SG_DIR / "pattern" / "svg" / f.slug / f"satuuu99-pattern-{tone.slug}{suffix}.svg"
                written += _emit(path, pattern_svg(f, tone, quiet), width)
    tiles = [(t.slug, t.pattern, t.ground.hex) for t in TONES]
    tiles += [(f"transparent-{c.name}", c.hex, None) for c in (SAND, STONE, EARTH)]
    for slug, ink, ground in tiles:
        path = SG_DIR / "pattern-tile" / "svg" / "tile" / f"satuuu99-pattern-tile-{slug}.svg"
        written += _emit(path, tile_svg(ink, ground), int(TILE_W * 2))
    return written


def main() -> None:
    written = build()
    svgs = sum(1 for p in written if p.suffix == ".svg")
    print(f"supergraphics: {svgs} SVG, {len(written) - svgs} PNG -> {SG_DIR.relative_to(OUT.parents[1])}")


if __name__ == "__main__":
    main()
