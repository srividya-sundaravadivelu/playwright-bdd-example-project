import { Given, When, Then } from '../fixtures/fixtures';
Given('User is in Login Page', async ({ launchPage }) => {
    // Step: Given User is in Login Page
    // From: features\loginpage-functional.feature:5:5
    await launchPage.goto();
    await launchPage.clickLoginButton();
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

When('User enters an invalid email {string}', async ({ loginPage }, invalidEmail) => {
    // Step: When User enters an invalid email "abc@"
    // From: features\loginpage-functional.feature:12:5
    await loginPage.fillEmail(invalidEmail);
    await loginPage.clickContinueButton();
});


Then('Email field should show validation error', async ({ loginPage }) => {
    // Step: Then Email field should show validation error
    // From: features\loginpage-functional.feature:13:5
    await loginPage.verifyEmailValidationError();
});

When('Registered user clicks sign in after entering password', async ({ loginPage }) => {
    // Step: When Registered user clicks sign in after entering password
    // From: features\loginpage-functional.feature:16:5
    await loginPage.fillEmail(process.env.APP_EMAIL);
    await loginPage.clickContinueButton();
    await loginPage.fillPassword(process.env.APP_PASSWORD);
    await loginPage.clickSignInButton();
});

Then('User should be navigated to home page', async ({ homePage }) => {
    // Step: Then User should be navigated to home page
    // From: features\loginpage-functional.feature:17:5
    await homePage.verifyCurrentPageIsHome();
});

When('Unregistered user clicks continue with email button after entering a valid new email {string}', async ({ loginPage }, newEmail) => {
    // Step: When Unregistered user clicks continue with email button after entering a valid new email
    // From: features\loginpage-functional.feature:20:5
    await loginPage.fillEmail(newEmail);
    await loginPage.clickContinueButton();
});

Then('User should get Complete your profile form', async ({ loginPage }) => {
    // Step: Then User should get Complete your profile form
    // From: features\loginpage-functional.feature:21:5
    await loginPage.verifyCompleteYourProfileForm();
});