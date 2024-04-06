import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
	private readonly pageTitle = this.page.locator('h1.catalog-form__title');
	private readonly productTitles = this.page.locator('a.catalog-form__link');

	public async goToProductPage(productName: string, numberOfProduct: number) {
		await (await this.productTitles.getByText(productName).all())[numberOfProduct].click();
	}

	public async validatePageTitle(titleName: string) {
		await expect(this.pageTitle).toHaveText(titleName);
	}
}
