const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'serial' })

let page;
test.beforeAll('Before All', async ({ browser }) => {
    page = await browser.newPage();
})
 
test('Runs 1', async () => {
    await page.goto('https://adactinhotelapp.com/');
})
 
test('Runs 2', async () => {
    await page.locator('id=username').fill('SAral1996');
    await page.locator('id=password').fill('SAral@7200');
    await page.locator('id=login').click();
})
 
test('Runs 3', async () => {
    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({ index: 1 });
    await page.locator('//select[@id="room_type"]').selectOption({ label: 'Standard' });
    await page.locator('//select[@id="room_nos"]').selectOption('2');
    await page.locator('//input[@id="Submit"]').click();
})
 
test.afterAll('After All', async () => {
    await page.close();
})