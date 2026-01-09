import { Given, When, Then } from '../fixtures/fixtures';
Given('User is on blood report modal', async ({ launchPage, loginPage, bloodReportQuestionPage }) => {
    // Step: Given User is on blood report modal
    // From: features\blood-report-upload-modal.feature:5:5
    await launchPage.goto();
    await launchPage.clickLoginButton();
    const timestamp = Date.now();
    const userEmail = `newuser${timestamp}@example.com`;
    await loginPage.createNewAccount("newuser", `newuser${timestamp}`, userEmail, process.env.APP_PASSWORD);
    await bloodReportQuestionPage.clickUploadBloodReportButton();
});

When('User hovers over the upload box', async ({ uploadBloodReportPage }) => {
    // Step: When User hovers over the upload box
    // From: features\blood-report-upload-modal.feature:8:5
    await uploadBloodReportPage.hoverOverUploadBox();
});

Then('Upload box should show drag & drop interaction', async ({ uploadBloodReportPage }) => {
    // Step: Then Upload box should show drag & drop interaction
    // From: features\blood-report-upload-modal.feature:9:5
    await uploadBloodReportPage.verifyDragDropInteraction();
});

Then('User should see {string}', async ({ uploadBloodReportPage }, message) => {
    // Step: Then User should see "Only PDF files are supported"
    // From: features\blood-report-upload-modal.feature:13:5
    await uploadBloodReportPage.verifyErrorMessage(message);
});

When('User uploads valid PDF file {string}', async ({ uploadBloodReportPage }, filePath) => {
    // Step: When User uploads valid PDF file "data/files/valid-blood-report.pdf"
    // From: features\blood-report-upload-modal.feature:21:5
    await uploadBloodReportPage.uploadFile(filePath);
});

Then('Upload & Process button should be enabled', async ({ uploadBloodReportPage }) => {
    // Step: Then Upload & Process button should be enabled
    // From: features\blood-report-upload-modal.feature:25:5
    await uploadBloodReportPage.verifyUploadAndProcessButtonEnabled();
});

When('User clicks Cancel', async ({ uploadBloodReportPage }) => {
    // Step: When User clicks Cancel
    // From: features\blood-report-upload-modal.feature:28:5
    await uploadBloodReportPage.clickCancelButton();
});

Then('Modal should be closed and user returned to previous screen', async ({ bloodReportQuestionPage }) => {
    // Step: Then Modal should be closed and user returned to previous screen
    // From: features\blood-report-upload-modal.feature:29:5
    await bloodReportQuestionPage.verifyCurrentPageIsBloodReportQuestion();
});

When('User clicks Upload & Process after uploading file {string}', async ({ uploadBloodReportPage }, filePath) => {
    // Step: When User clicks Upload & Process after uploading valid file "data/files/valid-blood-report.pdf"
    // From: features\blood-report-upload-modal.feature:29:5
    await uploadBloodReportPage.uploadFile(filePath);
    await uploadBloodReportPage.clickUploadAndProcessButton();
});

Then('User should see Report analysis', async ({ uploadBloodReportPage }) => {
    // Step: Then User should see Report analysis
    // From: features\blood-report-upload-modal.feature:33:5
    await uploadBloodReportPage.verifyReportAnalysisVisible();
});

Then('User should see onboarding button', async ({ uploadBloodReportPage }) => {
    // Step: Then User should see onboarding button
    // From: features\blood-report-upload-modal.feature:37:5
    await uploadBloodReportPage.verifyOnboardingButtonVisible();
});

Then('User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations', async ({ uploadBloodReportPage }) => {
    // Step: Then User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations
    // From: features\blood-report-upload-modal.feature:41:5
    await uploadBloodReportPage.verifyReportSectionsVisible();
});
