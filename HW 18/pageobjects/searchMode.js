const Base = require('../helpers/base');

class SearchMode extends Base {
    constructor(page) {
        super(page);
    }

    get searchField() {
        return this.page.locator('//*[@class="DocSearch-Input"]');
    }

    get firstSearchResult() {
        return this.page.locator('//*[@id="docsearch-item-0"]//*[mark]');
    }

    async searchDoc(button, element, text) {
        await button.click();
        await element.fill(text);
    }
}

module.exports = SearchMode;