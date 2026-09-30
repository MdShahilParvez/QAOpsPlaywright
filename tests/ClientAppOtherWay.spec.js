const { test, expect } = require('@playwright/test');
const { assert } = require('console');
const { text } = require('stream/consumers');


test('Assignment 1',async({page}) =>{
    const products= page.locator(".card-body");
    const email= "parvez.shahil1995@gmail.com";
    const productName = 'ADIDAS ORIGINAL';
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Sahil@1234");
    await page.getByRole('button',{name: "Login"}).click();
    console.log(await page.title());
  //  console.log(await products.nth(0).textContent());
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  await page.locator(".card-body").filter({hasText: 'ADIDAS ORIGINAL'}).getByRole('button',{name: "Add To Cart"}).click();

    await page.getByRole('listitem').getByRole('button',{name: "Cart"}).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();

    await page.getByRole('button',{name: "Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150 });
     await page.getByRole('button',{name: "India"}).nth(1).click();


    
    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText("Thankyou for the order")).toBeVisible();  
   
});
 
 
 
