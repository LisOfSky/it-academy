import { BaseElements } from "../helpers/baseElements.js";


class SearchPageMode extends BaseElements {
    constructor() {
        super()
    }

    get searchInput() {
        return $('//*[@class="DocSearch-Input"]');
    }

    get firstSearchResult() {
        return $('//*[@class="DocSearch-Hit"]');
    }

    get seeAllResultsButton() {
        return $('//*[@class="DocSearch-HitsFooter"]/*');
    }

    async searchWithTimeout(element, expectedText) {
        await element.waitUntil(
            async function () {
                return (await this.getText()) === expectedText;
            }, {
                timeout: 10000,
                timeoutMsg: 'the expected text is not correct'
            }
        )
    }

    async searchDoc(button, element, text) {
        await button.waitForClickable();
        await button.click();
        await element.waitForClickable();
        await element.click();
        await element.setValue(text);
    }

}

export default new SearchPageMode();