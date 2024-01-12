const { test, expect } = require('@playwright/test');
 
test.skip('Keyboard Actions', async ({ page }) => {
    await page.goto('https://google.com');
    await page.locator('//*[@id="APjFqb"]').type('Selenium');
    await page.locator('//*[@id="APjFqb"]').press('Control+KeyA+Backspace');
    await page.locator('//*[@id="APjFqb"]').type('Playwright');
    await page.locator('//*[@id="APjFqb"]').press('Enter');  //pressing enter key
})
 
test('Mouse Actions', async ({ page }) => {
    await page.goto('https://amazon.in');
    await page.locator('//a[@id="nav-link-accountList"]').hover();  //mouse hover
    await page.locator('//a[@id="nav-link-accountList"]').dblclick();  //double click
    await page.goto('https://amazon.in');
    //await page.locator('//a[@id="nav-link-accountList"]').click({ button: 'right' }); ---> right click
    await page.locator('//a[@id="nav-link-accountList"]').click({ modifiers: ['Shift'] });  //open a link in new window
    await page.locator('//a[@id="nav-link-accountList"]').click({ position: { x: 37, y: 45 } });  //like offset method
})