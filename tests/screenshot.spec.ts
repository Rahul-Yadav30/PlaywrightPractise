import { test, expect, Locator } from "@playwright/test"

test("take screenshot", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    //const timestamp = Date.now();
    //current page
    await page.screenshot({ path: 'screenshots/' + 'homepage' + '.png' });
    //full page
    await page.screenshot({ path: 'screenshots/' + 'fullpage' + '.png', fullPage: true })
    //specific element
    const element: Locator = page.getByAltText('Tricentis Demo Web Shop');
    await element.screenshot({ path: 'screenshots/' + 'element' + '.png' });

})
     
      //ss, video, trace and flaky test through configuration

    test("verify user login", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('1rahul');
    await page.locator('#loginpassword').fill('test@1234');
    await page.getByRole('button' , {name:'Log in'}).click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#logout2')).toBeVisible();
    await expect(page.locator('#nameofuser')).toHaveText('Welcome 1rahul');


})

 //ss, video, trace and flaky test through configuration

    test.only("create all step with playwright locators", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator('#loginusername').fill('1rahul');
    await page.locator('#loginpassword').fill('test@1234');
    await page.getByRole('button' , {name:'Log in'}).click();
    await page.waitForTimeout(5000);
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await expect(page.getByText('Welcome 1rahul')).toHaveText('Welcome 1rahul');


})

  //codegen test
test('Codegen test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('test');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('789654123654');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});