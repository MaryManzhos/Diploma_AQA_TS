import { Page } from '@playwright/test';
import { test } from '../fixtures/setup.fixture';
import { RealtSearchFilter } from '../pages/components/realt.search.filter';
import { RealtCatalogPage } from '../pages/realt.catalog.page';

export class RealtCatalogSteps {
	private readonly realtSearchFilter: RealtSearchFilter;
	private readonly realtCatalogPage: RealtCatalogPage;

	constructor(page: Page) {
		this.realtSearchFilter = new RealtSearchFilter(page);
		this.realtCatalogPage = new RealtCatalogPage(page);
	}

	async selectRealtTypeInFilter(realtType: string, roomCount: string) {
		await test.step(`Select ${realtType} in search filter`, async () => {
			await this.realtSearchFilter.clickFilterItem(realtType);
			return await this.realtSearchFilter.clickFilterItem(roomCount);
		});
	}

	async setPriceInFilter(pricefrom: string, priceTo: string) {
		await test.step(`Set price from ${pricefrom} to ${priceTo} in search filter`, async () => {
			return await this.realtSearchFilter.fillPriceToInput(priceTo);
		});
	}

	async selectSubwayTypeInFilter(subwayType: string) {
		await test.step(`Select subway type ${subwayType} in search filter`, async () => {
			return await this.realtSearchFilter.selectSubwayDropdownItem(subwayType);
		});
	}

	async selectSortingType(sortingType: string) {
		await test.step(`Select sorting type ${sortingType}`, async () => {
			let offerID = await this.realtCatalogPage.getOfferID();
			await this.realtCatalogPage.clickSortingDropdown();
			await this.realtCatalogPage.clickSortingDropdownItems(sortingType);
			await this.realtCatalogPage.waitOffersAreReloaded();
			return await this.realtCatalogPage.validateDisplayingOffer(offerID as string);
		});
	}
}
