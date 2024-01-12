const { test, expect } = require('@playwright/test');

test('Method 1', async({page})=>
{
    await page.goto("http://autopract.com/selenium/upload1/");
    await page.locator('//input[@type="file"]').setInputFiles('tests/1.txt','tests/2.txt');    //single input file - 1st Method
    //await page.setInputFiles("//input[@type='file']", 'tests/test1.txt');    //2nd Method
    await page.locator('//button[@type="submit"]').click();
}
);

test('Method 2', async({page})=>
{
        await page.goto("http://autopract.com/selenium/upload2/");
        const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//a[@id="pickfiles"]').click()
])
        //await fileChooser.setFiles('tests/1.txt');
        await fileChooser.setFiles({name:'file.txt' ,mimetype:'text/plain',buffer:Buffer.from('This is a sample')});
        await page.locator('//a[@id="uploadfiles"]').click();
 
       
}
);