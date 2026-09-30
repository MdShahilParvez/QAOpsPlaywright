const { expect } = require('@playwright/test');
class OrdersHistoryPage{

    constructor(page){
        this.orderTable=page.locator("tbody");
        this.rows= page.locator("tbody tr");
        this.verifyOrderId=  page.locator(".col-text");


    }

    async searchOrderId(orderID){
        for(let i=0;i<await this.rows.count();i++){
      const rowOrderId= await this.rows.nth(i).locator("th").textContent();
      if(orderID.includes(rowOrderId)){
        await this.rows.nth(i).locator("button").first().click();
        break;
      }
    }

    }

    async verifyOrder(orderID){
     const actualOrderId=await this.verifyOrderId.textContent();
          expect(orderID.includes(actualOrderId)).toBeTruthy();

    }






}
module.exports={OrdersHistoryPage};