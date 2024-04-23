import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class MatchingPage extends BasePage {
	private readonly pageTitle = this.page.getByRole('heading', { name: 'Сравнение товаров' });

	private readonly productsNames = this.page.locator('tr.product-table__row_top span.product-summary__caption');

	public async validateMatchingPage() {
		await expect(this.pageTitle).toBeVisible();
	}

	public async validateMatchingProducts(productsName: string[]) {
		await expect(this.productsNames).toHaveCount(productsName.length);
		// for (let productName of productsName) {
			await expect(this.productsNames).toContainText(productsName);
		// }
	}
}
