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
}

module.exports = Base;