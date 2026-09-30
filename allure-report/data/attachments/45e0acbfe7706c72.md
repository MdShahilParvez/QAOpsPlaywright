# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.js >> UI Controls
- Location: tests\UIBasicstest.spec.js:42:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { request } = require('http');
  3  | 
  4  | test('Browser context Playwright test',async ({ browser }) =>
  5  | {
  6  |     
  7  |     const context = await browser.newContext();
  8  |     const page= await context.newPage();
  9  |    //  await page.route("**/*.jpg",route=>route.abort());
  10 |    page.on('request',request=>console.log(request.url()));
  11 |    page.on('response',response=>console.log(response.url(),response.status()));
  12 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  13 |     const username = page.locator("input#username");
  14 |     const signIn = page.locator("#signInBtn");
  15 |     const cardTitle = page.locator("h4 a");
  16 |     console.log(await page.title());
  17 | 
  18 | 
  19 |     await username.fill("rahul shetty");
  20 |     await page.locator("[name='password']").fill("learning");
  21 |     await signIn.click();
  22 |     console.log(await page.locator("[style*='block']").textContent());
  23 |     await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  24 |     await username.fill("");
  25 |     await username.fill("rahulshettyacademy");
  26 |    // await page.locator("[name='password']").fill("learning");
  27 |     await signIn.click();
  28 |     
  29 |     console.log(await cardTitle.nth(0).textContent());
  30 |     console.log(await cardTitle.nth(1).textContent());
  31 |     const allTitle = await cardTitle.allTextContents();
  32 |     console.log(allTitle);
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | });
  40 | 
  41 | 
  42 | test('UI Controls',async ({ page }) =>
  43 | {
> 44 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     |                ^ Error: page.goto: Test ended.
  45 |  const username = page.locator("input#username");
  46 |     const signIn = page.locator("#signInBtn");
  47 |     const dropdown = page.locator("select.form-control");
  48 |     const documentLink= page.locator("a[class='blinkingText']");
  49 |     await dropdown.selectOption("consult");
  50 |   //  
  51 |   await page.locator(".radiotextsty").last().click();
  52 |     await page.locator("#okayBtn").click();
  53 |     console.log(await page.locator(".radiotextsty").last().isChecked());
  54 |     await expect(page.locator(".radiotextsty").last()).toBeChecked();
  55 |     await page.locator("#terms").check();
  56 |     await expect(page.locator("#terms").last()).toBeChecked();
  57 |     await page.locator("#terms").uncheck();
  58 |    expect (await page.locator("#terms").last().isChecked()).toBeFalsy();
  59 |    await  expect(documentLink).toHaveAttribute('class', 'blinkingText');
  60 | 
  61 | 
  62 |   //  await page.pause();
  63 | });
  64 | 
  65 | test('Child windows Handling',async ({ browser }) =>
  66 | {
  67 |     
  68 |     const context = await browser.newContext();
  69 |     const page= await context.newPage();
  70 |     const username = page.locator("input#username");
  71 |      const documentLink= page.locator("a[class='blinkingText']");
  72 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  73 | 
  74 |     const [newPage] =await Promise.all(
  75 |       [
  76 |         context.waitForEvent('page'),
  77 |   documentLink.click(),
  78 |     ])
  79 |     page.pause();
  80 | 
  81 |     const text = await newPage.locator(".red").textContent();
  82 |   // console.log( text)
  83 | 
  84 |     const arrayText= await text.split("@");
  85 |     const domain=arrayText[1].split(" ")[0];
  86 |    // console.log(domain);
  87 |     await username.fill(domain);
  88 |   //  await page.pause();
  89 |     console.log(await username.inputValue());
  90 | 
  91 |     
  92 | 
  93 | 
  94 | });
  95 | 
  96 | 
```