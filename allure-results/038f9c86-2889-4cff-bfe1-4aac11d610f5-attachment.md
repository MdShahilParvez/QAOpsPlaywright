# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.ts >> @Web Assignment 1 for ZARA COAT 3
- Location: tests\ClientAppPO.spec.ts:22:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.user__name [type=\'text\']').first()
Expected: "shahilparvez17@gmail.com"
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
- heading "Your Orders" [level=1]
- table:
  - rowgroup:
    - row "Order Id Product Image Name Price Ordered Date View Delete":
      - columnheader "Order Id"
      - columnheader "Product Image"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Ordered Date"
      - columnheader "View"
      - columnheader "Delete"
  - rowgroup:
    - row "6aa79340e7cd69710fd856a2 ZARA COAT 3 $ 11500 Mon Sep 14 View Delete":
      - rowheader "6aa79340e7cd69710fd856a2"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Mon Sep 14"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa7933fe7cd69710fd85692 ZARA COAT 3 $ 11500 Mon Sep 14 View Delete":
      - rowheader "6aa7933fe7cd69710fd85692"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Mon Sep 14"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa77333e7cd69710fd820d0 ZARA COAT 3 $ 11500 Mon Sep 14 View Delete":
      - rowheader "6aa77333e7cd69710fd820d0"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Mon Sep 14"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa23cd9e7cd69710fce5f24 ZARA COAT 3 $ 11500 Thu Sep 10 View Delete":
      - rowheader "6aa23cd9e7cd69710fce5f24"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Thu Sep 10"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa23be7e7cd69710fce5d3c ZARA COAT 3 $ 11500 Thu Sep 10 View Delete":
      - rowheader "6aa23be7e7cd69710fce5d3c"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Thu Sep 10"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa23925e7cd69710fce57ac ZARA COAT 3 $ 11500 Thu Sep 10 View Delete":
      - rowheader "6aa23925e7cd69710fce57ac"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Thu Sep 10"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
    - row "6aa0e422e7cd69710fcb5d98 ZARA COAT 3 $ 11500 Wed Sep 09 View Delete":
      - rowheader "6aa0e422e7cd69710fcb5d98"
      - cell:
        - img
      - cell "ZARA COAT 3"
      - cell "$ 11500"
      - cell "Wed Sep 09"
      - cell "View":
        - button "View"
      - cell "Delete":
        - button "Delete"
- text: "* If orders Will be more than 7 your last order will get deleted"
- button "Go Back to Shop"
- button "Go Back to Cart"
```

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('.col-text')

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | class OrdersHistoryPage{
  3  | 
  4  |     constructor(page){
  5  |         this.orderTable=page.locator("tbody");
  6  |         this.rows= page.locator("tbody tr");
  7  |         this.verifyOrderId=  page.locator(".col-text");
  8  | 
  9  | 
  10 |     }
  11 | 
  12 |     async searchOrderId(orderID){
  13 |         for(let i=0;i<await this.rows.count();i++){
  14 |       const rowOrderId= await this.rows.nth(i).locator("th").textContent();
  15 |       if(orderID.includes(rowOrderId)){
  16 |         await this.rows.nth(i).locator("button").first().click();
  17 |         break;
  18 |       }
  19 |     }
  20 | 
  21 |     }
  22 | 
  23 |     async verifyOrder(orderID){
> 24 |      const actualOrderId=await this.verifyOrderId.textContent();
     |                                                   ^ Error: locator.textContent: Test ended.
  25 |           expect(orderID.includes(actualOrderId)).toBeTruthy();
  26 | 
  27 |     }
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | }
  35 | module.exports={OrdersHistoryPage};
```