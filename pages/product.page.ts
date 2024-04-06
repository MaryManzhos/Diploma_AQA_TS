import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductPage extends BasePage {
	private productsName: string[] = [];

	private readonly mainLoader = this.page.locator('div.offers-list_animated');

	private readonly productName = this.page.locator('h1.catalog-masthead__title');

	private readonly buttons = {
		offers: this.page.locator('a.button_orange'),
		addToCart: this.page.locator("//div[contains(@class, 'helpers_hide_tablet')]/a[contains(@class, 'offers-list__button_cart')]"),
		info: this.page.locator('span.offers-form__button').filter({hasText: "Все ясно, спасибо"}),
		loader: this.page.locator('a.offers-list__button_animated'),
		goToCart: this.page.locator('//a[contains(text(), "Перейти в корзину")]'),
		closeAddToCartForm: this.page.locator('//div[contains(@class, "product-recommended__sidebar-close")]')
	}

	private readonly displayedOffers = this.page.locator('div.offers-list__flex');

	private readonly sortSelect = this.page.locator('select.input-style__real');

	private readonly checkboxes = {
		addToMatchingLabel: this.page.locator('#product-compare-control'),
		addToMatching: this.page.locator('//li[@id="product-compare-control"]//span[@class="i-checkbox__faux"]'),
	};

	private readonly categoryLinks = this.page.locator('a.breadcrumbs__link');

	private readonly addToCartFormTitle = this.page.locator('div.product-recommended__subheader').filter({hasText: "Товар добавлен в корзину"});

	public async checkAddToMatchingCheckbox() {
		return await this.checkboxes.addToMatching.click();
	}

	public async waitForAddToMatchingCheckboxIsDisplaying() {
		return expect(this.checkboxes.addToMatchingLabel).toContainText("Добавить к сравнению");
	}

	public async waitForAddToMatchingCheckboxIsChecked() {
		return expect(this.checkboxes.addToMatchingLabel).toContainText("Добавлен к сравнению");
	}

	public async waitLoaderIsHidden() {
		await this.mainLoader.waitFor({ state: 'hidden' });
	}

	public async clickCategoryLink(linkName: string) {
		return await this.categoryLinks.filter({ hasText: linkName }).click();
	}

	public async clickOffersButton() {
		return await this.buttons.offers.click();
	}

	public async clickInfoButton() {
		await this.buttons.info.click();
	}

	public async waitOffersIsLoaded() {
		await this.displayedOffers.first().waitFor({ state: 'attached' });
	}

	public async validateDisplayedOffers() {
		await expect(this.displayedOffers.first()).toBeVisible();
	}

	public async sortOffers(byName: string) {
		await this.sortSelect.selectOption(byName);
	}

	public async clickFirsOffersButton() {
		await this.buttons.addToCart.first().click();
	}

	public async validateProductName(productName: string) {
		return await expect(this.productName).toHaveText(productName);
	}

	public async setProductName() {
		this.productsName.push((await this.productName.textContent()) as string);
	}

	public getProductsName() {
		return this.productsName;
	}
	
	public async waitForButtonNameIsVisible() {
		await this.buttons.loader.first().waitFor({state: "detached"});
	}

	public async waitForAddToCartFormIsDisplaying() {
		await this.addToCartFormTitle.waitFor({state: "attached"});
	}

	public async validateAddedOrderToCart() {
		await expect(this.buttons.addToCart.first()).toHaveText('В корзине');
	}

	public async openCart() {
		await this.buttons.goToCart.click();
	}

	public async closeArrToCartForm() {
		await this.buttons.closeAddToCartForm.click();
	}
}
