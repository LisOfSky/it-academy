import { expect } from 'chai';
import homePage from '../pageobjects/homePage.js';
import docPage from "../pageobjects/docPage.js";


const vueJsTitleName = 'Vue.js';

describe('WebdriverIO website main page tests', () => {
    it(`should be Vue.js framework logo link leads to the vue.js setup page with title "Vue.js"`, async () => {
        await homePage.navigate('https://webdriver.io/');
        await homePage.click(homePage.vueJsLogo);
        expect(await docPage.getText(docPage.docPageTitle)).to.equal(vueJsTitleName);
    })
});