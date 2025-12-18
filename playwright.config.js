import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import 'dotenv/config';  // Automatically loads variables from .env


const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['steps/**/*.js', 'fixtures/fixtures.js']
});

export default defineConfig({
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 1,
  testDir,
  reporter: 'html',
  use: {
    baseURL: process.env.APP_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  }  
});
