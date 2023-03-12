/// <reference types="cypress" />
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
        cy.get(loc.navigateTosignIn).contains('button', 'Alexey').should('exist')

        //Logout PFS-8
        loginPage.clickLogedInUserName()
        loginPage.clickSignOutButton()
        //Logout verification
        cy.get(loc.navigateTosignIn).contains('button', 'Sign in').should('exist')

    })
})
