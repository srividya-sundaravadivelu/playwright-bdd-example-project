// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import { LaunchPage } from '../pages/LaunchPage';
import { LoginPage } from '../pages/LoginPage';
import { DiabetesRiskAnalyserDialogPage } from '../pages/DiabetesRiskAnalyserDialogPage';
import { HomePage } from '../pages/HomePage';
import { BloodReportQuestionPage } from '../pages/BloodReportQuestionPage';
import { UploadBloodReportPage } from '../pages/UploadBloodReportPage';
import { OnboardingUploadPage } from '../pages/OnboardingUploadPage';

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
  onboardingUploadPage: async ({ page }, use) => {
    await use(new OnboardingUploadPage(page));
  }
});

// Create Given/When/Then using the extended test
export const { Given, When, Then } = createBdd(test);