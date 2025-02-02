import { test, expect } from '@playwright/test';
import { AutomationTest } from '../Methods/Reusable';

test('Automation Exercise Signup/Login', async ({ page }) => {
  const test = new AutomationTest(page);
  const locators = test.locators;
  await test.loadUrl('https://www.automationexercise.com');
  
  await test.click(locators.signupTab);
  await test.enterText(locators.signupName, 'automationexercise');
  await test.wait(1000);
  await test.enterText(locators.signupEmail, 'automationexercise8@gmail.com');
  await test.click(locators.signupButton);

  try {
    //const emailElement = test.locators(locators.emailText); // Get the locator
    const emailExists = await test.isVisible(locators.emailText); // Check if visible

    if (emailExists) {
      const emailText = await test.getText(locators.emailText);
      console.log(emailText);
    } else {
      throw new Error("Email element not found");
    }
  } catch (error) {
    console.log('New user detected. Proceeding with signup...');
    await test.click(locators.gender);
    await test.enterText(locators.password, 'password');

    await test.selectDropdown(locators.days, '19');
    await test.selectDropdown(locators.months, 'June');
    await test.selectDropdown(locators.years, '1997');

    await test.click(locators.newsletter);
    await test.click(locators.option);

    await test.enterText(locators.firstName, 'Naven');
    await test.enterText(locators.lastName, 'Raj');
    await test.enterText(locators.company, 'google');
    await test.enterText(locators.addressLine1, 'Perungudi');
    await test.enterText(locators.addressLine2, 'Chennai');

    await test.selectDropdown(locators.country, 'Israel');
    await test.enterText(locators.state, 'Tamilnadu');
    await test.enterText(locators.city, 'Chennai');
    await test.enterText(locators.zipcode, '600001');
    await test.enterText(locators.mobileNumber, '9789789774');
    await test.click(locators.createAccount);

    const accountText = await test.getText(locators.accountCreated);
    console.log(accountText);
    await test.click(locators.continueButton);
  }
});
