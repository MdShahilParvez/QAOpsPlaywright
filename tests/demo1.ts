import { expect, type Locator, type Page } from '@playwright/test';
let message1:string= "Samsumg";
message1="Iphone";
let busNo:number=9;
console.log(message1);
let employees:number[]=[34,87,97,65];
let data:any="We are fighters";
data=[67,65,87];
data=9;
console.log(data);
function add(a:number,b:number): number
{
    return a+b;
}
console.log(add(85,15));

let student:{name:string,RollNo:number,location:string} = {name:"Ayan",RollNo:36,location:"Hyderabad"};
console.log(student);

class CartPage{

page:Page;
cartItems:Locator;
checkoutButton:Locator;


constructor(page:any){
    this.page= page;
    //this.cartButton= page.locator("button[routerlink*='cart']");
    this.cartItems=page.locator("div li");
    this.checkoutButton=page.locator("text=Checkout");

}

  async verifyProduct(productName:string){

    console.log("Product name received:", productName);
        //return this.page.locator("h3").filter({hasText})
        await this.cartItems.first().waitFor();
      //  return await this.page.locator("h3").filter({hasText: productName}).isVisible();
          return await this.page
        .getByRole('heading', { name: productName, exact: true })
        .isVisible();


        
}
async checkout(){
    await this.checkoutButton.click();

}



}


module.exports={CartPage};