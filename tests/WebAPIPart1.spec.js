const{test, expect, request}= require('@playwright/test');
const{APiUtils}=require('../utils/APiUtils');
const loginPayLoad = {userEmail:"parvez.shahil1995@gmail.com",userPassword:"Sahil@1234"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"68a961719320a140fe1ca57c"}]};
let response;
test.beforeAll( async()=>
{
  
    const apiContext = await request.newContext();
    const apiUtils=new APiUtils(apiContext,loginPayLoad);
    response= await apiUtils.createOrder(orderPayLoad);
   

   

  
  }


);

test('@API Place the Order',async({page}) =>{
 
await  page.addInitScript(value=>{

    window.localStorage.setItem('token',value);
  
  },response.token);
    
 await page.goto("https://rahulshettyacademy.com/client");
 const email= "";

  const products= page.locator(".card-body");
  
  
   // await page.locator("tbody").waitFor();
    await page.locator("button[routerlink*='myorders']").click();
     await page.locator("tbody").waitFor();
    const rows= await page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++){
      const rowOrderId= await rows.nth(i).locator("th").textContent();
      if(response.orderID.includes(rowOrderId)){
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }

    const verifyOrderId= await page.locator(".col-text").textContent();
    //expect( orderID.toHaveText(verifyOrderId)).toBeTruthy();
    await page.pause();
    expect(response.orderID.includes(verifyOrderId)).toBeTruthy();

    




   // await page.pause();

   

});
 
 