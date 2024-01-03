const Base = require('../helpers/base');

class Header extends Base {
    constructor(page) {
        super(page);
    }

    get lamodaLogo() {
        return this.page.locator('//*[@aria-label="Главная"]');
    }

    get contactlessDeliveryButton() {
        return this.page.locator('//*[text()="Бесконтактная доставка!"]');
    }

    get contactlessDeliveryPopup() {
        return this.page.locator('//*[@href="/lp/safe_delivery/?ad_id=841917"]//*[@class="_paragraph_c9cjr_62"]');
    }

    get loginButton() {
        return this.page.locator('//*[text()="Войти"]');
    }

    get searchField() {
        return this.page.locator('//*[@placeholder="Поиск"]');
    }

    get searchButton() {
        return this.page.locator('//*[@class="_root_1su1z_2"]/*[@type="button"]');
    }

    get saleButton() {
        return this.page.locator('//*[text()=" Sale%"]');
    }

    get shoppingCartButton() {
        return this.page.locator('//*[@class="_count_1kpa7_11"]');
    }

    get signinButton() {
        return this.page.locator('//*[text()="Войти"]');
    }

    async searchProduct(text) {
        await this.searchField.fill(text);
        await this.click(this.searchButton);
    }
}

module.exports = Header;