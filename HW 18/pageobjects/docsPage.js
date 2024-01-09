const Base = require('../helpers/base');

class DocsPage extends Base {
    constructor(page) {
        super(page);
    }

    get getPageTitle() {
        return this.page.locator('//*[h1]');
    }
}

module.exports = DocsPage;