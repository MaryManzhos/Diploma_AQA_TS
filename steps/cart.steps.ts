import { Page } from '@playwright/test';
import { CartPage } from '../pages/cart.page';
import { test } from '../fixtures/setup.fixture';
import { CheckoutPage } from '../pages/checkout.page';
import { CheckoutInputTypes } from '../types/checkout.input.types';

export class CartSteps {
	private readonly cartPage: CartPage;
	private readonly checkoutPage: CheckoutPage;

	constructor(page: Page) {
		this.cartPage = new CartPage(page);
		this.checkoutPage = new CheckoutPage(page);
	}

	async goToCheckoutPage() {
		await test.step(`Go to checkout page`, async () => {
			await this.cartPage.clickCheckoutButton();
			await this.checkoutPage.waitForLoaderIsHidden();
			return await this.checkoutPage.waitForPageIsLoaded();
		});
	}

	async fillCheckoutForm() {
		await test.step(`Fill checkout form`, async () => {
			await this.checkoutPage.fillInput(CheckoutInputTypes.street, 'ул. Аэродромная');
			await this.checkoutPage.waitDropdownIsVisible();
			await this.checkoutPage.clickDropdown();
			await this.checkoutPage.fillInput(CheckoutInputTypes.house, '10');
			await this.checkoutPage.fillInput(CheckoutInputTypes.housing, '1');
			await this.checkoutPage.fillInput(CheckoutInputTypes.front, '1');
			await this.checkoutPage.fillInput(CheckoutInputTypes.floor, '9');
			await this.checkoutPage.fillInput(CheckoutInputTypes.apartment, '44');
			await this.checkoutPage.fillInput(CheckoutInputTypes.firstName, 'Имя');
			await this.checkoutPage.fillInput(CheckoutInputTypes.lastName, 'Фамилия');
			await this.checkoutPage.fillInput(CheckoutInputTypes.email, 'email@test.tst');
			await this.checkoutPage.fillInput(CheckoutInputTypes.phoneNumber, '+375299999999');
			await this.checkoutPage.clickPaymentMethodButton();
			await this.checkoutPage.waitForPageIsLoaded();
			return await this.checkoutPage.validatePaimentMethodsForm();
		});
	}

	async openMainPage() {
		await test.step(`Go to main page`, async () => {
			return await this.checkoutPage.openPage();
		});
	}

	async removeAddressFromCheckout() {
		await test.step(`Remove address from checkout page`, async () => {
			if (await this.checkoutPage.isAddressTogglerDisplayed()) {
				await this.checkoutPage.clickToggler()
				await this.checkoutPage.clickDeleteAddressButton();
				return await this.checkoutPage.waitForPageIsLoaded();
			}
		});
	}

	async removeOrderFromCart() {
		await test.step(`Remove order from cart`, async () => {
			return await this.cartPage.clickRemoveOrderButton();
		});
	}
}
