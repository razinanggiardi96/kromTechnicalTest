const { Given, When, Then } = require('@cucumber/cucumber');
const ShopPage = require('../pageobjects/shop.page');
const { expect } = require('chai');

Given('the app is launched and the Product page is displayed', async () => {
    await ShopPage.verifyPageLoaded();
    const title = await ShopPage.title.getText();
    expect(title).to.equal('Products');
});

When('I tap hamburger button', async () => {
    await ShopPage.tapHamburgerButton();
});

When('I tap Log In option', async () => {
    await ShopPage.tapLoginOption();
});

When('I tap Log Out option', async () => {
    await ShopPage.tapLogoutOption();
});

When('I tap the logout choice on the confirmation dialog', async () => {
    await ShopPage.confirmLogout();
});

When('I tap the cancel choice on the confirmation dialog', async () => {
    await ShopPage.cancelLogout();
});

When('I input valid credentials by tapping template username and password', async () => {
    await ShopPage.taptValidCredentials();
});

When('I leave username and password fields empty', async () => {
    // No action needed as fields are left empty
});

When('I input locked credentials by tapping template username and password', async () => {
    await ShopPage.tapLockedCredentials();
});

When('I tap Log In button', async () => {
    await ShopPage.tapLoginButton();
});

Then('I should see an error Username is required message', async () => {
    await ShopPage.isErrorMessageDisplayed();
});

Then('I should see an error Sorry this user has been locked out message', async () => {
    await ShopPage.isLockedOutErrorMessageDisplayed();
});

Then('I should be back in Products page', async () => {
    await ShopPage.verifyPageLoaded();
    const title = await ShopPage.title.getText();
    expect(title).to.equal('Products');
});

Then ('I should be back in Login page', async () => {
    await ShopPage.isOnLoginPage();
});

When('I open the first product', async () => {
    await ShopPage.openFirstProduct();
});

When('I add the product to the cart', async () => {
    await ShopPage.addProductToCart();
});

Then('the cart badge should show 1 item', async () => {
    await shopPage.cartBadgeisDisplayed();
});

When('I tap the cart icon', async () => {
    await ShopPage.openCart();
});

Then('I should see Proceed to Checkout button', async () => {
    await ShopPage.isProceedToCheckoutButtonDisplayed();
});

When('I remove the product from the cart', async () => {
    await ShopPage.removeProductFromCart();
});

Then('I should see Your cart is empty message and Proceed To Checkout button is not displayed', async () => {
    await ShopPage.isCartEmptyMessageDisplayed();
    await ShopPage.isProceedToCheckoutButtonNotDisplayed();
});

When('I sort products by Name - Descending', async () => {
    await ShopPage.sortProductsByNameDescending();
});

Then('I can see sorted products by Name - Descending', async () => {
    await ShopPage.verifyFirstProductIsNameDescending();
});
