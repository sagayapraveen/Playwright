const { test, expect } = require('@playwright/test');
 
test.only('Assert Attribute Example', async ({ page }) => {
    await page.goto("https://adactinhotelapp.com/index.php");
 
    // Hard Assert:
 
    await expect(page.locator('id=username')).toHaveAttribute('class', 'login_input');
    await expect(page.locator('id=username')).toHaveAttribute('class', /input/);  //partial value
    await expect(page.locator('id=username')).toHaveAttribute('value', '');
    await expect(page.locator('id=username')).toHaveClass('login_input');  //Class Atrribute value here....
 
    //Soft Assert:
 
    await expect.soft(page.locator('id=username')).toHaveAttribute('class', 'login_input1');
    await expect(page.locator('id=username')).toHaveAttribute('class', /input/);
    await expect(page.locator('id=username')).toHaveAttribute('value', '');
    await expect(page.locator('id=username')).toHaveClass('login_input');
 
}
);
 
test('Locators Example', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
 
 
    await page.getByRole("link", { name: "Hello, sign in Account & Lists" }).click();
    //await page.waitForTimeout(5000);
    //await page.waitForLoadState();
    await expect(page.locator('//label[@class="a-form-label"]')).toHaveText('Email or mobile phone number');
    await expect(page.locator('//label[@class="a-form-label"]')).toContainText('phone');
    await expect(page.locator('//label[@class="a-form-label"]')).not.toContainText('laptop'); //Negative Assertion
 
 
}
);