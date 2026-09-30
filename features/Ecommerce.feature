Feature: : Ecommerce
@Regression
Scenario: Placing the order
Given I login using username as "parvez.shahil1995@gmail.com" and password as "Sahil@1234"
When Add "ADIDAS ORIGINAL" in the cart 
Then Verify "ADIDAS ORIGINAL" is displayed in the cart
When I enter country "India", CVV "987", card name "Terry Lee" and coupon "terry-fik"
# When I enter valid details and Place the order
Then The order should be available in the Orders History 


@Validation
Scenario Outline:  Placing the order
Given I login to Ecommerce2 using username as "<username>" and password as "<password>"
Then Verify Error Message is

Examples:
    | username                                  | password         |
    | parvez.shahil1995@gmail.com               | Sahil@1234       | 
    | 123@gmail.com                             | test@123         |






