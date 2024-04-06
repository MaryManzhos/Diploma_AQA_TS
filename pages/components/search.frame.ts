import { BasePage } from '../base.page';

export class SearchFrame extends BasePage {
	private readonly frame = {
		frameLocator: this.page.frameLocator('.modal-iframe'),
	};

	private readonly inputs = {
		searchInputLocator: this.frame.frameLocator.locator('.search__input'),
	};

	private readonly button = {
		closeButtonLocator: this.frame.frameLocator.locator('.search__close'),
	};

	private readonly resultItem = {
		resultItemsLocator: this.frame.frameLocator.locator('.result__item'),
	};

	async clearSearchInput() {
		await this.inputs.searchInputLocator.clear();
	}

	async fillSearchInput(searchString: string) {
		return await this.inputs.searchInputLocator.fill(searchString);
	}

	async closeSearchFrame() {
		await this.button.closeButtonLocator.click();
	}

	async waitForProductsAreNotDisplaying() {
		return await this.resultItem.resultItemsLocator.first().waitFor({state: "detached"});
	}

	async waitForProductsAreDisplaying() {
		return await this.resultItem.resultItemsLocator.first().waitFor({state: "attached"});
	}

	async chooseFindedProduct() {
		return await this.resultItem.resultItemsLocator.click();
	}
}
