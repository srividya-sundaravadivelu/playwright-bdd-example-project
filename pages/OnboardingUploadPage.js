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


}