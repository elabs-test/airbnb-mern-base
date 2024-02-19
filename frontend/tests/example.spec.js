// @ts-check
import { test, expect } from "@playwright/test";

test("count button", async ({ page }) => {
  await page.goto("http://airbnb-client:8080/");

  const counterButton = await page.getByTestId("counter");

  const counterBeforeClick = await counterButton.textContent()

  await counterButton.click();

  const counterAfterClick = await counterButton.textContent();

  if (counterBeforeClick !== null && counterAfterClick !== undefined) {
    expect(parseInt(counterAfterClick || '0')).toBeGreaterThan(parseInt(counterBeforeClick || '0'));
  }
});
