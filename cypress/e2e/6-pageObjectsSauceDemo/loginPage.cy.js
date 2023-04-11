class LoginPage

{
    // LOCATORS

    username = () => cy.get('[data-test="username"]')
    password = () => cy.get('[data-test="password"]')
    errorMessage = () => cy.get('[data-test="error"]')
    loginButton = () => cy.get('[data-test="login-button"]')
    reload = () => cy.reload()

    // ACTIONS

    usernameType(username) {
        this.username().type(username).should('have.value', username)
    }

    passwordType(password) {
        this.password().type(password).should('have.value', password)
    }

    errorMessageAssert() {
        this.errorMessage().should('exist')
    }

     // SUBMIT

    loginButtonClick () {
        this.loginButton().click()
    }
}

const loginPage = new LoginPage()

export default loginPage