const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/header');
const SigninPage = require('../pageObjects/signinPage')


test.describe('lamoda.by - Signin Page tests', () => {
    let base;
    let header;
    let signinPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        signinPage = new SigninPage(page);

        await base.navigate('https://www.lamoda.by');
    });

    test('Signin with incorrect email should show the message "Пожалуйста, проверьте, правильно ли указан адрес"', async ({page}) => {
        await base.click(header.signinButton);
        await signinPage.loginFieldForInput.fill('gmail.com');
        await signinPage.confirmEnteredData();
        await expect(signinPage.loginValidationMassage).toHaveText('Пожалуйста, проверьте, правильно ли указан адрес');
    });

    test('After pressed to "Я не помню пароль" button should see "Восстановление пароля" block', async ({page}) => {
        await base.click(header.signinButton);
        await base.click(signinPage.passwordRecoveryButton);
        await expect(signinPage.passwordRecoveryBlock).toBeEnabled();
    });
})