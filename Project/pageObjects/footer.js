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

    get consentToDataProcessingCheckbox() {
        return this.page.locator('//*[@class="x-checkbox__content"]');
    }

    get primeBrandsFooterButton() {
        return this.page.locator('//*[@class="x-footer-seo-menu-tabs"]/*[text()="Премиум бренды"]');
    }

    get gucciFooterButton() {
        return this.page.locator('//*[@class="x-footer-seo-menu-tab-links"]//*[text()="Gucci"]');
    }
}

module.exports = Footer;