import { BasePage } from './BasePage';
import { expect } from '@playwright/test'; // Import the Playwright's assertion module

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
    }

    // Private locators with direct access
    private productTabLocator = "//a[contains(text(),'Products')]";
    private productListLocator = "//h2[contains(text(),'All Products')]/following::div[@class='productinfo text-center']//child::p";
    private firstProductLinkLocator = "(//a[contains(text(),'View Product')])[1]";
    private productNameLocator = "//div[@class='product-information']/h2";
    private productDescriptionLocator = "//div[@class='product-information']/p";

    // Methods to interact with locators
    async viewProducts() {
        await this.page.waitForSelector(this.productTabLocator);
        await this.click(this.productTabLocator);
        console.log(await this.page.url());
        await this.page.waitForTimeout(5000); // Wait for the products to load

        const productItems = await this.page.locator(this.productListLocator).all();
        // Assert that products are available
        expect(productItems.length).toBeGreaterThan(0);
        
        for (const item of productItems) {
            const text = await item.textContent();
            console.log(text);
        }
    }

    async viewProductDetails() {
        await this.click(this.firstProductLinkLocator);
        console.log(await this.page.url());

        // Assert product name exists
        const productName = await this.getText(this.productNameLocator);
        expect(productName).not.toBeNull(); // Assert that product name is not null or empty
        console.log(productName);

        // Assert product description exists
        const productDescription = await this.page.locator(this.productDescriptionLocator).all();
        expect(productDescription.length).toBeGreaterThan(0);
        
        for (const item of productDescription) {
            const text = await item.textContent();
            console.log(text);
        }
    }
}
