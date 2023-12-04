// 1. Настроить фреймворк WebdriverIO для запуска тестов.
// 2. Подготовить 3-5 тестовых сценария проходящих по официальному сайту фреймворка;
// 3. Автоматизировать сценарии с использованием выбранного фреймворка используя:
// - Page Object Model; 
// - структуру одного из фреймворков: Jasmine, Mocha;
// По сути написать тесты из предыдущей домашки на Page Object Model паттерн


import { expect } from 'chai';
import navigationBar from '../pageobjects/navigationBar.js';
import homePage from '../pageobjects/homePage.js';
import docPage from "../pageobjects/docPage.js";
import searchPageMode from "../pageobjects/searchPageMode.js";


const vueJsTitleName = 'Vue.js';
const searchSelectorDoc = 'Selectors';
const searchAuthorResult = 'Christian Bromann';
const allResultsButtonText= 'See all 3 results';

describe('WebdriverIO website tests', () => {
    it(`should be Vue.js framework logo link leads to the vue.js setup page`, async () => {
        await homePage.navigate('https://webdriver.io/');
        await homePage.click(homePage.vueJsLogo);
        expect(await docPage.getText(docPage.docPageTitle)).to.equal(vueJsTitleName);
    })

    it(`should be search result is correct`, async () => {
        await navigationBar.click(navigationBar.searchButton);
        await searchPageMode.searchDoc(searchPageMode.searchInput, searchSelectorDoc);
        await searchPageMode.click(searchPageMode.firstSearchResult);
        expect(await docPage.getText(docPage.docPageTitle)).to.equal(searchSelectorDoc);
    })

    it(`should be search for "Christian Bromann" results found - 3`, async () => {
        await navigationBar.click(navigationBar.searchButton);
        await searchPageMode.searchDoc(searchPageMode.searchInput, searchAuthorResult);
        expect(await searchPageMode.searchWithTimeout(searchPageMode.seeAllResultsButton, allResultsButtonText));
    })
});