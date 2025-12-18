import { Given, When, Then } from '../fixtures/fixtures';
Then('Full Name input field should be displayed', async ({ loginPage }) => {
    // Step: Then Full Name input field should be displayed
    // From: features\complete-profile-form-validation.feature:9:5
    await loginPage.verifyFullNameField();
});

Then('Username input field should be displayed', async ({ loginPage }) => {
    // Step: Then Username input field should be displayed
    // From: features\complete-profile-form-validation.feature:12:5
    await loginPage.verifyUserNameField();
});

Then('Password input field should be displayed', async ({ loginPage }) => {
    // Step: Then Password input field should be displayed
    // From: features\complete-profile-form-validation.feature:15:5
    await loginPage.verifyPasswordField();
});