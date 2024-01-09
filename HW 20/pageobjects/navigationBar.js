class NavigationBar {

    get 'Navigate Bar'() {
        return '//*[@class="navbar__link"]';
    }

    get 'Ukrainian Language Switch Button'() {
        return '//*[@lang="uk"]';
    }

    get 'Search Button'() {
        return '//*[@class="DocSearch DocSearch-Button"]';
    }
}

module.exports = NavigationBar;