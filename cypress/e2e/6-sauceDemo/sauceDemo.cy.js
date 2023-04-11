/// <reference types="cypress" />

import loginPage from "../6-pageObjectsSauceDemo/loginPage.cy.js"
import inventory from "../6-pageObjectsSauceDemo/inventoryPage.cy.js"
import cart from "../6-pageObjectsSauceDemo/cartPage.cy.js"
import sauceDemoData from "../../fixtures/sauceDemoData.json"

context('Sauce Demo', () => {

    before(() => {

      cy.visit('https://www.saucedemo.com/')
      inventory.urlHomePageAssert()
    })

    it('Type in standard_user', () => {
    
        loginPage.usernameType('standard_user')
        loginPage.passwordType(sauceDemoData.password)
        loginPage.loginButtonClick()
        inventory.urlInventoryPageAssert()
        inventory.logout()
    })
    
    it('Type in locked_out_user', () => {

        loginPage.usernameType('locked_out_user')
        loginPage.passwordType('secret_sauce')
        loginPage.loginButtonClick()
        loginPage.errorMessageAssert()
        loginPage.reload()
    })

    it('Type in problem_user', () => {

        loginPage.usernameType('problem_user')
        loginPage.passwordType('secret_sauce')
        loginPage.loginButtonClick()
        inventory.urlInventoryPageAssert()
        inventory.logout()
    }) 
            
    it('Type in performance_glitch_user', () => {

        loginPage.usernameType('performance_glitch_user')
        loginPage.passwordType('secret_sauce')
        loginPage.loginButtonClick()   
        inventory.urlInventoryPageAssert() 
        inventory.logout()
    }) 

    it('Add items to the cart', () => {

        loginPage.loginStandardUser()

        inventory.firstItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge1()

        inventory.secondItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge2()
    
        inventory.thirdItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge3()
    
        inventory.forthItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge4()
    
        inventory.fifthItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge5()
       
        inventory.sixthItemAddToCartButtonClick()
        inventory.assertShoppingCartBadge6()

        cart.shoppingCartClick()
    })
})    
        