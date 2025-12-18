import { Given, When, Then } from '../fixtures/fixtures';

Given('User is on the SweetBalance page', async ({ launchPage }) => {
  await launchPage.goto();
});

Then('User should see app name on the top left', async ({ launchPage }) => {
  await launchPage.checkAppName();
});

Then('User should see text {string}', async ({ launchPage }, arg) => {
  await launchPage.verifyTermsTextVisible();
  await launchPage.checkRootText(arg);
});

Then('User should see the heading {string}', async ({ launchPage }, arg) => {
  await launchPage.verifyHeadingSmartDiabetes();
  await launchPage.verifyH1TextContains(arg);
});

Then('User should see a Start Today input button', async ({ launchPage }) => {
  await launchPage.checkStartTodayButton();
});

Then('User should see the text {string}', async ({ launchPage }, arg) => {
  await launchPage.verifyMainContentContains(arg);
});
