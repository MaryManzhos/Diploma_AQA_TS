import { Page } from '@playwright/test';
import { User } from '../types/models/user';
import { test } from '../fixtures/setup.fixture';
import { RegistrationPage } from '../pages/registration.page';
import { ConfirmationEmailPage } from '../pages/confirmation.email.page';

export class RegistrationSteps {
	private readonly registrationPage: RegistrationPage;
	private readonly confirmationEmailPage: ConfirmationEmailPage;

	constructor(page: Page) {
		this.registrationPage = new RegistrationPage(page);
		this.confirmationEmailPage = new ConfirmationEmailPage(page);
	}

	async fillEmailField(user: User) {
		await test.step(`Input valid email = ${user.userName}`, async () => {
			return await this.registrationPage.fillEmailInput(user.userName);
		});
	}

	async fillPasswordField(user: User) {
		await test.step(`Input valid password`, async () => {
			return await this.registrationPage.fillPasswordInput(user.password);
		});
	}

	async fillRepeatPasswordField(user: User) {
		await test.step(`Input valid password`, async () => {
			return await this.registrationPage.fillRepeatPasswordInput(user.password);
		});
	}

	async confirmAgreement() {
		await test.step(`Confirm agreement`, async () => {
			return await this.registrationPage.confirmAgreement();
		});
	}

	async registerNewUserWithErrors() {
		await test.step(`Click button "Зарегистрироваться"`, async () => {
			await this.registrationPage.clickRegisterButton();
			await this.registrationPage.waitForButtonLoaderIsHidden();
			await this.registrationPage.validateErrorPasswordInput('Укажите пароль');
			return await this.registrationPage.validateErrorRepeatPasswordInput('Укажите пароль');
		});
	}

	async registerNewUser() {
		await test.step('Register new user', async () => {
			await this.registrationPage.clickRegisterButton();
			await this.confirmationEmailPage.waitConfirmationPageIsLoaded();
			return await this.confirmationEmailPage.validateButtonName('Перейти в почту');
		});
	}
}
