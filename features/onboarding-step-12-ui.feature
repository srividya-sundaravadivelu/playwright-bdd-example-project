@onboardingStep12UI
Feature: Onboarding Step 12 UI Verification

  Background:
    Given User is in step 12 for onboarding process

  @skip
  Scenario: Verify Step 12 heading is visible
    Then Onboarding page should display title "Final Step- What’s your latest HbA1c number?!"

  @skip
  Scenario: Progress bar reflects Step 12 of 12
    Then Onboarding page progress text should read Step 12 of 12

  @skip
  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  @skip
  Scenario: Verify Back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 11 of onboarding form

  @skip
  Scenario: Verify input field is displayed in step 12
    Then User should see input field for HbA1c number

  @skip
  Scenario: Verify the text below the input field
    Then Onboarding page should have sub text "Please enter a value between 4.0 and 15.0"

  @skip
  Scenario: Verify step 12 has continue button
    Then User should see Continue button on onboarding page

  @skip
  Scenario: Verify the description heading in step 12
    Then Onboarding page should have description heading "What is HbA1c?"

  @skip
  Scenario: Verify the description text in step 12
    Then Onboarding page should have description text "HbA1c measures your average blood sugar levels over the past 2-3 months. This important value helps us create a personalized diabetes management plan tailored specifically to your needs."

  @skip
  Scenario: Verify user cannot enter invalid HbA1c value
    When User enters HbA1c value "16.0" in onboarding page and clicks continue
    Then User should see error message "Please enter a value between 4.0 and 15.0"

  Scenario: Verify continue button function with valid HbA1c value
    When User enters HbA1c value "7.5" in onboarding page and clicks continue
    Then User should see personalization message "Getting you all set—like a VIP pass to better health!"
