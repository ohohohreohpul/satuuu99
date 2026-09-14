# SATUUU99 identity and content

The site now uses the supplied brand-board palette: earth #3A332B, stone #A69A8C, sand #D9CEC2, ivory #F6F3ED and shadow #1B1B1B. Accessible supporting text uses a darker stone shade. Playfair Display and Plus Jakarta Sans are self-hosted, with their OFL licences in public/fonts.

The logo and reference mockups in public/brand are crops of the user's supplied PNG. They preserve the supplied artwork, but are raster assets, not recovered vector masters. The PowerPoint text and colour swatches are editable. For large-format print, replace the raster logo with the designer's original SVG, EPS or PDF. Spa photographs already in the repository are generated mood imagery; they do not document the actual studio.

## Editing content

- Treatments and business links: src/data/content.ts. Used by navigation, catalogue, detail pages and the finder.
- Bilingual journal articles: src/data/journal.ts. Add an entry with a unique slug, image, category, intro, related treatment ID and sections. The index, article route and home previews use this collection.
- Studio announcements: public/content/studio-updates.json. Each item has bilingual title, body and label, an internal href and a unique id. Optional expiresAt is an ISO timestamp. The website refreshes this file every five minutes, skips expired or invalid entries, and remains usable when the file is unavailable. Update this file on the deployed host to change announcements without rebuilding JavaScript. Rebuild the site to update the static search-engine snapshot too.
- No CMS or appointment API is connected. Booking and current prices remain on the existing official destinations. Announcements are managed content, not a live booking feed.

Existing operational details were rechecked at https://satuuu99.de/ on 12 September 2026. The gift-card-sales pause remains in place. Past closure and summer promotion notices were not republished as current news.

## Build and deployment

Run npm install, then npm run build. The build needs Google Chrome, which Playwright uses to render each linked route into its own dist/.../index.html file. The current output has 21 German-first pages, individual titles/descriptions/canonicals, a generated sitemap, and 404.html. English is available in the interface but does not currently have separate indexable URLs.

Serve dist as a static site with clean directory URLs. Serve existing files and directory index.html files before any SPA fallback. Configure the host to serve dist/404.html with HTTP 404 for missing URLs. Preserve the existing /kalender/, legal, privacy and official-price endpoints at satuuu99.de when integrating this frontend with the current production site. Do not replace those WordPress endpoints with the frontend fallback.

Run npm run test:e2e for the browser checks. The GSAP home animations use scoped matchMedia cleanup, respect reduced motion and leave page content available without animation. The existing video includes a playback control.

No production deployment was performed.
