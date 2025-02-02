import { test, expect } from '@playwright/test';
import { SignupPage } from '../pageObjects/SignupPage';

test.describe('Automation Exercise Signup/Login', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await page.goto('https://www.automationexercise.com');
  });

  test('Signup/Login Test', async ({page}) => {
    await signupPage.navigateToSignup();
    await signupPage.fillSignupForm('automationexercise', 'automationexercise11@gmail.com');

    const emailElement = await signupPage.page.locator(signupPage.locators.emailText);
    
    if (await emailElement.isVisible()) {
      console.log(`Existing user detected: ${await emailElement.textContent()}`);
    } else {
      console.log('New user detected. Proceeding with signup...');
    }

    await signupPage.fillSignupDetails();
    await signupPage.createAccount();
  });
});
