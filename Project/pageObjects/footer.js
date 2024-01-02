const Base = require('../helpers/base');

class Footer extends Base {
    constructor(page) {
        super(page);
    }

    get subscribeButton() {
        return this.page.locator('//*[@label="Подписаться"]');
    }

    get subscribeErrorMassage() {
        return this.page.locator('//*[text()="Заполните электронную почту"]');
    }

    get consentTextToDataProcessing() {
        return this.page.locator('//*[@class="x-checkbox__content"]');
    }

    get brandsFooterButton() {
        return this.page.locator('//*[@class="x-footer-seo-menu-tabs"]/*[text()="Бренды"]');
    }

    get brandsFooterList() {
        return this.page.locator('//*[text()="Бренды"]/following::div[1]/*[@class="x-footer-seo-menu-tab-category-brands"]/following::div[1]/*');
    }
}

module.exports = Footer;