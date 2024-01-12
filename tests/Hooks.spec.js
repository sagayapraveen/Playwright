const { test, expect } = require('@playwright/test');
//import {test,expect} from '@playwright/test';

test.beforeAll('Before All', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
})

test.beforeEach('Hooks', async ({ page }) => {
    await page.goto("https://adactinhotelapp.com/index.php");
})

test('Login Adactin', async ({ page }) => {
    await page.locator('id=username').fill("sagayapraveen");
    await page.locator('id=password').fill("Chennai@123");
    await page.locator('#login').click();
})

test('Search Hotel Page', async ({ page }) => {
    await page.locator('id=username').fill("ArunGurusamy");
    await page.locator('id=password').fill("30529S");
    await page.locator('#login').click();
    await page.locator('//select[@id="location"]').selectOption('London');
    await page.locator('//select[@id="hotels"]').selectOption({ index: 2 });
    await page.locator('//select[@id="room_type"]').selectOption({ label: 'Standard' });
    await page.locator('//select[@id="room_nos"]').selectOption('1');
    await page.locator('//*[@id="Submit"]').click();
})

test.afterEach('After Each', async ({}, testInfo) => {
    console.log(`Finished ${testInfo.title}`);
    console.log(`with Status ${testInfo.status}`);
})

test.afterAll('After All', async ({ browser }) => {
    await browser.close();
})