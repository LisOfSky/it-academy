const mainPage = require('../../pageObjects/mainPage');
const subscribePage = require('../../pageObjects/subscribePage');
const searchMode = require('../../pageObjects/searchMode');
const docPage = require('../../pageObjects/docPage');
const navBar = require('../../pageObjects/navBar');
const pricingPage = require('../../pageObjects/pricingPage');


describe('cypress.io website tests', function () {
    it('after entering an incorrect email address, should be displayed a message "Please enter a valid email address"', () => {
        mainPage.navigate('https://www.cypress.io/');
        mainPage.subscribeToNewsButton.click();
        subscribePage.subscribeField.type('@qwerty.com');
        subscribePage.subscribeButton.click();
        subscribePage.subscribeErrorText.should("contain", 'Please enter a valid email address');
    })

    it('first search result for the word "Cypress" should contain word "Cypress"', () => {
        docPage.navigate('https://docs.cypress.io/guides/overview/why-cypress');
        searchMode.searchDoc('Cypress');
        searchMode.firstSearchResult.should("contain", 'Cypress');
    })

    it('first search result link for the word "allure" should leads to the Reporting section of the Plugin page', () => {
        docPage.navigate('https://docs.cypress.io/guides/overview/why-cypress');
        searchMode.searchDoc('allure');
        searchMode.shouldFirstResultContainLink('/plugins#reporting');
    })

    it('the monthly team price should be 465$ if select 75k test results', () => {
        mainPage.navigate('https://www.cypress.io/');
        navBar.pricingNavButton.click();
        pricingPage.monthlyPriceButton.click();
        pricingPage.chooseNumOfTestResults(5);
        pricingPage.teamPrice.should("contain", '465');
    })
});