@skip @onboardingStep10UI
Feature: Onboarding Step 10 UI Verification

  Background:
    Given User is in step 10 for onboarding process

  Scenario: Verify Step 10 heading is visible
    Then Onboarding page should display title "Any medical quirks worth mentioning?"

  Scenario: Verify step 10 sub text
    Then Onboarding page should have sub text "Do you have any other medical conditions?"

  Scenario: Progress bar reflects Step 10 of 12
    Then Onboarding page progress text should read Step 10 of 12

  Scenario: Verify medical conditions options is displayed
    Then user should see checkbox options in onboarding page
      | High Blood Pressure              |
      | High Cholesterol                 |
      | Heart Disease                    |
      | PCOS (Polycystic Ovary Syndrome) |
      | Chronic kidney disease           |
      | Gastroesophageal reflux disease  |
      | Anemia                           |
      | Hypothyroidism                   |
      | Hyperthyroidism                  |
      | None of the above                |

  Scenario: Verify Back button is visible
    Then Back button should be visible on onboarding page

  Scenario: Verify Back button function
    When User clicks on Back button on onboarding page
    Then User should move to step 9 of onboarding form

  Scenario: Verify options is selectable
    When User selects multiple options in onboarding page and clicks continue
      | High Blood Pressure |
      | High Cholesterol    |
    Then User should move to step 11 of onboarding form
