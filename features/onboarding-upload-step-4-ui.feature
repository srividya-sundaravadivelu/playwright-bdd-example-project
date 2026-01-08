@skip @onboardingUploadStep4UI
Feature: Onboarding Upload Step 4 UI Verification

  Background:
    Given User is in step 4 for onboarding upload process

  Scenario: Verify Step 4 heading is visible
    Then Page should display title "What's your go-to food passport?"

  Scenario: Verify step 4 sub text
    Then Page should have sub text "To create a meal plan you'll enjoy, please select your preferred cuisines!"

  Scenario: Verify Progress bar reflects Step 4 of 5
    Then Progress text should read Step 4 of 5

  Scenario: Verify Back button is visible
    Then Back button should be visible

  Scenario: Verify cuisine options is displayed
    Then User should see options
      | Indian         |
      | American       |
      | Continental    |
      | Mediterranean  |
      | Asian          |
      | Middle Eastern |
      | Mexican        |

  Scenario: Verify cuisine option is selectable
    When User selects option "Indian"
    Then User should move to step 5 of onboarding upload form

  Scenario: Verify back button function
    When User clicks on Back button
    Then User should move to step 3 of onboarding upload form