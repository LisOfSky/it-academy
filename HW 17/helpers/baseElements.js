class BaseElements {
    async click(element) {
      await element.waitForClickable();
      await element.click()
    }
  
    async setValue(element, text) {
      await element.waitForDisplayed();
      await element.setValue(text);
    }
  
    async getText(element) {
      await element.waitForDisplayed();
      return element.getText();
    }
  }
  
  export { BaseElements };