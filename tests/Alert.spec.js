const { test, expect } = require('@playwright/test');

test('Simple Alert', async ({ page }) => {
    await page.goto("http://autopract.com/selenium/alert5/");
    await page.locator('//button[@id="alert-button"]').click();
    page.on('Alert', async dialog => {
        expect(dialog.type()).toContain('Alert');
        expect(dialog.message()).toContain('This is an Alert box');
        await dialog.accept();
    });


    await expect(page.locator('//p[@id="msg"]')).toHaveText('You clicked on Ok button.');
})

test('Alert Confirm', async ({ page }) => {
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('Alert Confirm', async dialog_1 => {
        expect(dialog_1.type()).toContain('confirm');
        expect(dialog_1.message()).toContain("Do you want to save changes?");
        await dialog_1.dismiss();
    })
    await page.locator('//button[@id="confirm-button"]').click();
    await expect(page.locator('//p[@id="msg"]')).toHaveText('Save Canceled!');

})

test('Alert prompt', async ({ page }) => {
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter any number');
        await dialog.accept('50');

    });
    await page.locator('//button[@id="prompt-button"]').click();
    await expect(page.locator('//p[@id="msg"]')).toHaveText('You have entered number: 50');
}
)