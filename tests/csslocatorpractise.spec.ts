import {test, expect, Locator} from "@playwright/test"

test("css Locators", async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/");

/*1 - Absolute css -- we don't have absolute css path
 const absolutexpath :Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
  await expect(absolutexpath).toBeVisible();
  await page.waitForTimeout(2000); *///code 7-9 is copy paste of xpathlocator

//2- Relative css
const relativexcss : Locator = page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(relativexcss).toBeVisible();

//3 - contains() function
const product : Locator = page.locator("//h2//a[contains(@href,'computer')]");//This locator have 4 elements and to count we create varible
const productsCount: number= await product.count();// we want to count the number, how many elements are there so to count we are creating again a variable for counting
console.log("No of computer related product:" , productsCount);  //counting the product which has computer name in it in console
expect(productsCount).toBeGreaterThan(0);//since we don't know how many computer named product are there so to check 18th code where the number is greater then 0 or not we are using this code. checking pass or fail.
//console.log(await product.textContent());// priting 1 name of product but it will give error
                                         // Error : strict mode violation
                                         //why error because there are multiple element and we want to fetch only one element so playwright got confused which element to execute

// to rectify above issue there is method called first, last nth
console.log("First computer related product:",await product.first().textContent());// it will print first element  
console.log("Last computer related product:",await product.last().textContent());//it will give last element
console.log("Nth computer related product:",await product.nth(1).textContent());//works on array

let productTitles:string[]=await product.allTextContents();// getting all matched product into an array
console.log("all product :", productTitles);//gives all product name same as for loop
for(let pt of productTitles)
{
    console.log(pt);
}

/*4 - starts-with()
//page.goto("https://demowebshop.tricentis.com/")
const buildproduct: Locator= page.locator("//h2/a[starts-with(@href,'/build')]")  //returns multiple element 
const count : number = await buildproduct.count();  // now we are counting, how many elements will mathch with above code
expect(count).toBeGreaterThan(0);

//5. text()

const reglink: Locator = page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();


//6. last()

const lastitem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitem).toBeVisible();
console.log("Text content of last element: ", await lastitem.textContent());


//7. position()

const positionitem: Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionitem).toBeVisible();
console.log("Text content of positional element: ", await positionitem.textContent());   */
})