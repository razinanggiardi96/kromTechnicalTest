class ShopPage {

    get hamburgerButton() {
        return $('~View menu');
    }

    get loginOption() {
        return $('~Login Menu Item');
    }

    get logoutOption() {
        return $('~Logout Menu Item');
    }

    get logoutConfirmation() {
        return $('//*[@text="LOGOUT"]');
    }

    get cancelConfirmation() {
        return $('//*[@text="CANCEL"]');
    }

    get credentialValidTemplate() {
        return $('//*[contains(@text, "bod@example.com")]');
    }

    get credentialLockedTemplate() {
        return $('//*[contains(@text, "alice@example.com (locked out)")]');
    }

    get errorMessage() {
        return $('//*[contains(@text, "Username is required")]');
    }

    get lockedOutErrorMessage() {
        return $('//*[contains(@text, "Sorry this user has been locked out.")]');
    }

    get loginButton() {
        return $('~Tap to login with given credentials');
    }
    
    get title() {
        return $('~title');
    }

    get sortByButton() {
        return $('~Shows current sorting order and displays available sorting options');
    }

    get sortNameDescending() {
        return $$('~Descending order by name');
    }

    get productFirst() {
        return $$('//android.widget.TextView[contains(@text, "Sauce Labs Backpack")]');
    }

    get productNameDescendingFirst() {
        return $$('//android.widget.TextView[contains(@text, "Test.allTheThings() T-Shirt (yellow)")]');
    }

    get addToCartButton() {
        return $('~Tap to add product to cart');
    }

    get cartButton() {
        return $('~Displays number of items in your cart');
    }

    get cartBadge() {
        return $('//*[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV" and contains(@text, "1")]');
    }

    get cartCheckoutButton() {
        return $('~Confirms products for checkout');
    }

    get removeProductButton() {
        return $('~Removes product from cart');
    }

    get emptyCartMessage() {
        return $('//*[contains(@text, "Your cart is empty.")]');
    }

    // ========== ACTIONS ==========

    async scrollUntilElementFound(element) {
        let isFound = false;
        let maxScrolls = 6;

        while (maxScrolls > 0 && !isFound) {
            try {
                isFound = await element.isDisplayed();
            } catch (error) {
                isFound = false;
            }

            if (!isFound) {
                await driver.touchAction([
                    { action: 'press', x: 500, y: 1600 },
                    { action: 'moveTo', x: 500, y: 600 },
                    { action: 'release' }
                ]);
                maxScrolls--;
            }
        }
    }

    async verifyPageLoaded() {
        await this.title.waitForDisplayed({ timeout: 5000 });
    }

    async tapHamburgerButton() {
        return this.hamburgerButton.click();
    }

    async tapLoginOption() {
        return this.loginOption.click();
    }

    async tapLogoutOption() {
        return this.logoutOption.click();
    }

    async confirmLogout() {
        return this.logoutConfirmation.click();
    }

    async cancelLogout() {
        return this.cancelConfirmation.click();
    }

    async taptValidCredentials() {
        await this.credentialValidTemplate.waitForDisplayed({ timeout: 5000 });
        return this.credentialValidTemplate.click();
    }

    async tapLockedCredentials() {
        await this.credentialLockedTemplate.waitForDisplayed({ timeout: 5000 });
        return this.credentialLockedTemplate.click();
    }

    async tapLoginButton() {
        return this.loginButton.click();
    }

    async isOnLoginPage() {
        await this.loginButton.waitForDisplayed({ timeout: 5000 });
    }

    async isErrorMessageDisplayed() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
    }

    async isLockedOutErrorMessageDisplayed() {
        await this.lockedOutErrorMessage.waitForDisplayed({ timeout: 5000 });
    }

    async sortProductsByNameDescending() {
        await this.sortByButton.click();
        await this.sortNameDescending.waitForDisplayed({ timeout: 5000 });
        await this.sortNameDescending.click();
    }

    async openFirstProduct() {
        await this.productFirst.click();
    }

    async verifyFirstDescendingProduct() {
        await this.productNameDescendingFirst.waitForDisplayed({ timeout: 5000 });
    }

    async addProductToCart() {
        await this.scrollUntilElementFound(this.addToCartButton);
        await this.addToCartButton.click();
    }

    async cartBadgeIsDisplayed() {
        await this.cartBadge.waitForDisplayed({ timeout: 5000 });
    }

    async openCart() {
        await this.cartButton.click();
    }

    async proceedToCheckout() {
        await this.cartCheckoutButton.click();
    }

    async removeProductFromCart() {
        await this.removeProductButton.click();
        await this.timeout(2000);
    }

    async isEmptyCartMessageDisplayed() {
        await this.emptyCartMessage.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new ShopPage();
