# SATUUU99 — Designer and Developer Handoff

**Status date:** 14 September 2026  
**Project:** SATUUU99 wellness studio, Ahrensburg near Hamburg  
**Working folder:** `satuuu99-main`  
**Local preview:** http://127.0.0.1:5173/ — requires the development server on this computer.

## 1. Current status

The existing React website has been expanded and restyled around the supplied SATUUU99 branding boards. The current implementation includes 21 prerendered content pages, German/English interface copy, a searchable journal, a treatment finder, studio announcements, GSAP homepage motion and an immersive header/menu.

**This is a local implementation for review, not a deployed or launch-approved website.** The header logo still has a visual rendering defect. Content, brand assets, production integration and cross-browser verification need completion before release.

The repository already had multipage work and uncommitted changes when this work began. Existing work was retained and extended. Do not treat the whole current Git diff as newly authored in this session. No commit, pull request or production deployment was made during this work.

## 2. Brief and design direction

The requested outcome is a complete, content-rich website using the new brand identity, plus a usable brand deck. The subsequent design request was for a more immersive experience, especially a redesigned header.

The supplied PNGs are visual references, not original editable brand artwork. The implementation follows:

- Ivory and warm earth colours, natural materials and quiet imagery.
- Playfair Display for expressive headings; Plus Jakarta Sans for navigation and body copy.
- A mark inspired by Thai architectural roof forms.
- Large editorial type, spacious compositions and restrained movement.
- A full-screen film opening with navigation over the image; an ivory navigation surface after scrolling.

| Token | Reference value | Use |
| --- | --- | --- |
| Earth | `#3A332B` | Primary text and dark surfaces |
| Stone | `#A69A8C` | Supporting surfaces; not the default small-text colour |
| Sand | `#D9CEC2` | Dividers and secondary surfaces |
| Ivory | `#F6F3ED` | Main canvas |
| Shadow | `#1B1B1B` | Deep contrast |

Supporting text uses a darker stone derivative. Contrast still needs a formal accessibility audit, especially over moving imagery.

## 3. What is implemented

### Header, menu and homepage

- Fixed header with a centred brand signature, menu trigger, language selector and booking link.
- Transparent/light-on-film styling at the top of the homepage; an ivory surface after scrolling and on inner pages.
- Full-screen menu with editorial page links, treatment links and photography that changes on hover or keyboard focus.
- Menu entrance/exit motion, Escape-to-close, focus containment, trigger-focus restoration and background scroll locking.
- Full-screen homepage film, large serif headline, booking CTA and scroll link.
- GSAP hero entrance, section reveals and film parallax, with cleanup when leaving the page.
- Reduced-motion support and a user-controlled film pause button.
- Brand story, existing treatment explorer, treatment finder, studio section, gift-card information, studio updates and journal previews.

**Known exception:** the logo in the new signature component has displayed as a solid rectangle or disappeared in the menu. This remains unresolved; passing interaction tests does not establish that the mark renders correctly.

### Pages and content

The current build produces **21 content URLs**, plus a separate `404.html`:

| Route | Content |
| --- | --- |
| `/` | Homepage |
| `/behandlungen` | Treatment catalogue |
| `/behandlungen/:treatmentId` | 10 treatment-detail pages |
| `/studio` | Studio introduction |
| `/gutscheine` | Gift-card information |
| `/preise` | Price guidance and link to the official price list |
| `/kontakt` | Contact, directions and visit FAQs |
| `/head-spa-hamburg` | Local Head Spa landing page |
| `/journal` | Searchable/filterable journal index |
| `/journal/:slug` | Three bilingual articles |

Journal topics: first Head Spa visit, choosing a ritual, and planning time in Ahrensburg. These are draft editorial content for owner review, not an ongoing publishing programme.

### What “dynamic content” currently means

| Feature | Current behaviour | Limitation |
| --- | --- | --- |
| Treatment finder | Select a body area and follow a link to the matching catalogue category | Rule-based catalogue guidance; no personalised assessment or booking integration |
| Treatment catalogue/menu | Both use shared treatment data | Developer-maintained TypeScript data |
| Journal | Search by text, filter by category and open related articles | Articles live in the repository; no editor/admin screen |
| Studio announcements | Fetch a JSON file on mount and every five minutes; filter invalid/expired items | Managed announcements, not live business availability |
| Booking | Links to the existing official calendar | No appointment API, checkout or availability feed |
| Prices | Links to the existing official price list | No price synchronisation |

There is **no connected CMS, database, backend or admin interface** in this implementation.

### SEO foundation

- Route-specific titles, descriptions and canonical URLs.
- Social metadata and existing business structured data in the HTML foundation.
- Robots directives, sitemap generation and a branded not-found page.
- Build-time browser prerendering of linked pages into HTML files.
- Internal links between the journal, treatments, studio and booking guidance.

German is the default indexable content. English is an interface toggle using local storage; separate English URLs and `hreflang` have not been implemented. Search rankings, indexation and structured-data eligibility have not been verified.

