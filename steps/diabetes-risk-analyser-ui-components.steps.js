import { Given, When, Then } from '../fixtures/fixtures';

Then('User should see {string} header', async ({ diabetesRiskAnalyserDialogPage }, arg) => {
    // Step: Then User should see "Diabetes Risk Analyzer" header
    // From: features\diabetes-risk-analyser-ui-components.feature:8:5
    await diabetesRiskAnalyserDialogPage.verifyHeader(arg);
});

Then('User see  {string} text', async ({ diabetesRiskAnalyserDialogPage }, arg) => {
    // Step: Then User see  "Answer a few questions to assess your risk of developing diabetes" text
    // From: features\diabetes-risk-analyser-ui-components.feature:11:5
    await diabetesRiskAnalyserDialogPage.verifyText(arg);
});

Then('User should see Cancel button', async ({ diabetesRiskAnalyserDialogPage }) => {
    // Step: Then User should see Cancel button
    // From: features\diabetes-risk-analyser-ui-components.feature:14:5
    await diabetesRiskAnalyserDialogPage.verifyCancelButton();
});

Then('User should see the following blood pressure options:', async ({ diabetesRiskAnalyserDialogPage }, dataTable) => {
    // Step: Then User should see the following blood pressure options:
    // From: features\diabetes-risk-analyser-ui-components.feature:17:5
    await diabetesRiskAnalyserDialogPage.verifyBloodPressureOptions(dataTable);
});

Then('User should see the following physical activity level options:', async ({ diabetesRiskAnalyserDialogPage }, dataTable) => {
    // Step: Then User should see the following physical activity level options:
    // From: features\diabetes-risk-analyser-ui-components.feature:17:5
    await diabetesRiskAnalyserDialogPage.verifyPhysicalActivityLevelOptions(dataTable);
});

Then('User should see the following diet quality options:', async ({ diabetesRiskAnalyserDialogPage }, dataTable) => {
    // Step: Then User should see the following diet quality options:
    // From: features\diabetes-risk-analyser-ui-components.feature:17:5
    await diabetesRiskAnalyserDialogPage.verifyDietQualityOptions(dataTable);
});