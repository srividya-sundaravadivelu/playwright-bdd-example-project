import { Given, When, Then } from '../fixtures/fixtures';
Given('User is on onboarding form page', async ({}) => {
  // Step: Given User is on onboarding form page
  // From: features\onboarding-form-validation.feature:5:5
});

Then('User should see text field for Age, height , weight', async ({}) => {
  // Step: Then User should see text field for Age, height , weight
  // From: features\onboarding-form-validation.feature:8:5
});

Then('User should dropdown option for Gender field', async ({}) => {
  // Step: Then User should dropdown option for Gender field
  // From: features\onboarding-form-validation.feature:11:5
});

Then('User should see {string} options in dropdown', async ({}, arg) => {
  // Step: Then User should see "Male , female, prefer not to say " options in dropdown
  // From: features\onboarding-form-validation.feature:14:5
});

Then('User should see enabled {string} button', async ({}, arg) => {
  // Step: Then User should see enabled "Continue" button
  // From: features\onboarding-form-validation.feature:17:5
});

Then('Progress bar should be visible', async ({}) => {
  // Step: Then Progress bar should be visible
  // From: features\onboarding-form-validation.feature:20:5
});

Then('Progress text should read Step {int} of {int}', async ({}, arg, arg1) => {
  // Step: Then Progress text should read Step 1 of 5
  // From: features\onboarding-form-validation.feature:23:5
});

Then('Step {int} indicator should be highlighted', async ({}, arg) => {
  // Step: Then Step 1 indicator should be highlighted
  // From: features\onboarding-form-validation.feature:26:5
});

Then('Steps {int} to {int} should remain unhighlighted\\/inactive', async ({}, arg, arg1) => {
  // Step: Then Steps 2 to 5 should remain unhighlighted/inactive
  // From: features\onboarding-form-validation.feature:29:5
});

When('User fills invalid values in any field and clicks continue button', async ({}) => {
  // Step: When User fills invalid values in any field and clicks continue button
  // From: features\onboarding-form-validation.feature:32:5
});

Then('User should receive error message for invalid fields', async ({}) => {
  // Step: Then User should receive error message for invalid fields
  // From: features\onboarding-form-validation.feature:33:5
});

When('User fills valid values in all fields and clicks continue button', async ({}) => {
  // Step: When User fills valid values in all fields and clicks continue button
  // From: features\onboarding-form-validation.feature:36:5
});

Then('User should move to step {int} of onboarding form', async ({}, arg) => {
  // Step: Then User should move to step 2 of onboarding form
  // From: features\onboarding-form-validation.feature:37:5
});
