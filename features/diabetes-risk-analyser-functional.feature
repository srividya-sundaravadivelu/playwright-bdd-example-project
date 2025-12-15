@diabetesRiskFunctional
Feature: Functional Verification on Diabetes Risk Analyzer

  Background:
    Given User is in diabetes risk analyzer

  Scenario: Cancel button returns user to home page
    When User clicks Cancel button
    Then User should be on the home page

  Scenario: Calculate Risk button is disabled when inputs are missing
    When User does not provide required inputs
    Then User should see Calculate Risk button is  disabled

  Scenario: Calculate Risk button shows result dialog with valid inputs
    When User enters valid values in all fields and clicks Calculate Risk button
    Then User should see "Your Diabetes Risk Assessment" dialog box
