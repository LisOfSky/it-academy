class Base {

    time = 2000;
    navigate (url) {
        cy.visit(url);
    }

    urlContain (url) {
        cy.url().should('include', url);
    }
}

module.exports = Base;