@skip @onboardingStep9UI
Feature: Onboarding Step 9 UI Verification

  Background:
    Given User is in step 9 for onboarding process

  Scenario: Verify Step 9 heading is visible
    Then Onboarding page should display title "Tap foods your body hates"

  Scenario: Verify step 9 sub text
    Then Onboarding page should have sub text "Select all that apply"

  Scenario: Progress bar reflects Step 9 of 12
    Then Onboarding page progress text should read Step 9 of 12

  Scenario: Verify allergy options is displayed
    Then user should see checkbox options in onboarding page
      | Dairy     |
      | Gluten    |
      | Nuts      |
      | Shellfish |
      | Soy       |
      | Eggs      |
      | Other     |
      | None      |

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify Back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 8 of onboarding form

  Scenario: Verify allergy is selectable
    When User selects multiple options in onboarding page and clicks continue
      | Gluten |
      | Eggs   |
    Then User should move to step 10 of onboarding form
