class Cart 

{

    // LOCATORS

    shoppingCart = () => cy.get('.shopping_cart_link')
    continueShopping = () => cy.get('#continue-shopping')

    // ACTIONS

    shoppingCartClick () {
        this.shoppingCart().click()
    }

    continueShoppingClick () {
        this.continueShopping().click()
    }

}

const cart = new Cart ()

export default cart