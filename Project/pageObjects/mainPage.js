const Base = require('../helpers/base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get getStartedButton() {
        return this.page.locator('//*[@class="getStarted_Sjon"]');
    }

    async searchDoc(button, element, text) {
        await button.click();
        await element.fill(text);
    }
}

module.exports = MainPage;