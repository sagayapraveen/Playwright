const { test, expect } = require('@playwright/test');

test('model popup', async ({ page }) => {
    await page.goto('https://demo.cyclos.org/ui/dashboard');
    await page.locator('//div[text()=" Login "]').click();

    await page.locator('//input[@autocomplete="username"]').fill("demo");
    await page.locator('//input[@autocomplete="password"]').fill("1234");
    await page.locator('(//button[@type="button"])[2]').click();

    await page.locator('//div[text()=" Pay user "]').click();
    await page.locator('//button[@class="btn btn-icon ml-2"]').click();
    await page.locator('//a[text()=" Ann\'s Café "]').click();
    const get_text = await page.locator('//a[text()=" Ann\'s Café "]').textContent();
    console.log(get_text);

    const a = await page.locator('//div[@class="text-truncate mw-100"]').textContent();
    await expect(a).toBe(get_text);
}
);