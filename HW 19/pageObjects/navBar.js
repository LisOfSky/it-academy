const Base = require('../helpers/base');

class NavBar extends Base {
    constructor() {
        super();
    }

    get pricingNavButton () {
        return cy.get('[href="/pricing"]');
    }
}

module.exports = new NavBar();