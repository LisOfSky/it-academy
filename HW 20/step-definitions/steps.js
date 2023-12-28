const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^User navigate on the "(.*)" page$/, async (url) => {
    await browser.url(url);
});

When("User click icon {locator}", async (selector) => {
    await $(selector).waitForDisplayed({timeout: 25000});
    await $(selector).click();
})

When("User input field {locator} with text {string}", async function (selector, text) {
    const world = this;
    world.hello = 'Hello IT academy!'
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
})

Then("User see page with title {string} in element {locator}", async function (text, selector) {
    await $(selector).waitForDisplayed();
    await expect(await $(selector)).toHaveText(text);
})


Then("User see text {string} in element {locator}", async function (text, selector) {
    const world = this;
    console.log(world);
    await $(selector).waitForDisplayed();
    await expect(await $(selector)).toHaveText(text);
})