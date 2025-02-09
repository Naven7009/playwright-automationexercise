import { expect } from '@playwright/test';
import { test} from '../utils/fixtures';

test.describe("Signup Page Testing", () => {
  test.beforeEach(async ({ page, signupPage }) => {
    await page.goto("https://www.automationexercise.com");
    // Wait for the signup tab to be visible
    await page.waitForSelector(signupPage.signupTab);
  });

  test("Signup Test", { tag: ['@smoke', '@regression'] }, async ({ signupPage }) => {
    await signupPage.navigateToSignup();
    await signupPage.fillSignupForm('automationexercise', 'automationexercise2@gmail.com');
    const emailElement = await signupPage.page.locator(signupPage.signupEmail);
    
    if (await emailElement.isVisible()) {
      console.log(`Existing user detected: ${await emailElement.textContent()}`);
    } else {
      console.log('New user detected. Proceeding with signup...');
      await signupPage.fillSignupDetails();
      await signupPage.createAccount();
      
      // Check if the account creation message is visible
      const accountCreatedMessage = await signupPage.page.locator(signupPage.accountCreatedMessage);
      expect(await accountCreatedMessage.isVisible()).toBeTruthy();  // Ensures account creation message is visible

      // Check if the logout link is visible after account creation
      const logoutLink = await signupPage.page.locator(signupPage.logoutLink);
      expect(await logoutLink.isVisible()).toBeTruthy();  // Ensures logout link is visible
    }
  });

  test("Login Test", { tag: ['@regression']  }, async ({ loginPage }) => {
    await loginPage.navigateToSignup();
    await loginPage.fillLoginForm('automationexercise24@gmail.com', 'password');
  });
});