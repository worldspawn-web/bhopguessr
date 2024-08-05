import { test, expect } from "@playwright/test";

test("Loaded successfully!", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page).toHaveTitle(/Guessr/);
});
