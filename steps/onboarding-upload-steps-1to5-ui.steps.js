import { Given, When, Then } from '../fixtures/fixtures';
import onboardingData from '../data/onboardingUploadData.json';
import { on } from 'events';
Given(
    'User is in step {int} for onboarding upload process',
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

// Then('User should see options in dropdown', async ({ onboardingUploadPage }, dataTable) => {
//     // Step: Then User should see "Male , female, prefer not to say " options in dropdown
//     // From: features\onboarding-form-validation.feature:14:5
//     await onboardingUploadPage.verifyGenderDropdownOptions(dataTable);
// });

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

Then('User should move to step {int} of onboarding upload form', async ({ onboardingUploadPage }, arg) => {
    // Step: Then User should move to step 2 of onboarding upload form
    // From: features\onboarding-form-validation.feature:37:5
    await onboardingUploadPage.verifyProgressText(arg, 5);
});



Then('Back button should be visible', async ({ onboardingUploadPage }) => {
    // Step: Then Back button should be visible
    // From: features\onboarding-step-2-ui.feature:14:5
    await onboardingUploadPage.verifyBackButtonVisible();
});

Then('User should see options', async ({ onboardingUploadPage }, dataTable) => {
    // Step: Then User should see options
    // From: features\onboarding-step-2-ui.feature:20:5
    await onboardingUploadPage.verifyCheckboxOptions(dataTable);
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
        await onboardingUploadPage.selectCheckboxOption(allergy);
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