## 4. Code map

Paths below are relative to the repository root for portability.

| File / directory | Responsibility |
| --- | --- |
| `src/App.tsx` | Routes, site layout and general 404 |
| `src/components/nav/NavBar.tsx` | Immersive header, full-screen menu, preview imagery and keyboard handling |
| `src/components/ui/BrandMark.tsx` | Current raster-to-SVG-mask signature; unresolved visual defect |
| `src/components/ui/VideoLoop.tsx` | Existing video playback, poster fallback, reduced-motion and pause control |
| `src/pages/HomePage.tsx` | Homepage section composition |
| `src/sections/Hero.tsx` | Opening copy, film and booking CTA |
| `src/lib/useHomeMotion.ts` | GSAP/ScrollTrigger homepage animation |
| `src/sections/BrandStory.tsx` | Brand introduction |
| `src/sections/RitualFinder.tsx` | Interactive category-based treatment finder |
| `src/sections/StudioUpdates.tsx` | Announcement fetching, validation and expiry filtering |
| `src/pages/JournalPage.tsx` | Journal index, article template and home previews |
| `src/data/journal.ts` | Three bilingual journal articles |
| `src/data/content.ts` | Treatments, navigation and official business destinations |
| `public/content/studio-updates.json` | Editable announcement feed |
| `src/lib/i18n.tsx` | Existing German/English context and stored preference |
| `src/lib/usePageMeta.ts` | Page metadata, canonicals and robots directives |
| `src/index.css` | Shared styling, reference palette, typography and responsive overrides |
| `src/sections/Footer.tsx` | Footer navigation and brand signature |
| `public/brand/` | Raster crops from the supplied branding reference |
| `public/fonts/` | Self-hosted fonts and OFL licences |
| `index.html` | Base metadata and business structured data |
| `scripts/prerender.mjs` | Chrome-based route crawl, static HTML and sitemap generation |
| `tests/site.spec.ts` | Six browser interaction checks |
| `playwright.config.ts` | Browser test setup |
| `package.json`, `package-lock.json` | GSAP/Playwright dependencies and build/test commands |
| `docs/BRAND-AND-CONTENT.md` | Additional content-maintenance and hosting notes |

The existing treatment, studio, prices, contact, gift-card and local landing-page code remains part of the site. It received the shared visual treatment; not every inner page has had a bespoke immersive redesign.

## 5. Designer handoff: work still needed

### Priority 1 — Final brand assets

- [ ] Supply original vector symbol and wordmark, with approved proportions and spacing.
- [ ] Supply positive, reversed and small-size variants; favicon and social avatar exports.
- [ ] Confirm minimum size, clear space, pattern construction and approved supergraphic crops.
- [ ] Replace the current raster-derived header mark with approved artwork.

The existing assets are screenshot crops. They are not recovered vector masters, and enlarging them cannot restore original detail.

### Priority 2 — Finish the website art direction

- [ ] Review the transparent header, scrolled header and full-screen menu as three separate states.
- [ ] Approve desktop, tablet and mobile layouts, including navigation labels and booking visibility.
- [ ] Check headline readability against multiple frames of the moving film.
- [ ] Define the desired extent of immersive treatment below the opening section and on inner pages.
- [ ] Review image changes and motion timing in the menu, including the reduced-motion experience.
- [ ] Approve German and English line breaks and typography at narrow widths.
- [ ] Supply approved studio/team photography or explicitly approve the use of concept imagery.

Existing spa imagery is generated mood imagery; it should not be presented as documentary photography of the actual studio.

### Priority 3 — Finalise the deck

- [ ] Review the proposed brand voice and implementation guidance.
- [ ] Replace raster logos/mockups with original-resolution artwork where available.
- [ ] Update the digital-application slide to show the approved final website/header. The present slide describes the direction and uses a mood image, not a screenshot of the latest interface.
- [ ] Prepare any required print specifications and a final distribution PDF.

## 6. Developer handoff: work still needed

### Release blockers

1. **Resolve `BrandMark.tsx` rendering.** The component currently uses an SVG filter/mask over a PNG plus image-load state. Rectangle/missing-mark states were observed in the menu. Prefer the designer's original SVG, or a verified transparent asset, over further mask workarounds. Verify the header, open menu and footer after navigation and reload.
2. **Agree production integration.** Preserve the existing calendar, price list and legal endpoints. A blanket SPA fallback or replacement of the existing site could break these destinations.
3. **Obtain business/content sign-off.** Confirm treatment availability, pricing destinations, address, contact information, gift-card policy and all public copy. Operational information was checked against the official site on 12 September 2026; that is not ongoing synchronisation.
4. **Complete visual and browser QA.** Current automated coverage is Chrome-based. Test Safari/iOS, Firefox, Android, tablet, narrow screens and landscape layouts, including menu scrolling and video controls.

### Before production release

