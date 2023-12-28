class Base {

    async navigate(url) {
        await browser.url(url);
    }

    async getText(element) {
        await element.waitForDisplayed();
        return element.getText();
    }

    async moveToElement(element) {
        await element.waitForDisplayed();
        await element.moveTo();
    }

    async waitElementWithTimeout(element, expectedText) {
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

export { Base };