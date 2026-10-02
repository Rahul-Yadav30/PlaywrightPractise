/*here i will practice for myfirst test and also pw build-in locators
1- page.getbyalttext
2- page.getbytext
3- page.getbylabel
4- page.getbyplaceholder
5- page.getbytitle
6- page.getbyrole
7- page.getbytestid    */

import {test, expect, Locator} from "@playwright/test"

test("verify page title", async ({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
   const img:Locator= page.getByAltText('Tricentis Demo Web Shop');
   img.isVisible();
   await expect(img).toBeVisible();
})

test ("welcome text", async ({page})=>{
   await page.goto("https://demowebshop.tricentis.com/"); //erlier i was getting error because i haven't passes page url here 
                                                         // since this is new test and after the {} that is why it was required to pass url again
   await expect (page.getByText('Welcome to our store')).toBeVisible();
  // await page.goto("").
  // page.waitForTimeout(5000);
  await page.getByRole('link', {name : "Register"}).click();
   //expect (page.getByRole('heading', {name : "Register"})).click();
   await page.waitForTimeout(5000);
   await page.getByLabel('First name:').fill("Rahul");
   await page.getByLabel('Last name:').fill("Yadav");

})

test ("placeholder", async ({page})=> {
   await page.goto("https://orangehrm.com/");
   await page.getByPlaceholder('Your email address').fill("rahul@gmail.com");
   await page.locator("//form[@id='Form_submitForm']//input[@id='Form_submitForm_action_request']").click();
})