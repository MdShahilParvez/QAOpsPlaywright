const{test, expect, request}= require('@playwright/test');
const{APiUtils}=require('../utils/APiUtils');
const loginPayLoad = {userEmail:"parvez.shahil1995@gmail.com",userPassword:"Sahil@1234"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"68a961719320a140fe1ca57c"}]};
let response;
const fakePayLoad={data:[],message:"No Orders"};
test.beforeAll( async()=>
{
  
    const apiContext = await request.newContext();
    const apiUtils=new APiUtils(apiContext,loginPayLoad);
    response= await apiUtils.createOrder(orderPayLoad);
   

   

  
  }


);

test('Place the Order',async({page}) =>{
 
await  page.addInitScript(value=>{

    window.localStorage.setItem('token',value);
  
  },response.token);

  //Making sure that No Orders fake response is generated
    
 await page.goto("https://rahulshettyacademy.com/client");
 await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route=>
    {
       const response =await page.request.fetch(route.request());
       let body= JSON.stringify(fakePayLoad);
       route.fulfill(
        {
            response,
            body,
        }
       )
    }
 )

 const email= "";

  const products= page.locator(".card-body");
  
  
   // await page.locator("tbody").waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
        
    
        
    
    
    
    
       // await page.pause();
    

});
