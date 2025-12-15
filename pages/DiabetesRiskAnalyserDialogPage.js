import { expect } from "@playwright/test";
export class DiabetesRiskAnalyserDialogPage {
    constructor(page) {
        this.page = page;
        this.diabetesRiskDialog = this.page.getByRole('dialog', { name: 'Diabetes Risk Analyzer' });
        this.header = this.page.getByRole('heading', { name: 'Diabetes Risk Analyzer' });
        this.text = this.page.getByText('Answer a few questions to');
        this.cancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.bloodPressureDropDown = this.page.getByLabel('Blood Pressure');
        this.physicalActivityLevelDropDown = this.page.getByLabel('Physical Activity Level');
        this.dietQualityDropDown = this.page.getByLabel('Diet Quality');
        this.ageField = page.getByRole('spinbutton', { name: 'Age' });
        this.weightField = page.getByRole('spinbutton', { name: 'Weight (kg)' });
        this.familyHistoryCheckbox = page.getByRole('checkbox', { name: 'Family history of diabetes' });
        this.calculateRiskButton = this.page.getByRole('button', { name: 'Calculate Risk' });
        this.yourDiabetesRiskDialog = page.getByRole('dialog', { name: 'Your Diabetes Risk Assessment' });

    }

    async waitForLoaded() {
        // Wait for the dialog to be visible
        await this.diabetesRiskDialog.waitFor({ state: 'visible' });
    }

    async verifyHeader(expectedHeader) {
        await expect(this.header).toBeVisible();
        await expect(this.header).toHaveText(expectedHeader);
    }

    async verifyText(expectedText) {
        await expect(this.text).toBeVisible();
        await expect(this.text).toHaveText(expectedText);
    }

    async verifyCancelButton() {
        await expect(this.cancelButton).toBeVisible();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async clickCalculateRiskButton() {
        await this.calculateRiskButton.click();
    }

    async verifyBloodPressureOptions(dataTable) {
        // Convert Gherkin table to array of expected values
        const expectedOptions = dataTable.raw().flat();

        // Get all option texts from the Blood Pressure select element
        const actualOptions = await this.bloodPressureDropDown.locator('option').allTextContents();

        const filteredOptions = actualOptions.filter(opt => !opt.toLowerCase().includes('select'));

        // Validate that all expected options are present
        for (const option of expectedOptions) {
            expect(filteredOptions).toContain(option);
        }
        expect(filteredOptions.length).toBe(expectedOptions.length);
    }

    async verifyPhysicalActivityLevelOptions(dataTable) {
        // Convert Gherkin table to array of expected values
        const expectedOptions = dataTable.raw().flat();

        // Get all option texts from the Physical Activity Level select element
        const actualOptions = await this.physicalActivityLevelDropDown.locator('option').allTextContents();

        const filteredOptions = actualOptions.filter(opt => !opt.toLowerCase().includes('select'));
        // Validate that all expected options are present
        for (const option of expectedOptions) {
            expect(filteredOptions).toContain(option);
        }
        expect(filteredOptions.length).toBe(expectedOptions.length);
    }

    async verifyDietQualityOptions(dataTable) {
        // Convert Gherkin table to array of expected values
        const expectedOptions = dataTable.raw().flat();

        // Get all option texts from the Diet Quality select element
        const actualOptions = await this.dietQualityDropDown.locator('option').allTextContents();

        const filteredOptions = actualOptions.filter(opt => !opt.toLowerCase().includes('select'));
        // Validate that all expected options are present
        for (const option of expectedOptions) {
            expect(filteredOptions).toContain(option);
        }
        expect(filteredOptions.length).toBe(expectedOptions.length);
    }

    async clearAllFields() {
        await this.bloodPressureDropDown.selectOption({ index: 0 });
        await this.physicalActivityLevelDropDown.selectOption({ index: 0 });
        await this.dietQualityDropDown.selectOption({ index: 0 });
    }

    async fillAllFields() {
        await this.bloodPressureDropDown.selectOption('normal');
        await this.physicalActivityLevelDropDown.selectOption('active');
        await this.dietQualityDropDown.selectOption('excellent');
        await this.ageField.fill('20');
        await this.weightField.fill('60');
        await this.familyHistoryCheckbox.check();
    }

    async verifyDialogBox() {
        await expect(this.yourDiabetesRiskDialog).toBeVisible();
    }

    async verifyCalculateRiskButtonDisabled(){
        await expect(this.calculateRiskButton).toBeDisabled();
    }


}