import {Locators} from "../locators/locators.cy"
 

const loc = new Locators()
let name = 'Alexey'


export class LoginPage{

    navigateURL(url){
        cy.visit(url, { headers: { "Accept-Encoding": "gzip, deflate" } });
    }
    navigateToSignIn(){
        cy.get(loc.navigateTosignIn).click()
    }
    clickSignInBlue(){
        cy.get(loc.signin_menu_button).click()
    }
    enterUserName(username){
        cy.get(loc.username_locator).type(username)
    }
    clearUserNameField(){
        cy.get(loc.username_locator).clear()
    }
    clickUserNameField(){
        cy.get(loc.username_locator).click()
    }
    enterPassword(password){
        cy.get(loc.password_locator).type(password)
    }
    clickPasswordField(){
        cy.get(loc.password_locator).click()
    }
    clearPasswordField(){
        cy.get(loc.password_locator).clear()
    }
    clickSignInButton(){
        cy.get(loc.final_signin_button, {timeout:10000}).click({force: true})
    }
    clickLogedInUserName(){
        cy.get(loc.navigateTosignIn).contains('button', name).click()
    }
    clickSignOutButton(){
        cy.get('a').contains('Sign out').click()
    }
    verifyLogin(){
        cy.get(loc.navigateTosignIn).contains('button', name).should('exist')
    }
    verifyLogOut(){
        cy.get(loc.navigateTosignIn).contains('button', 'Sign in').should('exist')
    }
    errorNoDomain(){
        cy.get(loc.email_error).contains('Enter a valid email.').should('exist')
    }
    errorEmptyEmail(){
        cy.get(loc.email_error).contains('Please enter your email address.').should('exist')
    }

}

