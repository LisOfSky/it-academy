const Base = require('../helpers/base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get getStartedButton() {
        return this.page.locator('//*[@class="getStarted_Sjon"]');
    }

    get mainPageLogosList() {
        return this.page.locator('//*[@class="logosList_zAAF"]/li')
    }
}

module.exports = MainPage;