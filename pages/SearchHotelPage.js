class SearchHotelPage {
 
    constructor(page) {
        this.page = page;
        this.city = page.locator('//select[@id="location"]');
        this.hotel = page.locator('//select[@id="hotels"]');
        this.rType = page.locator('//select[@id="room_type"]');
        this.rNos = page.locator('//select[@id="room_nos"]');
        this.submitBtn = page.locator('//input[@id="Submit"]');
        this.selectHotelChkBox = page.locator("//input[@id='radiobutton_0']");
        this.continue = page.locator("//input[@id='continue']");
 
    }
 
    async searchHotel(cityName, hotelIndex, roomType, roomNos) {
        await this.city.selectOption(cityName);
        await this.hotel.selectOption({ index: hotelIndex });
        await this.rType.selectOption(roomType);
        await this.rNos.selectOption(roomNos);
        await this.submitBtn.click();
    }
 
    async selectHotel() {
        await this.selectHotelChkBox.click();
    }
 
    async continueButton() {
        await this.continue.click();
    }
}
 
module.exports = { SearchHotelPage }