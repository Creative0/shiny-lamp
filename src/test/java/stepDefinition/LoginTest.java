package stepDefinition;


import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;

public class LoginTest extends BaseClass {
	@Given("^I open chrome browser$")
	public void I_open_chrome_browser()  {
		openBrowser();
	}
	@Given("^I am on the login page$")
	public void I_am_on_the_login_page() {
	 driver.get("https://login.salesforce.com/");
	}
	@Given("^I enter username as \"([^\"]*)\"$")
	public void I_enter_username_as(String username) {
	   driver.findElement(By.id("username")).sendKeys(username);
	}
	@Given("^I enter password as \"([^\"]*)\"$")
	public void I_enter_password_as(String password) {
	   driver.findElement(By.id("password")).sendKeys(password);
	}
	@When("^I click the login button$")
	public void I_click_the_login_button() {
	  driver.findElement(By.id("Login")).click();
	}
	@Then("^I should see the dashboard$")
	public void I_should_see_the_dashboard()  {
	  Assert.assertTrue(driver.findElement(By.linkText("Accounts")).isDisplayed());
	}
}