// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import { LaunchPage } from '../pages/LaunchPage';
import { LoginPage } from '../pages/LoginPage';
import { DiabetesRiskAnalyserDialogPage } from '../pages/DiabetesRiskAnalyserDialogPage';
import { HomePage } from '../pages/HomePage';
import { BloodReportQuestionPage } from '../pages/BloodReportQuestionPage';
import { UploadBloodReportPage } from '../pages/UploadBloodReportPage';
import { OnboardingUploadPage } from '../pages/OnboardingUploadPage';
import { UpgradePage } from '../pages/UpgradePage';
import { OnboardingPage } from '../pages/OnboardingPage';

// Extend Playwright test with your custom fixtures (empty for now)
export const test = base.extend({
  // Add your custom fixtures here
  launchPage: async ({ page }, use) => {
    await use(new LaunchPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  diabetesRiskAnalyserDialogPage: async ({ page }, use) => {
    await use(new DiabetesRiskAnalyserDialogPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  bloodReportQuestionPage: async ({ page }, use) => {
    await use(new BloodReportQuestionPage(page));
  },
  uploadBloodReportPage: async ({ page }, use) => {
    await use(new UploadBloodReportPage(page));
  },
  onboardingUploadPage: async ({ page, launchPage, loginPage, bloodReportQuestionPage, uploadBloodReportPage }, use) => {
    
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

    const onboardingUploadPage = new OnboardingUploadPage(page);
    await use(onboardingUploadPage);
  },
  upgradePage: async ({ page }, use) => {
    await use(new UpgradePage(page));
  },
  onboardingPage: async ({ page, launchPage, loginPage, bloodReportQuestionPage }, use) => {
    
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
    await bloodReportQuestionPage.clickStepThroughOnboardingButton();

    const onboardingPage = new OnboardingPage(page);
    await use(onboardingPage);
  },
});

// Create Given/When/Then using the extended test
export const { Given, When, Then } = createBdd(test);