import { BasePage } from './BasePage';
import { expect } from '@playwright/test'; // Import the Playwright's assertion module

export class SignupPage extends BasePage {
    constructor(page) {
        super(page);
    }

    // Public locators (or getter methods)
    public signupTab = "//a[contains(text(),'Signup / Login')]";
    public signupName = "//input[@data-qa='signup-name']";
    public signupEmail = "//input[@data-qa='signup-email']";
    public signupButton = "//button[@data-qa='signup-button']";
    public emailError = "//p[.='Email Address already exist!']";
    public genderRadio = "#id_gender1";
    public passwordField = "#password";
    public daysDropdown = "//select[@id='days']";
    public monthsDropdown = "//select[@id='months']";
    public yearsDropdown = "//select[@id='years']";
    public newsletterCheckbox = "#newsletter";
    public optionCheckbox = "#optin";
    public firstNameField = "#first_name";
    public lastNameField = "#last_name";
    public companyField = "#company";
    public address1Field = "#address1";
    public address2Field = "#address2";
    public countryDropdown = "//select[@id='country']";
    public stateField = "#state";
    public cityField = "#city";
    public zipcodeField = "#zipcode";
    public mobileField = "#mobile_number";
    public createAccountButton = "//button[@data-qa='create-account']";
    public accountCreatedMessage = "//h2[@data-qa='account-created']";
    public continueButton = "//a[@data-qa='continue-button']";
    public logoutLink = "//a[contains(text(),'Logout')]";

    // Methods to interact with locators
    async navigateToSignup() {
        await this.click(this.signupTab);
    }

    async fillSignupForm(name: string, email: string) {
        await this.fill(this.signupName, name);
        await this.fill(this.signupEmail, email);
        await this.click(this.signupButton);

        // Assertion to check if the email is already registered (if exists)
        const emailError = await this.page.locator(this.emailError).textContent();
        console.log(emailError);
        
        if (emailError.includes("Email already exist")) {
            throw new Error('Email already exists. Cannot proceed with signup');
        }
    }

    async fillSignupDetails() {
        await this.click(this.genderRadio);
        await this.fill(this.passwordField, "password");

        await this.selectOption(this.daysDropdown, "19");
        await this.selectOption(this.monthsDropdown, "June");
        await this.selectOption(this.yearsDropdown, "1997");

        await this.click(this.newsletterCheckbox);
        await this.click(this.optionCheckbox);

        await this.fill(this.firstNameField, "Naven");
        await this.fill(this.lastNameField, "Raj");
        await this.fill(this.companyField, "Google");
        await this.fill(this.address1Field, "Perungudi");
        await this.fill(this.address2Field, "Chennai");

        await this.selectOption(this.countryDropdown, "Israel");
        await this.fill(this.stateField, "Tamil Nadu");
        await this.fill(this.cityField, "Chennai");
        await this.fill(this.zipcodeField, "600001");
        await this.fill(this.mobileField, "9789789774");
    }

    async createAccount() {
        await this.click(this.createAccountButton);

        // Assertion to check account creation message
        const accountText = await this.getText(this.accountCreatedMessage);
        expect(accountText).toBeTruthy(); // Ensures account creation message exists

        console.log(`Account Created Message: ${accountText}`);

        await this.click(this.continueButton);

        // Assertion to check if logout link is visible after account creation
        const logoutLinkVisible = await this.page.locator(this.logoutLink).isVisible();
        expect(logoutLinkVisible).toBe(true);

        await this.click(this.logoutLink);
    }
}
