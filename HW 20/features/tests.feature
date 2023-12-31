Feature: WebdriverIO website tests

  Scenario: As a user, I can see VueJS page
    Given User navigate on the "https://webdriver.io/" page
    When User click on "Home Page > VueJS Logo"
    Then User see page with title "Vue.js" in element "Doc Page > Doc Page Title"

  Scenario: As a user, I can see website in English
    Given User navigate on the "https://webdriver.io/" page
    Then User see page with title "Next-gen browser and mobile automation test framework for Node.js" in element "Home Page > Home Page Title"

  Scenario: As a user, I can choose the Ukrainian language on the website
    Given User navigate on the "https://webdriver.io/" page
    When User hover the mouse cursor over the list of languages "Navigation Bar > Navigate Bar"
    And User click on "Navigation Bar > Ukrainian Language Switch Button"
    Then User see page with title "Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js" in element "Home Page > Home Page Title"

  Scenario: As a user, I can find page with title "Selectors"
    Given User navigate on the "https://webdriver.io/" page
    When User click on "Navigation Bar > Search Button"
    And User enters in "Search Page Mode > Search Input" a search query 'Selectors'
    And User click on "Search Page Mode > First Search Result"
    Then User see page with title "Selectors" in element "Doc Page > Doc Page Title"

  Scenario: As a user, I see 3 results found for the query "Christian Bromann"
    Given User navigate on the "https://webdriver.io/" page
    When User click on "Navigation Bar > Search Button"
    And User enters in "Search Page Mode > Search Input" a search query 'Christian Bromann'
    Then User see "See all 3 results" in element "Search Page Mode > See All Results Button"