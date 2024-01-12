const { test, expect } = require('@playwright/test');

test('window example', async({page})=>{

    await page.goto("http://autopract.com/selenium/popup/");
    await page.locator('//a[@class="open-button"]').click()

    console.log(await page.locator('//div[@class="popup-content"]').textContent());
    await page.locator('//a[@class="close-button"]').click();

});