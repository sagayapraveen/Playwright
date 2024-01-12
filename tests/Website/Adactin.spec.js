const { test, expect } = require('@playwright/test');

test('Adactin title asseertion @test', async ({ page }) => {
    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    await page.locator('//input[@id="username"]').type("sagayapraveen");
    await page.locator('input[id="password"]').fill("GGE092");
    await page.locator('id=login').click();
    await expect(page).toHaveTitle("Adactin.com - Search Hotel");

    /*const err= (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
    console.log("Error message: "+err)
    await expect(err).toBe("Invalid Login details or Your Password might have expired. Click here to reset your password");*/

    const welcome = await page.locator('//input[@id="username_show"]').getAttribute('value');
    await expect(welcome).toBe("Hello sagayapraveen!");
    console.log("welcome message: " + welcome)

    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({ index: 1 });
    await page.locator('//select[@id="room_type"]').selectOption({ label: 'Standard' });
    await page.locator('//select[@id="room_nos"]').selectOption('2');
    await page.locator('//input[@id="Submit"]').click();
    await expect(page).toHaveTitle("Adactin.com - Select Hotel");

    await page.locator("//input[@id='radiobutton_0']").check();
    //await page.check("//input[@id='radiobutton_0']");
    await expect(page.locator("//input[@id='radiobutton_0']")).toBeChecked();
    expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeTruthy();
    //expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeFalsy();

    await page.locator("//input[@id='continue']").click();

    await page.locator("//input[@name='first_name']").fill("Praveen")
    await expect(page.locator("//input[@name='first_name']")).toHaveValue('Praveen');

    await page.locator("//input[@name='last_name']").fill("Messi")
    await page.locator("//textarea[@name='address']").fill("Chennai, Tamilnadu")
    await page.locator("//input[@name='cc_num']").fill("1234567890123456")
    await page.locator('//select[@id="cc_type"]').selectOption('American Express');
    await page.locator('//select[@id="cc_exp_month"]').selectOption('February');
    await page.locator('//select[@id="cc_exp_year"]').selectOption('2025');
    const value = await page.evaluate('document.querySelector("#cc_exp_year").value');
    // async function extractSelectedValue(selectedOption){
    //     return selectedOption.evaluate(sel => sel.options[sel.options.selectedIndex].textContent);
    // }
    // const value = page.locator('//select[@id="cc_exp_year"]');
    await expect(value).toBe('2025');

    await page.locator("//input[@name='cc_cvv']").fill("786")
    await page.locator("//input[@name='book_now']").click();

    const confirm = (await page.locator("//td[contains(text(),'Booking')]").textContent()).trim();
    console.log(confirm);
    await expect(confirm).toBe("Booking Confirmation");

    await page.locator("//input[@name='my_itinerary']").click();
    await page.locator("(//input[@type='checkbox'])[2]").check();
    await page.check("(//input[@type='checkbox'])[3]");
    await page.uncheck("(//input[@type='checkbox'])[3]");
    await page.click("(//input[@type='checkbox'])[4]");

    expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy();
    expect(await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeFalsy();
    expect(await page.locator("(//input[@type='checkbox'])[4]").isChecked()).toBeTruthy();


    const allText = await page.locator('//input[contains(@id,"order_id")]').count();
    console.log(allText);
});