import { Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { test } from '../fixtures/setup.fixture';
import { CurrencyPage } from '../pages/currency.page';

export class CurrencySteps {
	private readonly mainPage: MainPage;
	private readonly currencyPage: CurrencyPage;

	constructor(page: Page) {
		this.mainPage = new MainPage(page);
		this.currencyPage = new CurrencyPage(page);
	}

	async openCurrencyPage() {
		await test.step(`Go to currency page`, async () => {
			return await this.mainPage.goToCurrencyPage();
		});
	}

	async chooseBuyConvertion() {
		await test.step(`Choose buy currency`, async () => {
			return await this.currencyPage.clickBuyButton();
		});
	}

	async fillAmountInput(amount: string) {
		await test.step(`Fill amount field by ${amount}`, async () => {
			return await this.currencyPage.fillAmountInput(amount);
		});
	}

	async selectCurrency(currencyName: string, amount: string) {
		await test.step(`Select currency by ${currencyName}`, async () => {
			await this.currencyPage.selectCurrency(currencyName);
			await this.currencyPage.waitForResultIsLoaded();
			return await this.currencyPage.validateAmountConvert(amount);
		});
	}
}
