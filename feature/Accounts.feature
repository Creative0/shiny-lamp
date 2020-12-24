Feature: Test Accounts object
  I want to make sure all the fields appear on the account object
  Background:
  	Given I open chrome browser
    And I am on the login page
  @smokeTest @regression
  Scenario: Verify all the fields are present in the Accounts object
    And I enter username as "test.user@gmail.com.test"
    And I enter password as "Pa55word"
    When I click the login button
    Then I should see the dashboard
    And I click the Accounts tab
    And I click the New button
    
    And I should see Type field with different option
     And I should see all the type field options
    And I click the Save button
 
    And I quit the browser
   
 
   
 
  
    