@skip @onboardingStep5UI
Feature: Onboarding Step 5 UI Verification

  Background:
    Given User is in step 5 for onboarding process

  Scenario: Verify Step 5 heading is visible
    Then Onboarding page should display title "How much awesome do you weigh?"

  Scenario: Verify step 5 sub text
    Then Onboarding page should have sub text "We will personalize your nutrition plan to guide you towards your goals!"

  Scenario: Progress bar reflects Step 5 of 12
    Then Onboarding page progress text should read Step 5 of 12

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 4 of onboarding form

  Scenario: Verify step 5 has 2 tabs to select height
    Then User should see tabs in onboarding page
      | Kilograms |
      | Pounds    |

  Scenario: Validate values for kilograms options
    Then User should see kilograms options from 40 kg to 190 kg

  Scenario: Validate values for pounds options
    When User selects "Pounds" tab
    Then User should see pounds options from 90 lbs to 550 lbs

  Scenario: Validate user able to select from option in kilograms
    When User selects option "170 kg" in onboarding page
    Then User should move to step 6 of onboarding form

  Scenario: Validate user able to select from option in pounds
    When User selects "Pounds" tab
    When User selects option "374 lbs" in onboarding page
    Then User should move to step 6 of onboarding form
