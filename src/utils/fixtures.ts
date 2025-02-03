import { test as base } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
//pages and test comes and here. From here, its imported as object by fixtures

export const test = base.extend<{
  signupPage: SignupPage;
}>({
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },
});

// export { test };
