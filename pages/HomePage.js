import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.url = '/';
    }

    async verifyCurrentPageIsHome() {
        await expect(this.page).toHaveURL(this.url);
    }
}