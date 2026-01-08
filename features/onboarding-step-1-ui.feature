@skip @onboardingStep1UI
Feature: Onboarding Step 1 UI Verification

  Background:
    Given User is in step 1 for onboarding process

  Scenario: Verify Step 1 heading is visible
    Then Onboarding page should display title "So, Which sugar rebellion are we dealing with?"

  Scenario: Verify Step 1 sub text
    Then Onboarding page should have sub text "This will help us tailor your plan to your condition"

  Scenario: Progress bar reflects Step 1 of 12
    Then Onboarding page progress text should read Step 1 of 12

  Scenario: Verify options is displayed
    Then user should see options in onboarding page
      | Type 2       |
      | I don't know |

  Scenario: Verify option is selectable
    When User selects option "Type 2" in onboarding page
    Then User should move to step 2 of onboarding form
