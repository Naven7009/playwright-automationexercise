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
    await signupPage.fillSignupForm('automationexercise', 'automationexercise10@gmail.com');

    const emailElement = await signupPage.page.locator(signupPage.locators.emailText);
    
    if (await emailElement.isVisible()) {
      console.log(`Existing user detected: ${await emailElement.textContent()}`);
    } else {
      console.log('New user detected. Proceeding with signup...');
      await fillSignupDetails(signupPage);
      await createAccount(signupPage);
    }
  });
});

async function fillSignupDetails(signupPage: SignupPage) {
  await signupPage.page.click(signupPage.locators.gender);
  await signupPage.page.fill(signupPage.locators.password, 'password');

  await signupPage.page.selectOption(signupPage.locators.days, '19');
  await signupPage.page.selectOption(signupPage.locators.months, 'June');
  await signupPage.page.selectOption(signupPage.locators.years, '1997');

  await signupPage.page.click(signupPage.locators.newsletter);
  await signupPage.page.click(signupPage.locators.option);

  await signupPage.page.fill(signupPage.locators.firstName, 'Naven');
  await signupPage.page.fill(signupPage.locators.lastName, 'Raj');
  await signupPage.page.fill(signupPage.locators.company, 'Google');
  await signupPage.page.fill(signupPage.locators.addressLine1, 'Perungudi');
  await signupPage.page.fill(signupPage.locators.addressLine2, 'Chennai');

  await signupPage.page.selectOption(signupPage.locators.country, 'Israel');
  await signupPage.page.fill(signupPage.locators.state, 'Tamil Nadu');
  await signupPage.page.fill(signupPage.locators.city, 'Chennai');
  await signupPage.page.fill(signupPage.locators.zipcode, '600001');
  await signupPage.page.fill(signupPage.locators.mobileNumber, '9789789774');
}

async function createAccount(signupPage: SignupPage) {
  await signupPage.page.click(signupPage.locators.createAccount);
  const accountText = await signupPage.page.locator(signupPage.locators.accountCreated).textContent();
  console.log(`Account Created Message: ${accountText}`);
  await signupPage.page.click(signupPage.locators.continueButton);
}
