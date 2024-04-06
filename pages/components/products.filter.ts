import { expect } from '@playwright/test';
import { BasePage } from '../base.page';

export class ProductsFilter extends BasePage {
	private readonly checkboxes = this.page.locator('label.catalog-form__checkbox-label');

	private readonly brandASUScheckbox = this.page.locator("//div[contains(@class, 'catalog-form__checkbox-sign') and text() = 'ASUS']//ancestor::label[contains(@class, 'catalog-form__checkbox-label')]//div[contains(@class,'i-checkbox__faux')]");

	private readonly interactionStateAnimated = this.page.locator('div.catalog-interaction__state_animated');

	private readonly interactionState = this.page.locator('div.catalog-interaction__state_disabled');

	private readonly selectOptions = this.page.locator('select.input-style__real');

	private readonly superPrice = this.page.locator('div.catalog-form__bonus-title');

	private readonly tagItems = this.page.locator('div.catalog-form__tag-item');

	public async clicAsusBrandCheckbox() {
		await this.brandASUScheckbox.click();
	}

	public async clickCheckbox(labelName: string) {
		await this.checkboxes.filter({ hasText: labelName }).click({ timeout: 5000 });
	}

	public async waitForInteractionStateAnimatedIsDisabled() {
		await this.interactionStateAnimated.waitFor({ state: 'detached', timeout: 3000 });
	}

	public async waitForInteractionStateIsDisplaying() {
		await this.interactionState.waitFor({ state: 'visible' });
	}

	public async selectFirstSelect(option: string) {
		await this.selectOptions.filter({ hasText: '120 Гц' }).first().selectOption({ label: option });
	}

	public async selectSecondSelect(option: string) {
		(await this.selectOptions.filter({ hasText: '120 Гц' }).all())[1].selectOption({ label: option });
	}

	public async clickBonusCheckbox(bonusName: string) {
		await this.superPrice.filter({ hasText: bonusName }).click();
	}

	public async waitForTagItemIsDisplying(itemName: string) {
		await this.tagItems.filter({ hasText: itemName }).waitFor({state: "attached"});
	}

	public async clickTagItem(itemName: string) {
		await this.tagItems.filter({ hasText: itemName }).click();
	}

	public async getProductsCount() {
		let text = await this.interactionState.textContent();
		let arrayText = (text as string).trim().split(' ');
		let newArrayText = arrayText.filter((value) => {
			return value != '';
		});
		let productCount = newArrayText.filter((value) => {
			return Number.isInteger(+value);
		});
		return +productCount;
	}

	public validateProductsCount(productsCountWithoutFilter: number, productsCountWithFilter: number) {
		return expect(productsCountWithFilter).toBeLessThan(productsCountWithoutFilter);
	}

	public async valigateFilterTags(tagName: string, isVisible: boolean) {
		return await expect(this.tagItems.filter({ hasText: tagName })).toBeVisible({ visible: isVisible });
	}
}
