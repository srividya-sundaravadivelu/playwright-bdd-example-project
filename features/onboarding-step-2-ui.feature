@skip @onboardingStep2UI
Feature: Onboarding Step 2 UI Verification

  Background:
    Given User is in step 2 for onboarding process

  Scenario: Verify Step 2 heading is visible
    Then Onboarding page should display title "Which fabulous label fits you best?"

  Scenario: Verify step 2 sub text
    Then Onboarding page should have sub text "Choose your gender"

  Scenario: Progress bar reflects Step 2 of 12
    Then Onboarding page progress text should read Step 2 of 12

  Scenario: Verify gender options
    Then user should see options in onboarding page
      | Male   |
      | Female |
      | Other  |

  Scenario: Verify option is selectable
    When User selects option "Female" in onboarding page
    Then User should move to step 3 of onboarding form

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 1 of onboarding form
