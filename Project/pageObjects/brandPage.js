const Base = require('../helpers/base');

class BrandPage extends Base {
    constructor(page) {
        super(page);
    }

    get pageTitle() {
        return this.page.locator('//*[contains(@class, "titleText")]');
    }
}

module.exports = BrandPage;