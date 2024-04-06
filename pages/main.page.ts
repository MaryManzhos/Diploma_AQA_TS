import { Coockie } from '../types/models/coockie';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
	private readonly currencyItem = this.page
		.locator('a.b-top-navigation-informers__link')
		.and(this.page.locator('a[href="https://kurs.onliner.by/"]'));
		
	private readonly newsItems = {
		item: this.page.locator('div.widget-item'),
		category: this.page.locator('a.b-tile-section'),
		news: this.page.locator('a.b-tile-main'),
	};

	private readonly autoCategoryGrid = this.page.locator('//a[contains(text(), "Авто")]/ancestor::div[contains(@class, "b-main-page-grid-4")]')

	private readonly inputs = {
		search: this.page.locator('input.fast-search__input'),
	};

	public async goToCurrencyPage() {
		await this.currencyItem.click();
	}

	public async fillSearchInput(searchString: string) {
		return await this.inputs.search.fill(searchString);
	}

	public async goToFirstNewsFromCategory() {
		return await this.autoCategoryGrid.getByRole("listitem").filter({has: this.page.locator('a')}).first().click();
	}
}
