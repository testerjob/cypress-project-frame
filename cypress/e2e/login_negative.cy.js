/// <reference types="cypress" />
import {Locators} from "../locators/locators.cy"
import { LoginPage } from "../pages/login_page.cy"

const loginPage = new LoginPage()
const loc = new Locators()


beforeEach(() => {
    loginPage.navigateURL('https://www.hotels.com/')
})

describe('Negative: Fail to login: PFS-2, PFS-3, PFS-4, PFS-5, PFS-6, PFS-7', () => {

    it('Fail to login without domain && Fail to login with empty email ->TC#: PFS-2, PFS-3', () => {

        loginPage.navigateToSignIn()
        loginPage.clickSignInBlue()
        loginPage.enterUserName('alex.gmobile.test')
        loginPage.clickPasswordField()
        cy.get(loc.email_error).contains('Enter a valid email.').should('exist')
        loginPage.clearUserNameField()
        loginPage.clearPasswordField()
        cy.get(loc.email_error).contains('Please enter your email address.').should('exist')
    })

    it('Fail to login with invalid email and valid password -> TC#: PFS-7', () => {

        loginPage.navigateToSignIn()
        loginPage.clickSignInBlue()
        loginPage.enterUserName('alex.gmobile.test')
        loginPage.clickPasswordField()
        cy.get(loc.email_error).contains('Enter a valid email.').should('exist')
        loginPage.clearUserNameField()
        loginPage.clearPasswordField()
        cy.get(loc.email_error).contains('Please enter your email address.').should('exist')
    })

    it('Fail to login with empty password && Fail to login with invalid password: -> TC#: PFS-4, PFS-5', () => {

        loginPage.navigateToSignIn()
        loginPage.clickSignInBlue()
        loginPage.enterUserName('alex.gmobile.test@gmail.com')
        loginPage.clickPasswordField()
        loginPage.clickUserNameField()
        cy.get(loc.password_error).contains('Please enter your password.').should('exist')
        loginPage.enterPassword('Testtest')
        loginPage.clickSignInButton()
        cy.get('h3').contains("Email and password don't match. Please try again.").should('exist')
    })
    
    it('Fail to login with empty credantials -> TC#: PFS-6', () => {

        loginPage.navigateToSignIn()
        loginPage.clickSignInBlue()
        loginPage.clickUserNameField()
        loginPage.clickPasswordField()
        cy.get(loc.final_signin_button).should('be.disabled')
    })

})