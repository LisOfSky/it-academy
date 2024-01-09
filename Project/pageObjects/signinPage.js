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

    get socialMediaList() {
        return this.page.locator('//*[@class="_row_12oac_6"]/span');
    }
}

module.exports = SigninPage;