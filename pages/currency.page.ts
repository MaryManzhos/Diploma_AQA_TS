import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CurrencyPage extends BasePage {
	private readonly buttons = {
		buy: this.page.locator('label[for="buy"]'),
	};

	private readonly amountInput = this.page.locator('#amount-in');

	private readonly currencySelect = this.page.locator('#currency-in');

	private readonly courseBuyCurrency = this.page.locator("//b[contains(text(), '1 EUR')]/ancestor::table[contains(@class, 'b-currency-table__best')]//td[3]//b");

	private readonly resultAmount = this.page.locator("//li[contains(@class, 'result')]/b");

	public async clickBuyButton() {
		await this.buttons.buy.click();
	}

	public async fillAmountInput(amount: string) {
		await this.amountInput.fill(amount);
	}

	public async selectCurrency(currencyName: string) {
		await this.currencySelect.selectOption({ label: currencyName });
	}

	public async waitForResultIsLoaded() {
		await this.page.waitForTimeout(3000);
	}

	public async validateAmountConvert(inputAmount: string) {
		let courseEuroString = await this.courseBuyCurrency.innerText();
		let courseEuroNumber = courseEuroString.trim().replace(',', '.').replace('BYN', '');
		let expectedResultAmount = +courseEuroNumber * +inputAmount;
		await expect(this.resultAmount).toContainText(`${expectedResultAmount}`);
	}
}
