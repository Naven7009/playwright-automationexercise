import { test } from "@playwright/test";

test("cric points", async ({ page }) => {
  await page.goto(
    "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/points-table-standings"
  );
  const tablerow = await page
    .locator(
      `(//span[contains(text(),'Group A')])[1]/following::table[1]/thead/tr/th`
    )
    .all();

  // const rowTexts = await Promise.all(tablerow.map(values => values.textContent()));
  // console.log(rowTexts.join('    '));

  let rowText = "";
  for (let values of tablerow) {
    rowText += (await values.textContent()) + "    "; // Add text with spaces
  }
  console.log(rowText.trim());

  for(let i=1;i<=28;i++){
  const rowelements =await page.locator(`(//tr[@class='ds-text-tight-s ds-text-typo-mid2'])[${i}]/td`).all();
  const rowTexts = await Promise.all(rowelements.map(element => element.textContent()));
  console.log(rowTexts.join('    '));
  }
});


