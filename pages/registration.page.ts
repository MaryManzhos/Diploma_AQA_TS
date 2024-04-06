import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class RegistrationPage extends BasePage {
	private readonly pageTitle = this.page.locator('.auth-form__title').getByText('Регистрация');

	private readonly inputs = {
		email: this.page.getByPlaceholder('Ваш e-mail'),
		password: this.page.getByPlaceholder('Придумайте пароль'),
		repeatPassword: this.page.getByPlaceholder('Повторите пароль'),
	};

	private readonly inputsWithError = {
		email: this.page.locator(
			'//input[@placeholder = "Ваш e-mail"]/ancestor::div[contains(@class, "auth-form__line")]'
		),
		password: this.page.locator(
			'//input[@placeholder = "Придумайте пароль"]/ancestor::div[contains(@class, "auth-form__field")]'
		),
		repeatPassword: this.page.locator(
			'//input[@placeholder = "Повторите пароль"]/ancestor::div[contains(@class, "auth-form__field")]'
		),
	};

	private readonly checkboxes = {
		agreement: this.page.locator('span.auth-checkbox__faux'),
	};

	private readonly buttons = {
		register: this.page.getByRole('button', { name: 'Зарегистрироваться' }),
	};

	private readonly buttonLoader = this.page.locator('button.auth-button_animated');

	public async fillEmailInput(email: string) {
		await this.inputs.email.fill(email);
	}

	public async fillPasswordInput(password: string) {
		return await this.inputs.password.fill(password);
	}

	public async fillRepeatPasswordInput(password: string) {
		return await this.inputs.repeatPassword.fill(password);
	}

	public async confirmAgreement() {
		return await this.checkboxes.agreement.click();
	}

	public async clickRegisterButton() {
		return await this.buttons.register.click();
	}

	public async waitForButtonLoaderIsHidden() {
		return await this.buttonLoader.waitFor({ state: 'detached' });
	}

	public async validatePageIsOpened() {
		await expect(this.pageTitle).toBeVisible();
	}

	public async validateErrorPasswordInput(errorDescription: string) {
		await expect(this.inputsWithError.password.getByText(errorDescription)).toBeVisible();
	}

	public async validateErrorRepeatPasswordInput(errorDescription: string) {
		await expect(this.inputsWithError.repeatPassword.getByText(errorDescription)).toBeVisible();
	}
}
