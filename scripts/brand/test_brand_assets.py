"""Checks for the brand asset builders.  python3 -m pytest scripts/brand"""

import re
import shutil
import subprocess

import pytest

import build_logos
import build_supergraphics as sg
import geometry as g


def test_wordmark_spells_the_brand_with_measured_tracking():
    assert g.WORD == "SATUUU99"
    assert len(g.LETTER_GAPS) == len(g.WORD) - 1
    # The supplied artwork is about 13.2 cap heights wide.
    assert 12.5 < g.wordmark_width() / g.CAP < 13.5


def test_every_glyph_is_a_closed_outline_within_the_cap_height():
    for char, glyph in g.GLYPHS.items():
        assert glyph.path.startswith("M") and glyph.path.endswith("Z"), char
        ys = [float(v) for v in re.findall(r"-?\d+(?:\.\d+)?", glyph.path)[1::2]]
        assert min(ys) >= -0.5 and max(ys) <= g.CAP + 0.5, char


def test_stacked_lockup_centres_the_wordmark_on_the_symbol_axis():
    stacked = build_logos._stacked()
    x, _, w, _ = stacked.bounds
    assert x + w / 2 == pytest.approx(g.MARK_AXIS, abs=6)


def test_inline_lockup_keeps_the_symbol_height():
    inline = build_logos._inline()
    assert inline.bounds[3] == pytest.approx(g.MARK_H)
    assert inline.bounds[2] > 3 * g.MARK_W


def test_logo_kit_covers_every_lockup_and_variant():
    assert {lockup.slug for lockup in build_logos.LOCKUPS} == {"mark", "stacked", "inline"}
    assert {c.name for c in build_logos.INK_VARIANTS} == {"earth", "ivory", "stone", "black", "white"}
    slugs = {bg.slug for bg in build_logos.BACKGROUNDS}
    assert {"light", "dark"} <= slugs


@pytest.mark.skipif(not shutil.which("rsvg-convert"), reason="rsvg-convert not installed")
def test_pattern_tile_repeats_seamlessly(tmp_path):
    from PIL import Image, ImageChops, ImageStat

    svg = tmp_path / "tile.svg"
    svg.write_text(sg.tile_svg("#000000", "#FFFFFF"))
    png = tmp_path / "tile.png"
    subprocess.run(["rsvg-convert", "--width", "920", str(svg), "-o", str(png)], check=True)
    tile = Image.open(png).convert("L")
    w, h = tile.size
    # Opposite edges meet in the repeat, so they must carry the same ink.
    # (Adjacent pixel rows differ a little where a sharp tip crosses an edge.)
    pairs = [
        ((0, 0, 1, h), (w - 1, 0, w, h)),
        ((0, 0, w, 1), (0, h - 1, w, h)),
    ]
    for first, second in pairs:
        diff = ImageChops.difference(tile.crop(first), tile.crop(second))
        assert ImageStat.Stat(diff).mean[0] < 2
