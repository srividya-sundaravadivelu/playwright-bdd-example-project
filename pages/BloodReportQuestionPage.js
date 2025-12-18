import { expect } from '@playwright/test';
export class BloodReportQuestionPage {
    constructor(page) {
        this.page = page;
        this.url = '/blood-report-question';
        this.uploadBloodReportButton = this.page.getByRole('button', { name: 'Upload Blood Report' });
        this.stepThroughOnboardingButton = this.page.getByRole('button', { name: 'Step Through Onboarding' });
        this.uploadBox = this.page.locator('[data-testid="upload-box"]');
        this.dragDropText = this.page.getByText('Drag & drop');
    }

    async clickUploadBloodReportButton() {
        await this.uploadBloodReportButton.click();
    }

    async clickStepThroughOnboardingButton() {
        await this.stepThroughOnboardingButton.click();
    }

    async hoverOverUploadBox() {
        await this.uploadBox.hover();
    }

    async verifyCurrentPageIsBloodReportQuestion() {
        await expect(this.page).toHaveURL(this.url);
    }

    async verifyUploadBloodReportButton() {
        await expect(this.uploadBloodReportButton).toBeVisible();
    }

    async verifyStepThroughOnboardingButton() {
        await expect(this.stepThroughOnboardingButton).toBeVisible();
    }

    async verifyDragDropInteraction() {
        await expect(this.dragDropText).toBeVisible();
    }
}