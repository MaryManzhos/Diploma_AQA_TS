import { BasePage } from '../base.page';

export class RealtSearchFilter extends BasePage {
	private readonly filterItems = this.page.locator('span.filter__item-inner');
	private readonly priceToInput = this.page.locator('#search-filter-price-to');
	private readonly subwayDropdown = this.page.locator('div.dropdown__value').filter({ hasText: 'Метро' });
	private readonly subwayDropdownItems = this.page.locator('li.dropdown__item');

	public async clickFilterItem(itemName: string) {
		await this.filterItems.filter({ hasText: itemName }).click();
	}

	public async fillPriceToInput(price: string) {
		await this.priceToInput.fill(price);
	}

	public async selectSubwayDropdownItem(subwayName: string) {
		await this.subwayDropdown.click();
		await this.subwayDropdownItems.filter({ hasText: subwayName }).click();
	}
}
