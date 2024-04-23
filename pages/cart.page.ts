import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
	private readonly productItemName = this.page.locator('a.cart-form__link');
	private readonly checkoutButton = this.page.locator('a.cart-form__button').getByText('Перейти к оформлению');
	private readonly removeOrderButton = this.page.locator('div.cart-form__control');

	public async clickCheckoutButton() {
		await this.checkoutButton.first().click();
	}

	public async clickRemoveOrderButton() {
		await this.removeOrderButton.first().hover({ timeout: 3000 });
		await this.removeOrderButton.first().click();
	}

	public async validateProductIsAddedToCart(productName: string) {
		await expect(this.productItemName.filter({hasText: productName})).toBeVisible();
	}

}
