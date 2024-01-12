const Base = require('../helpers/base');

class SigninPage extends Base {
    constructor(page) {
        super(page);
    }

    get loginField() {
        return this.page.locator('//*[@class="input-material__input-user-agent input-material__input"]');
    }

    get loginValidationMassage() {
        return this.page.locator('//*[@class="input-material__validation-message"]');
    }

    get passwordRecoveryButton() {
        return this.page.locator('//*[text()="Я не помню пароль"]');
    }

    get passwordRecoveryBlock() {
        return this.page.locator('//*[text()="Восстановление пароля"]');
    }

    get loginViaSocialMediaButton() {
        return this.page.locator('//*[text()="соцсети "]');
    }

    get appleAuthorizationButton() {
        return this.page.locator('//*[@class="_item_12oac_14 _item_apple_12oac_24"]');
    }

    async fillAndConfirmEnteredText(element, text) {
        await element.fill(text);
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.press('Tab');
    }
}

module.exports = SigninPage;