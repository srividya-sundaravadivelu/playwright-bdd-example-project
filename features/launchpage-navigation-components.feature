@launchpageNavigation
Feature: Verify LaunchPage navigation components

  Background:
    Given User is on the SweetBalance page

  Scenario: Verify redirection from Start Today button
    When User clicks on the Start Today button
    Then User should be redirected to the login page 

    Scenario: Validate Login link redirection
    When User clicks on the Login link
    Then User should be redirected to the login page

    Scenario: Verify redirection from Check Your Risk button
    When User clicks on the Check Your Risk button
    Then User should see the Risk Assessment modal dialog displayed