import { expect } from "@playwright/test";
import { test } from "../utils/fixtures";

test.describe("Product Page Testing", () => {
  test.beforeEach(async ({ page, productPage }) => {
    await page.goto("https://www.automationexercise.com");
    // Optional: Ensure the page has loaded correctly
  });

  test("View Products", { tag: ['@smoke', '@regression'] }, async ({ productPage }) => {
    await productPage.viewProducts();
  });

  test("View Product Details", { tag: ['@regression'] }, async ({ productPage }) => {
    await productPage.viewProductDetails();
  });
});
