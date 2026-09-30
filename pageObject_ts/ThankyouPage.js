const { expect } = require('@playwright/test');
class ThankyouPage{

constructor(page){
    this.page= page;
    this.thanksMessage= page.locator(".hero-primary");
    this.orderId=page.locator(".em-spacer-1 .ng-star-inserted");
    this.ordersButton= page.locator("button[routerlink*='myorders']");
}

async orderConfirmation(){
   await expect(this.thanksMessage).toHaveText(" Thankyou for the order. ");
}

 async getOrderId(){
   return await this.orderId.textContent();
}

async clickOrdersButton(){
    await this.ordersButton.click();
}






}

module.exports={ThankyouPage};