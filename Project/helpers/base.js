class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async scrollPage(){
        await this.page.mouse.wheel(0, 600);
    }

    async click(element){
        await element.click();
    }

    async hoverOn(element) {
        await element.hover();
    }

    async fillAndConfirmEnteredText(element, text) {
        await element.fill(text);
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.press('Tab');
    }
}

module.exports = Base;