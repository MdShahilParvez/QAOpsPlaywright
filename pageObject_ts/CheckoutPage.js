class CheckoutPage{

constructor(page){
    this.page=page;
    this.countryInput=page.locator("input[placeholder='Select Country']");
    this.countrydropdown= page.locator(".ta-results");
    this.userEmail = page.locator(
            ".user__name [type='text']"
        ).first();
    this.cvv=page.locator(".small [class='input txt']");
    this.nameOnCard=page
    .locator(".field")
    .filter({ hasText: "Name on Card" })
    .locator("input");
    this.coupon=page.locator("[name='coupon']");
    this.placeOrderButton=page.locator(".action__submit");
    this.applyCoupon= page.getByRole('button',{name:"Apply Coupon"});


}

async selectCountry(country){

     await this.countryInput.click();

    // await this.countryInput.pressSequentially("ind", { delay: 300 });

    // await this.page.pause();


 // await this.countryInput.pressSequentially("ind",{delay:300 });
 await this.countryInput.pressSequentially(country,{delay:300 });

   await this.countrydropdown.waitFor({ state: "visible" });

  await this.countrydropdown.locator("button").getByText(country, { exact: true }).click();

  //   const dropdown= this.page.locator(".ta-results");
  //  await dropdown.waitFor();
  //   const optionsCount = await dropdown.locator("button").count();
  //   for(let i=0;i<optionsCount;i++){
  //    const text=await dropdown.locator("button").nth(i).textContent();
  //     if(text===country){
  //       await dropdown.locator("button").nth(i).click();
  //       break;
  //     }
  //   }
}

 async fillPaymentDetails(cvvCode,cardName,couponCode){
    await this.cvv.fill(cvvCode);
    await this.nameOnCard.fill(cardName);
   // await  this.coupon.fill(couponCode);
  //  await this.applyCoupon.click();
    await this.placeOrderButton.click();

 }


}
module.exports={CheckoutPage};