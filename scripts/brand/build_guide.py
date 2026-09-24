"""
Render the brand asset master guide (A4 landscape PDF) that documents the
logo kit and the supergraphics system, using the generated files.

    python3 scripts/brand/build_guide.py      (after build_logos / build_supergraphics)
"""

from datetime import date
from html import escape

from playwright.sync_api import sync_playwright

import geometry as g
from build_logos import INLINE_CAP, INLINE_GAP, STACKED_CAP
from build_supergraphics import COLUMN_STEP, FORMATS, ROW_STEP, TONES
from render import EARTH, IVORY, OUT, ROOT, SAND, SHADOW, STONE, write

GUIDE_PDF = OUT / "SATUUU99-Logo-and-Supergraphics-Master.pdf"
FONTS = ROOT / "public" / "fonts"


def _img(rel: str, alt: str, cls: str = "") -> str:
    return f'<img src="{escape(rel)}" alt="{escape(alt)}" class="{cls}">'


def _page(label: str, number: int, body: str, tone: str = "") -> str:
    return (
        f'<section class="page {tone}"><p class="label">{escape(label)}</p>'
        f'{body}<p class="folio">{number:02d}</p></section>'
    )


def _cover() -> str:
    body = (
        '<div class="cover">'
        + _img("logos/svg/stacked/satuuu99-stacked-earth.svg", "SATUUU99 logo", "cover-logo")
        + "<h1>Logo &amp; supergraphics master</h1>"
        + f"<p>Production artwork and rules · {date.today():%B %Y}</p></div>"
    )
    return _page("SATUUU99 / BRAND ASSETS", 1, body)


def _lockups() -> str:
    cells = [
        ("mark", "Symbol", "Where the name is already present nearby: favicons, stamps, details."),
        ("stacked", "Symbol with wordmark below", "The primary signature. Wordmark cap height and gap are equal."),
        ("inline", "Symbol with wordmark inline", "For wide, shallow spaces: headers, footers, signage bands."),
    ]
    items = "".join(
        f'<figure class="lockup lockup-{slug}"><div class="lockup-art">'
        + _img(f"logos/svg/{slug}/satuuu99-{slug}-earth.svg", title)
        + f"</div><figcaption><strong>{title}</strong><span>{note}</span></figcaption></figure>"
        for slug, title, note in cells
    )
    rules = (
        '<ul class="rules">'
        f"<li><b>Clear space</b> — one diamond height (X) on every side. PNG files include it.</li>"
        f"<li><b>Stacked</b> — wordmark cap = gap = {STACKED_CAP / g.MARK_H:.2f} × symbol height, centred on the diamond's axis.</li>"
        f"<li><b>Inline</b> — wordmark cap = {INLINE_CAP / g.MARK_H:.2f} × symbol height, gap {INLINE_GAP / INLINE_CAP:.1f} × cap; baseline on the blade tips.</li>"
        "<li><b>Minimum size</b> — symbol 16 px / 5 mm wide · stacked 72 px / 20 mm · inline 160 px / 35 mm.</li>"
        "<li>Never redraw, recolour outside the palette, stretch, outline or add effects.</li>"
        "</ul>"
    )
    body = f'<h2>Three lockups</h2><div class="lockups">{items}</div>{rules}'
    return _page("LOGO / LOCKUPS", 2, body)


def _colours() -> str:
    grounds = [
        ("light", IVORY.hex, "Earth on ivory — primary"),
        ("light-white", "#FFFFFF", "Earth on white"),
        ("dark", EARTH.hex, "Ivory on earth — reverse"),
        ("dark-shadow", SHADOW.hex, "Ivory on shadow"),
    ]
    tiles = "".join(
        f'<figure class="swatch" style="background:{bg}">'
        + _img(f"logos/png/stacked/{slug}/satuuu99-stacked-{slug}-1200w.png", caption)
        + f"<figcaption>{caption}</figcaption></figure>"
        for slug, bg, caption in grounds
    )
    inks = [(EARTH, IVORY), (IVORY, EARTH), (STONE, IVORY), ("black", "#FFFFFF"), ("white", SHADOW)]
    ink_tiles = ""
    for ink, ground in inks:
        name = ink if isinstance(ink, str) else ink.name
        bg = ground if isinstance(ground, str) else ground.hex
        ink_tiles += (
            f'<figure class="ink" style="background:{bg}">'
            + _img(f"logos/svg/mark/satuuu99-mark-{name}.svg", name)
            + f"<figcaption>{name}</figcaption></figure>"
        )
    body = (
        '<h2>Colour variants</h2><div class="swatches">' + tiles + "</div>"
        '<p class="sub">Transparent artwork, SVG and PNG, in five inks. Black and white are for single-colour production only.</p>'
        f'<div class="inks">{ink_tiles}</div>'
    )
    return _page("LOGO / COLOUR", 3, body)


