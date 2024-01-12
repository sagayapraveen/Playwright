const {test, expect} = require('@playwright/test');    
 
test('Popup Window', async({page})=>
{
    await page.goto("http://autopract.com/selenium/iframe1/");
 
    //const myFrame1 = page.frame("testframe");   //BySelector
    //const myFrame2 = page.frame({name: "testframe"});     //By Frame Name
    const myFrame3 = page.frame({url: "http://autopract.com/selenium/form1/"});      //By Url
    //const myFrame4 = page.frame({url: /form1/});      // By Partial Url

    await myFrame3.locator('(//input[@class="form-control"])[2]').fill("123@gmail.com");
    await myFrame3.locator('(//input[@class="form-control"])').nth(0).fill("Aish"); //Using nth option
    //await myFrame3.fill("(//input[@class='form-control'])[1]", "Aish");    //Sending input nearby locator
    //await myFrame3.locator('(//input[@class="form-control"])').nth(1).fill("123@gmail.com")
 
 
 
}
);