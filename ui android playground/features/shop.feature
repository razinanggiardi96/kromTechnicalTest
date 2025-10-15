Feature: My Demo App Scenarios

  @login @positiveScenario
  Scenario: As user, I can log in with valid credentials
    Given the app is launched and the Products page is displayed
    When I tap hamburger button
    And I tap Log In option
    And I input valid credentials by tapping template username and password
    And I tap Log In button
    Then I should be back in Products page

  @logout @positiveScenario
  Scenario: As user, I can log out from the app
    Given the app is launched and the Products page is displayed
    When I tap hamburger button
    And I tap Log In option
    And I input valid credentials by tapping template username and password
    And I tap Log In button
    And I tap hamburger button
    And I tap Log Out option
    And I tap the logout choice on the confirmation dialog
    Then I should be back in Login page

  @sort_products @positiveScenario
  Scenario: As user, I can sort products by Name - Descending
    Given the app is launched and the Products page is displayed
    When I sort products by Name - Descending
    Then I can see sorted products by Name - Descending

  @add_to_cart @positiveScenario
  Scenario: As user, I can add a product to the cart and cart badge updates
    Given the app is launched and the Products page is displayed
    When I open the first product
    And I add the product to the cart
    Then the cart badge should show 1 item

  @add_to_cart @positiveScenario
  Scenario: As user, I can see "Proceed to Checkout" button in cart after adding a product
    Given the app is launched and the Products page is displayed
    When I open the first product
    And I add the product to the cart
    And I tap the cart icon
    Then I should see Proceed To Checkout button

  @login_empty @negativeScenario
  Scenario: As user, I cannot log in with empty credentials
    Given the app is launched and the Products page is displayed
    When I tap hamburger button
    And I tap Log In option
    And I leave username and password fields empty
    And I tap Log In button
    Then I should see an error Username is required message

  @login_locked @negativeScenario
  Scenario: As user, I cannot log in with locked credentials
    Given the app is launched and the Products page is displayed
    When I tap hamburger button
    And I tap Log In option
    And I input locked credentials by tapping template username and password
    And I tap Log In button
    Then I should see an error Sorry this user has been locked out message

  @logout_cancel @negativeScenario
  Scenario: As user, I can cancel the logout action
    Given the app is launched and the Products page is displayed
    When I tap hamburger button
    And I tap Log In button
    And I input valid credentials by tapping template username and password
    And I tap Log In button
    And I tap hamburger button
    And I tap Log Out button
    And I tap the cancel choice on the confirmation dialog
    Then I should be back in Products page

  @empty_cart @negativeScenario
  Scenario: As user, I cannot proceed to checkout with an empty cart
    Given the app is launched and the Products page is displayed
    When I tap the cart icon
    Then I should see Your cart is empty message and Proceed To Checkout button is not displayed

  @remove_from_cart @negativeScenario
  Scenario: As user, I can remove a product from the cart and cannot proceed to checkout due to empty cart
    Given the app is launched and the Products page is displayed
    When I open the first product
    And I add the product to the cart
    And I tap the cart icon
    And I remove the product from the cart
    Then I should see Your cart is empty message and Proceed To Checkout button is not displayed