import {WhereToGo} from "../pages/where_to_go.cy"
import {Locators} from "../locators/locators.cy"
import {LoginPage} from "../pages/login_page.cy"


const whereToGo = new WhereToGo()
const loginPage = new LoginPage()
const loc = new Locators()
const text = 'San Antonio'
const hotel = 'Marriot'

beforeEach(() => {
    loginPage.navigateURL('https://www.hotels.com/')
})

describe('Search field - Where to go (not logged user): PFS-11,PFS-13', () => {

    it('Search field Where to go and search by property', () => {

        //Positive search PFS-11
        whereToGo.clickSearchField()
        cy.wait(500)
        cy.get(loc.search_field).type(text).type('{enter}')
        whereToGo.clickSearchButton()
        cy.get('.uitk-heading-5', {timeout: 10000}).contains('h3', 'Search by property name').should('exist')

        //Search by property name PFS-13
        cy.get(loc.search_by_property_field, {timeout:10000}).click()
        cy.wait(500)
        cy.get(loc.opened_property_search_field)
          .type(hotel, {force: true})
          .type('{enter}')
        cy.get(loc.opened_property_search_field)
          .should('have.value', hotel)
        cy.get('#playback-filter-pill-hotelName-Marriot').contains('Marriot').should('exist')
        cy.end()

    })
 })

 

   
