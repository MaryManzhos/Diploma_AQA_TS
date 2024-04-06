import { BasePage } from '../base.page';

export class AuthBar extends BasePage {
	private readonly authBarItems = this.page.locator('.auth-bar__item');

	async clickAuthItem() {
		return await this.authBarItems.filter({ hasText: 'Вход' }).click();
	}
}
