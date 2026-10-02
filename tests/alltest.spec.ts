import {test, expect, Locator} from "@playwright/test"

//all type of testing practise
test ("verify input text box", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //1-) Input box
    const input :Locator = page.locator('#name');
    await input.fill("Rahul Yadav");
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    console.log(await input.inputValue());
   // const maxlength :string|null = await input.getAttribute("maxlength");
    //expect(maxlength).toBe("15");
    expect(await input.getAttribute("maxlength")).toBe("15");
     //const mandatory : string|null = await input.getAttribute("required"); // Validate if it's a mandatory field.
    // expect(mandatory).toBe("required");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("placeholder", "Enter Name");

    //email
    const email : Locator = page.locator('#email');
    await email.fill("rahul.yadav@gmail.com");
    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();
    expect(await email.getAttribute("maxlength")).toBe("25");

    //phone
    const phone : Locator = page.locator('#phone')
    await phone.fill("9876543223");
    console.log(await phone.inputValue());
    expect(await phone.getAttribute("maxlength")).toBe("10");

    //add
    const add : Locator = page.getByLabel('Address');
    await add.fill("mughlasarai");
    await page.waitForTimeout(3000);
    
})

//radio button
test ("verify radio button", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");

     /*a-)find the radio button
   b-) check  visibility 
   c-) verify radio button is enabled 
   d-) verify that the radio button is already checked or not 
   e-) select radio button and check button is checked or not*/
   // const radiobutton : Locator = page.getByLabel('Male');  getbylabel not working for this locator
    const radiobutton : Locator = page.locator('#male'); 
    await expect(radiobutton).toBeVisible();
    await expect (radiobutton).toBeEnabled();
    await expect (radiobutton).not.toBeChecked();
    await radiobutton.click();
    await expect(radiobutton).toBeChecked();
})

//checkbox
test("verify checkbox", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // single checkbox
    /*const drop : Locator = page.getByLabel('Sunday');
    await drop.click();
    await expect(drop).toBeChecked();*/

    //multiple checkbox
    const days :string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes:Locator[]= days.map(index =>page.getByLabel(index));
    expect(checkboxes.length).toBe(7); 
    for(const checkbox of checkboxes)
    {
     checkbox.click();
     await expect (checkbox).toBeChecked();
    }
})

//dynamic button
test ("verify dynamic button", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
    for (let i=1; i<=5; i++)
    {
       const button :Locator = page.getByRole('button', {name : /START|STOP/})
       button.click();
       await page.waitForTimeout(2000);
    }
})
