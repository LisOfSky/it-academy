import { expect } from 'chai';
import navigationBar from '../pageobjects/navigationBar.js';
import homePage from '../pageobjects/homePage.js';


const homePageEnglishTitleText = 'Next-gen browser and mobile automation test framework for Node.js';
const homePageUkrainianTitleText = 'Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js';

describe('WebdriverIO website tests', () => {
    it(`should be the English language as a default language`, async () => {
        await homePage.navigate('https://webdriver.io/');
        expect(await homePage.getText(homePage.homePageTitle)).to.equal(homePageEnglishTitleText);
    })

    it(`should be the English language of the site is changing to Ukrainian`, async () => {
        await navigationBar.moveToElement(navigationBar.navigateBar);
        await navigationBar.click(navigationBar.ukrainianLanguageSwitchButton);
        expect(await homePage.getText(homePage.homePageTitle)).to.equal(homePageUkrainianTitleText);
    })

});