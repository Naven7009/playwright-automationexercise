import {test} from "@playwright/test";

test('cric points',async({page}) =>{
    await page.goto("https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/points-table-standings");
    const tablerow = await page.locator("//span[contains(text(),'Group D')])[1]/following::table/thead/tr").all();

    for(let values of tablerow){
        console.log(values.textContent());
        
    }

})