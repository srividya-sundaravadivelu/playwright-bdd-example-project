@skip @onboardingStep4UI
Feature: Onboarding Step 4 UI Verification

  Background:
    Given User is in step 4 for onboarding process

  Scenario: Verify Step 4 heading is visible
    Then Onboarding page should display title "How close are you to the clouds?"

  Scenario: Verify step 4 sub text
    Then Onboarding page should have sub text "Please enter your height"

  Scenario: Progress bar reflects Step 4 of 12
    Then Onboarding page progress text should read Step 4 of 12

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 3 of onboarding form

  Scenario: Verify step 4 has 2 tabs to select height
    Then User should see tabs in onboarding page
      | Centimeters |
      | Inches      |

  Scenario: Validate values for centimeters options
    Then User should see centimeters options from 120 cm to 220 cm

  Scenario: Validate values for inches options
    When User selects "Inches" tab
    Then User should see inches options from 4'5'' to 7'3'' inches

  Scenario: Validate user able to select from option in centimeters
    When User selects option "170 cm" in onboarding page
    Then User should move to step 5 of onboarding form

  Scenario: Validate user able to select from option in feet & inches
    When User selects "Inches" tab
    When User selects option "5' 7\"" in onboarding page
    Then User should move to step 5 of onboarding form
