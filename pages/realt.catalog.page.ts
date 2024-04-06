import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class RealtCatalogPage extends BasePage {
	private readonly sortingDropdown = this.page.locator('div.dropdown_right');
	private readonly sortingDropdownItems = this.page.locator('li.dropdown__item');
	private readonly displayedOffers = this.page.locator('a.classified');

	public async clickSortingDropdown() {
		await this.sortingDropdown.click();
	}

	public async clickSortingDropdownItems(itemName: string) {
		await this.sortingDropdownItems.filter({ hasText: itemName }).click();
	}

	public async waitOffersAreReloaded() {
		await this.page.waitForTimeout(3000);
	}

	public async getOfferID() {
		return await this.displayedOffers.first().getAttribute('data-id');
	}

	public async validateDisplayingOffer(offerID: string) {
		expect(await this.displayedOffers.first().getAttribute('data-id')).not.toEqual(offerID);
	}
}
