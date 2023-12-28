import { expect } from 'chai';
import navigationBar from '../pageobjects/navigationBar.js';
import homePage from '../pageobjects/homePage.js';
import docPage from "../pageobjects/docPage.js";
import searchPageMode from "../pageobjects/searchPageMode.js";


const searchSelectorDoc = 'Selectors';
const searchAuthorResult = 'Christian Bromann';
const allResultsButtonText= 'See all 3 results';

describe('WebdriverIO website search mode tests', () => {
    it(`should be first search result for "Selectors" leads to page with title "Selectors"`, async () => {
        await homePage.navigate('https://webdriver.io/');
        await searchPageMode.searchDoc(navigationBar.searchButton, searchPageMode.searchInput, searchSelectorDoc);
        await searchPageMode.click(searchPageMode.firstSearchResult);
        expect(await docPage.getText(docPage.docPageTitle)).to.equal(searchSelectorDoc);
    })

    it(`should be search for "Christian Bromann" results found - 3 results`, async () => {
        await searchPageMode.searchDoc(navigationBar.searchButton, searchPageMode.searchInput, searchAuthorResult);
        expect(await searchPageMode.searchWithTimeout(searchPageMode.seeAllResultsButton, allResultsButtonText));
    })
});