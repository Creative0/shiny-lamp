package stepDefinition;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;
public class AccountTest extends BaseClass {
	
	
	@Then("^I click the Accounts tab$")
	public void I_click_the_Accounts_tab(){
	driver.findElement(By.linkText("Accounts")).click();
	}
	@Then("^I click the New button$")
	public void I_click_the_New_button() {
		driver.findElement(By.name("new")).click();
	}
	
	
	@Then("^I should see Type field with different option$")
	public void I_should_see_Type_field_with_different_option()  {
		 driver.findElement(By.id("acc6")).isDisplayed();
	}
	@Then("^I should see all the type field options$")
	public void I_should_see_all_the_type_field_options()  {
	     
			 String expectedType[]= {"--None--","Prospect","Customer - Direct","Customer - Channel",
					 "Channel Partner / Reseller","Installation Partner","Technology Partner","Other"};
					 
			WebElement type=driver.findElement(By.id("acc6"));
			 Select typeSel = new Select(type);
			 List<WebElement>typeOptions=typeSel.getOptions();
			 for(int i=0; i<typeOptions.size();i++) {
				 Assert.assertEquals(expectedType[i],typeOptions.get(i).getText());
			 }
	     }
	@When("^I click the Save button$")
	public void I_click_the_Save_button() {
	 driver.findElement(By.xpath("//td[@id='topButtonRow']/input[@name='save']")).click();
	}
	@Then("^I quit the browser$")
	public void I_quit_the_browser() {
	 driver.quit();
	}
}
