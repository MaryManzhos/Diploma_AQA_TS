import { BasePage } from '../base.page';

export class Footer extends BasePage {
	private readonly footerItems = this.page.locator('li.footer-style__item');

	public async clickFooterItem(itemName: string) {
		await this.footerItems.getByText(itemName).click();
	}
}
