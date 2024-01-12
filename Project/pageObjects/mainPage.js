const Base = require('../helpers/base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get popularProductsSlider() {
        return this.page.locator('//*[contains(@class, "swiper-slide _item_10bum_48 swiper-slide-visible")]');
    }

    get brandLacosteIcon() {
        return this.page.locator('//*[contains(@href, "brand-lacoste")]/*');
    }
}

module.exports = MainPage;