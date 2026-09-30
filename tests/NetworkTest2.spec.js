const { test, expect, request } = require('@playwright/test');

test('Security Test request Intercept', async ({ page }) => {

    const products = page.locator(".card-body");
    const email = "parvez.shahil1995@gmail.com";
    const productName = 'ADIDAS ORIGINAL';
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("input[id='userEmail']").fill(email);
    await page.locator("#userPassword").fill("Sahil@1234");
    await page.locator("#login").click();
    console.log(await page.title());
    //  console.log(await products.nth(0).textContent());
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*= 'myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68c24821f669d6cb0ac2d39d' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator(".blink_me")).toHaveText("You are not authorize to view this order");




})