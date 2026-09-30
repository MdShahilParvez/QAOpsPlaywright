# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NetworkTest.spec.js >> Place the Order
- Location: tests\NetworkTest.spec.js:23:1

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Test source

```ts
  1  | class APiUtils
  2  | {
  3  | 
  4  |     constructor(apiContext,loginPayLoad){
  5  |         this.apiContext=apiContext;
  6  |         this.loginPayLoad=loginPayLoad;
  7  |     }
  8  | 
  9  |     async getToken(){
  10 | 
  11 |         const loginResponse =await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
  12 |         {
  13 |             data:this.loginPayLoad
  14 |         }
  15 |       
  16 |       )
  17 |       const loginResponseJson= await loginResponse.json();
  18 |    const token=  loginResponseJson.token;
  19 |     console.log(token);
  20 |     return token;
  21 | 
  22 |     }
  23 | 
  24 | 
  25 |     async createOrder(orderPayload){
  26 | 
  27 |       let response={};
  28 |       response.token=await this.getToken();
  29 | 
  30 |        const orderResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
  31 |              {
  32 |                data:orderPayload,
  33 |                headers: {
  34 |                  'Authorization':  response.token,
  35 |                  'Content-Type' : 'application/json'
  36 |                }
  37 |              
  38 |            })
  39 |        
  40 |            const orderResponseJson= await orderResponse.json();
  41 |            console.log(orderResponseJson);
> 42 |            const orderID= await orderResponseJson.orders[0];
     |                                                         ^ TypeError: Cannot read properties of undefined (reading '0')
  43 | 
  44 |            response.orderID=orderID;
  45 |            return response;
  46 |     }
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | }
  55 | 
  56 | //module.exports={APiUtils};
  57 | module.exports={APiUtils };
```