def _gesture() -> str:
    rules = (
        '<div class="copy"><h2>One gesture.<br>A larger presence.</h2>'
        "<p>The symbol at supergraphic scale. Let the curves run past the edge, keep the contrast "
        "quiet and give the graphic its own space — never place copy over the diamond.</p>"
        "<ul class=\"rules\"><li><b>Rise</b> — off-centre; the gesture climbs beside the copy.</li>"
        "<li><b>Centre</b> — on axis; the blades open past both edges.</li>"
        "<li>Three tones: paper, taupe, dark. Fill fades from the diamond toward the blade tips.</li>"
        "<li>Always tonal. Never the logo colours at full contrast, never with the wordmark.</li></ul></div>"
    )
    crops = "".join(
        _img(f"supergraphics/gesture/png/square-1x1/satuuu99-gesture-{crop}-{tone.slug}.png", f"{crop} {tone.slug}")
        for crop in ("rise", "centre")
        for tone in TONES
    )
    body = f'<div class="split">{rules}<div class="grid3">{crops}</div></div>'
    return _page("SUPERGRAPHIC / GESTURE", 4, body)


def _formats() -> str:
    figs = "".join(
        f'<figure class="fmt">'
        + _img(f"supergraphics/gesture/png/{f.slug}/satuuu99-gesture-rise-dark.png", f.label)
        + f"<figcaption>{escape(f.label)}<span>{f.size[0]} × {f.size[1]}</span></figcaption></figure>"
        for f in FORMATS
    )
    body = (
        "<h2>Masters on every format</h2>"
        '<p class="sub">Each format ships in both crops and all three tones as layered SVG and full-size PNG.</p>'
        f'<div class="formats">{figs}</div>'
    )
    return _page("SUPERGRAPHIC / FORMATS", 5, body)


def _pattern() -> str:
    col = COLUMN_STEP / g.MARK_W
    row = ROW_STEP / g.MARK_W
    copy = (
        '<div class="copy"><h2>A familiar rhythm</h2>'
        "<p>The symbol repeated on a brick lattice. Keep it tonal and leave quiet around words and images.</p>"
        '<ul class="rules">'
        f"<li><b>Column step</b> — {col:.2f} × symbol width. <b>Row step</b> — {row:.2f} × symbol width.</li>"
        "<li>Every other row shifts by half a column. Blade tips stop just short of the diamond below.</li>"
        "<li>The seamless tile holds one full repeat; use it as a swatch or fill.</li>"
        "<li><b>Quiet</b> versions open the centre for a headline.</li>"
        "<li>Two tones: paper and dark. Transparent tiles in sand, stone and earth.</li></ul></div>"
    )
    art = (
        '<div class="grid2">'
        + _img("supergraphics/pattern/png/square-1x1/satuuu99-pattern-paper.png", "Pattern, paper")
        + _img("supergraphics/pattern/png/square-1x1/satuuu99-pattern-dark-quiet.png", "Pattern, dark, quiet centre")
        + "</div>"
    )
    return _page("SUPERGRAPHIC / PATTERN", 6, f'<div class="split">{copy}{art}</div>')


def _files() -> str:
    tree = """brand-assets/
  logos/
    svg/{mark,stacked,inline}/      satuuu99-{lockup}-{earth|ivory|stone|black|white}.svg
    png/{mark,stacked,inline}/
      light/ light-white/ dark/ dark-shadow/   satuuu99-{lockup}-{background}-{1200|4000}w.png
      transparent/                  satuuu99-{lockup}-transparent-{ink}-{1200|4000}w.png
  supergraphics/
    gesture/{svg,png}/{format}/     satuuu99-gesture-{rise|centre}-{paper|taupe|dark}
    pattern/{svg,png}/{format}/     satuuu99-pattern-{paper|dark}[-quiet]
    pattern-tile/{svg,png}/tile/    satuuu99-pattern-tile-{tone|transparent-ink}"""
    palette = "".join(
        f'<li><i style="background:{c.hex}"></i>{c.name.upper()} <span>{c.hex}</span></li>'
        for c in (EARTH, STONE, SAND, IVORY, SHADOW)
    )
    body = (
        "<h2>Files</h2>"
        '<p class="sub">SVGs are cropped tight to the artwork for placement. PNGs include clear space. '
        "Everything is regenerated from scripts/brand in the website repository.</p>"
        f'<pre class="tree">{escape(tree)}</pre><ul class="palette">{palette}</ul>'
    )
    return _page("FILES", 7, body)


