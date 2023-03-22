import {Locators} from "../locators/locators.cy"


const loc = new Locators()


export class WhereToGo{

    navigateURL(url){
        cy.visit(url, { headers: { "Accept-Encoding": "gzip, deflate" } });
    }
    clickSearchField(){
        cy.get(loc.search_field).click()
    }
    searchFieldEnterDestination(search_name){
        cy.get(loc.search_field).type(search_name)
    }
    clickSearchButton(){
        cy.get(loc.search_button).click()
    }
    findWhereToDropDown(){
        cy.get(loc.where_to_dropdown)
    }
    clickWhereToOption(){
        cy.get(loc.where_to_option).click()
    }
    clearSearchField(){
        cy.get(loc.clear_search_button).click()
    }
    clickSortByDropdownValue(){
        cy.get(loc.sort_by_dropdow).select('Price').should('have.value', 'PRICE_LOW_TO_HIGH')
    }
    clickSearchByPropertyField(){
        cy.get(loc.search_by_property_field).click
    }
    typeIntoSearchByProperty(){
        cy.get(loc.search_by_property_field).type(search_by)
    }


}

    
