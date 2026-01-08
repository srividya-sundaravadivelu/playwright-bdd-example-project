@skip @onboardingUploadStep5UI
Feature: Onboarding Upload Step 5 UI Verification

  Background:
    Given User is in step 5 for onboarding upload process

  Scenario: Verify Step 5 heading is visible
    Then Page should display title "Allergic to any foods?"

  Scenario: Verify step 5 sub text
    Then Page should have sub text "Select all that apply"

  Scenario: Progress bar reflects Step 5 of 5
    Then Progress text should read Step 5 of 5

  Scenario: Verify Back button is visible
    Then Back button should be visible

  Scenario: Verify submit button visible
    Then Submit button should be visible

  Scenario: Verify allergy options is displayed
    Then User should see options
      | Gluten    |
      | Dairy     |
      | Nuts      |
      | Eggs      |
      | Soy       |
      | Shellfish |
      | Other     |
      | None      |

  Scenario: Verify back button function
    When User clicks on Back button
    Then User should move to step 4 of onboarding upload form

  Scenario: Verify single selection in allergy
    When User selects allergy and clicks submit
      | Dairy |
    Then User should navigate to "Upgrade to premium plus"

  Scenario: Verify multiple selection in allergy
    When User selects allergy and clicks submit
      | Gluten |
      | Eggs   |
    Then User should navigate to "Upgrade to premium plus"
