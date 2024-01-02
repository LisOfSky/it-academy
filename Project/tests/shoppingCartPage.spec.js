const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const ProductPage = require('../pageObjects/productPage');
const ShoppingCartPage = require('../pageObjects/shoppingCartPage');


test.describe('lamoda.by - Main Page tests', () => {
    let base;
    let header;
    let productPage;
    let shoppingCartPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        shoppingCartPage = new ShoppingCartPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('User should see massage "Товар добавлен в корзину" after added product to cart', async ({page}) => {
        await header.searchProduct('рюкзак');
        await base.click(productPage.firstProductInList);
        await base.click(productPage.addToCartButton);
        await expect(shoppingCartPage.productAddedToCartMassage).toBeEnabled();
    });

    test('Total price should be equal to the value of the product added to the cart', async ({page}) => {
        await header.searchProduct('Портфель');
        await base.click(productPage.firstProductInList);
        const productPrice = await productPage.productPrice.innerText();
        await base.click(productPage.addToCartButton);
        //await page.waitForTimeout(5000);
        await base.click(productPage.goToCartButton);
        const totalPrice = await shoppingCartPage.totalPrice.innerText();
        await expect(totalPrice).toBeGreaterThan(productPrice);

        //todo: доработать тест
    });
})