@skip @onboardingUploadStep3UI
Feature: Onboarding Upload Step 3 UI Verification

  Background:
    Given User is in step 3 for onboarding upload process

  Scenario: Verify Step 3 heading is visible
    Then Page should display title "Your taste buds—what team are they on?"

  Scenario: Verify step 3 sub text
    Then Page should have sub text "Select your dietary preference"

  Scenario: Verify Progress bar reflects Step 3 of 5
    Then Progress text should read Step 3 of 5

  Scenario: Verify dietary options is displayed
    Then User should see options
      | All-inclusive diet |
      | Vegetarian         |
      | Vegan              |

  Scenario: Verify Back button is visible
    Then Back button should be visible

  Scenario: Verify option is selectable
    When User selects option "Vegetarian"
    Then User should move to step 4 of onboarding upload form 

  Scenario: Verify back button function
    When User clicks on Back button
    Then User should move to step 2 of onboarding upload form