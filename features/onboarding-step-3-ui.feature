@skip @onboardingStep3UI
Feature: Onboarding Step 3 UI Verification

  Background:
    Given User is in step 3 for onboarding process

  Scenario: Verify Step 3 heading is visible
    Then Onboarding page should display title "Age: own it, pick your number."

  Scenario: Verify step 3 sub text
    Then Onboarding page should have sub text "Please select your age"

  Scenario: Progress bar reflects Step 3 of 12
    Then Onboarding page progress text should read Step 3 of 12

  Scenario: Verify age group options
    Then User should see age options from 18 years to 100 years in onboarding page

  Scenario: Verify option is selectable
    When User selects option "18" in onboarding page
    Then User should move to step 4 of onboarding form

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 2 of onboarding form
