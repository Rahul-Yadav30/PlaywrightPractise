import {test, expect, Locator} from "@playwright/test"

test ("End-to-end testing of blaze platform", async ({page})=> {
    await page.goto("https://blazedemo.com/");
    const text : Locator = page.getByText('Welcome to the Simple Travel Agency!');
    expect(text).toHaveText('Welcome to the Simple Travel Agency!');
    await page.waitForTimeout(2000);
    const option = page.locator('select[name="fromPort"]');
    option.selectOption('San Diego');
    const option1 = page.locator('select[name="toPort"]');
    option1.selectOption('New York');
    await page.locator('.btn.btn-primary').click();
    const text1 : Locator = page.getByText('Flights from San Diego to New York: ');
    expect(text1).toHaveText('Flights from San Diego to New York: ');

})