class HomePage {

    get 'VueJS Logo'() {
        return '//*[@src="/img/icons/vue.png"]';
    }

    get 'Home Page Title'() {
        return '//*[@class="hero__subtitle"]';
    }
}

module.exports = HomePage;