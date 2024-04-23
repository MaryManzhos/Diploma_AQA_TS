import { Page } from '@playwright/test';
import { ProductPage } from '../pages/product.page';
import { test } from '../fixtures/setup.fixture';
import { ProfileBar } from '../pages/components/profile.bar';
import { MatchingTab } from '../pages/components/matching.tab';
import { MatchingPage } from '../pages/matching.page';
import { CartPage } from '../pages/cart.page';

export class ProductSteps {
	private readonly productPage: ProductPage;
	private readonly profileBar: ProfileBar;
	private readonly matchingTab: MatchingTab;
	private readonly matchingPage: MatchingPage;
	private readonly cartPage: CartPage;

	constructor(page: Page) {
		this.productPage = new ProductPage(page);
		this.profileBar = new ProfileBar(page);
		this.matchingTab = new MatchingTab(page);
		this.matchingPage = new MatchingPage(page);
		this.cartPage = new CartPage(page);
	}

	async addProductToMatching() {
		await test.step(`Add product to matchong`, async () => {
			await this.productPage.setProductName();
			await this.productPage.checkAddToMatchingCheckbox();
			await this.productPage.waitForAddToMatchingCheckboxIsChecked()
			return await this.matchingTab.waitForMatchinPopupIsDislayed();
			
		});
	}

	async backToProductsPage(categoryName: string) {
		await test.step(`Back to products page`, async () => {
			return await this.productPage.clickCategoryLink(categoryName);
		});
	}

	async openMatchingTab() {
		await test.step(`Open matching tab`, async () => {
			await this.matchingTab.goToMatchingPage();
			await this.matchingPage.validateMatchingPage();
			let productsName = this.productPage.getProductsName();
			return await this.matchingPage.validateMatchingProducts(productsName);
		});
	}

	async openOffersTab() {
		await test.step(`Open offers tab`, async () => {
			await this.productPage.clickOffersButton();
			await this.productPage.waitLoaderIsHidden();
			return await this.productPage.validateDisplayedOffers();
		});
	}

	async sortOffers(byName: string) {
		await test.step(`Sort all offers by ${byName}`, async () => {
			await this.productPage.sortOffers(byName);
			return await this.productPage.waitForPageIsLoaded();
		});
	}

	async addToCartFromBestOffer() {
		await test.step(`Add order to cart from the most profitable offer`, async () => {
			await this.productPage.clickFirsOffersButton();
			await this.productPage.waitLoaderIsHidden();
			await this.productPage.waitOffersIsLoaded();
			await this.productPage.waitForAddToCartFormIsDisplaying()
			await this.productPage.closeArrToCartForm();
			return await this.productPage.validateAddedOrderToCart();
		});
	}

	async openCartPageWithProduct(productName: string) {
		await test.step(`Go to cart page`, async () => {
			await this.profileBar.clickProfileCartItem();
			return await this.cartPage.validateProductIsAddedToCart(productName)
		});
	}
}
