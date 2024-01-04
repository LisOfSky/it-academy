const Base = require('../helpers/base');

class SubscribePage extends Base {
    constructor() {
        super();
    }

    get subscribeField() {
        return cy.get('#subscribe_email');
    }

    get subscribeButton () {
        return cy.get('button.border');
    }

    get subscribeErrorText () {
        return cy.get('#subscribe-error');
    }
}

module.exports = new SubscribePage();