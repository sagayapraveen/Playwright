class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.userName=page.locator('id=username');
        this.password=page.locator('id=password');
        this.loginBtn=page.locator('#login');
    }
 
    async goTo()
    {
        await this.page.goto("https://adactinhotelapp.com/index.php");
    }
 
    async login(uName,pass){
        await this.userName.type(uName);
        await this.password.type(pass);
        await this.loginBtn.click();
 
    }
}
module.exports={LoginPage}