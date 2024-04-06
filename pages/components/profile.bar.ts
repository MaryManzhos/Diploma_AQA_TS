import { BasePage } from '../base.page';

export class ProfileBar extends BasePage {
	private readonly profileCartItem = this.page.locator('#cart-desktop');

	public async clickProfileCartItem() {
		await this.profileCartItem.click();
	}
}
