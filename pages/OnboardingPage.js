import { expect } from '@playwright/test';
export class OnboardingPage {
    constructor(page) {
        this.page = page;
        this.url = '/onboarding';
        this.backButton = this.page.getByRole('button', { name: 'Back' });
        this.titleLocator = this.page.getByRole('heading', { level: 1 });
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.valueLocator = this.page.getByRole('spinbutton');
    }

    // Action methods

    async selectOption(optionText) {
        await this.page
            .locator('button, [role="button"]')
            .filter({ hasText: optionText })
            .first()
            .click();
    }

    async selectTab(tabName) {
        await this.page.getByRole('button', { name: tabName }).click();
    }

    async selectCheckboxOption(optionText) {
        const checkbox = this.page
            .locator('div.font-medium', { hasText: optionText })
            .first()
            .locator('..')
            .locator('..')
            .locator('button[role="checkbox"]');

        await expect(checkbox).toBeVisible();
        await checkbox.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async clickContinueButton() {
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
    }

    async fillStep1Data(onboardingData) {
        const conditionOption = onboardingData.step1.disease;
        await this.selectOption(conditionOption);
    }

    async fillStep2Data(onboardingData) {
        const genderOption = onboardingData.step2.gender;
        await this.selectOption(genderOption);
    }

    async fillStep3Data(onboardingData) {
        const ageOption = onboardingData.step3.age;
        await this.selectOption(ageOption);
    }

    async fillStep4Data(onboardingData) {
        const heightOption = onboardingData.step4.height;
        await this.selectOption(heightOption);
    }

    async fillStep5Data(onboardingData) {
        const weightOption = onboardingData.step5.weight;
        await this.selectOption(weightOption);
    }

    async fillStep6Data(onboardingData) {
        const dietaryPreferenceOption = onboardingData.step6.dietaryPreference;
        await this.selectOption(dietaryPreferenceOption);
    }

    async fillStep7Data(onboardingData) {
        const cuisinePreferenceOption = onboardingData.step7.cuisinePreference;
        await this.selectOption(cuisinePreferenceOption);
    }

    async fillStep8Data(onboardingData) {
        const allergyOption = onboardingData.step8.allergy;
        await this.selectOption(allergyOption);
    }

    async fillStep9Data(onboardingData) {
        for (const allergy of onboardingData.step9.allergies) {
            await this.selectCheckboxOption(allergy);
        }
        await this.clickContinueButton();
    }

    async fillStep10Data(onboardingData) {
        for (const medicalCondition of onboardingData.step10.medicalConditions) {
            await this.selectCheckboxOption(medicalCondition);
        }
        await this.clickContinueButton();
    }

    async fillStep11Data(onboardingData) {
        const intensityOption = onboardingData.step11.intensity;
        await this.selectOption(intensityOption);
    }

    async fillStep12Data(onboardingData) {
        const hbA1cValue = onboardingData.step12.HbA1c;
        await this.fillValue(hbA1cValue);
    }

    async fillValue(value) {        
        await this.valueLocator.fill(value);
    }   

    // Verification methods

    async verifyPageTitle(expectedTitle) {
        await expect(this.titleLocator).toHaveText(expectedTitle);
    }

    async verifyPageSubText(expectedText) {
        const subTextLocator = this.page.getByText(expectedText);
        await expect(subTextLocator).toBeVisible();
    }

    async verifyProgressText(currentStep, totalSteps) {
        const progressText = `Step ${currentStep} of ${totalSteps}`;
        const progressLocator = this.page.getByText(progressText);
        await expect(progressLocator).toBeVisible();
    }

    async verifyOptions(dataTable) {
        const expectedOptions = dataTable.raw().flat();

        for (const optionText of expectedOptions) {
            await expect(
                this.page.getByRole('button', { name: new RegExp(`^${optionText}`) })
            ).toBeVisible();
        }
    }

    async verifyBackButtonVisible() {
        await expect(this.backButton).toBeVisible();
    }

    async verifyAgeOptions(minAge, maxAge) {
        for (let age = minAge; age <= maxAge; age++) {
            const ageOption = this.page.getByRole('button', { name: new RegExp(`^${age}\\b`) });
            await expect(ageOption).toBeVisible();
        }
    }

    async verifyTabs(dataTable) {
        const expectedTabs = dataTable.raw().flat();
        for (const tabName of expectedTabs) {
            await expect(this.page.getByRole('button', { name: tabName })).toBeVisible();
        }
    }

    async verifyCentimetersOptions(minCm, maxCm) {
        for (let cm = minCm; cm <= maxCm; cm++) {
            const cmOption = this.page.getByRole('button', { name: new RegExp(`^${cm} cm\\b`) });
            await expect(cmOption).toBeVisible();
        }
    }

    async verifyInchesOptions(startFeet, startInches, endFeet, endInches) {
        const startTotalInches = startFeet * 12 + startInches;
        const endTotalInches = endFeet * 12 + endInches;

        for (let inches = startTotalInches; inches <= endTotalInches; inches++) {
            const feet = Math.floor(inches / 12);
            const remainingInches = inches % 12;

            const heightText = `${feet}' ${remainingInches}"`;

            const heightOption = this.page.getByRole('button', {
                name: heightText
            });

            await expect(heightOption).toBeVisible();
        }
    }

    async verifyPoundsOptions(minPounds, maxPounds) {
        for (let pounds = minPounds; pounds <= maxPounds; pounds++) {
            const poundsOption = this.page.getByRole('button', { name: new RegExp(`^${pounds} lbs\\b`) });
            await expect(poundsOption).toBeVisible();
        }
    }

    async verifyKilogramsOptions(minKg, maxKg) {
        for (let kg = minKg; kg <= maxKg; kg++) {
            const kgOption = this.page.getByRole('button', { name: new RegExp(`^${kg} kg\\b`) });
            await expect(kgOption).toBeVisible();
        }
    }

    async verifyCheckboxOptions(dataTable) {
        const expectedOptions = dataTable.raw().flat();

        for (const optionText of expectedOptions) {
            const row = this.page
                .locator('div.font-medium', { hasText: optionText })
                .first()
                .locator('..')
                .locator('..');

            const checkbox = row.locator('button[role="checkbox"]');
            await expect(checkbox).toBeVisible();
        }
    }

    async verifyInputField() {
        await expect(this.valueLocator).toBeVisible();
    }

    async verifyContinueButton() {
        await expect(this.continueButton).toBeVisible();
    }

    async verifyText(text) {
        const textLocator = this.page.getByText(text);
        await expect(textLocator).toBeVisible();
    }

    async verifyHeading(text) {
        await expect(
            this.page.getByRole('heading', { name: text })
        ).toBeVisible();
    }

}


