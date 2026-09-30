class CartPage{

constructor(page){
    this.page= page;
    //this.cartButton= page.locator("button[routerlink*='cart']");
    this.cartItems=page.locator("div li");
    this.checkoutButton=page.locator("text=Checkout");

}

  async verifyProduct(productName){

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