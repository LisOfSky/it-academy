const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const MainPage = require('../pageObjects/mainPage');
const BrandPage = require('../pageObjects/brandPage');


test.describe('lamoda.by - Main Page tests', () => {
    let base;
    let mainPage;
    let brandPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        mainPage = new MainPage(page);
        brandPage = new BrandPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Slider "Популярное" should contain 6 visible products', async ({page}) => {
        await base.scrollPage();
        await expect(mainPage.popularProductsSlider).toHaveCount(6);
    });

    test('Lacoste icon should leads to the Lacoste brand page', async ({page}) => {
        await base.scrollPage();
        await base.click(mainPage.brandLacosteIcon);
        await expect(brandPage.pageTitle).toHaveText('Lacoste');
    });
})