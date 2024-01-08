// Настроить Selenium Webdriver  и с помощью selenium-webdriver написать тесты:
// 1. зайти на сайт https://chromedriver.chromium.org/home;
// 2. проверить текст основного тайтла "ChromeDriver";
// 3. кликнуть в хедере на пункт "Chrome Extensions";
// 4. сделать хайлайт для нового основного тайтла;
// 5. проверить что новый тайтл стал "Chrome Extensions";
// 6. Перейти на страницу поиска;
// 7. Ввести driver в поиск;
// 8. Проверить что первая ссылка содержит слово driver;

const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require('chai');

describe('Chromedriver website tests', () => {
    let driver;
    before(async () => {
        driver = new Builder().forBrowser('chrome').setChromeOptions({
        'args': ['--start-maximized']
        }).build();
    await driver.manage().window().setSize({width: 1960, height: 1280});
    })

    after(async () => {
        await driver.quit();
    })

    it('should be title text is "ChromeDriver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        expect(await title.getText()).to.equal('ChromeDriver');
    });

    it('should be a new title text is "Chrome Extensions"', async () => {
        const extensionsButton = await driver.findElement(By.xpath('//*[contains(@class, "qV4dIc")] //*[@href="/extensions"]'));
        await extensionsButton.click();
        const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        await driver.executeScript("arguments[0].style.backgroundColor = 'black'", title);
        expect(await title.getText()).to.equal('Chrome Extensions');
    });

    it('should be searching result contain "driver"', async () => {
        const searchButton = await driver.findElement(By.xpath('//*[contains(@class,"mUbCce fKz7Od iW")]'));
        await searchButton.click();
        const searchField = await driver.findElement(By.xpath('//*[@type="search"]'));
        await driver.wait(until.elementIsVisible(searchField), 5000);
        await searchField.sendKeys('driver');
        const getSearchingResult = await driver.findElement(By.xpath('//*[contains(@class,"mUbCce fKz7Od i3")]'));
        await getSearchingResult.click();
        await driver.sleep(1000);
        const firstSearchingResult = await driver.findElement(By.xpath('//*[@class="gtazFe"] //a[1]'));
        expect(await firstSearchingResult.getAttribute("href")).to.includes('driver');
    });
});