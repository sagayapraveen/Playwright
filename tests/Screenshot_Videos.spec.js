const {test, expect, chromium} = require('@playwright/test');    
 
//test.slow('Popup Window', async({})=>   //slow the test exceution
test('Popup Window', async({})=>
{
    //await page.slow(30);
    const browser = await chromium.launch();
    const context = await browser.newContext({
    recordVideo: {
        dir:'Videos/',
    }
    })
    const page = await context.newPage();
 
    await page.goto("http://autopract.com/selenium/iframe1/");
    await page.screenshot({path:'Screenshots/screenshot.png'});
    await page.screenshot({path:'Screenshots/screenshot1.png', fullPage:true});
    await page.screenshot({path:'Screenshots/screenshot_'+Date.now()+'.png'});
    const myFrame3 = page.frame({url: "http://autopract.com/selenium/form1/"});      //By Url
    await myFrame3.fill("(//input[@class='form-control'])[1]", "Praveen");    //Sending input nearby locator
    await myFrame3.locator("(//input[@class='form-control'])[1]").screenshot({path: 'Screenshot/screenshot22.png'});     //Taking screenshot username alone
    await myFrame3.locator('(//input[@class="form-control"])').nth(1).fill("123@gmail.com")
 
}
);