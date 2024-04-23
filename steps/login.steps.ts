import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { User } from '../types/models/user';
import { AuthBar } from '../pages/components/auth.bar';
import { test } from '../fixtures/setup.fixture';
import { CaptchaFrame } from '../pages/components/captcha.frame';
import { RegistrationPage } from '../pages/registration.page';

export class LoginSteps {
	private readonly authBar: AuthBar;
	private readonly loginPage: LoginPage;
	private readonly captchaFrame: CaptchaFrame;
	private readonly registrationPage: RegistrationPage;

	constructor(page: Page) {
		this.authBar = new AuthBar(page);
		this.loginPage = new LoginPage(page);
		this.captchaFrame = new CaptchaFrame(page);
		this.registrationPage = new RegistrationPage(page);
	}

	async openLoginPage() {
		await test.step(`Go to login page`, async () => {
			await this.authBar.clickAuthItem();
			return await this.loginPage.validatePageIsOpened();
		});
	}

	async loginUser(user: User) {
		await test.step(`User with username = ${user.userName} is log in`, async () => {
			await this.loginPage.login(user);
			await this.captchaFrame.waitCaptchaFrameIsDisplayed();
			return await this.captchaFrame.validateCaptchIsDisplayed();
		});
	}

	async openRegistrationPage() {
		await test.step('Go to registration page', async () => {
			await this.loginPage.clickRegistrationLink();
			return await this.registrationPage.validatePageIsOpened();
		});
	}
}
