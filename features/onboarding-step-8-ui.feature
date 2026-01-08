@skip @onboardingStep8UI
Feature: Onboarding Step 8 UI Verification

  Background:
    Given User is in step 8 for onboarding process

  Scenario: Verify Step 8 heading is visible
    Then Onboarding page should display title "Allergic to any foods?"

  Scenario: Verify step 8 sub text
    Then Onboarding page should have sub text "Select yesif you have any food allergies"

  Scenario: Progress bar reflects Step 8 of 12
    Then Onboarding page progress text should read Step 8 of 12

  Scenario: Verify allergy options is displayed
    Then user should see options in onboarding page
      | Yes |
      | No  |

  Scenario: Verify option Yes takes to step 9
    When User selects option "Yes" in onboarding page
    Then User should move to step 9 of onboarding form

  Scenario: Verify option No takes to step 10
    When User selects option "No" in onboarding page
    Then User should move to step 10 of onboarding form

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify Back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 7 of onboarding form
