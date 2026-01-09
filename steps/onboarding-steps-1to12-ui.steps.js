import { Given, When, Then } from '../fixtures/fixtures';
import onboardingData from '../data/onboardingData.json';

Given('User is in step {int} for onboarding process', async ({ launchPage, loginPage, bloodReportQuestionPage, onboardingPage }, stepNumber) => {
  // Step: Given User is in step 1 for onboarding process
  // From: features\onboarding-step-1-ui.feature:5:5
  await launchPage.goto();
  await launchPage.clickLoginButton();
  const timestamp = Date.now();
  const userEmail = `newuser${timestamp}@example.com`;
  await loginPage.createNewAccount("newuser", `newuser${timestamp}`, userEmail, process.env.APP_PASSWORD);
  await bloodReportQuestionPage.clickStepThroughOnboardingButton();

  if (stepNumber >= 2) {
    await onboardingPage.fillStep1Data(onboardingData);
  }
  if (stepNumber >= 3) {
    await onboardingPage.fillStep2Data(onboardingData);
  }
  if (stepNumber >= 4) {
    await onboardingPage.fillStep3Data(onboardingData);
  }
  if (stepNumber >= 5) {
    await onboardingPage.fillStep4Data(onboardingData);
  }
  if (stepNumber >= 6) {
    await onboardingPage.fillStep5Data(onboardingData);
  }
  if (stepNumber >= 7) {
    await onboardingPage.fillStep6Data(onboardingData);
  }
  if (stepNumber >= 8) {
    await onboardingPage.fillStep7Data(onboardingData);
  }
  if (stepNumber >= 9) {
    await onboardingPage.fillStep8Data(onboardingData);
  }
  if (stepNumber >= 10) {
    await onboardingPage.fillStep9Data(onboardingData);
  }
  if (stepNumber >= 11) {
    await onboardingPage.fillStep10Data(onboardingData);
  }
  if (stepNumber >= 12) {
    await onboardingPage.fillStep11Data(onboardingData);
  }
});

Then('Onboarding page should display title {string}', async ({ onboardingPage }, arg) => {
  // Step: Then Onboarding page should display title "So, Which sugar rebellion are we dealing with?"
  // From: features\onboarding-step-1-ui.feature:8:5
  await onboardingPage.verifyPageTitle(arg);
});

Then('Onboarding page should have sub text {string}', async ({ onboardingPage }, arg) => {
  // Step: Then Onboarding page should have sub text "This will help us tailor your plan to your condition"
  // From: features\onboarding-step-1-ui.feature:11:5
  await onboardingPage.verifyPageSubText(arg);
});

Then('Onboarding page progress text should read Step {int} of {int}', async ({ onboardingPage }, arg, arg1) => {
  // Step: Then Onboarding page progress text should read Step 1 of 12
  // From: features\onboarding-step-1-ui.feature:14:5
  await onboardingPage.verifyProgressText(arg, arg1);
});

Then('user should see options in onboarding page', async ({ onboardingPage }, dataTable) => {
  // Step: Then user should see options in onboarding page
  // From: features\onboarding-step-1-ui.feature:17:5
  await onboardingPage.verifyOptions(dataTable);
});

When('User selects option {string} in onboarding page', async ({ onboardingPage }, arg) => {
  // Step: When User selects option "Type 2" in onboarding page
  // From: features\onboarding-step-1-ui.feature:22:5
  await onboardingPage.selectOption(arg);
});

Then('User should move to step {int} of onboarding form', async ({ onboardingPage }, arg) => {
  // Step: Then User should move to step 2 of onboarding form
  // From: features\onboarding-step-1-ui.feature:23:5
  await onboardingPage.verifyProgressText(arg, 12);

});

Then('Back button should be visible on onboarding page', async ({ onboardingPage }) => {
  // Step: Then Back button should be visible on onboarding page
  // From: features\onboarding-step-2-ui.feature:27:5
  await onboardingPage.verifyBackButtonVisible();
});

When('User clicks on Back button on onboarding page', async ({ onboardingPage }) => {
  // Step: When User clicks on Back button on onboarding page
  // From: features\onboarding-step-2-ui.feature:30:5
  await onboardingPage.clickBackButton();
});

Then('User should see age options from {int} years to {int} years in onboarding page', async ({ onboardingPage }, minAge, maxAge) => {
  // Step: Then User should see age options from 18 years to 100 years in onboarding page
  // From: features\onboarding-step-3-ui.feature:17:5
  await onboardingPage.verifyAgeOptions(minAge, maxAge);
});

