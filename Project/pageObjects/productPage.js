const Base = require('../helpers/base');

class ProductPage extends Base {
    constructor(page) {
        super(page);
    }

    get firstProductInList() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card__link x-product-card__hit-area"]');
    }

    get firstProductNameInList() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card-description__microdata-wrap"]/div[2]');
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

    get addToCartButton() {
        return this.page.locator('//*[@aria-label="Добавить в корзину"]');
    }
}

module.exports = ProductPage;