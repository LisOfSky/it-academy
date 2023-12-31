class SearchPageMode {

    get 'Search Input'() {
        return '//*[@class="DocSearch-Input"]';
    }

    get 'First Search Result'() {
        return '//*[@class="DocSearch-Hit"]';
    }

    get 'See All Results Button'() {
        return '//*[@class="DocSearch-HitsFooter"]/*';
    }
}

module.exports = SearchPageMode;