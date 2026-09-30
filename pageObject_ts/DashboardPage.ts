import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{
    products:Locator;
    productText:Locator;
    cart:Locator;
    
    constructor(page:Page){
        this.products= page.locator(".card-body");
        this.productText= page.locator(".card-body b");
        this.cart = page.locator("button[routerlink*='cart']");
    }

  async   searchProductAddCart(productName:string){

await this.productText.first().waitFor();
    console.log(await this.products.allTextContents());
    const count = await this.products.count();
    for(let i=0;i<count;i++){
        if(await this.products.nth(i).locator("b").textContent()===productName){
          await this.products.nth(i).locator("text= Add To Cart").click();
          break;
        }
    }


    }

    async navigateToCart(){
        await this.cart.click();


    }




}
