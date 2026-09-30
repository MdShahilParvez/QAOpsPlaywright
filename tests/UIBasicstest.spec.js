const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('Browser context Playwright test',async ({ browser }) =>
{
    
    const context = await browser.newContext();
    const page= await context.newPage();
   //  await page.route("**/*.jpg",route=>route.abort());
   page.on('request',request=>console.log(request.url()));
   page.on('response',response=>console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("input#username");
    const signIn = page.locator("#signInBtn");
    const cardTitle = page.locator("h4 a");
    console.log(await page.title());


    await username.fill("rahul shetty");
    await page.locator("[name='password']").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
   // await page.locator("[name='password']").fill("learning");
    await signIn.click();
    
    console.log(await cardTitle.nth(0).textContent());
    console.log(await cardTitle.nth(1).textContent());
    const allTitle = await cardTitle.allTextContents();
    console.log(allTitle);






});


test('UI Controls',async ({ page }) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const username = page.locator("input#username");
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink= page.locator("a[class='blinkingText']");
    await dropdown.selectOption("consult");
  //  
  await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").check();
    await expect(page.locator("#terms").last()).toBeChecked();
    await page.locator("#terms").uncheck();
   expect (await page.locator("#terms").last().isChecked()).toBeFalsy();
   await  expect(documentLink).toHaveAttribute('class', 'blinkingText');


  //  await page.pause();
});

test('Child windows Handling',async ({ browser }) =>
{
    
    const context = await browser.newContext();
    const page= await context.newPage();
    const username = page.locator("input#username");
     const documentLink= page.locator("a[class='blinkingText']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [newPage] =await Promise.all(
      [
        context.waitForEvent('page'),
  documentLink.click(),
    ])
    page.pause();

    const text = await newPage.locator(".red").textContent();
  // console.log( text)

    const arrayText= await text.split("@");
    const domain=arrayText[1].split(" ")[0];
   // console.log(domain);
    await username.fill(domain);
  //  await page.pause();
    console.log(await username.inputValue());

    


});

