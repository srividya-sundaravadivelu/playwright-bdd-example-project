import { Given, When, Then } from '../fixtures/fixtures';
import onboardingData from '../data/onboardingData.json';
import { on } from 'events';
Given(
    'User is in step {int} for onboarding process',
    async ({ onboardingUploadPage }, stepNumber) => {

        if (stepNumber >= 2) {
            await onboardingUploadPage.fillStep1DataAndContinue(onboardingData);

        }
        if (stepNumber >= 3) {
            await onboardingUploadPage.fillStep2Data(onboardingData);

        }
        if (stepNumber >= 4) {
            await onboardingUploadPage.fillStep3Data(onboardingData);

        }
        if (stepNumber >= 5) {
            await onboardingUploadPage.fillStep4Data(onboardingData);
        }
    }
);

Then('Back button should be visible', async ({ onboardingUploadPage }) => {
    // Step: Then Back button should be visible
    // From: features\onboarding-step-2-ui.feature:14:5
    await onboardingUploadPage.verifyBackButtonVisible();
});

Then('User should see options', async ({ onboardingUploadPage }, dataTable) => {
    // Step: Then User should see options
    // From: features\onboarding-step-2-ui.feature:20:5
    await onboardingUploadPage.verifyOptions(dataTable);
});

When('User selects option {string}', async ({ onboardingUploadPage }, arg) => {
    // Step: When User selects option 
    // From: features\onboarding-step-2-ui.feature:26:5
    await onboardingUploadPage.selectOption(arg);
});

When('User clicks on Back button', async ({ onboardingUploadPage }) => {
    // Step: When User clicks on Back button
    // From: features\onboarding-step-2-ui.feature:30:5
    await onboardingUploadPage.clickBackButton();
});

Then('Page should display title {string}', async ({ onboardingUploadPage }, arg) => {
    // Step: Then Page should display title "Your taste buds—what team are they on?"
    // From: features\onboarding-step-3-ui.feature:8:5
    await onboardingUploadPage.verifyPageTitle(arg);
});

Then('Page should have sub text {string}', async ({ onboardingUploadPage }, arg) => {
    // Step: Then Page should have sub text "Select your dietary preference"
    // From: features\onboarding-step-3-ui.feature:11:5
    await onboardingUploadPage.verifyPageSubText(arg);
});

Then('User should see checkbox for all options', async ({ onboardingUploadPage }) => {
    // Step: Then User should see checkbox for all options
    // From: features\onboarding-step-5-ui.feature:20:5
    await onboardingUploadPage.verifyAllergiesCheckboxes();
});

Then('Submit button should be visible', async ({ onboardingUploadPage }) => {
    // Step: Then Submit button should be visible
    // From: features\onboarding-step-5-ui.feature:23:5
    await onboardingUploadPage.verifySubmitButtonVisible();
});

When('User selects allergy and clicks submit', async ({ onboardingUploadPage }, dataTable) => {
    // Step: When User selects allergy and clicks submit
    // From: features\onboarding-step-5-ui.feature:41:5
    const allergies = dataTable.raw().flat(); // flat() gives ['Dairy'] or multiple if more rows
    for (const allergy of allergies) {
        await onboardingUploadPage.selectAllergy(allergy);
    }
    await onboardingUploadPage.clickSubmitButton();
});

Then('User should navigate to {string}', async ({ upgradePage }, arg) => {
    // Step: Then User should navigate to "Upgrade to premium plus"
    // From: features\onboarding-step-5-ui.feature:44:5
    if (arg === "Upgrade to premium plus") {
        await upgradePage.verifyCurrentPageIsUpgrade();
    }
});