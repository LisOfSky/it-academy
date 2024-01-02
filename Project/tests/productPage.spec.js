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
        await base.click(mainPage.agreeCookiesButton);
    });

    test('Product name from products list should be matches name in product card', async ({page}) => {
        await header.searchProduct('new balance 574');
        const productName = await productPage.firstProductName.innerText();
        await base.click(productPage.firstProductInList);
        await expect(productPage.productName).toHaveText(productName);
    });

    test('Old full product price should be crossed out for promotional product', async ({page}) => {
        await base.click(header.saleButton);
        //await base.scrollPage();
        await base.hoverOn(productPage.firstProductInList);
        //await page.waitForTimeout(5000);
        await base.click(productPage.productDetailButton);
        await expect(productPage.productPrice).toHaveCSS('text-decoration', 'line-through solid rgb(0, 0, 0)');
    });

    test('New price should be lower than old', async ({page}) => {
        await base.click(header.saleButton);
        //await base.scrollPage();
        await base.hoverOn(productPage.firstProductInList);
        //await page.waitForTimeout(5000);
        await base.click(productPage.productDetailButton);
        const oldPrice = Number(await productPage.productPrice.innerText());
        const newPrice = Number((await productPage.newProductPrice.innerText()).slice(0, -3));
        await expect(oldPrice).toBeGreaterThan(newPrice);
    });

    test('Promotional product should has a discount label', async ({page}) => {
        await base.click(header.saleButton);
        //await base.scrollPage();
        await base.hoverOn(productPage.firstProductInList);
        //await page.waitForTimeout(5000);
        await base.click(productPage.productDetailButton);
        await expect(productPage.productDiscount).toBeEnabled();
    });

    test('Product should has description block', async ({page}) => {
        await header.searchProduct('nike air');
        await base.click(productPage.firstProductInList);
        await expect(productPage.productDescription).toBeEnabled();
    });
})