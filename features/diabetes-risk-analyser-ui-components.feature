@diabetesRiskUI
Feature: Diabetes Risk Analyser UI Components

  Background:
    Given User is on the SweetBalance page
    When User clicks on the Check Your Risk button

  Scenario: Validate modal dialog heading
    Then User should see "Diabetes Risk Analyzer" header

  Scenario: Validate modal dialog sub text
    Then User see  "Answer a few questions to assess your risk of developing diabetes" text

  Scenario: Verify the presence of Cancel button
    Then User should see Cancel button

  Scenario: Verify the values for Blood Pressure
    Then User should see the following blood pressure options:
      | Normal   |
      | Elevated |
      | High     |

  Scenario: Verify the values for Physical Activity Level
    Then User should see the following physical activity level options:
      | Active (Exercise 3+ times a week)    |
      | Moderate (Exercise 1-2 times a week) |
      | Sedentary (Rarely exercise)          |

  Scenario: Verify the values for Diet Quality
    Then User should see the following diet quality options:
      | Excellent (Balanced, mostly whole foods)        |
      | Average (Mixed whole foods and processed foods) |
      | Poor (Mostly processed foods, high sugar)       |
