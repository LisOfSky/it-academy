const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const MainPage = require('../pageobjects/mainPage');
const DocsPage = require('../pageobjects/docsPage');
const NavBar = require('../pageobjects/navBar');
const SearchMode = require('../pageobjects/searchMode');

const installPageTitle = 'Installation';
const companyLogosList = 9;
const linkToJavaDocs = '/java/docs/intro';
const searchText = 'Playwright'

test.describe('Playwright website tests', () => {
    let base;
    let mainPage;
    let docsPage;
    let navBar;
    let searchMode;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        mainPage = new MainPage(page);
        docsPage = new DocsPage(page);
        navBar = new NavBar(page);
        searchMode = new SearchMode(page);
    });

    test('"chosen by" list should contain 9 logos', async ({page}) => {
        await base.navigate('https://playwright.dev/');
        await expect(mainPage.mainPageLogosList).toHaveCount(companyLogosList);
    });

    test('"Get started" button should leads to the "Installation" page', async ({page}) => {
        await base.navigate('https://playwright.dev/');
        await base.click(mainPage.getStartedButton);
        await expect(docsPage.getPageTitle).toHaveText(installPageTitle);
    });

    test('navigation bar should have Java links, after switch language from Node.js to Java', async ({page}) => {
        await base.navigate('https://playwright.dev/');
        await base.hoverOn(navBar.languageDropDownList);
        await base.click(navBar.javaLanguageButton);
        await expect(navBar.docsButton).toHaveAttribute('href', linkToJavaDocs);
    });

    test('first search result should contain request word - "Playwright"', async ({page}) => {
        await base.navigate('https://playwright.dev/');
        await searchMode.searchDoc(navBar.searchButton, searchMode.searchField, searchText);
        await expect(searchMode.firstSearchResult).toContainText(searchText);
    });
})