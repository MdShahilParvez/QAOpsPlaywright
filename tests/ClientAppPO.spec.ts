import { expect, type Locator, type Page, test } from '@playwright/test';

import {POManager} from '../pageObject_ts/POManager';
//const {POManager} = require('../pageObject/POManager');
import {CheckoutPage} from '../pageObject/CheckoutPage';
//const {CheckoutPage}=require('../pageObject/CheckoutPage');
//const {ThankyouPage}=require('../pageObject/ThankyouPage');
import {ThankyouPage} from '../pageObject/ThankyouPage';
//const {ThankyouPage}=require('../pageObject/ThankyouPage');
//const {ThankyouPage}=require('../pageObject/ThankyouPage');
import {OrdersHistoryPage} from '../pageObject/OrdersHistoryPage';
//const {OrdersHistoryPage}=require('../pageObject/OrdersHistoryPage');
import {customtest} from '../utils_ts/test-base';
//const dataset=JSON.parse((JSON.stringify(require('../utils/ClientAppPO.json'))));
import dataset from '../utils/ClientAppPO.json';


for(const data of dataset){
  

  
test(`@Web Assignment 1 for ${data.productName}`,async({page}) =>{
  

   const poManager= new POManager(page);

    const loginPage = poManager.getLoginPage();
    const products= page.locator(".card-body");
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    console.log(await page.title());
  //  console.log(await products.nth(0).textContent());
  
    const cartPage = poManager.getCartPage();
// await   cartPage.verifyProduct(dataset.productName);
await   cartPage.verifyProduct(data.productName);
  await cartPage.checkout(); 
    //await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:150 });
    const checkoutPage=new CheckoutPage(page);
   await checkoutPage.selectCountry(data.country);
   await checkoutPage.fillPaymentDetails(data.cvvCode,data.cardName,data.couponCode);
  

    expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);

   // await page.locator(".small [class='input txt']").fill(cvvCode);
  //  await page.pause();

 
    //
   const thankyouPage=new ThankyouPage(page);
  await thankyouPage.orderConfirmation();
   const orderId=await thankyouPage.getOrderId();
  await thankyouPage.clickOrdersButton();

    //
    const ordersHistoryPage=new OrdersHistoryPage(page);
    
     await page.locator("tbody").waitFor();
    const rows= await page.locator("tbody tr");
  await ordersHistoryPage.searchOrderId(orderId);
  await ordersHistoryPage.verifyOrder(orderId);

    




   // await page.pause();

   

});
 


}
 
 
