import{test as baseTest} from '@playwright/test';
interface TestDataForOrder{
    username : string,
            password : string,
            productName   : string,

}
export const customtest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(

    {
        testDataForOrder:{
            username : "shahilparvez17@gmail.com",
            password : "Sahil@983",
            productName   : "ZARA COAT 3",
            
        }


    }



)