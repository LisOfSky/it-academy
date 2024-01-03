const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Footer = require('../pageObjects/footer');


test.describe('lamoda.by - Footer tests', () => {
    let base;
    let footer;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        footer = new Footer(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Error massage "Заполните электронную почту" should be visible after pressing button "Подписаться" without entering an email address', async ({page}) => {
        await base.click(footer.subscribeButton);
        await expect(footer.subscribeErrorMassage).toBeVisible();
    });

    test('The text of the consent to data processing should be red color after pressing button "Подписаться" without enabled checkbox', async ({page}) => {
        await base.click(footer.subscribeButton);
        await expect(footer.consentToDataProcessingCheckbox).toHaveCSS('color', 'rgb(194, 0, 0)');
    });

    test('List of brands should contain 74 brands', async ({page}) => {
        await base.click(footer.brandsFooterButton);
        await expect(footer.brandsFooterList).toHaveCount(74);
    });
})