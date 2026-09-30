const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObject/POManager');
const { expect, playwright, chromium } = require('@playwright/test');
const { CheckoutPage } = require('../../pageObject/CheckoutPage');
const { ThankyouPage } = require('../../pageObject/ThankyouPage');
const { OrdersHistoryPage } = require('../../pageObject/OrdersHistoryPage');


Given('I login using username as {string} and password as {string}', { timeout: 100 * 1000 }, async function (username, password) {
  // Write code here that turns the phrase above into concrete 


  const loginPage = this.poManager.getLoginPage();
  const products = this.page.locator(".card-body");
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
});

When('Add {string} in the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', { timeout: 100 * 1000 }, async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.verifyProduct(productName);
  await cartPage.checkout();
});

// When('I enter valid details and Place the order',async function () {
//   // Write code here that turns the phrase above into concrete actions
//  const checkoutPage=new CheckoutPage(this.page);
//    await checkoutPage.selectCountry(country);
//    await checkoutPage.fillPaymentDetails(cvvCode,cardName,couponCode);

// });

Then('The order should be available in the Orders History Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  const thankyouPage = new ThankyouPage(this.page);
  await thankyouPage.orderConfirmation();
  const orderId = await thankyouPage.getOrderId();
  await thankyouPage.clickOrdersButton();

  //
  const ordersHistoryPage = new OrdersHistoryPage(this.page);

  await this.page.locator("tbody").waitFor();
  const rows = await this.page.locator("tbody tr");
  await ordersHistoryPage.searchOrderId(orderId);
  await ordersHistoryPage.verifyOrder(orderId);
});

When(
  'I enter country {string}, CVV {string}, card name {string} and coupon {string}',
  async function (country, cvvCode, cardName, couponCode) {

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.selectCountry(country);

    await checkoutPage.fillPaymentDetails(
      cvvCode,
      cardName,
      couponCode
    );
  }
);

Given('I login to Ecommerce2 using username as {string} and password as {string}', async function (username, password) {
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const usernameInput  = this.page.locator("input#username");
  const signIn = this.page.locator("#signInBtn");
  const cardTitle = this.page.locator("h4 a");
  console.log(await this.page.title());


  await usernameInput.fill(username);
  await this.page.locator("[name='password']").fill(password);
  await signIn.click();
});


Then('Verify Error Message is displayed', async function () {
  
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});

