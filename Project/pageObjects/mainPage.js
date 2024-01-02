const Base = require('../helpers/base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get agreeCookiesButton() {
        return this.page.locator('//*[text()="Принять"]');
    }

    get popularProductsSlider() {
        return this.page.locator('//*[contains(@class, "swiper-slide _item_1i13w_48 swiper-slide-visible")]');
    }

    get brandLacosteIcon() {
        return this.page.locator('//*[contains(@href, "brand-lacoste")]/*');
    }
}

module.exports = MainPage;