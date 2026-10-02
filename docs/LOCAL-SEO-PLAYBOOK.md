# satuuu99: Local SEO & GEO Playbook

**Prepared:** 30 September 2026
**Goal:** Top-3 Google map pack and #1 organic in Ahrensburg; page-one visibility for high-intent terms in northeast Hamburg and Kreis Stormarn; being the studio AI assistants name for "Head Spa near Hamburg".

Search volumes below are qualitative estimates from market knowledge, not measured data. Verify them in Google Search Console after 4–8 weeks, or with a keyword tool, before investing in new content.

## 1. How ranking works for this business

| Surface | What decides it | Who controls it |
|---|---|---|
| **Map pack** (the 3 businesses with the map, most local clicks) | Google Business Profile category and completeness, **number, freshness and text of reviews**, distance to searcher, consistent name/address/phone across the web | Owner, off-site |
| **Organic results** under the map | Page relevance (titles, content, internal links), technical health, local backlinks | Website (this repo) |
| **AI answers** (Google AI Overviews, ChatGPT, Perplexity, Gemini) | Clear factual pages, structured data, llms.txt, consistent facts across the site, booking system and third-party listings | Both |

In Ahrensburg, distance works in your favour: you are central. In Hamburg the map pack will almost always show Hamburg studios, so Hamburg is won through **organic pages and AI answers**, not the map.

## 2. Keyword map

### Ahrensburg: aim for #1 (map + organic)

| Keyword cluster | Page | Status |
|---|---|---|
| Massage Ahrensburg · Wellnessmassage Ahrensburg | `/wellnessmassage-ahrensburg` | Title retargeted to "Massage in Ahrensburg" |
| Head Spa Ahrensburg · Japanese Head Spa Ahrensburg | `/japanese-head-spa-ahrensburg` | Good |
| Kosmetik Ahrensburg · Gesichtsbehandlung Ahrensburg · Kosmetikstudio Ahrensburg | `/gesichtsbehandlung-ahrensburg` | Title retargeted to include "Kosmetik" |
| Wellness Ahrensburg · Day Spa Ahrensburg | Homepage | Title now leads with Ahrensburg |
| Schröpfmassage / Kerzenmassage / Fußmassage / Gua Sha / Aqua Facial Ahrensburg | `/behandlungen/*` | Good |
| **Thai Massage Ahrensburg** | none yet | Sold in booking (Thai Spa-Massage, Thai-Yoga), no page (see §5) |
| **Wimpernlifting / Augenbrauenlifting Ahrensburg** | none yet | Sold in booking, no page (see §5) |
| **Fußpflege Ahrensburg** | `/behandlungen/foot-care` | High-volume term; consider a dedicated local page |
| Gutschein Wellness / Massage Ahrensburg | `/gutscheine` | Weak while gift-card sales are paused |

### Hamburg: page one organic, AI answers

| Keyword cluster | Page |
|---|---|
| Head Spa Hamburg · Japanese Head Spa Hamburg · Headspa Hamburg | `/head-spa-hamburg` (honest "25 km from Hamburg" angle; keep it) |
| Head Spa / Massage Volksdorf, Bergstedt, Rahlstedt, Sasel, Farmsen | Covered as districts on `/head-spa-hamburg`. **Do not** create one thin page per district: Google treats swapped-name pages as doorway spam. |

### Nearby towns (Großhansdorf, Bargteheide, Ammersbek, Siek, Delingsdorf)

Most people there search "… Ahrensburg" or plain "Massage in der Nähe", and the Ahrensburg pages and map pack already answer those. Mention the towns naturally in travel/arrival copy (already done) and in Business Profile service areas. No separate pages.

## 3. Google Business Profile: the biggest lever

Do these in order; each directly affects the map pack.

1. **Claim and verify** the profile for Manhagener Allee 45 (if not done). One profile only; merge or remove duplicates.
2. **Name:** exactly "satuuu99" (or the registered trading name). Do not add keywords to the name; that violates Google's guidelines and risks suspension.
3. **Primary category:** *Day Spa*. Secondary: *Massage Therapist*, *Facial Spa*, *Beauty Salon*, *Foot Care* (use only categories for services you actually sell).
4. **Services:** add every bookable treatment with its price, using the names from the booking system.
5. **Website link:** `https://www.satuuu99.de/`. **Booking link:** `https://booking.satuuu99.de/`.
6. **Hours:** Wed–Fri 10–19, Sat 10–18; add special hours for holidays.
7. **Photos:** at least 20 real photos (exterior with signage, entrance, parking, treatment room, team, each treatment). Add 2–4 new ones monthly. Real photos beat stock for both ranking and conversion.
8. **Posts:** one per week (new treatment, seasonal offer, gift cards, open slots).
9. **Q&A:** add and answer the questions from the site FAQs yourself (hair gets wet? parking? do I undress?).

## 4. Reviews: the ranking factor you can move fastest

- Target **50+ Google reviews within 6 months**, then a steady 4–8 per month. Freshness matters as much as count.
- Ask every guest in person at checkout, then send the review short link (from the Business Profile dashboard) by WhatsApp the same day. A QR code card at the counter helps.
- **Reply to every review** within 48 hours, naming the treatment naturally ("Schön, dass dir das Head Spa gefallen hat…").
- Never buy reviews, offer discounts for them, or gate them (asking only happy guests). All three violate Google policy and German competition law (UWG).
- Do **not** add review stars to the website schema unless they are collected on the site itself. Google ignores self-serving review markup for local businesses.

