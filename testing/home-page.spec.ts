import { test, expect } from '@playwright/test';
require('dotenv').config()

test.describe('feature boomar', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(process.env.BASE_URL);
  });

  test('go to home', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL(process.env.BASE_URL);

    const title = page.locator('.l-header__sitename__link');
    await expect(title).toHaveText('Boomar');

    // await expect(await page.locator('ul > li').count()).toBe(13);
    // await expect(await page.locator('.l-header__nav')).toHaveText(['Book', 'News'])
    // await expect(await page.locator('.l-header__nav').count()).toBe(1);
    // await expect(await page.locator('.l-header__nav')).toContainText('Book')

    await expect(await page.locator('ul > li').first()).toHaveText('Login');
    await expect(page.locator('.l-header__nav__list .cap_menu').first()).toHaveText('book');
    await expect(page.locator('.l-header__nav__list .cap_menu').nth(1)).toHaveText('news');

    /*const locator = page.locator('.l-header__login');
    await locator.click();*/
    // await expect(await page.locator('.c-form__submit')).toHaveText('Login');
    // await expect(await page.locator('button', { hasText: 'Login' })).toHaveText('Login');
    // await expect(await page.locator("input[name='identifier']")).toHaveText('tona@mango-byte.com');

  });

  test('go to login', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/login/`);

    await expect(page).toHaveURL(`${process.env.BASE_URL}/login/`);

    await page.fill("input[name='identifier']", 'tona@mango-byte.com')
    await page.fill("input[name='password']", 'MB@q1w2e3r4t5');
    await page.click('text=Login')

    await page.goto(process.env.BASE_URL);
    const title = page.locator('.l-header__sitename__link');
    await expect(title).toHaveText('Boomar');
  });
});