- [ ] Consolidate `src/index.css`: it contains accumulated overrides and older header/hero styles from design iterations. Remove obsolete rules carefully after the new design is approved.
- [ ] Run formatting across the final source and developer scripts; the latest mask experiment has not been fully cleaned up.
- [ ] Decide whether content stays in Git/JSON or moves to a CMS. If a CMS is required, implement editorial roles, preview and publishing workflows, validation and build invalidation.
- [ ] If live prices or appointments are required, integrate an authorised source; retain clear loading/error states and do not infer availability.
- [ ] Validate prerender output with JavaScript disabled, including SVG ID references and route-specific metadata. React currently mounts over the prerendered markup rather than hydrating it.
- [ ] Harden route discovery: the crawler currently depends on rendered links and does not open the menu. Add an explicit route source if future pages are not otherwise linked.
- [ ] Review canonical/trailing-slash behaviour on the chosen host and configure actual HTTP 404 responses.
- [ ] Decide whether English needs its own indexable URLs; add locale routing and `hreflang` if required.
- [ ] Review structured data and social-sharing images for the final brand and approved business details.
- [ ] Optimise imagery, film and fonts for delivery; measure Core Web Vitals on the hosted build. Responsive image formats/sizes and performance budgets are not complete.
- [ ] Audit keyboard navigation, screen-reader announcements, focus visibility, contrast and all reduced-motion effects, including CSS image transitions.
- [ ] Confirm analytics requirements and any associated consent/privacy changes before adding trackers.
- [ ] Set up staging, CI, deployment configuration, old-URL redirects and a rollback plan.
- [ ] Review existing uncommitted changes with the project owner before committing or merging.

The optional announcement feed currently keeps previously loaded items if a later refresh fails. Expiry filtering happens on successful fetches. If strict expiry during outages matters, add local expiry enforcement and tests.

## 7. Running and verifying the project

```sh
npm ci
npm run dev
npm run test:e2e
npm run build
npm run preview
```

The test and prerender configurations use Playwright with the `chrome` channel. Install/provision Google Chrome on the developer or CI machine, or deliberately update both configurations to use another provisioned browser. The prerender script uses port `4179`; it must be free.

`npm run build` runs TypeScript checking, Vite bundling and browser prerendering. Deploy the generated `dist` directory only after integration has been agreed. Serve existing files and directory index files before any fallback, and serve `404.html` with HTTP status 404 for genuinely missing routes.

### Verification status

Rechecked on 14 September 2026: **all six browser tests passed**, and **TypeScript, Vite bundling and prerendering of all 21 content URLs completed successfully**. The current logo-rendering defect remains a separate visual issue.

The six automated checks cover:

1. Menu → treatment finder → journal discovery and English switching.
2. No horizontal overflow on nine representative routes at 390 px, plus mobile menu navigation.
3. Announcement rendering, expired-item filtering and initial network failure.
4. Readable content with reduced motion enabled.
5. Menu focus handling, Escape, preview-image switching and scrolled-header styling.
6. Film pause control.

Desktop/mobile screenshots were also inspected. These checks do **not** certify visual correctness: they did not detect the logo-mask defect. They do not constitute a complete accessibility, performance, cross-browser or production-integration audit.

## 8. Deliverables available

- `output/SATUUU99-Brand-Deck.pptx` — 14 slides; editable text and colour swatches, embedded raster artwork.
- `output/SATUUU99-Brand-Package.zip` — the PowerPoint, 14 individual 1920 × 1080 slide PNGs, both font files, licences and a README.
- `docs/BRAND-AND-CONTENT.md` — content-maintenance notes.
- This handoff document and the current website source.

Install the included fonts before editing the PowerPoint to preserve the typography. The deck passed package/layout checks and its rendered slides were reviewed; it was not opened and validated in Microsoft PowerPoint. Its raster source artwork remains resolution-limited.

## 9. Recommended next sequence

1. Designer supplies the approved vector mark and reviews the latest header/menu direction.
2. Developer fixes logo rendering and removes obsolete styling.
3. Owner approves business facts, imagery and German/English copy.
4. Designer completes the inner-page and mobile review and updates the deck's digital application.
5. Developer finalises CMS/booking scope, SEO, accessibility, performance and production routing.
6. Team reviews a staging build, signs off and deploys with a rollback plan.

## Release preparation update — 14 September 2026

The earlier logo-mask defect described above has now been fixed for release. `BrandMark.tsx` uses a static, transparent SVG traced from the supplied raster silhouette, with simple colour inversion on the film header. The filter/mask and image-load-state workaround has been removed. The menu mark has been visually verified; an original designer-authored vector master is still desirable for print and future refinement.

Vercel is the existing production host, connected to the GitHub `main` branch. `vercel.json` now serves the prerendered output with clean URLs instead of rewriting every request to the homepage. The prerender script uses packaged Chromium on Vercel/Linux and local Chrome on macOS. This section supersedes the earlier logo release blocker and local-Chrome-only build guidance. Production deployment confirmation is recorded in the release conversation.
