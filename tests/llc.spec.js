const { test, expect } = require('@playwright/test');

test('Playwright Special locators',async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Employed").check();
    await page.getByPlaceholder("Password").fill("Test123");
    await page.locator("[name='email']").fill("abc@gmail.com");
    await page.locator("[name='name']").first().fill("Terry");
    await page.getByRole("button",{name:'Submit'}).click();
    expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();

    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10000});

    await page.getByRole("link",{name: 'shop'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();


});

test('Playwright test level timeout',async({page}) =>{
    //test timeout at test level
    test.setTimeout(60000);

    //expect timeout at test level
    const slowExpect=expect.configure({timeout:10000});

    //action timeout at test level
    page.setDefaultTimeout(9000)

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Employed").check();
    await page.getByPlaceholder("Password").fill("Test123");
    await page.locator("[name='email']").fill("abc@gmail.com");
    await page.locator("[name='name']").first().fill("Terry");
    await page.getByRole("button",{name:'Submit'}).click();
    expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();

    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

   // Global->test->step level timeout
    await page.getByRole("link",{name: 'shop'}).click({timeout:15000});
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();


});