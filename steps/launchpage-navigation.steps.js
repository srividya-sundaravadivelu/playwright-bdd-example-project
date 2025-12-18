import { Given, When, Then } from '../fixtures/fixtures';

When('User clicks on the Start Today button', async ({ launchPage }) => {
  // Step: When User clicks on the Start Today button
  // From: features\launchpage-navigation-components.feature:7:5
  await launchPage.clickStartTodayButton();
});

Then('User should be redirected to the login page', async ({ loginPage }) => {
  // Step: Then User should be redirected to the login page
  // From: features\launchpage-navigation-components.feature:8:5
  await loginPage.verifyLoginHeading();
});

When('User clicks on the Login link', async ({ launchPage }) => {
  // Step: When User clicks on the Login link
  // From: features\launchpage-navigation-components.feature:11:5
  await launchPage.clickLoginButton();
});

When('User clicks on the Check Your Risk button', async ({ launchPage }) => {
  // Step: When User clicks on the Check Your Risk button
  // From: features\launchpage-navigation-components.feature:15:5
  await launchPage.clickCheckYourRiskButton();
});

Then('User should see the Risk Assessment modal dialog displayed', async ({ launchPage }) => {
  // Step: Then User should see the Risk Assessment modal dialog displayed
  // From: features\launchpage-navigation-components.feature:16:5
  await launchPage.checkRiskAnalyzerDialogVisible();
});