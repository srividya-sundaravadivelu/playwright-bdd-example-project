@skip @onboardingUploadStep1
Feature: Onboarding Upload Step 1 Form Validation

  Background:
    Given User is in step 1 for onboarding upload process

  Scenario: Verify presence of text field
    Then User should see text field for Age, height , weight

  Scenario: Verify presence of dropdown
    Then User should dropdown option for Gender field

  Scenario: Verify dropdown text for gender
    Then User should see options
      | Male              |
      | Female            |
      | Prefer Not to Say |

  Scenario: Verify presence of continue button
    Then User should see enabled "Continue" button

  Scenario: Verify progress bar is visible
    Then Progress bar should be visible

  Scenario: Verify progress shows 1 of 5 steps
    Then Progress text should read Step 1 of 5
  #   Scenario: Verify step 1 progress is highlighted
  #   Then Step 1 indicator should be highlighted
  # Scenario: Verify incomplete steps (2-5) are not highlighted
  #   Then Steps 2 to 5 should remain unhighlighted/inactive

  Scenario: Validate error message for invalid input
    When User fills invalid values in any field and clicks continue button
      | field  | value |
      | height |     0 |
    Then User should receive error message for invalid fields
      | field  | expectedMessage            |
      | height | greater than or equal to 1 |

  Scenario: Verify navigation for step 1 onboarding
    When User fills valid values in all fields and clicks continue button
      | field  | value |
      | height |   170 |
      | weight |    65 |
    Then User should move to step 2 of onboarding upload form
