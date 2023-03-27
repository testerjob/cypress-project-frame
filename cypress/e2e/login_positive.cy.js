import {LoginPage} from "../pages/login_page.cy"
import {Locators} from "../locators/locators.cy"

const globalEmail = `${Cypress.env('EMAIL')}`
const globalPassword = `${Cypress.env('PASSWORD')}`
const loginPage = new LoginPage()
const loc = new Locators()

describe('Positive: Successful login & logout tests', () => {

    
    it('Successful login & Successful logout TC#: PFS-1, PFS-8', () => {

        //Login PFS-1
        loginPage.navigateURL('https://www.hotels.com/')
        loginPage.navigateToSignIn()
        loginPage.clickSignInBlue()
        loginPage.enterUserName(globalEmail)
        loginPage.enterPassword(globalPassword)
        loginPage.clickSignInButton()
        //Login verification
        //cy.get(loc.navigateTosignIn, {timeout:10000}).contains('button', 'Alexey').screenshot("sign_in_button_check1")
        //cy.get(loc.navigateTosignIn, {timeout:10000}).contains('button', 'Alexey').should('exist').debug()
        cy.get('#secondaryNav').find('#gc-custom-header-nav-bar-acct-menu').contains('button', 'Alexey').screenshot("sign_in_button_check1")
        cy.get('#secondaryNav').find('#gc-custom-header-nav-bar-acct-menu').contains('button', 'Alexey').should('exist').debug()

        //Logout PFS-8
        loginPage.clickLogedInUserName()
        loginPage.clickSignOutButton()
        //Logout verification
        //cy.get(loc.navigateTosignIn, {timeout:10000}).contains('button', 'Sign in').screenshot("sign_in_button_check2")
        //cy.get(loc.navigateTosignIn, {timeout:10000}).contains('button', 'Sign in').should('exist').debug()
        cy.get('#secondaryNav').find('#gc-custom-header-nav-bar-acct-menu').contains('button', 'Sign in').screenshot("sign_in_button_check2")
        cy.get('#secondaryNav').find('#gc-custom-header-nav-bar-acct-menu').contains('button', 'Sign in').should('exist').debug()

        cy.end()
    })
})
