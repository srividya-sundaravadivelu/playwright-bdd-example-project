import { Given, When, Then } from '../fixtures/fixtures';
Given('User is on blood report modal', async ({ launchPage, loginPage, bloodReportQuestionPage }) => {
    // Step: Given User is on blood report modal
    // From: features\blood-report-upload-modal.feature:5:5
    await launchPage.goto();
    await launchPage.clickLoginButton();
    await loginPage.fillEmail('newuser' + Date.now() + '@example.com');
    await loginPage.clickContinueButton();
    await loginPage.fillFullName("newuser");
    await loginPage.fillUserName("newuser" +  + Date.now());
    await loginPage.fillPassword(process.env.APP_PASSWORD);
    await loginPage.checkAgreeTermsCheckbox();
    await loginPage.clickCreateAccountButton();
    await bloodReportQuestionPage.clickUploadBloodReportButton();
});

When('User hovers over the upload box', async ({ bloodReportQuestionPage }) => {
    // Step: When User hovers over the upload box
    // From: features\blood-report-upload-modal.feature:8:5
    await bloodReportQuestionPage.hoverOnUploadBox();
});

Then('Upload box should show drag & drop interaction', async ({ bloodReportQuestionPage }) => {
    // Step: Then Upload box should show drag & drop interaction
    // From: features\blood-report-upload-modal.feature:9:5
    await bloodReportQuestionPage.verifyDragDropInteraction();
});

When('User uploads {string} blood report', async ({}, bloodReportQuestionPage) => {
  // Step: When User uploads "non-PDF" blood report
  // From: features\blood-report-upload-modal.feature:12:5
});

Then('User should see {string}', async ({}, bloodReportQuestionPage) => {
  // Step: Then User should see "Only PDF files are supported"
  // From: features\blood-report-upload-modal.feature:13:5
});

When('User uploads valid PDF file', async ({}) => {
  // Step: When User uploads valid PDF file
  // From: features\blood-report-upload-modal.feature:21:5
});

Then('Upload & Process button should be enabled', async ({ }) => {
    // Step: Then Upload & Process button should be enabled
    // From: features\blood-report-upload-modal.feature:25:5
});

When('User clicks Cancel', async ({ }) => {
    // Step: When User clicks Cancel
    // From: features\blood-report-upload-modal.feature:28:5
});

Then('Modal should be closed and user returned to previous screen', async ({ }) => {
    // Step: Then Modal should be closed and user returned to previous screen
    // From: features\blood-report-upload-modal.feature:29:5
});

When('User clicks Upload & Process after uploading valid file', async ({ }) => {
    // Step: When User clicks Upload & Process after uploading valid file
    // From: features\blood-report-upload-modal.feature:32:5
});

Then('User should see Report analysis', async ({ }) => {
    // Step: Then User should see Report analysis
    // From: features\blood-report-upload-modal.feature:33:5
});

Then('User should see onboarding button', async ({ }) => {
    // Step: Then User should see onboarding button
    // From: features\blood-report-upload-modal.feature:37:5
});

Then('User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations', async ({ }) => {
    // Step: Then User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations
    // From: features\blood-report-upload-modal.feature:41:5
});
