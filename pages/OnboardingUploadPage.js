import { expect } from '@playwright/test';
export class OnboardingUploadPage {
    constructor(page) {
        this.page = page;
        this.url = '/onboarding-upload';
        this.ageTextField = this.page.getByPlaceholder('Enter your age');
        this.genderDropdown = this.page.getByRole('combobox');
        this.heightTextField = this.page.getByPlaceholder('Enter height in cm (1-300)');
        this.weightTextField = this.page.getByPlaceholder('Enter weight in kg (1-500)');
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.progressBar = this.page.locator('div').nth(4);
        // this.stepIndicators = this.page.locator('div').nth(5);
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });

    }

    async verifyAgeFieldVisible() {
        await expect(this.ageTextField).toBeVisible();
    }

    async verifyGenderDropdownVisible() {
        await expect(this.genderDropdown).toBeVisible();
    }
    async verifyHeightFieldVisible() {
        await expect(this.heightTextField).toBeVisible();
    }
    async verifyWeightFieldVisible() {
        await expect(this.weightTextField).toBeVisible();
    }
    async verifyGenderDropdownOptions(dataTable) {
        const expectedOptions = dataTable.raw().flat();

        const options = this.genderDropdown.locator('option')
            .filter({ hasNotText: /select/i });

        // Wait until options are loaded
        await expect(options).toHaveCount(expectedOptions.length);

        // Verify text
        await expect(options).toHaveText(expectedOptions);
    }

    async verifyContinueButtonEnabled() {
        await expect(this.continueButton).toBeEnabled();
    }
    async verifyProgressBarVisible() {
        await expect(this.progressBar).toBeVisible();
    }
    async getProgressTextLocator(stepNumber) {
        // return Locator directly
        return this.page.getByText(`Step ${stepNumber} of 5`);
    }

    async verifyProgressText(currentStep, totalSteps) {
        const expectedText = `Step ${currentStep} of ${totalSteps}`;
        const locator = await this.getProgressTextLocator(currentStep);
        await expect(locator).toHaveText(expectedText);
    }
    // async verifyStepIndicatorHighlighted(stepNumber) {
    //     const stepIndicator = this.stepIndicators.locator(`text=Step ${stepNumber}`);
    //     await expect(stepIndicator).toHaveClass(/bg-purple-600/);
    // }
    // async verifyStepsUnhighlighted(startStep, endStep) {
    //     for (let i = startStep; i <= endStep; i++) {
    //         const stepIndicator = this.stepIndicators.locator(`text=Step ${i}`);
    //         await expect(stepIndicator).not.toHaveClass(/bg-purple-600/);
    //     }
    // }
    async fillField(field, value) {
        switch (field.toLowerCase()) {
            case 'height':
                await this.heightTextField.fill(value);
                break;
            case 'weight':
                await this.weightTextField.fill(value);
                break;
            default:
                throw new Error(`Unknown field: ${field}`);
        }
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async verifyFieldErrorMessage(field, expectedMessage) {
        const validationMessage = await this.heightTextField.evaluate(
            (el) => el.validationMessage
        );

        expect(validationMessage).toContain(expectedMessage);
    }

    async fillStep1DataAndContinue(data) {
        await this.verifyHeightFieldVisible();
        await this.heightTextField.fill(data.step1.height);
        await this.verifyWeightFieldVisible();
        await this.weightTextField.fill(data.step1.weight);
        await this.clickContinueButton();
    }
    async fillStep2Data(data) {
        await this.selectOption(data.step2.intensity);
    }

    async fillStep3Data(data) {
        await this.selectOption(data.step3.dietaryPreference);
    }

    async fillStep4Data(data) {
        await this.selectOption(data.step4.cuisinePreference);
    }
    async selectOption(optionText) {
        await this.page.locator('div.cursor-pointer').filter({ hasText: new RegExp(`^${optionText}\\b`) }).click();

    }
    async selectAllergy(allergy) {
        // XPath: find span containing allergy text, then the sibling input checkbox
        const checkbox = this.page.locator(
            `xpath=//span[contains(text(), "${allergy}")]/following-sibling::input[@type="checkbox"]`
        );

        // Wait until the checkbox is visible and check it
        await expect(checkbox).toBeVisible();
        await checkbox.check();
    }

    async verifyPageTitle(expectedTitle) {
        const titleLocator = this.page.getByRole('heading', { level: 2 });
        await expect(titleLocator).toHaveText(expectedTitle);
    }
    async verifyPageSubText(expectedText) {
        const subTextLocator = this.page.getByText(expectedText);
        await expect(subTextLocator).toBeVisible();
    }
    async verifyBackButtonVisible() {
        const backButton = this.page.getByRole('button', { name: 'Back' });
        await expect(backButton).toBeVisible();
    }
    async verifyOptions(dataTable) {
        const expectedOptions = dataTable.raw().flat();
        for (const optionText of expectedOptions) {
            const optionLocator = this.page.locator('div.cursor-pointer').filter({ hasText: new RegExp(`^${optionText}\\b`) });
            await expect(optionLocator).toBeVisible();
        }
    }
    async clickBackButton() {
        const backButton = this.page.getByRole('button', { name: 'Back' });
        await backButton.click();
    }
    async verifyAllergiesCheckboxes() {
        const allergies = ['Peanuts', 'Shellfish', 'Dairy', 'Gluten', 'Soy', 'Eggs'];
        for (const allergy of allergies) {
            const checkbox = this.page.getByRole('checkbox', { name: allergy });
            await expect(checkbox).toBeVisible();
        }
    }
    async verifySubmitButtonVisible() {
        const submitButton = this.page.getByRole('button', { name: 'Submit' });
        await expect(submitButton).toBeVisible();
    }
    async verifyNavigationToPremiumPage(expectedTitle) {
        const titleLocator = this.page.getByRole('heading', { level: 1 });
        await expect(titleLocator).toHaveText(expectedTitle);
    }
    async clickSubmitButton() {
        await this.submitButton.click();
    }
}

