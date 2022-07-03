import { test, expect } from '@playwright/test';

test.describe('feature boomar', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://sb-www.boomar.games/');
  });

  test('go to home', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://sb-www.boomar.games/');

    const title = page.locator('.l-header__sitename__link');
    await expect(title).toHaveText('Boomar');

    // await expect(await page.locator('ul > li').count()).toBe(13);
    // await expect(await page.locator('.l-header__nav')).toHaveText(['Book', 'News'])
    // await expect(await page.locator('.l-header__nav').count()).toBe(1);
    // await expect(await page.locator('.l-header__nav')).toContainText('Book')

    await expect(await page.locator('ul > li').first()).toHaveText('Login');
    await expect(page.locator('.l-header__nav__list .cap_menu').first()).toHaveText('book');
    await expect(page.locator('.l-header__nav__list .cap_menu').nth(1)).toHaveText('news');
  });
});
