"""Shared palette, SVG document and PNG export helpers for the brand builders."""

import shutil
import subprocess
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "brand-assets"


@dataclass(frozen=True)
class Colour:
    name: str
    hex: str


# Brand palette from the brand deck (slide 08).
EARTH = Colour("earth", "#3A332B")
STONE = Colour("stone", "#A69A8C")
SAND = Colour("sand", "#D9CEC2")
IVORY = Colour("ivory", "#F6F3ED")
SHADOW = Colour("shadow", "#1B1B1B")
# Production mono colours, for print and third-party placements.
BLACK = Colour("black", "#000000")
WHITE = Colour("white", "#FFFFFF")


def fmt(value: float) -> str:
    text = f"{value:.2f}".rstrip("0").rstrip(".")
    return "0" if text == "-0" else text


def svg_document(
    view: tuple[float, float, float, float],
    body: str,
    title: str,
    size: tuple[str, str] | None = None,
) -> str:
    """`size` overrides the rendered size, e.g. ("210mm", "297mm") for print."""
    x, y, w, h = view
    width, height = size or (fmt(w), fmt(h))
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{fmt(x)} {fmt(y)} {fmt(w)} {fmt(h)}" '
        f'width="{width}" height="{height}">'
        f"<title>{title}</title>{body}</svg>\n"
    )


def write(path: Path, text: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    return path


def require_rasteriser() -> str:
    tool = shutil.which("rsvg-convert")
    if not tool:
        raise SystemExit("rsvg-convert is required for PNG export: brew install librsvg")
    return tool


def to_png(svg: Path, png: Path, width: int) -> None:
    """Rasterise an SVG at a fixed pixel width, keeping transparency."""
    png.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        [require_rasteriser(), "--width", str(width), "--keep-aspect-ratio", str(svg), "-o", str(png)],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(f"PNG export failed for {svg.name}: {result.stderr.strip()}")
