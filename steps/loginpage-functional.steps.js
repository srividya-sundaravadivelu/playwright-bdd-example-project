import { Given, When, Then } from '../fixtures/fixtures';
Given('User is in Login Page', async ({ homePage }) => {
    // Step: Given User is in Login Page
    // From: features\loginpage-functional.feature:5:5
    await homePage.goto();
    await homePage.clickLoginButton();
});

When('Registered user clicks continue with email button after entering a valid existing email', async ({ loginPage }) => {
    // Step: When Registered user clicks continue with email button after entering a valid existing email
    // From: features\loginpage-functional.feature:8:5
    await loginPage.fillEmail(process.env.APP_EMAIL);
    await loginPage.clickContinueButton();    
});

Then('User should get password field', async ({ loginPage }) => {
    // Step: Then User should get password field
    // From: features\loginpage-functional.feature:9:5
    await loginPage.verifyPasswordField();
});