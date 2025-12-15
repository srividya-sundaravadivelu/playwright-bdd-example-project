import { Given, When, Then } from '../fixtures/fixtures';
Then('User should see Welcome back heading', async ({ loginPage }) => {
  // Step: Then User should see Welcome back heading
  // From: features\loginpage-ui.feature:9:5
  await loginPage.verifyLoginHeading();
});

Then('User should see Sign in to your account or create a new one', async ({ loginPage }) => {
  // Step: Then User should see Sign in to your account or create a new one
  // From: features\loginpage-ui.feature:12:5
  await loginPage.verifySignInText();       
});

Then('User should see close button at the right corner', async ({ loginPage}) => {
  // Step: Then User should see close button at the right corner
  // From: features\loginpage-ui.feature:15:5
  await loginPage.verifyCloseButton();
});