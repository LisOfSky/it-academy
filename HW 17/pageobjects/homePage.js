import { BaseElements } from "../helpers/baseElements.js";


class HomePage extends BaseElements {
    constructor() {
        super()
    }

    async navigate(url) {
        await browser.url(url);
    }

    get vueJsLogo() {
        return $('//*[@src="/img/icons/vue.png"]');
    }

    get homePageTitle() {
        return $('//*[@class="hero__subtitle"]');
    }

}

export default new HomePage();