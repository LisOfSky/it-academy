Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can see VueJS page
    Given User navigate on the "https://webdriver.io/" page
    When User click icon "Home Page > VueJS Logo"
    Then User see page with title "Vue.js" in element "Doc Page > Doc Page Title"



#  Scenario: As a user, I can log into the secure area
#    Given User navigate on the "https://webdriver.io/" page
#    When User click icon "Home Page > VueJS Logo"
#    And User input field "Main Page > Search Field" with text "iphone"
#    And User click button "Main Page > Search Button"
#    Then User see text "Iphone" in element "Main Page > Search Result Header"
#
#  Scenario: As a user, I can log into the secure area
#    Given User navigate on the "https://sila.by/" page
#    Then User see text "Адреса магазинов" in element "Main Page > Shops Addresses"