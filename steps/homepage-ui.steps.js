import { Given, When, Then } from '../fixtures/fixtures';

Given('User is on the SweetBalance page', async ({ homePage }) => {
  await homePage.goto();
});

Then('User should see app name on the top left', async ({ homePage }) => {
  await homePage.checkAppName();
});

Then('User should see text {string}', async ({ homePage }, arg) => {
  await homePage.verifyTermsTextVisible();
  await homePage.checkRootText(arg);
});

Then('User should see the heading {string}', async ({ homePage }, arg) => {
  await homePage.verifyHeadingSmartDiabetes();
  await homePage.verifyH1TextContains(arg);
});

Then('User should see a Start Today input button', async ({ homePage }) => {
  await homePage.checkStartTodayButton();
});

Then('User should see the text {string}', async ({ homePage }, arg) => {
  await homePage.verifyMainContentContains(arg);
});
