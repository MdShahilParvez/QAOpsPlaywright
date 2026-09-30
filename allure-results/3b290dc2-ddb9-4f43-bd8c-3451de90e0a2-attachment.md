# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NetworkTest2.spec.js >> Security Test request Intercept
- Location: tests\NetworkTest2.spec.js:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | 
  3  | test('Security Test request Intercept', async ({ page }) => {
  4  | 
  5  |     const products = page.locator(".card-body");
  6  |     const email = "parvez.shahil1995@gmail.com";
  7  |     const productName = 'ADIDAS ORIGINAL';
> 8  |     await page.goto("https://rahulshettyacademy.com/client");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  9  |     await page.locator("input[id='userEmail']").fill(email);
  10 |     await page.locator("#userPassword").fill("Sahil@1234");
  11 |     await page.locator("#login").click();
  12 |     console.log(await page.title());
  13 |     //  console.log(await products.nth(0).textContent());
  14 |     await page.waitForLoadState('networkidle');
  15 |     await page.locator(".card-body b").first().waitFor();
  16 |     await page.locator("button[routerlink*= 'myorders']").click();
  17 | 
  18 |     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
  19 |         route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68c24821f669d6cb0ac2d39d' }))
  20 |     await page.locator("button:has-text('View')").first().click();
  21 |     await expect(page.locator(".blink_me")).toHaveText("You are not authorize to view this order");
  22 | 
  23 | 
  24 | 
  25 | 
  26 | })
```