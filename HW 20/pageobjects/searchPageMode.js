import { Base } from "../helpers/base.js";


class SearchPageMode extends Base {
    constructor() {
        super()
    }

    get 'Search Input'() {
        return '//*[@class="DocSearch-Input"]';
    }

    get 'First Search Result'() {
        return '//*[@class="DocSearch-Hit"]';
    }

    get 'See All Results Button'() {
        return '//*[@class="DocSearch-HitsFooter"]/*';
    }

    async searchDoc(button, element, text) {
        await button.waitForClickable();
        await button.click();
        await element.waitForClickable();
        await element.click();
        await element.setValue(text);
    }
}

module.exports = SearchPageMode;