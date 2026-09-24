"""
Regenerate the complete SATUUU99 brand asset package and zip it.

    python3 scripts/brand/build_all.py

Writes output/brand-assets/ and output/SATUUU99-Logo-and-Supergraphics.zip.
Requires rsvg-convert (brew install librsvg) and Python Playwright's Chromium.
"""

import shutil
import zipfile
from pathlib import Path

import build_guide
import build_logos
import build_supergraphics
from render import OUT, ROOT

README = Path(__file__).with_name("ASSETS-README.md")
ZIP_PATH = OUT.parent / "SATUUU99-Logo-and-Supergraphics.zip"


def package() -> None:
    files = sorted(p for p in OUT.rglob("*") if p.is_file() and ".work" not in p.parts and p.name != ".DS_Store")
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as archive:
        for path in files:
            archive.write(path, path.relative_to(OUT.parent))
    print(f"package: {len(files)} files -> {ZIP_PATH.relative_to(ROOT)}")


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    build_logos.main()
    build_supergraphics.main()
    build_guide.main()
    shutil.copyfile(README, OUT / "README.md")
    shutil.rmtree(OUT / ".work", ignore_errors=True)
    package()


if __name__ == "__main__":
    main()
