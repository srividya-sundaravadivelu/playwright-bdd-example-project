import { Given, When, Then } from '../fixtures/fixtures';
Given('User is on Complete Profile Form Page', async ({ launchPage, loginPage }) => {
    // Step: Given User is on Complete Profile Form Page
    // From: features\profile-form-verification.feature:5:5
    await launchPage.goto();
    await launchPage.clickLoginButton();
    await loginPage.fillEmail('newuser' + Date.now() + '@example.com');
    await loginPage.clickContinueButton();
});

When('User checks the Terms & conditions box', async ({ loginPage }) => {
    // Step: When User checks the Terms & conditions box
    // From: features\profile-form-verification.feature:8:5  
    await loginPage.checkAgreeTermsCheckbox();
});

Then('Create Account button should be enabled', async ({ loginPage }) => {
    // Step: Then Create Account button should be enabled
    // From: features\profile-form-verification.feature:9:5
    await loginPage.verifyCreateAccountButtonEnabled();
});

When('User clicks create account button after filling valid data in all fields with', async ({ loginPage }, dataTable) => {
    // Step: When User clicks create account button after filling valid data in all fields with
    // From: features\profile-form-verification.feature:14:5
   const [data] = dataTable.hashes(); // hashes() works with multiple columns

    await loginPage.fillFullName(data.fullName);
    await loginPage.fillUserName(data.userName);
    await loginPage.fillPassword(data.password);    
    await loginPage.checkAgreeTermsCheckbox();
    await loginPage.clickCreateAccountButton();
});

Then('User should be redirected to upload blood report', async ({ bloodReportQuestionPage }) => {
    // Step: Then User should be redirected to upload blood report
    // From: features\profile-form-verification.feature:15:5
    await bloodReportQuestionPage.verifyCurrentPageIsBloodReportQuestion();
});

When('User clicks create account button after filling invalid data with', async ({ loginPage }, dataTable) => {
    // Step: When User clicks create account button after filling invalid data with
    // From: features\profile-form-verification.feature:20:5
    const rows = dataTable.hashes();
    for (const { field, value } of rows) {
        await loginPage.fillField(field, value);
    }
    await loginPage.checkAgreeTermsCheckbox();
    await loginPage.clickCreateAccountButton();
});

Then('User should see error messages for respective fields', async ({ loginPage }, dataTable) => {
    // Step: Then User should see error messages for respective fields
    // From: features\profile-form-verification.feature:23:5
    const rows = dataTable.hashes();

    for (const { field, expectedMessage } of rows) {
        await loginPage.verifyErrorMessage(field, expectedMessage);
    }
});

Then('User should see Upload Blood Report button', async ({ bloodReportQuestionPage }) => {
    // Step: Then User should see Upload Blood Report button
    // From: features\profile-form-verification.feature:21:5
    await bloodReportQuestionPage.verifyUploadBloodReportButton();
});

Then('User should see Step Through Onboarding button', async ({ bloodReportQuestionPage }) => {
    // Step: Then User should see Step Through Onboarding button
    // From: features\profile-form-verification.feature:25:5
    await bloodReportQuestionPage.verifyStepThroughOnboardingButton();
});