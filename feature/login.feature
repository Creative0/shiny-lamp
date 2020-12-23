Feature: Test Accounts object
  I want to make sure all the fields appear on the account object
  Background:
  	Given I open chrome browser
    And I am on the login page
  @accounts @regression
  Scenario: Verify all the fields are present in the Accounts object
    And I enter username as "test.user@gmail.com.test"
    And I enter password as "Pa55word"
    When I click the login button
    Then I should see the dashboard