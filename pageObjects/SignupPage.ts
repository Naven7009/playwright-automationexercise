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

  async fillSignupDetails() {
    await this.page.click(this.locators.gender);
    await this.page.fill(this.locators.password, 'password');
  
    await this.page.selectOption(this.locators.days, '19');
    await this.page.selectOption(this.locators.months, 'June');
    await this.page.selectOption(this.locators.years, '1997');
  
    await this.page.click(this.locators.newsletter);
    await this.page.click(this.locators.option);
  
    await this.page.fill(this.locators.firstName, 'Naven');
    await this.page.fill(this.locators.lastName, 'Raj');
    await this.page.fill(this.locators.company, 'Google');
    await this.page.fill(this.locators.addressLine1, 'Perungudi');
    await this.page.fill(this.locators.addressLine2, 'Chennai');
  
    await this.page.selectOption(this.locators.country, 'Israel');
    await this.page.fill(this.locators.state, 'Tamil Nadu');
    await this.page.fill(this.locators.city, 'Chennai');
    await this.page.fill(this.locators.zipcode, '600001');
    await this.page.fill(this.locators.mobileNumber, '9789789774');
  }

  async createAccount() {
    await this.page.click(this.locators.createAccount);
    const accountText = await this.page.locator(this.locators.accountCreated).textContent();
    console.log(`Account Created Message: ${accountText}`);
    await this.page.click(this.locators.continueButton);
  }
}