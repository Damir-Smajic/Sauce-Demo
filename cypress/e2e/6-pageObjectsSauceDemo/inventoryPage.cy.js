class Inventory 

{
    // LOCATORS

    firstItemAddToCartButton = () => cy.get('#add-to-cart-sauce-labs-backpack')
    secondItemAddToCartButton = () => cy.get('#add-to-cart-sauce-labs-bike-light')
    thirdItemAddToCartButton = () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    forthItemAddToCartButton = () => cy.get('#add-to-cart-sauce-labs-fleece-jacket')
    fifthItemAddToCartButton = () => cy.get('#add-to-cart-sauce-labs-onesie')
    sixthItemAddToCartButton = () => cy.get("[id='add-to-cart-test.allthethings()-t-shirt-(red)']")

    url = () => cy.url()
    shoppingCartBadge = () => cy.get('.shopping_cart_badge')

    hamburgerMenu = () =>  cy.get('#react-burger-menu-btn')
    logoutButton = () => cy.get('#logout_sidebar_link')

    // ACTIONS

    firstItemAddToCartButtonClick () {
        this.firstItemAddToCartButton().click()
    }

    secondItemAddToCartButtonClick () {
        this.secondItemAddToCartButton().click()
    }

    thirdItemAddToCartButtonClick () {
        this.thirdItemAddToCartButton().click()
    }

    forthItemAddToCartButtonClick () {
        this.forthItemAddToCartButton().click()
    }

    fifthItemAddToCartButtonClick () {
        this.fifthItemAddToCartButton().click()
    }

    sixthItemAddToCartButtonClick () {
        this.sixthItemAddToCartButton().click()
    }

    logout () {
        this.hamburgerMenu().click()
        this.logoutButton().click()
    }

    // ASSERTIONS

    assertShoppingCartBadge1 () {
        this.shoppingCartBadge().should('contain', '1')
    }

    assertShoppingCartBadge2 () {
        this.shoppingCartBadge().should('contain', '2')
    }

    assertShoppingCartBadge3 () {
        this.shoppingCartBadge().should('contain', '3')
    }

    assertShoppingCartBadge4 () {
        this.shoppingCartBadge().should('contain', '4')
    }

    assertShoppingCartBadge5 () {
        this.shoppingCartBadge().should('contain', '5')
    }

    assertShoppingCartBadge6 () {
        this.shoppingCartBadge().should('contain', '6')
    }

    // URLs

    urlHomePageAssert() {
        this.url().should('include', 'https://www.saucedemo.com/')
    }

    urlInventoryPageAssert () {
        this.url().should('include', 'inventory.html')
    }

    urlCartPageAssert() {
        this.url().should('include', 'cart.html')
    }
}

const inventory = new Inventory ()

export default inventory