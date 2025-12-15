// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { DiabetesRiskAnalyserDialogPage } from '../pages/DiabetesRiskAnalyserDialogPage';

// Extend Playwright test with your custom fixtures (empty for now)
export const test = base.extend({
  // Add your custom fixtures here
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  diabetesRiskAnalyserDialogPage: async ({ page }, use) => {
    await use(new DiabetesRiskAnalyserDialogPage(page));
  },
});

// Create Given/When/Then using the extended test
export const { Given, When, Then } = createBdd(test);