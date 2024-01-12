const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('dns');

test("Amazon Product Search", async ({ context }) => {
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@aria-label="Search Amazon.in"]').fill("Iphone");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    const one_value = await (page.locator('(//span[@class="a-size-medium a-color-base a-text-normal"])[1]').textContent());

    console.log("The Single Value is : " + one_value)

    const one_value_count = await (page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').count());
    console.log("The Single Value is : " + one_value_count)

    const desired_text = "Apple iPhone 14 (128GB) - Midnight";

    for (let i = 1; i <= one_value_count; i++) {
        if ((await page.locator("(//span[@class=\"a-size-medium a-color-base a-text-normal\"])[" + i + "]").textContent()) === desired_text) {

            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                page.locator("(//span[@class=\"a-size-medium a-color-base a-text-normal\"])[" + i + "]").click()])

            await page.waitForTimeout(5000);
            await expect(newPage).toHaveTitle("Apple iPhone 14 (128GB) - Midnight : Amazon.in: Electronics");
        }
    }

});