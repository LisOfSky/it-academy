const Base = require('../helpers/base');

class SearchMode extends Base {
    constructor() {
        super();
    }

    get searchModeButton () {
        return cy.get('.DocSearch');
    }

    get searchField () {
        return cy.get('#docsearch-input');
    }

    get firstSearchResult () {
        return cy.get('#docsearch-item-0');
    }

    searchDoc (field, text) {
        field.wait(this.time).click();
        this.searchField.click().type(text);
    }
}

module.exports = new SearchMode();