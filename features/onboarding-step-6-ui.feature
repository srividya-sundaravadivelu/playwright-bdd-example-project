@skip @onboardingStep6UI
Feature: Onboarding Step 6 UI Verification

  Background:
    Given User is in step 6 for onboarding process

  Scenario: Verify Step 6 heading is visible
    Then Onboarding page should display title "Your taste buds—what team are they on?"

  Scenario: Verify step 6 sub text
    Then Onboarding page should have sub text "Select your dietary preference"

  Scenario: Progress bar reflects Step 6 of 12
    Then Onboarding page progress text should read Step 6 of 12

  Scenario: Verify dietary options is displayed
    Then user should see options in onboarding page
      | All-inclusive diet |
      | Vegetarian         |
      | Vegan              |

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify option is selectable
    When User selects option "Vegetarian" in onboarding page
    Then User should move to step 7 of onboarding form

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 5 of onboarding form
