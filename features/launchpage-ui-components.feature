@launchpageUI
Feature: Verify LaunchPage UI components

  Background:
    Given User is on the SweetBalance page

  Scenario: Validate the presence of App Name on the launch page 
    Then User should see app name on the top left

  Scenario: Validate the presence of policy details
    Then User should see text "Our Terms of Service and Privacy Policy have recently been updated"

  Scenario: Verify the homepage heading is visible
    Then User should see the heading "Smart Diabetes Tracking Powered by AI"

  Scenario: Verify the Start Today input button is visible
    Then User should see a Start Today input button

  Scenario: Verify the diabetes management tools section is visible
    Then User should see the text "Comprehensive Diabetes Management Tools"

  
