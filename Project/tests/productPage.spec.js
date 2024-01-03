const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const ProductPage = require('../pageObjects/productPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('lamoda.by - Product Page tests', () => {
    let base;
    let header;
    let productPage;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        mainPage = new MainPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Product name from products list should be matches name in product card', async ({page}) => {
        await header.searchProduct('new balance 574');
        const productName = await productPage.firstProductNameInList.innerText();
        await base.click(productPage.firstProductInList);
        await expect(productPage.productName).toHaveText(productName);
    });

    test('Old full product price should be crossed out for promotional product', async ({page}) => {
        await base.click(header.saleButton);
        await base.click(productPage.firstProductInList);
        await expect(productPage.productPrice).toHaveCSS('text-decoration', 'line-through solid rgb(0, 0, 0)');
    });

    test('New product price should be red for promotional product', async ({page}) => {
        await base.click(header.saleButton);
        await base.click(productPage.firstProductInList);
        await expect(productPage.newProductPrice).toHaveCSS('color', 'rgb(249, 60, 0)');
    });

    test('Promotional product should has a discount label', async ({page}) => {
        await base.click(header.saleButton);
        await base.click(productPage.firstProductInList);
        await expect(productPage.productDiscount).toBeEnabled();
    });

    test('Product should has description block', async ({page}) => {
        await header.searchProduct('nike air');
        await base.click(productPage.firstProductInList);
        await expect(productPage.productDescription).toBeEnabled();
    });
})