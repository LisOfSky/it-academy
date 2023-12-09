class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(element){
        await element.click();
    }

    async hoverOn(element) {
        await element.hover();
    }
}

module.exports = Base;