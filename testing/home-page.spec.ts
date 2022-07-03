import { test, expect } from '@playwright/test';

test.describe('feature boomar', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://sb-www.boomar.games/');
  });

  test('go to home', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://sb-www.boomar.games/');
  });
});
