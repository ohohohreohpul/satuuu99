import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }, testInfo) => {
  if (!testInfo.title.includes("brand preloader"))
    await page.addInitScript(() =>
      sessionStorage.setItem("satuuu99-intro-seen", "true"),
    );
});
test("mega menu, treatment finder and journal form a working discovery flow", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Behandlungen", exact: true }).click();
  const mega = page.locator("#site-menu");
  await expect(mega).toBeVisible();
  await expect(
    mega.getByRole("link", { name: "Japanese Head Spa", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(mega).toHaveCount(0);
  await page.getByRole("radio", { name: "Gesicht", exact: true }).check();
  await page.getByRole("link", { name: "Passende Rituale ansehen" }).click();
  await expect(page).toHaveURL(/focus=face/);
  await page.goto("/journal");
  await page.getByRole("searchbox").fill("Head-Spa");
  await expect(page.locator(".journal-card")).toHaveCount(1);
  await page.getByRole("searchbox").fill("zzzz");
  await expect(page.getByText("Noch keine passende Geschichte.")).toBeVisible();
  await page.getByRole("button", { name: "Alle Geschichten anzeigen" }).click();
  await expect(page.locator(".journal-card")).toHaveCount(5);
  await page.locator(".journal-card").first().click();
  await expect(page.locator("h1")).toHaveText("Dein erster Head-Spa-Besuch");
  await expect(page).toHaveTitle(/Dein erster Head-Spa-Besuch/);
  await page.getByRole("button", { name: "English" }).click();
  await expect(page.locator("h1")).toHaveText("Your first head spa visit");
});
test("mobile pages have no horizontal overflow and menu closes after navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of [
    "/",
    "/behandlungen",
    "/behandlungen/head-spa",
    "/studio",
    "/preise",
    "/gutscheine",
    "/kontakt",
    "/journal",
    "/journal/dein-erster-head-spa-besuch",
  ]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  }
  await page.getByRole("button", { name: "Menü öffnen" }).click();
  await page
    .locator("#site-menu")
    .getByRole("link", { name: /Journal/ })
    .click();
  await expect(page.locator("#site-menu")).toHaveCount(0);
  await expect(page).toHaveURL(/\/journal$/);
});
test("dynamic updates validate data and fail without blocking the home page", async ({
  page,
}) => {
  await page.route("**/content/studio-updates.json", (route) =>
    route.fulfill({
      json: {
        items: [
          {
            id: "test",
            title: { de: "Eine neue Nachricht", en: "A new update" },
            body: { de: "Aus dem Studio.", en: "From the studio." },
            label: { de: "Mehr erfahren", en: "Learn more" },
            href: "/studio",
          },
          {
            id: "expired",
            expiresAt: "2020-01-01",
            title: { de: "Abgelaufen", en: "Expired" },
            body: { de: "Alt", en: "Old" },
            label: { de: "Mehr", en: "More" },
            href: "/studio",
          },
        ],
      },
    }),
  );
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Eine neue Nachricht" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Abgelaufen" })).toHaveCount(
    0,
  );
  await page.route("**/content/studio-updates.json", (route) => route.abort());
  await page.reload();
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".studio-updates")).toHaveCount(0);
});
test("reduced motion leaves homepage content readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero h1")).toHaveCSS("opacity", "1");
  await expect(page.locator(".brand-story")).toHaveCSS("opacity", "1");
});

test("immersive menu traps focus, restores the trigger and switches its imagery", async ({
  page,
}) => {
  await page.goto("/");
  const glass = page.locator(".immersive-nav");
  expect(
    await glass.evaluate((element) => ({
      radius: getComputedStyle(element).borderRadius,
      blur: getComputedStyle(element).backdropFilter,
    })),
  ).toEqual(expect.objectContaining({ radius: "28px" }));
  expect(
    await glass.evaluate((element) => getComputedStyle(element).backdropFilter),
  ).toContain("blur");
  const trigger = page.getByRole("button", { name: "Menü öffnen" });
  await trigger.click();
  const close = page.getByRole("button", { name: "Menü schließen" });
  await expect(close).toBeFocused();
  await page
    .locator(".menu-ritual-title")
    .filter({ hasText: "Gesicht" })
    .hover();
  await expect(page.locator(".menu-photo img.is-visible")).toHaveAttribute(
    "src",
    "/assets/treatment-face.jpg",
  );
  await page.locator(".menu-bottomline a").last().focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(".menu-topline .header-brand")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("#site-menu")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await page.locator(".brand-story").scrollIntoViewIfNeeded();
  await expect(page.locator(".immersive-header")).toHaveClass(/on-paper/);
});
test("living menu and visit journey respond to visitor intent", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Menü öffnen" }).click();
  await page.getByRole("link", { name: "02 Das Studio", exact: true }).hover();
  await expect(page.locator(".menu-photo-caption")).toContainText(
    "Klein. Ruhig.",
  );
  await expect(page.locator(".menu-photo img.is-visible")).toHaveAttribute(
    "src",
    "/assets/authentic/studio.jpg",
  );
  await page.keyboard.press("Escape");
  const journey = page.locator(".visit-journey");
  await journey.scrollIntoViewIfNeeded();
  await expect(
    journey.getByRole("heading", {
      name: "Die Tür fällt zu. Der Tag bleibt draußen.",
    }),
  ).toBeVisible();
  await journey.getByRole("tab", { name: /03 Loslassen/ }).click();
  await expect(
    journey.getByRole("heading", {
      name: "Dein Ritual. Dein Tempo. Deine Zeit.",
    }),
  ).toBeVisible();
  await expect(journey.locator(".journey-progress i")).toHaveAttribute(
    "style",
    /75%/,
  );
});
test("the immersive film remains pausable", async ({ page }) => {
  await page.goto("/");
  const control = page.locator(".film-control");
  await expect(control).toBeVisible();
  await page.waitForFunction(() => {
    const v = document.querySelector("video");
    return v && !v.paused;
  });
  await control.click();
  await expect(control).toHaveAttribute("aria-label", "Video abspielen");
});

test("local authority pages are substantial, linked and machine readable", async ({
  page,
}) => {
  await page.goto("/japanese-head-spa-ahrensburg");
  await expect(
    page.getByRole("heading", { name: "Japanese Head Spa in Ahrensburg" }),
  ).toBeVisible();
  await expect(page.locator(".local-content section")).toHaveCount(3);
  await expect(page.locator(".local-faq details")).toHaveCount(4);
  const schema = JSON.parse(
    (await page
      .locator('script[type="application/ld+json"]')
      .last()
      .textContent()) || "{}",
  );
  expect(schema["@type"]).toBe("Service");
  expect(schema.areaServed).toContain("Ahrensburg");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator("body")).toHaveJSProperty("scrollWidth", 390);
});

test("brand preloader plays once and yields to the homepage", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".brand-preloader")).toBeVisible();
  await expect(page.locator(".preloader-word")).toContainText("SATUUU99");
  await expect(page.locator(".brand-preloader")).toHaveCount(0, {
    timeout: 5000,
  });
  await expect(page.locator(".hero h1")).toBeVisible();
  await page.reload();
  await expect(page.locator(".brand-preloader")).toHaveCount(0);
});
