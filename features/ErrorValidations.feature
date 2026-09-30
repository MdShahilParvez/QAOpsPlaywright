Feature: : Ecommerce
@Validation
Scenario Outline:  Placing the order
Given I login to Ecommerce2 using username as "<username>" and password as "<password>"
Then Verify Error Message is

Examples:
    | username                                  | password         |
    | parvez.shahil1995@gmail.com               | Sahil@1234       | 
    | 123@gmail.com                             | test@123         |



