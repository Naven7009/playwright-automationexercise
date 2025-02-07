import { test} from '../utils/fixtures';

test.describe('Automation Exercise Signup/Login', () => {

  test.beforeEach(async ({ page}) => {
    await page.goto('https://www.automationexercise.com');
  });

  test('Signup Test', async ({signupPage}) => {
    await signupPage.navigateToSignup();
    await signupPage.fillSignupForm('automationexercise', 'automationexercise2@gmail.com');
    const emailElement = await signupPage.page.locator(signupPage.locators.emailText);
    
    if (await emailElement.isVisible()) {
      console.log(`Existing user detected: ${await emailElement.textContent()}`);
    } else {
      console.log('New user detected. Proceeding with signup...');
      /*It makes test to pass- for new user and existing user.
        Place the following 2 methods out of else to fail for existing exists.*/
      await signupPage.fillSignupDetails();
      await signupPage.createAccount(); 
    }
  });

  test('Login Test',async({loginPage}) => {
    await loginPage.fillLoginForm('automationexercise24@gmail.com','password');
  })

  //logout added in method itself, because afterall couldn't handle fixtures
});