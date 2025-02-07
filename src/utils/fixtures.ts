import { test as base } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
//pages and test comes and here. From here, its imported as object by fixtures

export const test = base.extend<{
  signupPage: SignupPage,
  loginPage: LoginPage
}>({
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

// export { test };
