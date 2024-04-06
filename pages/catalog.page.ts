import { BasePage } from './base.page';

export class CatalogPage extends BasePage {
	private readonly mainCategoryItems = this.page.locator('span.catalog-navigation-classifier__item-title-wrapper');
	private readonly categoryItems = this.page.locator('div.catalog-navigation-list__aside-title');
	private readonly subCategoryItems = this.page.locator('span.catalog-navigation-list__dropdown-title');
	private readonly popularCategoryItems = this.page.locator('a.catalog-form__popular-item');

	public async clickMainCategoryItem(mainCategoryName: RegExp) {
		await this.mainCategoryItems.filter({ hasText: mainCategoryName }).click();
	}

	public async clickCategoryItem(categoryName: RegExp) {
		await this.categoryItems.filter({ hasText: categoryName }).click();
	}

	public async clickSubCategoryItem(subCategoryName: RegExp) {
		await this.subCategoryItems.filter({ hasText: subCategoryName }).click({ timeout: 5000 });
	}

	public async clickPopularCategoryItem(categoryName: string) {
		await this.popularCategoryItems.filter({ hasText: categoryName }).click();
	}
}
