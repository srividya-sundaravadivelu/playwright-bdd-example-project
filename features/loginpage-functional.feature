@loginPageFunctional
Feature: Login page field and functional Validation

  Background:
    Given User is in Login Page

  Scenario: Verify email input accepts valid existing email
    When Registered user clicks continue with email button after entering a valid existing email
    Then User should get password field

  Scenario: Verify email input rejects invalid email
    When User enters an invalid email "abc@"
    Then Email field should show validation error

  Scenario: Verify password input accepts valid existing user
    When Registered user clicks sign in after entering password
    Then User should be navigated to home page

  Scenario: Verify email input accepts valid new email
    When Unregistered user clicks continue with email button after entering a valid new email "newuser1@example.com"
    Then User should get Complete your profile form
