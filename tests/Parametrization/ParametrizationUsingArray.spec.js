const {test,expect}= require('@playwright/test');
 
const credential = [
{login:'ArunGurusamy',password:'30529S'},
{login:'SAral1996',password:'SAral@7200'},
{login:'misr82hn02',password:'misr82hn02'},
 
]
for(const loginId of credential){
    test(`testing with ${loginId.login}`,async ({page})=>{
 
    await page.goto("https://adactinhotelapp.com/index.php");
    await page.locator('id=username').fill(loginId.login);
    await page.locator('id=password').fill(loginId.password);
    await page.locator('#login').click();
    await expect(page).toHaveTitle('Adactin.com - Search Hotel');
 
 
    })
}