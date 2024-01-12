const {test, expect}=require('@playwright/test');
 
test('Locators Example', async({page})=>
{
    await page.goto("https://www.amazon.in/");  
 
    //Implicit Role:
    // await page.getByRole("link", {name:"Hello, sign in Account & Lists"}).click();
    // await page.getByRole("textbox", {name:"Email or mobile phone number"}).fill("anithamanickam1407@gmail.com");
    // await page.getByRole("button", {name: "Continue"}).click();
 
 
    //Explicit Role:
    //await page.getByRole("button",  {name: "Open Menu"} ).click();
 
 
    //getByPlaceholder:
    await page.getByPlaceholder("Search Amazon").fill("Laptop");
    await page.locator('//input[@type="submit"]').click();

}
);