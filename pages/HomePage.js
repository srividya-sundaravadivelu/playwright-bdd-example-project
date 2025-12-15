import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.url = "/firstPage"
        this.logo = page.getByText('SweetBalance');
        this.termsText = page.getByText('Our Terms of Service and');
        this.headingSmartDiabetes = page.getByRole('heading', { name: 'Smart Diabetes Tracking' });
        this.h1Text = page.locator('h1');
        this.rootText = page.locator('#root');
        this.startTodayButton = page.getByRole('button', { name: 'Start Today' });
        this.mainContent = page.getByRole('main');
        this.checkYourRiskButton = page.getByRole('button', { name: 'Check Your Risk' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.riskAnalyzerDialog = page.getByRole('dialog', { name: 'Diabetes Risk Analyzer' });
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async checkAppName() {
        await expect(this.logo).toBeVisible();
    }

    async verifyTermsTextVisible() {
        await expect(this.termsText).toBeVisible();
    }

    async verifyHeadingSmartDiabetes() {
        await expect(this.headingSmartDiabetes).toBeVisible();
    }

    async verifyH1TextContains(arg) {
        await expect(this.h1Text).toContainText(arg);
    }

    async checkRootText(arg) {
        await expect(this.rootText).toContainText(arg);
    }

    async checkStartTodayButton() {
        await expect(this.startTodayButton).toBeVisible();
    }

    async verifyMainContentContains(arg) {
        await expect(this.mainContent).toContainText(arg);
    }

    async clickStartTodayButton() {
        await this.startTodayButton.click();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickCheckYourRiskButton() {
        await this.checkYourRiskButton.click();
    }

    async checkRiskAnalyzerDialogVisible() {
        await expect(this.riskAnalyzerDialog).toBeVisible();
    }
}