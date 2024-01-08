import { BaseElements } from "../helpers/baseElements.js";


class NavigationBar extends BaseElements {
    constructor() {
        super()
    }

    get navigateBar() {
        return $('//*[@class="navbar__link"]');
    }

    get ukrainianLanguageSwitchButton() {
        return $('//*[@lang="uk"]');
    }

    get searchButton() {
        return $('//*[@class="DocSearch DocSearch-Button"]');
    }

}

export default new NavigationBar();