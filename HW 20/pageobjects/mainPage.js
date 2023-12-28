const Page = require('./page');
const ModalPage = require('./components/modalPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    constructor() {
        super();
        this['Modal Page'] = new ModalPage();
    }

    get 'Search Field'() {
        return '.top input.ui-autocomplete-input';
    }

    get 'Search Button'() {
        return '.top input[type=\'submit\']';
    }

    get 'Search Result Header'() {
        return 'h1.search b'
    }

    get 'Shops Addresses'() {
        return '.t_menu1 .shops'
    }
}

module.exports = MainPage;