## 5. Decisions needed from the owner

These block further on-site gains and must come from the business, not the developer.

1. **Legal pages: done (2 Oct 2026).** Impressum, Datenschutz and AGB are now at `/impressum`, `/datenschutz` and `/agbs`, imported 1:1 from the studio's WordPress site by `scripts/legal/import_legal.py`. The only changes: the staging hostname is replaced with satuuu99.de (it had broken the Impressum e-mail), and the AGB link to another business's privacy policy (nusumassage.de) now points to `/datenschutz`. Points for the owner or a lawyer to review in the source text:
   - The AGB still contain template placeholders: "(Internet-Adresse einfügen)" and "(hier sind gegebenenfalls der Name und die Anschrift … einzufügen)".
   - The EU online dispute-resolution (OS) platform closed on 20 July 2025; the OS paragraph in the Impressum and AGB can be removed.
   - The Datenschutz describes Google Analytics, Google Fonts, Google Maps embeds and Facebook, which this website does not use, but it does not mention Vercel hosting or the external booking system. A generator update would make it accurate.
   - The AGB are written for a shop shipping goods (samples, Schufa checks, delivery notes) rather than a studio selling treatments and printable vouchers.
2. **The website and booking system disagree:**
   - Booking sells Thai Spa-Massage, Thai-Yoga/Sportmassage, Spa-Massage, Spa-Package, Wimpernlifting, Augenbrauenlifting, Handmassage and Kopf- & Gesichtsmassage. The website mentions none of them.
   - Booking sells **Microneedling**, while the website and llms.txt state it is *not* offered. AI assistants read both and may give wrong answers. Decide which is true and correct the other.
   - **Japanese Head Spa, the site's lead service, is not bookable online.** If that is intentional (enquiry only), say so on the head spa pages; if not, add it to the booking system.
3. **Booking subdomain structured data:** `booking.satuuu99.de` publishes a second `LocalBusiness` with an empty address and no phone. Ask the booking provider to fill in the address/phone and add `sameAs: https://www.satuuu99.de/`, or remove it, so Google sees one consistent business.

## 6. Citations (consistent name, address, phone across the web)

Use exactly: **satuuu99 · Manhagener Allee 45 · 22926 Ahrensburg · +49 4102 20 40 410 · https://www.satuuu99.de/**

Priority listings: Google Business Profile, Apple Business Connect (Apple Maps / Siri), Bing Places (also feeds ChatGPT search), Instagram bio, Facebook page, Das Örtliche, Gelbe Seiten, 11880, Yelp, Treatwell (if used), Ahrensburg city / Stadtmarketing directory, Stormarn business directories.

Local links worth pursuing: Ahrensburg city marketing, Stormarner Tageblatt / Ahrensburger Zeitung (a feature on the studio opening or the Japanese Head Spa), neighbouring shops on Manhagener Allee (cross-promotion, gift-card partnerships), local wedding and hotel partners.

## 7. What was changed in the code (30 Sep 2026)

- **Canonical host fixed.** The live site serves on `www.satuuu99.de` (the apex 308-redirects), but every canonical, sitemap URL, schema id and llms.txt link pointed at the redirecting apex. All now use `https://www.satuuu99.de` via one `SITE_URL` constant in `src/lib/schema.ts`.
- **Dead price-list link fixed.** `/preisliste-ab-01-03-2026/` no longer exists (404) but was the prices call-to-action across the site and in schema/llms.txt. It now points to the booking calendar, which shows every treatment with its current price.
- **Titles retargeted** to the head terms: homepage "Head Spa & Massage in Ahrensburg bei Hamburg"; "Massage in Ahrensburg"; "Gesichtsbehandlung & Kosmetik in Ahrensburg". Footer anchors updated to match.
- **Business schema upgraded:** `DaySpa` type, logo, price range, image set, `knowsAbout`, Hamburg districts in `areaServed`, reserve action, plus a `WebSite` node.
- **Per-page preview images:** treatment and local pages now share their own photo in link previews (WhatsApp, Instagram DMs, AI answer cards) instead of the same hero poster.
- A test guards the www canonical so it cannot regress.

## 8. Measurement

1. **Google Search Console:** add the `https://www.satuuu99.de` property, submit `/sitemap.xml`, and check Pages → "Alternate page with proper canonical" drops over the next weeks.
2. **Business Profile Insights:** monthly calls, direction requests, website clicks.
3. **Rank checks** (monthly, incognito, location set to Ahrensburg and to Hamburg-Volksdorf): the Tier 1 terms in §2.
4. **AI visibility** (monthly): ask ChatGPT, Perplexity and Gemini "Wo kann ich in Ahrensburg ein Japanese Head Spa machen?" and "Head Spa in der Nähe von Hamburg" and note whether satuuu99 is named and whether the facts are right.
5. **Booking source:** add `?utm_source=google&utm_medium=organic&utm_campaign=gbp` to the Business Profile website link to separate map traffic from organic.
