import { test, expect } from "@playwright/test";

test("Loaded successfully!", async ({ page, baseURL }) => {
  console.log(baseURL);
  await page.goto("/");
  await expect(page).toHaveTitle(/Guessr/);
});
