@skip @profileFormVerification 
# @skip - Skip this feature to avoid creating multiple accounts during test runs --

Feature: Profile Form Verification

  Background:
    Given User is on Complete Profile Form Page

  Scenario: Verify Create Account button is enabled after checking Terms & conditions box
    When User checks the Terms & conditions box
    Then Create Account button should be enabled

  Scenario: Verify Create account form  with valid data
    When User clicks create account button after filling valid data in all fields with
      | fullName | userName | password |
      | John Doe | johndoe  | Test@123 |
    Then User should be redirected to upload blood report

  Scenario: Verify Create account form  with invalid data
    When User clicks create account button after filling invalid data with
      | field    | value  |
      | fullName | John@  |
      | userName | ab     |
      | password | Test12 |
    Then User should see error messages for respective fields
      | field    | expectedMessage                                                     |
      | fullName | Full name can only contain letters, spaces, hyphens and apostrophes |
      | userName | Username must be at least 3 characters                              |
      | password | Password must be at least 8 characters                              |

  Scenario: Verify presence of Upload Blood Report button
    When User clicks create account button after filling valid data in all fields with
      | fullName | userName | password |
      | John Doe | johndoe  | Test@123 |
    Then User should see Upload Blood Report button

  Scenario: Verify presence of Step Through Onboarding button
    When User clicks create account button after filling valid data in all fields with
      | fullName | userName | password |
      | John Doe | johndoe  | Test@123 |
    Then User should see Step Through Onboarding button
