const Base = require('../helpers/base');

class ShoppingCartPage extends Base {
    constructor(page) {
        super(page);
    }

    get productAddedToCartMassage() {
        return this.page.locator('//*[text()="Товар добавлен в корзину"]');
    }

    get goToCartButton() {
        return this.page.locator('//*[text()="Перейти в корзину"]');
    }

    get totalPrice() {
        return this.page.locator('//*[@class="_actions_nc3qp_58"]//*[@class="_value_1oots_21"]');
    }
}

module.exports = ShoppingCartPage;