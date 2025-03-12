Feature: Added Test cases on Home Screen

Scenario: Added Test cases for MouseOver

Given I lauch Automation test store
When I navigate to Home page
Then I MouseOver on the "Skincare" and click "Gift Ideas & Sets"
Then I select any product "Hypnose Doll"
Then I update the quantity "3"
Then I click on Add to wishlist
When I verify the total price
Then I click on Add to Cart
