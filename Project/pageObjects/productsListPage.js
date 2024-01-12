const Base = require('../helpers/base');

class ProductsListPage extends Base {
    constructor(page) {
        super(page);
    }

    get pageTitle() {
        return this.page.locator('//*[contains(@class, "titleText")]');
    }

    get firstProductNameInList() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card-description__microdata-wrap"]/div[2]');
    }

    get firstProductInList() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card__link x-product-card__hit-area"]');
    }

    get addToCartButton() {
        return this.page.locator('//*[@aria-label="Добавить в корзину"]');
    }

    async chooseFirstProductOnProductCategory (category) {
        await category.click();
        await this.firstProductInList.click();
    }

    async addToCartFirstProductInList () {
        await this.firstProductInList.click();
        await this.addToCartButton.click();
    }
}

module.exports = ProductsListPage;