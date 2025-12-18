@completeProfileFormValidation
Feature: Complete Profile Form Validation

  Background:
    Given User is in Login Page
    When Unregistered user clicks continue with email button after entering a valid new email "newuser1@example.com"

  Scenario: Verify Full Name field is visible
    Then Full Name input field should be displayed

  Scenario: Verify Username field is visible
    Then Username input field should be displayed

  Scenario: Verify Password field is visible
    Then Password input field should be displayed
