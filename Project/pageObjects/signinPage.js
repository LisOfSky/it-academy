const Base = require('../helpers/base');

class SigninPage extends Base {
    constructor(page) {
        super(page);
    }

    get loginFieldForClick() {
        return this.page.locator('//*[@class="input-material__placeholder input-material__placeholder"]');
    }

    get loginFieldForInput() {
        return this.page.locator('//*[@class="input-material__input-user-agent input-material__input"]');
    }

    get passwordField() {
        return this.page.locator('//*[text()="Введите пароль"]/..');
    }

    get loginValidationMassage() {
        return this.page.locator('//*[@class="input-material__validation-message"]');
    }

    get loginButton() {
        return this.page.locator('//*[@aria-label="Войти"]');
    }

    get passwordRecoveryButton() {
        return this.page.locator('//*[text()="Я не помню пароль"]');
    }

    get passwordRecoveryBlock() {
        return this.page.locator('//*[text()="Восстановление пароля"]');
    }

    async confirmEnteredData() {
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.press('Tab');
    }
}

module.exports = SigninPage;