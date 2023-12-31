const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^User navigate on the "(.*)" page$/, async (url) => {
    await browser.url(url);
});

When("User click on {locator}", async (selector) => {
    await $(selector).waitForDisplayed({timeout: 25000});
    await $(selector).click();
})

When("User hover the mouse cursor over the list of languages {locator}", async function (selector) {
    await $(selector).waitForDisplayed();
    await $(selector).moveTo();
})

When("User enters in {locator} a search query {string}", async function (selector, text) {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
})

Then("User see page with title {string} in element {locator}", async function (text, selector) {
    await $(selector).waitForDisplayed();
    await expect(await $(selector)).toHaveText(text);
})

Then("User see {string} in element {locator}", async function (text, selector) {
    await $(selector).waitUntil(
        async function () {
            return (await this.getText()) === text;
        }, {
            timeout: 10000,
            timeoutMsg: 'the expected text is not correct'
        }
    )
})

