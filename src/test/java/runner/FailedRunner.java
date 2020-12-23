package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"@rerun/failed_scenario.txt"},
glue="stepDefinition",
monochrome=true,
plugin= {"pretty","html:target/cucumber-reports","rerun:rerun/failed_scenario.txt"})

public class FailedRunner {

}
