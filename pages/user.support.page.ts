import { expect } from '@playwright/test';
import { BasePage } from './base.page';
import exp from 'constants';

export class UserSupportPage extends BasePage {
	private readonly inputs = {
		name: this.page.locator('#id_name'),
		email: this.page.locator('#id_email'),
		topic: this.page.locator('#id_type'),
		place: this.page.locator('#id_project'),
		shortDescription: this.page.locator('#id_subject'),
		fullDescription: this.page.locator('#id_description'),
		captcha: this.page.locator('#id_captcha'),
	};

	private readonly buttons = {
		add: this.page.locator('input[type="image"]'),
	};

	private readonly captchaImage = this.page.locator('img[alt="Captcha"]');

	public async fillNameInput(nameValue: string) {
		await this.inputs.name.fill(nameValue);
	}

	public async clearNameInput() {
		await this.inputs.name.clear();
	}

	public async fillEmailInput(emailValue: string) {
		await this.inputs.email.fill(emailValue);
	}

	public async focusEmailInput() {
		await this.inputs.email.focus();
	}

	public async validateForm() {
		await expect(this.inputs.topic.getByRole('option')).toHaveCount(5);
		await expect(this.inputs.place.getByRole('option')).toHaveCount(12);
		await expect(this.inputs.shortDescription).toBeVisible();
		await expect(this.inputs.fullDescription).toBeVisible();
		await expect(this.inputs.captcha).toBeVisible();
		await expect(this.captchaImage).toBeVisible();
		await expect(this.buttons.add).toBeVisible();
		await expect(this.buttons.add).toBeEnabled();
	}
}
