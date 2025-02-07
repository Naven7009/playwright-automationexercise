export class LoginPage {
    constructor(private _page) {}
    get page() {
      return this._page;
    }
    locators = {
        signupTab: "//a[contains(text(),'Signup / Login')]",
        loginEmail: "//input[@data-qa='login-email']",
	    loginPassword: "//input[@data-qa='login-password']",
	    loginButton: "//button[@data-qa='login-button']",

        logouttab: "//a[contains(text(),'Logout')]"
    }

    
    async fillLoginForm(email: string, password: string) {
        await this.page.click(this.locators.signupTab);
        await this.page.fill(this.locators.loginEmail, email);
        await this.page.fill(this.locators.loginPassword, password);
        await this.page.click(this.locators.loginButton);

        await this.page.click(this.locators.logouttab);
    }
};