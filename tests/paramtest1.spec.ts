import { test, expect, Locator } from "@playwright/test"

// for single product
/*test("verify the single item", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('computer');
    await page.locator('.button-1.search-box-button').click();
    await page.getByAltText('Picture of Simple Computer').click();
    expect(page.getByRole('heading', { name: 'Simple Computer' }));
})*/

//multible item with for loop
/*const item :string[] =['computer', 'laptop', 'gift card']
for(const items of item){
test(`verify mutiple item ${items}`, async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(items);
    await page.locator('.button-1.search-box-button').click();
    await expect(page.locator('h2 a').nth(0)).toContainText(items, {ignoreCase:true})

})
}*/

//multiple item with foreach loop
const item :string[] = ['computer', 'laptop', 'gift card']
item.forEach((items)=>{
test(`verify multiple item ${items}`, async ({page})=>{
     await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(items);
    await page.locator('.button-1.search-box-button').click();
    await expect(page.locator('h2 a').nth(0)).toContainText(items, {ignoreCase:true})

});
});