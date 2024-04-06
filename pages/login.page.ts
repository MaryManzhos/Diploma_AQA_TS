import { expect } from '@playwright/test';
import { User } from '../types/models/user';
import { BasePage } from './base.page';
import { allure } from 'allure-playwright';

export class LoginPage extends BasePage {
	private readonly pageTitle = this.page.locator('.auth-form__title');

	private readonly buttons = {
		login: this.page.locator("button.auth-button[type='submit']"),
	};

	private readonly links = {
		registration: this.page.getByText('Зарегистрироваться на Onlíner'),
	};

	private readonly inputs = {
		userName: this.page.locator("input.auth-input[type='text']"),
		password: this.page.locator("input.auth-input[type='password']"),
	};

	public async login(user: User) {
		await this.inputs.userName.fill(user.userName);
		await this.inputs.password.fill(user.password);
		await this.buttons.login.click();
	}

	public async clickRegistrationLink() {
		await this.links.registration.click();
	}

	public async validatePageIsOpened() {
		await expect(this.pageTitle).toBeVisible();
	}
}