Then('User should see tabs in onboarding page', async ({ onboardingPage }, dataTable) => {
  // Step: Then User should see tabs in onboarding page
  // From: features\onboarding-step-4-ui.feature:24:5
  await onboardingPage.verifyTabs(dataTable);
});

Then('User should see centimeters options from {int} cm to {int} cm', async ({ onboardingPage }, minCm, maxCm) => {
  // Step: Then User should see centimeters options from 120 cm to 220 cm
  // From: features\onboarding-step-4-ui.feature:29:5
  await onboardingPage.verifyCentimetersOptions(minCm, maxCm);
});

When('User selects {string} tab', async ({ onboardingPage }, tabName) => {
  // Step: When User selects "Inches" tab
  // From: features\onboarding-step-4-ui.feature:32:5
  await onboardingPage.selectTab(tabName);
});

Then('User should see inches options from {int}\'{int}\'\' to {int}\'{int}\'\' inches', async ({ onboardingPage }, startFeet, startInches, endFeet, endInches) => {
  // Step: Then User should see inches options from 4'5'' to 7'3'' inches
  // From: features\onboarding-step-4-ui.feature:33:5
  await onboardingPage.verifyInchesOptions(startFeet, startInches, endFeet, endInches);
});

Then('User should see kilograms options from {int} kg to {int} kg', async ({ onboardingPage }, minKg, maxKg) => {
  // Step: Then User should see kilograms options from 40 kg to 190 kg
  // From: features\onboarding-step-5-ui.feature:29:5
  await onboardingPage.verifyKilogramsOptions(minKg, maxKg);
});

Then('User should see pounds options from {int} lbs to {int} lbs', async ({ onboardingPage }, minLbs, maxLbs) => {
  // Step: Then User should see pounds options from 90 lbs to 550 lbs
  // From: features\onboarding-step-5-ui.feature:33:5
  await onboardingPage.verifyPoundsOptions(minLbs, maxLbs);
});

When('User selects multiple options in onboarding page and clicks continue', async ({ onboardingPage }, dataTable) => {
  // Step: When User selects multiple options in onboarding page
  // From: features\onboarding-step-9-ui.feature:35:5
  const options = dataTable.raw().flat(); // flat() gives ['Dairy'] or multiple if more rows
  for (const option of options) {
    await onboardingPage.selectCheckboxOption(option);
  }
  await onboardingPage.clickContinueButton();
});

Then('user should see checkbox options in onboarding page', async ({ onboardingPage }, dataTable) => {
  // Step: Then user should see checkbox options in onboarding page
  // From: features\onboarding-step-9-ui.feature:14:5
  await onboardingPage.verifyCheckboxOptions(dataTable);
});

Then('User should see input field for HbA1c number', async ({ onboardingPage }) => {
  // Step: Then User should see input field for HbA1c number
  // From: features\onboarding-step-12-ui.feature:21:5
  await onboardingPage.verifyInputField();
});

Then('User should see Continue button on onboarding page', async ({ onboardingPage }) => {
  // Step: Then User should see Continue button on onboarding page
  // From: features\onboarding-step-12-ui.feature:27:5
  await onboardingPage.verifyContinueButton();
});

Then('Onboarding page should have description heading {string}', async ({ onboardingPage }, arg) => {
  // Step: Then Onboarding page should have description heading "What is HbA1c?"
  // From: features\onboarding-step-12-ui.feature:30:5
  await onboardingPage.verifyText(arg);
});

Then('Onboarding page should have description text {string}', async ({ onboardingPage }, arg) => {
  // Step: Then Onboarding page should have description text "HbA1c measures your average blood sugar levels over the past 2-3 months. This important value helps us create a personalized diabetes management plan tailored specifically to your needs."
  // From: features\onboarding-step-12-ui.feature:30:5
  await onboardingPage.verifyText(arg);
});

When('User enters HbA1c value {string} in onboarding page and clicks continue', async ({ onboardingPage }, arg) => {
  // Step: When User enters HbA1c value "16.0" in onboarding page and clicks continue
  // From: features\onboarding-step-12-ui.feature:33:5
  await onboardingPage.fillValue(arg);
  await onboardingPage.clickContinueButton();
});

Then('User should see error message {string}', async ({ onboardingPage }, arg) => {
  // Step: Then User should see error message "Please enter a value between 4.0 and 15.0"
  // From: features\onboarding-step-12-ui.feature:34:5
  await onboardingPage.verifyText(arg);
});

Then('User should see personalization message {string}', async ({ onboardingPage }, arg) => {
  // Step: Then User should see personalization message "Getting you all set—like a VIP pass to better health!"
  // From: features\onboarding-step-12-ui.feature:38:5
  await onboardingPage.verifyHeading(arg);
});