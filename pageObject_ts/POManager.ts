
//const {DashboardPage}= require('./DashboardPage');
import { DashboardPage } from './DashboardPage';
//const {LoginPage}= require('./LoginPage');
import {LoginPage} from './LoginPage'
//const {CartPage}= require('./CartPage');
import { CartPage } from './CartPage';
import { Page } from '@playwright/test';


export class POManager{
    page:Page;
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage;


    constructor(page:Page){
        this.page=page;
         this.loginPage = new LoginPage(this.page);
         this.dashboardPage=new DashboardPage(this.page);
         this.cartPage=new CartPage(this.page);
        

    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    


}

//module.exports={POManager};