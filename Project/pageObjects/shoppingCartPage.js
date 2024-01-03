const Base = require('../helpers/base');

class ShoppingCartPage extends Base {
    constructor(page) {
        super(page);
    }

    get productAddedToCartMassage() {
        return this.page.locator('//*[text()="Товар добавлен в корзину"]');
    }

    get goToCartButton() {
        return this.page.locator('//*[@class="d-modal__bottom"]/*[@href="/checkout/cart/"]');
    }

    get blockOfProductCart() {
        return this.page.locator('//*[@class="_desktopWrapper_t2t70_27"]');
    }

    get deleteProductFromCartButton() {
        return this.page.locator('//*[text()="Удалить"]');
    }

    get deleteMassage() {
        return this.page.locator('//*[@class="_title_1wc5j_7"]');
    }

    get promocodesSelectButton() {
        return this.page.locator('//*[@class="_root_wf5oq_12 _promocodesAndCertificates_nc3qp_121"]');
    }

    get promocodesField() {
        return this.page.locator('//*[@id="coupon_code"]');
    }

    get confirmPromocodButton() {
        return this.page.locator('//*[@aria-label="Применить промокод к корзине"]');
    }

    get incorrectPromocodeMassage() {
        return this.page.locator('//*[@class="_error_1k8kq_13"]');
    }
}

module.exports = ShoppingCartPage;