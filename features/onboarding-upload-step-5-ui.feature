@onboardingUploadStep5UI
Feature: Onboarding Upload Step 5 UI Verification
# Run only the last step scenarios to avoid multiple account creation
# @skip - Skips the Scenario to avoid creating multiple accounts during test runs

  Background:
    Given User is in step 5 for onboarding upload process

  @skip
  Scenario: Verify Step 5 heading is visible
    Then Page should display title "Allergic to any foods?"

  @skip
  Scenario: Verify step 5 sub text
    Then Page should have sub text "Select all that apply"

  @skip
  Scenario: Progress bar reflects Step 5 of 5
    Then Progress text should read Step 5 of 5

  @skip
  Scenario: Verify Back button is visible
    Then Back button should be visible

  @skip
  Scenario: Verify submit button visible
    Then Submit button should be visible

  @skip
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

  @skip
  Scenario: Verify back button function
    When User clicks on Back button
    Then User should move to step 4 of onboarding upload form

  @skip
  Scenario: Verify single selection in allergy
    When User selects allergy and clicks submit
      | Dairy |
    Then User should navigate to "Upgrade to premium plus"

  Scenario: Verify multiple selection in allergy
    When User selects allergy and clicks submit
      | Gluten |
      | Eggs   |
    Then User should navigate to "Upgrade to premium plus"
