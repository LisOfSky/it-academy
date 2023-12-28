Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area
    Given User navigate on the "https://sila.by/" page
    When User click button "Main Page > Modal Page > Close Popmechanic Modal Button"
    And User input field "Main Page > Search Field" with text "iphone"
    And User click button "Main Page > Search Button"
    Then User see text "Iphone" in element "Main Page > Search Result Header"

  @smoke
  Scenario: As a user, I can log into the secure area
    Given User navigate on the "https://sila.by/" page
    Then User see text "Адреса магазинов" in element "Main Page > Shops Addresses"