const Base = require('../helpers/base');

class PricingPage extends Base {
    constructor() {
        super();
    }

    get monthlyPriceButton () {
        return cy.get('[data-cy="pricing-monthly-estimate"]');
    }

    get priceBar () {
        return cy.get('input.w-full');
    }

    get teamPrice () {
        return cy.get('span.font-bold');
    }

    chooseNumOfTestResults (val) {
        this.priceBar.invoke('val', val).trigger('input').click();
    }
}

module.exports = new PricingPage();