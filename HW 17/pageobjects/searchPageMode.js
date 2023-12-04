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

}

export default new SearchPageMode();