const { test, expect } = require('@playwright/test');
const { assert } = require('console');
const { text } = require('stream/consumers');


test.skip('Assignment 1',async({page}) =>{
    const products= page.locator(".card-body");
    const email= "parvez.shahil1995@gmail.com";
    const productName = 'ADIDAS ORIGINAL';
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("input[id='userEmail']").fill(email);
    await page.locator("#userPassword").fill("Sahil@1234");
    await page.locator("#login").click();
    console.log(await page.title());
  //  console.log(await products.nth(0).textContent());
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
    console.log(await products.allTextContents());
    const count = await products.count();
    for(let i=0;i<count;i++){
        if(await products.nth(i).locator("b").textContent()===productName){
          await products.nth(i).locator("text= Add To Cart").click();
          break;
        }
    }

    await page.locator("button[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool=await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:150 });
    const dropdown= page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++){
     const text=await dropdown.locator("button").nth(i).textContent();
      if(text===" India"){
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }

    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

    await page.locator(".small [class='input txt']").fill("987");
    await page.locator("body > app-root:nth-child(1) > app-order:nth-child(2) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(2)").fill("Terry Lee");
    await page.locator("[name='coupon']").fill("terry-fik");



    await page.locator(".action__submit").click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
   // await page.locator("tbody").waitFor();
    await page.locator("button[routerlink*='myorders']").click();
     await page.locator("tbody").waitFor();
    const rows= await page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++){
      const rowOrderId= await rows.nth(i).locator("th").textContent();
      if(orderID.includes(rowOrderId)){
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }

    const verifyOrderId= await page.locator(".col-text").textContent();
    //expect( orderID.toHaveText(verifyOrderId)).toBeTruthy();
    expect(orderID.includes(verifyOrderId)).toBeTruthy();

    




   // await page.pause();

   

});
 
 
 
