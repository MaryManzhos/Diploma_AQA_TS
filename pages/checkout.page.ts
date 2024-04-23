import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
	private readonly inputs = this.page.locator('input[type = "text"]');
	private readonly inputDropdown = this.page.locator('div.auth-dropdown');
	private readonly paymentMethodButton = this.page.getByRole('button', { name: 'Перейти к способу оплаты' });
	private readonly paymentMethodTabs = this.page.locator('div.cart-form__anchor-item');
	private readonly activePaymentMethod = this.page.locator('div.cart-form__anchor-item_active');
	private readonly confirmOrderButton = this.page.getByRole('button', { name: 'Перейти к подтверждению заказа' });
	private readonly addressToggler = this.page.locator('div.cart-form__popover-trigger');
	private readonly deleteAddressButton = this.page.getByText('Удалить адрес');
	private readonly pageLoader = this.page.locator('div.cart-form_animated')

	public async fillInput(inputName: number, inputText: string) {
		await (await this.inputs.all())[inputName].fill(inputText);
	}

	public async waitForLoaderIsHidden() {
		await this.pageLoader.waitFor({ state: 'detached' });
	}

	public async waitDropdownIsVisible() {
		await this.inputDropdown.waitFor({ state: 'visible' });
	}

	public async clickDropdown() {
		await this.inputDropdown.click();
	}

	public async isAddressTogglerDisplayed() {
		return await this.addressToggler.isVisible();
	}

	public async clickToggler() {
		await this.addressToggler.click();
	}

	public async clickDeleteAddressButton() {
		await this.deleteAddressButton.click();
	}

	public async clickPaymentMethodButton() {
		await this.paymentMethodButton.click();
	}

	public async waitForPaimentMethodsFormIsLoaded() {
		await this.paymentMethodTabs.first().waitFor({state: "attached"});
		await this.activePaymentMethod.waitFor({state: "attached"});
	}

	public async validatePaimentMethodsForm() {
		await expect(this.confirmOrderButton).toBeVisible();
	}
}
