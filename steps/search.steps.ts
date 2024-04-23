import { Page } from '@playwright/test';
import { SearchFrame } from '../pages/components/search.frame';
import { MainPage } from '../pages/main.page';
import { test } from '../fixtures/setup.fixture';
import { ProductPage } from '../pages/product.page';

export class SearchSteps {
	private readonly mainPage: MainPage;
	private readonly searchFrame: SearchFrame;
	private readonly productPage: ProductPage;

	constructor(page: Page) {
		this.mainPage = new MainPage(page);
		this.searchFrame = new SearchFrame(page);
		this.productPage = new ProductPage(page);
	}

	async fillSearchInputOnTheMainPage(searchString: string) {
		await test.step(`Input value = ${searchString} into search field on the main page`, async () => {
			return await this.mainPage.fillSearchInput(searchString);
		});
	}

	async clearSearchInputOnSearchFrame() {
		await test.step(`Clear search field on the search frame`, async () => {
			return await this.searchFrame.clearSearchInput();
		});
	}

	async fillSearchInputOnSearchFrame(searchString: string) {
		await test.step(`Input value = ${searchString} into search field on the search frame`, async () => {
			return await this.searchFrame.fillSearchInput(searchString);
		});
	}

	async selectFindedProduct(productName: string) {
		await test.step(`Select displyed product with name ${productName}`, async () => {
			await this.searchFrame.waitForPageIsLoaded();
			await this.searchFrame.waitForProductsAreDisplaying();
			await this.searchFrame.chooseFindedProduct();
			return await this.productPage.validateProductName(productName);
		});
	}
}
