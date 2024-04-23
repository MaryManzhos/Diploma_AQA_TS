import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ConfirmationEmailPage extends BasePage {
	private readonly formTitle = this.page.getByText('Подтвердите ваш e-mail');

	private readonly buttons = {
		goToEmail: this.page.locator('a.auth-button'),
	};

	public async waitConfirmationPageIsLoaded() {
		await this.formTitle.waitFor({ state: 'attached' });
		await this.buttons.goToEmail.waitFor({ state: 'attached' });
	}

	public async validateButtonName(byName: string) {
		await expect(this.buttons.goToEmail).toContainText(byName);
	}
}
