"""
Vector geometry of the SATUUU99 signature.

The symbol reuses the refitted curves from src/components/brand/markGeometry.ts
(units of the original 390 x 225 artwork). The wordmark is rebuilt as a
geometric monoline from measurements of the supplied lockup (public/brand/
logo.png): cap height, stroke, letter widths and the wide tracking all follow
that artwork. Glyphs are designed on a cap height of 100 units and scaled.
"""

from dataclasses import dataclass
from math import cos, hypot, radians, sin

# --- Symbol -----------------------------------------------------------------

MARK_DIAMOND = "M197.5 7.5L213.5 42.5L197.5 70L181.5 42.5Z"
MARK_BLADE_LEFT = "M197.5 71C147.5 130.7 85 193.3 7 220.5C89.7 218.6 179.1 163.9 197.5 87Z"
MARK_BLADE_RIGHT = "M197.5 71C244.2 132.3 306.5 195.8 385 220.5C302.1 221.2 212.2 164.8 197.5 87Z"
MARK_PATHS = (MARK_DIAMOND, MARK_BLADE_LEFT, MARK_BLADE_RIGHT)

# Ink bounds of the symbol and the vertical axis through the diamond.
MARK_LEFT, MARK_TOP, MARK_RIGHT, MARK_BOTTOM = 7.0, 7.5, 385.0, 220.5
MARK_AXIS = 197.5
MARK_W = MARK_RIGHT - MARK_LEFT
MARK_H = MARK_BOTTOM - MARK_TOP
# Height of the diamond: the unit of clear space around every lockup.
CLEAR_SPACE = 70.0 - 7.5

# --- Wordmark -----------------------------------------------------------------

CAP = 100.0
STROKE = 11.0
HALF = STROKE / 2

# Gaps after each letter, as measured on the artwork (in cap units x 100).
# Open letters (A, T) sit a touch tighter, the U and 9 run a touch wider.
# The 9's tail leans this many degrees from vertical, as on the artwork.
TAIL_LEAN = 35.0

LETTER_GAPS = (98.0, 88.0, 98.0, 108.0, 108.0, 108.0, 108.0)


def _f(value: float) -> str:
    text = f"{value:.2f}".rstrip("0").rstrip(".")
    return "0" if text == "-0" else text


def _pt(x: float, y: float) -> str:
    return f"{_f(x)} {_f(y)}"


@dataclass(frozen=True)
class Glyph:
    width: float
    path: str  # outline in glyph units, origin top-left, cap height 100


def _glyph_t() -> Glyph:
    w = 73.0
    mid = w / 2
    d = (
        f"M0 0H{_f(w)}V{_f(STROKE)}H{_f(mid + HALF)}V{_f(CAP)}"
        f"H{_f(mid - HALF)}V{_f(STROKE)}H0Z"
    )
    return Glyph(w, d)


def _glyph_u() -> Glyph:
    w = 77.0
    r_out = w / 2
    r_in = r_out - STROKE
    turn = CAP - r_out  # where the stems begin to curve
    d = (
        f"M0 0H{_f(STROKE)}V{_f(turn)}"
        f"A{_f(r_in)} {_f(r_in)} 0 0 0 {_pt(w - STROKE, turn)}"
        f"V0H{_f(w)}V{_f(turn)}"
        f"A{_f(r_out)} {_f(r_out)} 0 0 1 {_pt(0, turn)}Z"
    )
    return Glyph(w, d)


def _glyph_a() -> Glyph:
    w = 90.0
    apex = w / 2
    slope = apex / CAP  # horizontal run per unit of height
    leg = STROKE * hypot(apex, CAP) / CAP  # horizontal thickness of a leg
    bar_top, bar_bottom = 63.0, 63.0 + STROKE

    def inner_left(y: float) -> float:
        return leg + (CAP - y) * slope

    def inner_right(y: float) -> float:
        return w - leg - (CAP - y) * slope

    counter_apex = CAP - (apex - leg) / slope
    d = (
        f"M0 {_f(CAP)}L{_pt(apex, 0)}L{_pt(w, CAP)}H{_f(w - leg)}"
        f"L{_pt(inner_right(bar_bottom), bar_bottom)}"
        f"H{_f(inner_left(bar_bottom))}L{_pt(leg, CAP)}Z"
        # Counter above the bar, wound the other way.
        f"M{_pt(apex, counter_apex)}L{_pt(inner_left(bar_top), bar_top)}"
        f"H{_f(inner_right(bar_top))}Z"
    )
    return Glyph(w, d)


