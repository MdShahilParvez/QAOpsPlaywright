# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> @Web Assignment 1 for ADIDAS ORIGINAL
- Location: tests\ClientAppPO.spec.js:14:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.user__name [type=\'text\']').first()
Expected: "parvez.shahil1995@gmail.com"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.user__name [type=\'text\']').first() with timeout 5000ms
  - waiting for locator('.user__name [type=\'text\']').first()

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- text: Loading.... Order Placed Successfully
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const {POManager} = require('../pageObject/POManager');
  3  | const {CheckoutPage}=require('../pageObject/CheckoutPage');
  4  | //const {ThankyouPage}=require('../pageObject/ThankyouPage');
  5  | const {ThankyouPage}=require('../pageObject/ThankyouPage');
  6  | const {OrdersHistoryPage}=require('../pageObject/OrdersHistoryPage');
  7  | 
  8  | const { assert } = require('console');
  9  | const { text } = require('stream/consumers');
  10 | const dataset=JSON.parse((JSON.stringify(require('../utils/ClientAppPO.json'))));
  11 | 
  12 | for(const data of dataset){
  13 |   
  14 | test(`@Web Assignment 1 for ${data.productName}`,async({page}) =>{
  15 | 
  16 |    const poManager= new POManager(page);
  17 | 
  18 |     const loginPage = poManager.getLoginPage();
  19 |     const products= page.locator(".card-body");
  20 |     await loginPage.goTo();
  21 |     await loginPage.validLogin(data.username,data.password);
  22 |     const dashboardPage=poManager.getDashboardPage();
  23 |     await dashboardPage.searchProductAddCart(data.productName);
  24 |     await dashboardPage.navigateToCart();
  25 | 
  26 |     console.log(await page.title());
  27 |   //  console.log(await products.nth(0).textContent());
  28 |   
  29 |     const cartPage = poManager.getCartPage();
  30 | // await   cartPage.verifyProduct(dataset.productName);
  31 | await   cartPage.verifyProduct(data.productName);
  32 |   await cartPage.checkout(); 
  33 |     //await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:150 });
  34 |     const checkoutPage=new CheckoutPage(page);
  35 |    await checkoutPage.selectCountry(data.country);
  36 |    await checkoutPage.fillPaymentDetails(data.cvvCode,data.cardName,data.couponCode);
  37 |   
  38 | 
> 39 |     expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  40 | 
  41 |    // await page.locator(".small [class='input txt']").fill(cvvCode);
  42 |   //  await page.pause();
  43 | 
  44 |  
  45 |     //
  46 |    const thankyouPage=new ThankyouPage(page);
  47 |   await thankyouPage.orderConfirmation();
  48 |    const orderId=await thankyouPage.getOrderId();
  49 |   await thankyouPage.clickOrdersButton();
  50 | 
  51 |     //
  52 |     const ordersHistoryPage=new OrdersHistoryPage(page);
  53 |     
  54 |      await page.locator("tbody").waitFor();
  55 |     const rows= await page.locator("tbody tr");
  56 |   await ordersHistoryPage.searchOrderId(orderId);
  57 |   await ordersHistoryPage.verifyOrder(orderId);
  58 | 
  59 |     
  60 | 
  61 | 
  62 | 
  63 | 
  64 |    // await page.pause();
  65 | 
  66 |    
  67 | 
  68 | });
  69 |  
  70 | 
  71 | 
  72 | }
  73 |  
  74 |  
  75 | 
```