import {WhereToGo} from "../pages/where_to_go.cy"
import {Locators} from "../locators/locators.cy"
import {LoginPage} from "../pages/login_page.cy"


const whereToGo = new WhereToGo()
const loginPage = new LoginPage()
const loc = new Locators()
const text = 'San Antonio'

beforeEach(() => {
    loginPage.navigateURL('https://www.hotels.com/')
})

describe('Search field - Where to go (not logged user): PFS-11,PFS-12', () => {

    it('Search field Where to go', () => {

        //Correct search PFS-11
        whereToGo.clickSearchField()
        cy.wait(500)
        whereToGo.typeDestinationToSearch(text)
        whereToGo.clickSearchButton()
        cy.get('h3').contains('Search by property name').should('exist')

        //Popular filters - Pool check
        whereToGo.clickFilterWithPool()
        cy.get(loc.filter_pool).should('be.checked')
        //Star rating check
        whereToGo.clickStarRaiting()
        cy.get(loc.star_raiting_value4).should('be.checked')
        //Guest raiting check
        whereToGo.clickGuestRaiting()
        cy.get('input[type="radio"][aria-label="Good 7+"][value="35"]').click()

        //Uncheck pool
        whereToGo.removePoolButton()
        cy.get(loc.filter_pool).should('not.be.checked')
        //Uncheck star rating
        whereToGo.uncheckStarRaiting()
        cy.get(loc.star_raiting_value4).should('not.be.checked')
        //Guest raiting
        cy.get(loc.remove_guest_button).click()
        cy.get(loc.remove_guest_button).should('not.exist')
    })

    it('Error handling for the search filed -> TC#: PFS-9, PFS-10', () => {

        //Empty search state message PFS-9
        whereToGo.clickSearchField()
        cy.get('.uitk-text-default-theme').contains('Search by destination, accommodations, or landmark').should('exist')
        whereToGo.clickSearchField()

        //Empty search field error messaeges PFS-10
        whereToGo.clickSearchButton()
        cy.get(loc.search_error).contains('Please select a destination').should('exist')
        cy.get('#lodging-search-form-1').contains('h3', 'To continue, please correct the error.').should('exist')

    }) 
})