def _glyph_s() -> Glyph:
    """Two stacked elliptical bands that meet on the spine as one contour."""
    w = 62.0
    rx = w / 2 - HALF
    ry = (CAP - STROKE) / 4
    cx = w / 2
    top_cy, bottom_cy = HALF + ry, CAP - HALF - ry
    top_end, bottom_end = radians(-30), radians(160)

    def at(cy: float, t: float, grow: float) -> tuple[float, float]:
        return cx + (rx + grow) * cos(t), cy + (ry + grow) * sin(t)

    def arc(grow: float, sweep: int, cy: float, t: float) -> str:
        x, y = at(cy, t, grow)
        return f"A{_f(rx + grow)} {_f(ry + grow)} 0 1 {sweep} {_pt(x, y)}"

    start = at(top_cy, top_end, HALF)
    d = (
        f"M{_pt(*start)}"
        + arc(HALF, 0, top_cy, radians(90))  # top band, outer edge, to spine
        + arc(-HALF, 1, bottom_cy, bottom_end)  # bottom band, inner edge
        + f"L{_pt(*at(bottom_cy, bottom_end, HALF))}"
        + arc(HALF, 0, bottom_cy, radians(-90))  # bottom band, outer edge
        + arc(-HALF, 1, top_cy, top_end)  # top band, inner edge
        + "Z"
    )
    return Glyph(w, d)


def _glyph_nine() -> Glyph:
    """A round bowl with a straight tail of the same weight, leaving the bowl
    tangentially on its lower right and cut square at the end."""
    w = 64.0
    r = w / 2 - HALF
    cx = cy = w / 2
    lean = radians(TAIL_LEAN)
    # Unit normal of the tail (pointing right and down) and its direction
    # (down and left). The tail's centreline touches the bowl's centreline.
    nx, ny = cos(lean), sin(lean)
    dx, dy = -sin(lean), cos(lean)
    top_x, top_y = cx + r * nx, cy + r * ny
    # Run the tail until the lower corner of its square cut meets the baseline.
    run = (CAP - HALF * ny - top_y) / dy
    end_x, end_y = top_x + dx * run, top_y + dy * run
    r_out, r_in = r + HALF, r - HALF
    d = (
        f"M{_pt(cx - r_out, cy)}"
        f"A{_f(r_out)} {_f(r_out)} 0 1 1 {_pt(cx + r_out, cy)}"
        f"A{_f(r_out)} {_f(r_out)} 0 1 1 {_pt(cx - r_out, cy)}Z"
        f"M{_pt(cx - r_in, cy)}"
        f"A{_f(r_in)} {_f(r_in)} 0 1 0 {_pt(cx + r_in, cy)}"
        f"A{_f(r_in)} {_f(r_in)} 0 1 0 {_pt(cx - r_in, cy)}Z"
        # Wound like the outer ring so the overlap stays filled.
        f"M{_pt(top_x - nx * HALF, top_y - ny * HALF)}"
        f"L{_pt(top_x + nx * HALF, top_y + ny * HALF)}"
        f"L{_pt(end_x + nx * HALF, end_y + ny * HALF)}"
        f"L{_pt(end_x - nx * HALF, end_y - ny * HALF)}Z"
    )
    return Glyph(w, d)


GLYPHS = {
    "S": _glyph_s(),
    "A": _glyph_a(),
    "T": _glyph_t(),
    "U": _glyph_u(),
    "9": _glyph_nine(),
}
WORD = "SATUUU99"


def wordmark_width() -> float:
    return sum(GLYPHS[c].width for c in WORD) + sum(LETTER_GAPS)


def wordmark_svg(x: float, y: float, cap: float) -> str:
    """Wordmark as <path> elements, cap top-left at (x, y), cap height `cap`."""
    scale = cap / CAP
    parts, cursor = [], 0.0
    for index, char in enumerate(WORD):
        glyph = GLYPHS[char]
        parts.append(
            f'<path transform="translate({_f(x + cursor * scale)} {_f(y)}) '
            f'scale({scale:.5f})" d="{glyph.path}"/>'
        )
        cursor += glyph.width + (LETTER_GAPS[index] if index < len(LETTER_GAPS) else 0)
    return "".join(parts)


def mark_svg(x: float = 0, y: float = 0, scale: float = 1.0) -> str:
    """Symbol as <path> elements, its artwork origin placed at (x, y)."""
    paths = "".join(f'<path d="{d}"/>' for d in MARK_PATHS)
    if x == 0 and y == 0 and scale == 1:
        return paths
    return f'<g transform="translate({_f(x)} {_f(y)}) scale({scale:.5f})">{paths}</g>'
