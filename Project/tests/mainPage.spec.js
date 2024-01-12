const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const MainPage = require('../pageObjects/mainPage');
const ProductsListPage = require('../pageObjects/productsListPage');


test.describe('lamoda.by - Main Page tests', () => {
    let base;
    let mainPage;
    let productsListPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        mainPage = new MainPage(page);
        productsListPage = new ProductsListPage(page);

        await base.navigate('https://www.lamoda.by');
        await mainPage.scrollPage();
    });

    test('Slider "Популярное" should contain 6 visible products', async ({page}) => {
        await expect(mainPage.popularProductsSlider).toHaveCount(6);
    });

    test('Lacoste icon should leads to the Lacoste brand page', async ({page}) => {
        await mainPage.click(mainPage.brandLacosteIcon);
        await expect(productsListPage.pageTitle).toHaveText('Lacoste');
    });
})