// 1. Настроить фреймворк WebdriverIO для запуска тестов.
// 2. Подготовить 3-5 тестовых сценария проходящих по официальному сайту фреймворка;
// 3. Автоматизировать сценарии с использованием выбранного фреймворка используя:
// - API выбранного фреймворка;
// - структуру одного из фреймворков: Jasmine, Mocha;
// 4. Добавить eslint и репортер


import { expect } from 'chai';

describe('WebdriverIO website tests/', () => {
    it(`should be Vue.js framework logo link leads to the vue.js setup page`, async () => {
      await browser.url('https://webdriver.io/');
      const vueJsLogo = await $('//*[@src="/img/icons/vue.png"]');
      await vueJsLogo.click();     
      expect(await $('//h1').getText()).to.equal('Vue.js');
    })

    it(`should be the English language as a default language`, async () => {
      await browser.url('https://webdriver.io/');    
      expect(await $('//*[@class="hero__subtitle"]').getText()).to.equal('Next-gen browser and mobile automation test framework for Node.js');
    })

    it(`should be the English language of the site is changing to Ukrainian`, async () => {
      const navigationBar = await $('//*[@class="navbar__link"]');
      navigationBar.moveTo();
      const ukrainianLanguageSwitchButton = await $('//*[@lang="uk"]');
      await ukrainianLanguageSwitchButton.click();     
      expect(await $('//*[@class="hero__subtitle"]').getText()).to.equal('Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js');
    })

    it(`should be search result is correct`, async () => {
      await browser.url('https://webdriver.io/');
      const searchButton = await $('//*[@class="DocSearch DocSearch-Button"]');
      await searchButton.click();
      const searchInput = await $('//*[@class="DocSearch-Input"]');
      await searchInput.click();
      await searchInput.setValue('selectors');
      const firstSearchResult = await $('//*[@class="DocSearch-Hit"]');
      await firstSearchResult.click();  
      expect(await $('//h1').getText()).to.equal('Selectors');
    })
});


