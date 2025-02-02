export class SignupPage {
  constructor(private _page) {}
//either private constructror and get method or public constructor.
//Good to use encapsulation- for better usage
  get page() {
    return this._page;
  }

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

  async navigateToSignup() {
    await this.page.click(this.locators.signupTab);
  }

  async fillSignupForm(name: string, email: string) {
    await this.page.fill(this.locators.signupName, name);
    await this.page.fill(this.locators.signupEmail, email);
    await this.page.click(this.locators.signupButton);
  }
}