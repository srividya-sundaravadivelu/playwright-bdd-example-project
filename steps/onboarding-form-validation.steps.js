import { Given, When, Then } from '../fixtures/fixtures';
Given('User is on onboarding form page', async ({ launchPage, loginPage, bloodReportQuestionPage, uploadBloodReportPage }) => {
    // Step: Given User is on onboarding form page
    // From: features\onboarding-form-validation.feature:5:5
    await launchPage.goto();
    await launchPage.clickLoginButton();
    const timestamp = Date.now();
    await loginPage.fillEmail('newuser' + timestamp + '@example.com');
    await loginPage.clickContinueButton();
    await loginPage.fillFullName("newuser");
    await loginPage.fillUserName("newuser" + timestamp);
    await loginPage.fillPassword(process.env.APP_PASSWORD);
    await loginPage.checkAgreeTermsCheckbox();
    await loginPage.clickCreateAccountButton();
    await bloodReportQuestionPage.clickUploadBloodReportButton();
    await uploadBloodReportPage.uploadFile("data/files/valid-blood-report.pdf");
    await uploadBloodReportPage.clickUploadAndProcessButton();
    await uploadBloodReportPage.waitForReportAnalysisVisible();
    await uploadBloodReportPage.clickOnboardingButton();
});

Then('User should see text field for Age, height , weight', async ({ onboardingUploadPage }) => {
    // Step: Then User should see text field for Age, height , weight
    // From: features\onboarding-form-validation.feature:8:5
    await onboardingUploadPage.verifyAgeFieldVisible();
    await onboardingUploadPage.verifyHeightFieldVisible();
    await onboardingUploadPage.verifyWeightFieldVisible();
});

Then('User should dropdown option for Gender field', async ({ onboardingUploadPage }) => {
    // Step: Then User should dropdown option for Gender field
    // From: features\onboarding-form-validation.feature:11:5
    await onboardingUploadPage.verifyGenderDropdownVisible();
});

Then('User should see options in dropdown', async ({ onboardingUploadPage }, dataTable) => {
    // Step: Then User should see "Male , female, prefer not to say " options in dropdown
    // From: features\onboarding-form-validation.feature:14:5
    await onboardingUploadPage.verifyGenderDropdownOptions(dataTable);
});

Then('User should see enabled {string} button', async ({ onboardingUploadPage }, arg) => {
    // Step: Then User should see enabled "Continue" button
    // From: features\onboarding-form-validation.feature:17:5
    await onboardingUploadPage.verifyContinueButtonEnabled();
});

Then('Progress bar should be visible', async ({ onboardingUploadPage }) => {
    // Step: Then Progress bar should be visible
    // From: features\onboarding-form-validation.feature:20:5
    await onboardingUploadPage.verifyProgressBarVisible();
});

Then('Progress text should read Step {int} of {int}', async ({ onboardingUploadPage }, arg, arg1) => {
    // Step: Then Progress text should read Step 1 of 5
    // From: features\onboarding-form-validation.feature:23:5
    await onboardingUploadPage.verifyProgressText(arg, arg1);
});

// Then('Step {int} indicator should be highlighted', async ({ onboardingUploadPage }, arg) => {
//     // Step: Then Step 1 indicator should be highlighted
//     // From: features\onboarding-form-validation.feature:26:5
//     await onboardingUploadPage.verifyStepIndicatorHighlighted(arg);
// });

// Then('Steps {int} to {int} should remain unhighlighted\\/inactive', async ({ onboardingUploadPage }, arg, arg1) => {
//     // Step: Then Steps 2 to 5 should remain unhighlighted/inactive
//     // From: features\onboarding-form-validation.feature:29:5
//     await onboardingUploadPage.verifyStepsUnhighlighted(arg, arg1);
// });

When('User fills invalid values in any field and clicks continue button', async ({ onboardingUploadPage }, dataTable) => {
    // Step: When User fills invalid values in any field and clicks continue button
    // From: features\onboarding-form-validation.feature:32:5
    const rows = dataTable.hashes();

    for (const { field, value } of rows) {
        await onboardingUploadPage.fillField(field, value);
    }
    await onboardingUploadPage.clickContinueButton();
});

Then('User should receive error message for invalid fields', async ({ onboardingUploadPage }, dataTable) => {
    // Step: Then User should receive error message for invalid fields
    // From: features\onboarding-form-validation.feature:33:5
    const rows = dataTable.hashes();

    for (const { field, expectedMessage } of rows) {
        await onboardingUploadPage.verifyFieldErrorMessage(field, expectedMessage);
    }
});

When('User fills valid values in all fields and clicks continue button', async ({ onboardingUploadPage }, dataTable) => {
    // Step: When User fills valid values in all fields and clicks continue button
    // From: features\onboarding-form-validation.feature:36:5
    const rows = dataTable.hashes();

    for (const { field, value } of rows) {
        await onboardingUploadPage.fillField(field, value);
    }
    await onboardingUploadPage.clickContinueButton();
});

Then('User should move to step {int} of onboarding form', async ({ onboardingUploadPage }, arg) => {
    // Step: Then User should move to step 2 of onboarding form
    // From: features\onboarding-form-validation.feature:37:5
    await onboardingUploadPage.verifyProgressText(arg, 5);
});
