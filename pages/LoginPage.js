import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = '/login';
        this.loginHeading = page.getByRole('heading', { name: 'Welcome back' });
        this.signInText = page.getByText('Sign in to your account or');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async checkLoginPageVisible() {
        await expect(this.loginHeading).toBeVisible();
        await expect(this.signInText).toBeVisible();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}