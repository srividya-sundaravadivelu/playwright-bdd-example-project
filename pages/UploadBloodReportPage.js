import { expect } from '@playwright/test';
export class UploadBloodReportPage {
    constructor(page) {
        this.page = page;
        this.url = '/upload-blood-report';
        this.uploadBox = this.page.locator('div').filter({ hasText: 'Drag & drop or click to' }).nth(4);
        this.dragDropText = this.page.getByText('Drag & drop or click to upload');
        this.uploadAndProcessButton = this.page.getByRole('button', { name: 'Upload & Process' });
        this.cancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.reportAnalysis = this.page.getByRole('heading', { name: 'Report Analysis Results' });
        this.onboardingButton = this.page.getByRole('button', { name: 'Continue to Onboarding' });
        this.bloodTestResultsSection = this.page.getByRole('heading', { name: 'Blood Test Results' });
        this.completeBloodCountSection = this.page.getByRole('heading', { name: 'Complete Blood Count' });
        this.medicalConditionsSection = this.page.getByRole('heading', { name: 'Medical Conditions' }).first();
        this.abnormalValuesSection = this.page.getByRole('heading', { name: 'Abnormal Values' });
        this.recommendationsSection = this.page.getByRole('heading', { name: 'Recommendations' });
        this.fileUploadErrorMessage = this.page.locator('span').filter({ hasText: 'Failed to execute \'text\' on \'' }).first();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async clickUploadAndProcessButton() {
        await this.uploadAndProcessButton.click();
    }

    async hoverOverUploadBox() {
        await this.uploadBox.hover();
    }

    async uploadFile(filePath) {
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.uploadBox.click(), // Opens the file chooser
        ]);
        await fileChooser.setFiles(filePath);
    }

    async verifyDragDropInteraction() {
        await expect(this.dragDropText).toBeVisible();
    }

    async verifyErrorMessage(message) {       
        await expect(this.fileUploadErrorMessage).toBeVisible({ timeout: 30000 });
    }     

    async verifyUploadAndProcessButtonEnabled() {
        await expect(this.uploadAndProcessButton).toBeEnabled(  { timeout: 15000 });
    }

    async verifyReportAnalysisVisible() {       
        await expect(this.reportAnalysis).toBeVisible({ timeout: 15000 });
    }

    async verifyOnboardingButtonVisible() {       
        await expect(this.onboardingButton).toBeVisible({ timeout: 15000 });
    }

    async verifyReportSectionsVisible() {       
        await expect(this.bloodTestResultsSection).toBeVisible({ timeout: 15000 });
        await expect(this.completeBloodCountSection).toBeVisible({ timeout: 15000 });
        await expect(this.medicalConditionsSection).toBeVisible({ timeout: 15000 });
        await expect(this.abnormalValuesSection).toBeVisible({ timeout: 15000 });
        await expect(this.recommendationsSection).toBeVisible({ timeout: 15000 });
    }    
}