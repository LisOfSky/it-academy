const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const BrandPage = require('../pageObjects/brandPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('lamoda.by - Header tests', () => {
    let base;
    let header;
    let brandPage;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        brandPage = new BrandPage(page);
        mainPage = new MainPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Lamoda header logo should leads to the women home page', async ({page}) => {
        await expect(header.lamodaLogo).toHaveAttribute('href', /women-home/);
    });

    test('Lamoda header should include "Бесконтактная доставка!" popup', async ({page}) => {
        await mainPage.hoverOn(header.contactlessDeliveryButton);
        await expect(header.contactlessDeliveryPopup).toContainText('Воспользуйся бесконтактной доставкой и оплачивайте покупки онлайн с Apple Pay и Google Pay');
    });

    test('"Войти" header button should be grey color for non-logged in users', async ({page}) => {
        await expect(header.loginButton).toHaveCSS('color', 'rgb(136, 136, 136)');
    });

    test('Search by "Adidas" should leads to the Adidas brand page', async ({page}) => {
        const brandName = 'adidas';
        await header.searchProduct(brandName);
        await expect(brandPage.pageTitle).toHaveText(brandName);
    });
})