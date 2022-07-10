import {expect, test} from "@playwright/test";

test.describe('feature login in minority', () => {

    test('go to login page', async ({ page }) => {
        await page.goto(`${process.env.BASE_URL_MINORITY}/login/`)
        await page.fill("input[name='email']", 'process.env.USER_NAME_MINORITY')
        await page.fill("input[name='password']", 'process.env.PASSWORD_MINORITY')

        // await expect(page.locator("input[name='email']")).toHaveText(process.env.USER_NAME_MINORITY)
        // await expect(page.locator("input[name='password']")).toHaveText(process.env.PASSWORD_MINORITY)

        await page.locator(".v-btn__content").click()
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/users`);

        await page.goto(`${process.env.BASE_URL_MINORITY}/quick`)
        // await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/quick`);

        await page.goto(`${process.env.BASE_URL_MINORITY}/configuration`)
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/configuration`);
    });

    /*test('go to login page and go to quick page', async ({ page }) => {
        // const page = await context.newPage();
        await page.goto(`${process.env.BASE_URL_MINORITY}/login/`)
        await page.fill("input[name='email']", process.env.USER_NAME_MINORITY)
        await page.fill("input[name='password']", process.env.PASSWORD_MINORITY)

        await page.locator(".v-btn__content").click()
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/users`);

        await page.goto(`${process.env.BASE_URL_MINORITY}/quick`)
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/quick`);
    });

    test('go to login page and go to configuration page', async ({ page }) => {
        await page.goto(`${process.env.BASE_URL_MINORITY}/login/`)
        await page.fill("input[name='email']", process.env.USER_NAME_MINORITY)
        await page.fill("input[name='password']", process.env.PASSWORD_MINORITY)

        await page.locator(".v-btn__content").click()
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/users`);

        await page.goto(`${process.env.BASE_URL_MINORITY}/configuration`)
        await expect(page).toHaveURL(`${process.env.BASE_URL_MINORITY}/configuration`);
    });*/
});
