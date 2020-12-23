$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Accounts.feature");
formatter.feature({
  "line": 1,
  "name": "Test Accounts object",
  "description": "I want to make sure all the fields appear on the account object",
  "id": "test-accounts-object",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 2724085093,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 441315123,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify all the fields are present in the Accounts object",
  "description": "",
  "id": "test-accounts-object;verify-all-the-fields-are-present-in-the-accounts-object",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@accounts"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"Pa55word\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click the Accounts tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the New button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see Type field with different option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see all the type field options",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "LoginTest.I_enter_username_as(String)"
});
formatter.result({
  "duration": 236863723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 21
    }
  ],
  "location": "LoginTest.I_enter_password_as(String)"
});
formatter.result({
  "duration": 82328978,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 212872811,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 3003324928,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_tab()"
});
formatter.result({
  "duration": 850031063,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_button()"
});
formatter.result({
  "duration": 521666400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_Type_field_with_different_option()"
});
formatter.result({
  "duration": 36312176,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_all_the_type_field_options()"
});
formatter.result({
  "duration": 293107305,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Save_button()"
});
formatter.result({
  "duration": 629819454,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_quit_the_browser()"
});
formatter.result({
  "duration": 230080468,
  "status": "passed"
});
formatter.uri("feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Accounts object",
  "description": "I want to make sure all the fields appear on the account object",
  "id": "test-accounts-object",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1541364387,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 449567669,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify all the fields are present in the Accounts object",
  "description": "",
  "id": "test-accounts-object;verify-all-the-fields-are-present-in-the-accounts-object",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@accounts"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"Pa55word\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "LoginTest.I_enter_username_as(String)"
});
formatter.result({
  "duration": 286120097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 21
    }
  ],
  "location": "LoginTest.I_enter_password_as(String)"
});
formatter.result({
  "duration": 188896341,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 201155953,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 3368100218,
  "status": "passed"
});
});