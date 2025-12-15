@loginPageFunctional
Feature: Login page field and functional Validation

  Background:
    Given User is in Login Page

  Scenario: Verify email input accepts valid existing email
    When Registered user clicks continue with email button after entering a valid existing email
    Then User should get password field
#     Verify email input rejects invalid email
#     Verify password field in login page
# Verify sub text 
# Verify presence of forgot password link
# Verify presence of placeholder in password field
# Verify password input accepts valid existing user
# Verify email input accepts valid new email
