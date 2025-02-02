import { Page } from '@playwright/test';

export class AutomationTest {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  // Locators as class properties
  locators = {
    signupTab: "//a[contains(text(),'Signup / Login')]",
    signupName: "//input[@data-qa='signup-name']",
    signupEmail: "//input[@data-qa='signup-email']",
    signupButton: "//button[@data-qa='signup-button']",
    emailText: "//p[contains(text(),'Email Address')]",
    gender: "#id_gender1",
    password: "#password",
    days: "//select[@id='days']",
    months: "//select[@id='months']",
    years: "//select[@id='years']",
    newsletter: "#newsletter",
    option: "#optin",
    firstName: "#first_name",
    lastName: "#last_name",
    company: "#company",
    addressLine1: "#address1",
    addressLine2: "#address2",
    country: "//select[@id='country']",
    state: "#state",
    city: "#city",
    zipcode: "#zipcode",
    mobileNumber: "#mobile_number",
    createAccount: "//button[@data-qa='create-account']",
    accountCreated: "//h2[@data-qa='account-created']",
    continueButton: "//a[@data-qa='continue-button']",
  };

  // Load URL
  async loadUrl(url: string) {
    await this.page.goto(url);
  }

  // Click Element
  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  // Enter Text
  async enterText(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }

  // Get Text
  async getText(locator: string) {
    return await this.page.locator(locator).textContent();
  }

  async isVisible(locator: string) {
    return await this.page.locator(locator).isVisible();
  }

  // Select Dropdown
  async selectDropdown(locator: string, text: string) {
    await this.page.locator(locator).selectOption({ label: text });
  }

  // Wait
  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }
}
