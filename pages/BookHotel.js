class BookHotel {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('//input[@id="first_name"]');
        this.lastName = page.locator('//input[@id="last_name"]');
        this.address = page.locator('//textarea[@id="address"]');
        this.cc_num = page.locator('//input[@id="cc_num"]');
        this.cc_type = page.locator('//select[@id="cc_type"]');
        this.cc_month = page.locator('//select[@id="cc_exp_month"]');
        this.cc_year = page.locator('//select[@id="cc_exp_year"]');
        this.cc_cvv = page.locator('//input[@id="cc_cvv"]');
        this.bookBtn = page.locator('//input[@id="book_now"]');
    }
 
    async personalDetails(fName, lName, addr) {
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.address.fill(addr);
    }
 
    async cardDetails(ccNumber, ccType, ccMon, ccYr, ccCv) {
        await this.cc_num.fill(ccNumber);
        await this.cc_type.selectOption(ccType);
        await this.cc_month.selectOption(ccMon);
        await this.cc_year.selectOption(ccYr);
        await this.cc_cvv.fill(ccCv);
    }
 
    async bookButton() {
        await this.bookBtn.click();
    }
 
 
 
 
}
module.exports = { BookHotel }