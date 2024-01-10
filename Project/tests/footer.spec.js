const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Footer = require('../pageObjects/footer');
const MainPage = require('../pageObjects/mainPage');


test.describe('lamoda.by - Footer tests', () => {
    let base;
    let footer;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        footer = new Footer(page);
        mainPage = new MainPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Error massage "Заполните электронную почту" should be visible after pressing button "Подписаться" without entering an email address', async ({page}) => {
        await mainPage.click(footer.subscribeButton);
        await expect(footer.subscribeErrorMassage).toBeVisible();
    });

    test('The text of the consent to data processing should be red color after pressing button "Подписаться" without enabled checkbox', async ({page}) => {
        await mainPage.click(footer.subscribeButton);
        await expect(footer.consentToDataProcessingCheckbox).toHaveCSS('color', 'rgb(194, 0, 0)');
    });

    test('List of premium brands should contain Gucci brand', async ({page}) => {
        await mainPage.click(footer.primeBrandsFooterButton);
        await expect(footer.gucciFooterButton).toHaveText('Gucci');
    });
})