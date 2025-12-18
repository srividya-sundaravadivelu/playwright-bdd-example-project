import { Given, When, Then } from '../fixtures/fixtures';
Given('User is in diabetes risk analyzer', async ({ launchPage, diabetesRiskAnalyserDialogPage }) => {
    // Step: Given User is in diabetes risk analyzer
    // From: features\diabetes-risk-analyser-functional.feature:5:5 
    await launchPage.goto();
    await launchPage.clickCheckYourRiskButton();
    await diabetesRiskAnalyserDialogPage.waitForLoaded();
});

When('User clicks Cancel button', async ({ diabetesRiskAnalyserDialogPage }) => {
    // Step: When User clicks Cancel button
    // From: features\diabetes-risk-analyser-functional.feature:8:5
    await diabetesRiskAnalyserDialogPage.clickCancelButton();
});

Then('User should be on the home page', async ({ launchPage }) => {
    // Step: Then User should be on the home page
    // From: features\diabetes-risk-analyser-functional.feature:9:5
    await launchPage.verifyHeadingSmartDiabetes();
});

When('User does not provide required inputs', async ({ diabetesRiskAnalyserDialogPage }) => {
    // Step: When User does not provide required inputs
    // From: features\diabetes-risk-analyser-functional.feature:12:5
    await diabetesRiskAnalyserDialogPage.clearAllFields();
});

Then('User should see Calculate Risk button is  disabled', async ({ diabetesRiskAnalyserDialogPage }) => {
    // Step: Then User should see Calculate Risk button is  disabled
    // From: features\diabetes-risk-analyser-functional.feature:13:5
    await diabetesRiskAnalyserDialogPage.verifyCalculateRiskButtonDisabled();
});

When('User enters valid values in all fields and clicks Calculate Risk button', async ({ diabetesRiskAnalyserDialogPage }) => {
    // Step: When User clicks Calculate Risk button after entering valid values in all fields
    // From: features\diabetes-risk-analyser-functional.feature:16:5
    await diabetesRiskAnalyserDialogPage.fillAllFields();
    await diabetesRiskAnalyserDialogPage.clickCalculateRiskButton();
});

Then('User should see {string} dialog box', async ({ diabetesRiskAnalyserDialogPage }, arg) => {
    // Step: Then User should see "Your Diabetes Risk Assessment" dialog box
    // From: features\diabetes-risk-analyser-functional.feature:17:5
    await diabetesRiskAnalyserDialogPage.verifyDialogBox(arg);
});