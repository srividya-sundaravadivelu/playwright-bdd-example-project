@skip @onboardingStep11UI
Feature: Onboarding Step 11 UI Verification

  Background:
    Given User is in step 11 for onboarding process

  Scenario: Verify Step 11 heading is visible
    Then Onboarding page should display title "Pick your pace: chill stroll or marathon magic?"

  Scenario: Verify step 11 sub text
    Then Onboarding page should have sub text "Select your preferred exercise intensity level"
  Scenario: Progress bar reflects Step 11 of 12
    Then Onboarding page progress text should read Step 11 of 12

  Scenario: Verify presence of all 3 intensity options
    Then user should see options in onboarding page
      | Easy   |
      | Medium |
      | Hard   |

  Scenario: Verify  intensity option selection
    When User selects option "Medium" in onboarding page
    Then User should move to step 12 of onboarding form

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify Back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 10 of onboarding form
