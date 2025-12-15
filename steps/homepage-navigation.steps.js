import { Given, When, Then } from '../fixtures/fixtures';

When('User clicks on the Start Today button', async ({ homePage }) => {
  // Step: When User clicks on the Start Today button
  // From: features\homepage-navigation-components.feature:7:5
  await homePage.clickStartTodayButton();
});

Then('User should be redirected to the login page', async ({ loginPage }) => {
  // Step: Then User should be redirected to the login page
  // From: features\homepage-navigation-components.feature:8:5
  await loginPage.verifyLoginHeading();
});

When('User clicks on the Login link', async ({ homePage }) => {
  // Step: When User clicks on the Login link
  // From: features\homepage-navigation-components.feature:11:5
  await homePage.clickLoginButton();
});

When('User clicks on the Check Your Risk button', async ({ homePage }) => {
  // Step: When User clicks on the Check Your Risk button
  // From: features\homepage-navigation-components.feature:15:5
  await homePage.clickCheckYourRiskButton();
});

Then('User should see the Risk Assessment modal dialog displayed', async ({ homePage }) => {
  // Step: Then User should see the Risk Assessment modal dialog displayed
  // From: features\homepage-navigation-components.feature:16:5
  await homePage.checkRiskAnalyzerDialogVisible();
});