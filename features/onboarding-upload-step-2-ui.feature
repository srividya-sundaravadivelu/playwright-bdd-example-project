@skip @onboardingUploadStep2UI
Feature: Onboarding Upload Step 2 UI Verification

  Background:
    Given User is in step 2 for onboarding upload process    

  Scenario: Verify Step 2 heading is visible
    Then Page should display title "Pick your pace: chill stroll or marathon magic"

  Scenario: Verify subtitle is visible
    Then Page should have sub text "Select your preferred exercise intensity level"

  Scenario: Verify Back button is visible
    Then Back button should be visible

  Scenario: Verify Step 2 progress bar is filled
    Then Progress text should read Step 2 of 5 

  Scenario: Verify presence of all 3 intensity options
    Then User should see options
      | Easy   |
      | Medium |
      | Hard   |

  Scenario: Verify  option selection in step 2
    When User selects option "Medium"
    Then User should move to step 3 of onboarding upload form 

  Scenario: Verify navigation to Step 1
    When User clicks on Back button
    Then User should move to step 1 of onboarding upload form