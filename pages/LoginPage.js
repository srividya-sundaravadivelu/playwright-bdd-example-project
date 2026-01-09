import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = '/auth';
        this.loginHeading = this.page.getByRole('heading', { name: 'Welcome back' });
        this.signInText = this.page.getByText('Sign in to your account or');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.closeButton = this.page.getByRole('button').filter({ hasText: /^$/ });
        this.emailField = this.page.getByRole('textbox', { name: 'Email' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue with Email' });
        this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
        this.invalidEmailErrorText = this.page.getByText('Please enter a valid email');
        this.continueWithGoogleButton = this.page.getByRole('button', { name: 'Continue with Google' });
        this.completeYourProfileHeading = this.page.getByRole('heading', { name: 'Complete your profile' });
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
        this.fullNameField = this.page.getByRole('textbox', { name: 'Full Name' });
        this.userNameField = this.page.getByRole('textbox', { name: 'Username' })
        this.passwordField = this.page.locator('input[name="password"]');
        this.agreeTermsCheckbox = this.page.getByRole('checkbox', { name: 'I agree to the Terms &' });
        this.fullNameError = this.page.getByText('Full name can only contain letters');
        this.userNameError = this.page.getByText('Username must be at least 3');
        this.passwordError = this.page.getByText('Password must be at least 8');
        this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
    }

    // Action Methods

    async fillEmail(email) {
        await this.emailField.fill(email);
    }

    async fillPassword(password) {
        await this.passwordField.fill(password);
    }

    async fillFullName(fullName) {
        await this.fullNameField.fill(fullName);
    }

    async fillUserName(userName) {
        await this.userNameField.fill(userName);
    }

    async fillPassword(password) {
        await this.passwordField.fill(password);
    }

    async fillField(field, value) {
        const fieldMap = {
            fullName: this.fullNameField,
            userName: this.userNameField,
            password: this.passwordField
        };

        const locator = fieldMap[field];
        if (!locator) throw new Error(`Unknown field: ${field}`);

        await locator.fill(value);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async checkAgreeTermsCheckbox() {
        await this.agreeTermsCheckbox.check();
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    // Verification Methods

    async verifyLoginHeading() {
        await expect(this.loginHeading).toBeVisible();
    }

    async verifySignInText() {
        await expect(this.signInText).toBeVisible();
    }

    async verifyCloseButton() {
        await expect(this.closeButton).toBeVisible();
    }

    async verifyPasswordField() {
        await expect(this.passwordField).toBeVisible();
    }

    async verifyEmailValidationError() {
        await expect(this.invalidEmailErrorText).toBeVisible();
    }

    async verifyCompleteYourProfileForm() {
        await expect(this.completeYourProfileHeading).toBeVisible();
    }

    async verifyFullNameField() {
        await expect(this.fullNameField).toBeVisible();
    }
    async verifyUserNameField() {
        await expect(this.userNameField).toBeVisible();
    }

    async verifyCreateAccountButtonEnabled() {
        await expect(this.createAccountButton).toBeEnabled();
    }

    async verifyErrorMessage(field, message) {
        const errorMap = {
            fullName: this.fullNameError,
            userName: this.userNameError,
            password: this.passwordError,
        };

        await expect(errorMap[field]).toHaveText(message);
    }

    async createNewAccount(fullName, userName, userEmail, password) {
        await this.fillEmail(userEmail);
        await this.clickContinueButton();
        await this.fillFullName(fullName);
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.checkAgreeTermsCheckbox();
        await this.clickCreateAccountButton();
    }
}