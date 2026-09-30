import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage{

    page:Page;
    signInButton:Locator;
    password:Locator;
    userName:Locator


constructor(page:Page)
{
    this.page=page;
    this.signInButton=page.locator("#login");
    this.password= page.locator("#userPassword");
    this.userName= page.locator("input[id='userEmail']");


    
}

 goTo(){
    this.page.goto("https://rahulshettyacademy.com/client");
}

 async validLogin(username:string,password:string){
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
    
}
}

//odule.exports={LoginPage};