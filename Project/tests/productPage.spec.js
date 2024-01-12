const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const ProductPage = require('../pageObjects/productPage');
const MainPage = require('../pageObjects/mainPage');
const ProductsListPage = require('../pageObjects/productsListPage');


test.describe('lamoda.by - Product Page tests', () => {
    let base;
    let header;
    let productPage;
    let mainPage;
    let productsListPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        mainPage = new MainPage(page);
        productsListPage = new ProductsListPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Product name from products list should be matches name in product card', async ({page}) => {
        await header.searchProduct('new balance 574');
        const productName = await productsListPage.firstProductNameInList.innerText();
        await productPage.click(productsListPage.firstProductInList);
        await expect(productPage.productName).toHaveText(productName);
    });

    test('Old full product price should be crossed out for promotional product', async ({page}) => {
        await productsListPage.chooseFirstProductOnProductCategory(header.saleButton);
        await expect(productPage.productPrice).toHaveCSS('text-decoration', 'line-through solid rgb(0, 0, 0)');
    });

    test('New product price should be red for promotional product', async ({page}) => {
        await productsListPage.chooseFirstProductOnProductCategory(header.saleButton);
        await expect(productPage.newProductPrice).toHaveCSS('color', 'rgb(249, 60, 0)');
    });

    test('Promotional product should has a discount label', async ({page}) => {
        await productsListPage.chooseFirstProductOnProductCategory(header.saleButton);
        await expect(productPage.productDiscount).toBeEnabled();
    });

    test('Product should has description block', async ({page}) => {
        await header.searchProduct('nike air');
        await productPage.click(productsListPage.firstProductInList);
        await expect(productPage.productDescription).toBeEnabled();
    });
})