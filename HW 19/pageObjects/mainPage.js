const Base = require('../helpers/base');

class MainPage extends Base {
    constructor() {
        super();
    }

    get subscribeToNewsButton () {
        return cy.get('a.text-white');
    }
}

module.exports = new MainPage();