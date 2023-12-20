const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const MainPage = require('../pageObjects/mainPage');


test.describe('lamoda.by website tests', () => {
    let base;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        mainPage = new MainPage(page);
    });

    test('...', async ({page}) => {
        await base.navigate('https://www.lamoda.by');
        //await expect(mainPage.getStartedButton).toHaveCount(companyLogosList);
    });
})