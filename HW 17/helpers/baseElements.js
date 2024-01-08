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

}
  
export { BaseElements };