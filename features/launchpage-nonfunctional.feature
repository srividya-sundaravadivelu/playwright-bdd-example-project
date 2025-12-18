@launchpageNonFunctional
Feature: Non-Functional Testing - Launch Page

  Background:
    Given User is on the SweetBalance page

  Scenario: Launch Page loads within acceptable time
    Then Page should be fully loaded within 3 seconds

  Scenario: Launch Page maintains accessibility standards
    Then All major sections are accessible with appropriate labels and alt texts
