import { test, expect } from '@playwright/test';

test('Automation Exercise Signup/Login', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await page.locator("text=Signup / Login").click();
    await page.locator("[data-qa='signup-name']").fill("automationexercise");
    await page.locator("[data-qa='signup-email']").fill("automationexecrice6@gmail.com");
    await page.locator("[data-qa='signup-button']").click();
    
    // Check if email already exists
    const emailText = await page.locator("//p[contains(text(),'Email Address')]").first();
    if (await emailText.isVisible()) {
        console.log("New user......");
    } else {
        await page.locator("#id_gender1").check();
        await page.locator("#password").fill("password");
        await page.locator("#days").selectOption("19");
        await page.locator("#months").selectOption("June");
        await page.locator("#years").selectOption("1997");
        await page.locator("#newsletter").check();
        await page.locator("#optin").check();
        
        await page.locator("#first_name").fill("Naven");
        await page.locator("#last_name").fill("Raj");
        await page.locator("#company").fill("google");
        await page.locator("#address1").fill("perungudi");
        await page.locator("#address2").fill("chennai");
        await page.locator("#country").selectOption("Israel");
        await page.locator("#state").fill("Tamilnadu");
        await page.locator("#city").fill("Chennai");
        await page.locator("#zipcode").fill("600001");
        await page.locator("#mobile_number").fill("9789789774");
        
        await page.locator("[data-qa='create-account']").click();

        // Verify account creation
        const accountCreated = await page.locator("[data-qa='account-created']");
        await expect(accountCreated).toBeVisible();
        console.log(await accountCreated.textContent());
        
        await page.locator("[data-qa='continue-button']").click();
    }
});