CSS = """
@font-face { font-family: Playfair; src: url('FONTS/playfair-display.ttf'); }
@font-face { font-family: Jakarta; src: url('FONTS/plus-jakarta-sans.ttf'); font-weight: 200 800; }
@page { size: 297mm 210mm; margin: 0; }
* { box-sizing: border-box; margin: 0; }
body { font-family: Jakarta, sans-serif; color: EARTH; background: IVORY; }
.page { width: 297mm; height: 210mm; padding: 22mm 24mm 18mm; position: relative;
  page-break-after: always; overflow: hidden; background: IVORY; }
.label, .folio { position: absolute; font-size: 7pt; letter-spacing: .08em; }
.label { top: 10mm; left: 12mm; } .folio { bottom: 9mm; right: 12mm; }
h1, h2 { font-family: Playfair, serif; font-weight: 400; letter-spacing: -.02em; line-height: 1.1; }
h1 { font-size: 30pt; margin-top: 12mm; } h2 { font-size: 26pt; margin-bottom: 8mm; }
.sub { font-size: 9pt; margin: -3mm 0 7mm; max-width: 150mm; line-height: 1.5; }
.cover { height: 100%; display: grid; place-content: center; text-align: center; }
.cover-logo { width: 80mm; margin: 0 auto; } .cover p { font-size: 9pt; margin-top: 4mm; letter-spacing: .04em; }
.lockups { display: grid; grid-template-columns: .8fr 1fr 1.6fr; gap: 10mm; align-items: end; }
.lockup-art { height: 48mm; display: flex; align-items: center; justify-content: center;
  border: .3mm solid SAND; padding: 8mm; }
.lockup-art img { max-width: 100%; max-height: 100%; }
figcaption { font-size: 8pt; margin-top: 3mm; line-height: 1.45; }
figcaption strong { display: block; font-weight: 600; } figcaption span { display: block; }
.rules { list-style: none; padding: 0; margin-top: 8mm; font-size: 8.5pt; line-height: 1.55; columns: 2; column-gap: 12mm; }
.rules li { break-inside: avoid; margin-bottom: 2mm; } .rules b { font-weight: 600; }
.split .rules { columns: 1; }
.swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5mm; margin-bottom: 10mm; }
.swatch { height: 62mm; display: flex; flex-direction: column; justify-content: center; }
.swatch img { width: 100%; height: 48mm; object-fit: contain; }
.swatch figcaption, .ink figcaption { font-size: 7pt; text-align: center; margin: 0; padding-bottom: 2mm; }
.swatch[style*="3A332B"] figcaption, .swatch[style*="1B1B1B"] figcaption,
.ink[style*="3A332B"] figcaption, .ink[style*="1B1B1B"] figcaption { color: IVORY; }
.inks { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5mm; }
.ink { height: 30mm; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3mm;
  border: .3mm solid SAND; }
.ink img { height: 12mm; }
.split { display: grid; grid-template-columns: 1fr 1.35fr; gap: 14mm; align-items: center; height: 100%; }
.copy p { font-size: 9.5pt; line-height: 1.55; max-width: 90mm; }
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
.grid3 img, .grid2 img { width: 100%; display: block; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.formats { display: flex; flex-wrap: wrap; gap: 6mm 5mm; align-items: flex-end; }
.fmt img { height: 44mm; display: block; }
.fmt figcaption span { display: block; opacity: .7; }
.tree { font: 7.5pt/1.6 ui-monospace, Menlo, monospace; background: #EFEAE2; padding: 6mm; }
.palette { list-style: none; padding: 0; display: flex; gap: 8mm; margin-top: 7mm; font-size: 7.5pt; }
.palette i { display: inline-block; width: 6mm; height: 6mm; vertical-align: middle; margin-right: 2mm; border: .2mm solid SAND; }
.palette span { opacity: .7; margin-left: 1mm; }
"""


def build_html() -> str:
    css = (
        CSS.replace("FONTS", FONTS.as_uri())
        .replace("EARTH", EARTH.hex)
        .replace("IVORY", IVORY.hex)
        .replace("SAND", SAND.hex)
    )
    pages = [_cover(), _lockups(), _colours(), _gesture(), _formats(), _pattern(), _files()]
    return f'<!doctype html><html lang="en"><head><meta charset="utf-8"><title>SATUUU99 asset master</title><style>{css}</style></head><body>{"".join(pages)}</body></html>'


def main() -> None:
    html = write(OUT / ".work" / "guide.html", build_html())
    # Relative asset paths resolve against the package root.
    page_file = OUT / "guide.html"
    page_file.write_text(html.read_text(encoding="utf-8"), encoding="utf-8")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.goto(page_file.as_uri(), wait_until="networkidle")
            page.pdf(path=str(GUIDE_PDF), prefer_css_page_size=True, print_background=True)
            browser.close()
    finally:
        page_file.unlink(missing_ok=True)
    print(f"guide -> {GUIDE_PDF.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
