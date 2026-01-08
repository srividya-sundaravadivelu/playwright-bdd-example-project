@skip @onboardingStep7UI
Feature: Onboarding Step 7 UI Verification

  Background:
    Given User is in step 7 for onboarding process

  Scenario: Verify Step 7 heading is visible
    Then Onboarding page should display title "What's your go-to food passport?"

  Scenario: Verify step 7 sub text
    Then Onboarding page should have sub text "To create a meal plan you'll enjoy, please select your preferred cuisines!"

  Scenario: Progress bar reflects Step 7 of 12
    Then Onboarding page progress text should read Step 7 of 12

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify cuisine options is displayed
    Then user should see options in onboarding page
      | Indian         |
      | American       |
      | Continental    |
      | Mediterranean  |
      | Asian          |
      | Middle Eastern |
      | Mexican        |

  Scenario: Verify cuisine option is selectable
    When User selects option "Indian" in onboarding page
    Then User should move to step 8 of onboarding form

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 6 of onboarding form
