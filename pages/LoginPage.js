import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginHeading = this.page.getByRole('heading', { name: 'Welcome back' });
        this.signInText = this.page.getByText('Sign in to your account or');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.closeButton = this.page.getByRole('button').filter({ hasText: /^$/ });
        this.emailField = this.page.getByRole('textbox', { name: 'Email' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue with Email' });
        this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
    }

    async verifyLoginHeading() {
        await expect(this.loginHeading).toBeVisible();
    }

    async verifySignInText() {
        await expect(this.signInText).toBeVisible();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyCloseButton() {
        await expect(this.closeButton).toBeVisible();
    }

    async fillEmail(email) {
        await this.emailField.fill(email);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async verifyPasswordField() {
        await expect(this.passwordField).toBeVisible();
    }
}