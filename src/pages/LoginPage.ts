import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    // Private locators
    private signupTabLocator = "//a[contains(text(),'Signup / Login')]";
    private loginEmailLocator = "//input[@data-qa='login-email']";
    private loginPasswordLocator = "//input[@data-qa='login-password']";
    private loginButtonLocator = "//button[@data-qa='login-button']";
    private errorMessageLocator = "//div[@class='error-message']"; // Example error message locator

    // Method to fill the login form
    async navigateToSignup() {
        await this.click(this.signupTabLocator);
    }
    async fillLoginForm(email: string, password: string) {
        await this.fill(this.loginEmailLocator, email);
        await this.fill(this.loginPasswordLocator, password);
        await this.click(this.loginButtonLocator);
    }

    // Assertion method: Check if the login failed
    async assertLoginError() {
        const errorMessage = await this.page.locator(this.errorMessageLocator).textContent();
        expect(errorMessage).toContain("Invalid login credentials"); // Example assertion for error message
    }

    // Assertion method: Check if the login is successful (for example, checking user profile)
    async assertLoginSuccess() {
        // Check if the user profile link or welcome message is visible after successful login
        const profileLink = await this.page.locator("a[href='/profile']").isVisible();
        expect(profileLink).toBeTruthy();
    }
}
