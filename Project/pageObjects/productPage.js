const Base = require('../helpers/base');

class ProductPage extends Base {
    constructor(page) {
        super(page);
    }

    get productName() {
        return this.page.locator('//*[@class="_modelName_1lw0e_21"]');
    }

    get productPrice() {
        return this.page.locator('//*[@class="_title_1m6z4_2"]/span[1]');
    }

    get newProductPrice() {
        return this.page.locator('//*[@class="_title_1m6z4_2"]/span[2]');
    }

    get productDiscount() {
        return this.page.locator('//*[@class="_title_1m6z4_2"]//*[@class="_badgeText_1ruhn_44"]');
    }

    get productDescription() {
        return this.page.locator('//*[@class="_root_1ga1h_2"]/div/div[2]');
    }
}

module.exports = ProductPage;