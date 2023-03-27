export class Locators{

    //LOGIN
    navigateTosignIn = '#gc-custom-header-nav-bar-acct-menu'
    signin_menu_button = '[data-stid="link-header-account-signin"]'
    username_locator = '#loginFormEmailInput'
    password_locator = '#loginFormPasswordInput'
    final_signin_button = '#loginFormSubmitButton'

    //ERRORS 
    email_error = '#loginFormEmailInput-error'
    password_error = '#loginFormPasswordInput-error'

    //WHERE TO SEARRCH
    search_field = '#destination_form_field-menu'
    empty_search_container ='#popover-sheet'
    search_button = '#search_button'
    search_error = '#undefined-error'
    correct_error ='#lodging_search_form'
    where_to_dropdown = '[data-stid="destination_form_field-results"]'
    where_to_option = '[data-stid="destination_form_field-result-item"]'
    clear_search_button = '[aria-label="Clear Going to"]'


    //Search result page
    sort_by_dropdow = '#sort-filter-dropdown-sort'
    search_by_property_field = '[aria-label="e.g. Marriott"]' 
    opened_property_search_field ='[placeholder="e.g. Marriott"]'


    //FILTER BY
    price_per_night ='#price-primary'
    filter_pool = 'input[type="checkbox"][value="POOL"]'
    star_raiting_value4 = 'input[type="checkbox"][value="40"]'
    guest_raiting_7plus = 'input[type="radio"][aria-label="Good 7+"]'
    remove_pool_button = '#playback-filter-pill-amenities-POOL[aria-label="Remove Pool"]'
    remove_guest_button = 'button[id="playback-filter-pill-guestRating-35"][aria-label="Remove Guest rating 7+"]'


    

    




    
     
} 