# Getting Started - Developing the project from scratch
## Step 1. Create Project.

Open Vs Code  Terminal

mkdir manan-playwright-bdd-js

cd manan-playwright-bdd-js

npm init -y

initializes a Node project instantly with default values.
The -y flag means “yes to all questions”.
So it skips the interactive prompts and instantly creates a package.json with default settings.


## Step 2. Install Dependencies
 npm i -D @playwright/test playwright-bdd 
 
npx playwright install

👉 This gives you:

•	@playwright/test → Playwright runner.

•	playwright-bdd → Cucumber-style integration.

•	npx playwright install This will download all required browsers and dependencies.

Ope folder in explorer to open the project.

## Step 3. Project Structure

A minimal JS setup looks like this:

playwright-bdd-js/

  features/
  
    login.feature
    
  steps/
  
    login.steps.js
    
  playwright.config.js
  

## Step 4. Example Feature File

features/login.feature

Feature: Login

  Scenario: User logs in successfully
  
    Given I open the login page
    
    When I login with username "admin" and password "password"
    
    Then I should see the dashboard
    

## Step 5. Step Definitions

steps/login.steps.js

import { Given, When, Then } from 'playwright-bdd';

Given('I open the login page', async ({ page }) => {
  await page.goto('https://example.com/login');
});

When('I login with username {string} and password {string}', async ({ page }, username, password) => {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#loginBtn');
});

Then('I should see the dashboard', async ({ page }) => {
  await page.waitForSelector('#dashboard');
});

## Step 6. Playwright Config

playwright.config.js

import { defineConfig } from '@playwright/test';

import { defineBddConfig } from 'playwright-bdd';

export default defineConfig(

  defineBddConfig({
  
    features: 'features/**/*.feature',
    
    steps: 'steps/**/*.js',
    
  })
  
);

Playwright.config.js: this file means:

“Use playwright-bdd to read the feature file (sample.feature) and step definitions (steps.js). Convert them into Playwright tests. Then run those tests using the default Playwright test runner and generate an HTML report.”

## Step 7: Run test 

npx bddgen

npx playwright test

npx bddgen -This will create files like: tests/example.feature.spec.js. Always run npx bddgen whenever you add/modify .feature files.

To run in UI mode and see locators,

npx playwright test –-ui

## TODO : Add documentation for following:

a note about .env

npm install dotenv 
Axe – accessibility testing
npm i @axe-core/playwright --save-dev
storage state
ci/cd github actions
parallel, retries
data driven - json file examples and scenario outline
strict mode violation error








