import { test, expect } from "@playwright/test";

test("Loaded successfully!", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Guessr/);
});
