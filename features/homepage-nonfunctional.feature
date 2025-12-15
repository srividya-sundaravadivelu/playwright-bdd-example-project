@homepageNonFunctional
Feature: Non-Functional Testing - Home Page

  Background:
    Given User is on the SweetBalance page

  Scenario: Homepage loads within acceptable time
    Then Page should be fully loaded within 3 seconds

  Scenario: Homepage maintains accessibility standards
    Then All major sections are accessible with appropriate labels and alt texts
