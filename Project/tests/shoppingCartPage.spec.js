const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const ProductPage = require('../pageObjects/productPage');
const ShoppingCartPage = require('../pageObjects/shoppingCartPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('lamoda.by - Shopping Cart Page tests', () => {
    let base;
    let header;
    let productPage;
    let shoppingCartPage;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        shoppingCartPage = new ShoppingCartPage(page);
        mainPage = new MainPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('User should see massage "Товар добавлен в корзину" after added product to cart', async ({page}) => {
        await header.searchProduct('рюкзак');
        await productPage.click(productPage.firstProductInList);
        await productPage.click(productPage.addToCartButton);
        await expect(shoppingCartPage.productAddedToCartMassage).toBeEnabled();
    });

    test('After deleted product from cart user should see massage "В корзине нет товаров"', async ({page}) => {
        await header.searchProduct('Портфель');
        await productPage.click(productPage.firstProductInList);
        await productPage.click(productPage.addToCartButton);
        await shoppingCartPage.click(shoppingCartPage.goToCartButton);
        await shoppingCartPage.hoverOn(shoppingCartPage.blockOfProductCart);
        await shoppingCartPage.click(shoppingCartPage.deleteProductFromCartButton);
        await expect(shoppingCartPage.deleteMassage).toHaveText('В корзине нет товаров');
    });

    test('After using promocode with spaces should see massage "Код купона содержит недопустимые символы"', async ({page}) => {
        await header.searchProduct('Портфель');
        await productPage.click(productPage.firstProductInList);
        await productPage.click(productPage.addToCartButton);
        await shoppingCartPage.click(shoppingCartPage.goToCartButton);
        await shoppingCartPage.click(shoppingCartPage.promocodesSelectButton);
        await shoppingCartPage.promocodesField.fill('Happy new year');
        await shoppingCartPage.click(shoppingCartPage.confirmPromocodButton);
        await expect(shoppingCartPage.incorrectPromocodeMassage).toHaveText('Код купона содержит недопустимые символы');
    });

    test('When user enter the shopping cart without adding product should see massage "В корзине нет товаров"', async ({page}) => {
        await mainPage.click(header.shoppingCartButton);
        await expect(shoppingCartPage.deleteMassage).toHaveText('В корзине нет товаров');
    });
})