export class BasePage {
    constructor(protected _page) {}
  
    // Provide a getter to access the page
    get page() {
      return this._page;
    }
  
    // Helper methods for interacting with elements
    async click(locator: string) {
      await this.page.click(locator);
    }
  
    async fill(locator: string, value: string) {
      await this.page.fill(locator, value);
    }
  
    async selectOption(locator: string, value: string) {
      await this.page.selectOption(locator, value);
    }
  
    async getText(locator: string) {
      return await this.page.locator(locator).textContent();
    }
  }
  