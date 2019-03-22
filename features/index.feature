Feature: To test the first page of the application
  Scenario: Check the webpage has loaded with the correct url
    Given I have navigated to "http://localhost:3000/"
    When the page has loaded
    Then the current url is "http://localhost:3000/"
  Scenario: Check the webpage has loaded with a shared message
    Given I have navigated to "http://localhost:3000/"
    When the page has loaded the message
    Then the shared message is "Hello from the shared code folder!"
