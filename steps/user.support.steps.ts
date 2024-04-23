import { Page } from '@playwright/test';
import { Footer } from '../pages/components/footer';
import { test } from '../fixtures/setup.fixture';
import { UserSupportPage } from '../pages/user.support.page';

export class UserSupportSteps {
	private readonly footer: Footer;
	private readonly userSupportPage: UserSupportPage;

	constructor(page: Page) {
		this.footer = new Footer(page);
		this.userSupportPage = new UserSupportPage(page);
	}

	async openUserSupportPage() {
		await test.step(`Go to user support page`, async () => {
			return await this.footer.clickFooterItem('Поддержка пользователей');
		});
	}

	async fillSupportForm() {
		await test.step(`Fill support form`, async () => {
			await this.userSupportPage.fillNameInput('Last Name');
			await this.userSupportPage.clearNameInput();
			await this.userSupportPage.fillEmailInput('radfkjvbsdjkv');
			await this.userSupportPage.fillEmailInput('email@test.test');
			await this.userSupportPage.focusEmailInput();
			return await this.userSupportPage.validateForm();
		});
	}
}
