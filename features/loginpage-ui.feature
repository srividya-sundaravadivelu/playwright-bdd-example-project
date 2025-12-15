@loginPageUI
Feature: Login Page UI Verification

  Background:
    Given User is on the SweetBalance page
    When User clicks on the Login link

  Scenario: Verify login form header is displayed
    Then User should see Welcome back heading

  Scenario: Verify sub text of the header
    Then User should see Sign in to your account or create a new one

  Scenario: Verify presence of close button
    Then User should see close button at the right corner
