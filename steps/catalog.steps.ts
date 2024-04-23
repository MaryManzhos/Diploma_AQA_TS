import { Page } from '@playwright/test';
import { CatalogPage } from '../pages/catalog.page';
import { ProductsFilter } from '../pages/components/products.filter';
import { ProductsPage } from '../pages/products.page';
import { test } from '../fixtures/setup.fixture';
import { ProductPage } from '../pages/product.page';

export class CatalogSteps {
	private readonly catalogPage: CatalogPage;
	private readonly productsPage: ProductsPage;
	private readonly productsFilter: ProductsFilter;
	private readonly productPage: ProductPage;

	constructor(page: Page) {
		this.catalogPage = new CatalogPage(page);
		this.productsPage = new ProductsPage(page);
		this.productsFilter = new ProductsFilter(page);
		this.productPage = new ProductPage(page);
	}

	async openProductsCtegoryPage() {
		await test.step(`Go to products category "Ноутбуки"`, async () => {
			await this.catalogPage.clickMainCategoryItem(/Компьютеры и сети/);
			await this.catalogPage.clickCategoryItem(/Ноутбуки, компьютеры, мониторы/);
			await this.catalogPage.clickSubCategoryItem(/Ноутбуки/);
			return await this.productsPage.validatePageTitle('Ноутбуки');
		});
	}

	async goToProductPageFromPopularCategory(categoryName: string) {
		await test.step(`Go to products category ${categoryName}`, async () => {
			await this.catalogPage.clickPopularCategoryItem(categoryName);
			return await this.productsPage.validatePageTitle(categoryName);
		});
	}

	async chooseProduct(productName: string, numberOfProduct: number) {
		await test.step(`Choose displaying product`, async () => {
			return await this.productsPage.goToProductPage(productName, numberOfProduct - 1);
		});
	}

	async setBrandInFilter(brandName: string) {
		await test.step(`Set brand ${brandName} in filter`, async () => {
			let productCountWithoutFilter = await this.productsFilter.getProductsCount();
			await this.productsFilter.clicAsusBrandCheckbox();
			await this.productsFilter.waitForInteractionStateAnimatedIsDisabled();
			await this.productsFilter.waitForTagItemIsDisplying("ASUS");
			let productCountWithFilter = await this.productsFilter.getProductsCount();
			return this.productsFilter.validateProductsCount(productCountWithoutFilter, productCountWithFilter);
		});
	}

	async setMatrixFrequencyInFilter(minFrequency: string = '', maxFrequency: string = '') {
		await test.step(`Set matrix frequency from ${minFrequency} to ${maxFrequency} in filter`, async () => {
			await this.productsFilter.selectFirstSelect(minFrequency);
			await this.productsFilter.waitForInteractionStateAnimatedIsDisabled();
			await this.productsFilter.waitForTagItemIsDisplying("от 120 Гц");
			await this.productsFilter.selectSecondSelect(maxFrequency);
			await this.productsFilter.waitForInteractionStateAnimatedIsDisabled();
			return await this.productsFilter.waitForTagItemIsDisplying("120 Гц - 165 Гц");
		});
	}

	async setBonusInFilter(bonusName: string) {
		await test.step(`Set bonus ${bonusName} in filter`, async () => {
			await this.productsFilter.clickBonusCheckbox(bonusName);
			return await this.productsFilter.waitForInteractionStateAnimatedIsDisabled();
		});
	}

	async deleteFilterTag(deletedTagName: string, displayedTagNames: string[]) {
		await test.step(`Delete filter tag ${deletedTagName}`, async () => {
			await this.productsFilter.clickTagItem(deletedTagName);
			await this.productsFilter.waitForInteractionStateAnimatedIsDisabled();
			await this.productsFilter.valigateFilterTags(deletedTagName, false);
			for (let displayedTagName of displayedTagNames) {
				await this.productsFilter.valigateFilterTags(displayedTagName, true);
			}
		});
	}
}
