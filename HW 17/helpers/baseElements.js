class BaseElements {

    async navigate(url) {
        await browser.url(url);
    }

    async click(element) {
      await element.waitForClickable();
      await element.click();
    }

    async getText(element) {
        await element.waitForDisplayed();
        return element.getText();
    }

    async moveToElement(element) {
        await element.waitForDisplayed();
        await element.moveTo();
    }

    async searchDoc(element, text) {
        await element.waitForClickable();
        await element.click();
        await element.setValue(text);
    }

    async searchWithTimeout(element, expectedText) {
        await element.waitUntil(
            async function () {
                return (await this.getText()) === expectedText;
            }, {
                timeout: 10000,
                timeoutMsg: 'the expected text is not correct'
            }
        )
    }

}
  
export { BaseElements };