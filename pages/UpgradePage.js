import { expect } from '@playwright/test';
export class UpgradePage {
    constructor(page) {
        this.page = page;
        this.url = '/upgrade';
    }
    async verifyCurrentPageIsUpgrade() {
        await expect(this.page).toHaveURL(this.url);
    }
}