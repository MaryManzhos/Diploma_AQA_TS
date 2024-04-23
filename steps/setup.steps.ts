import { Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { test } from '../fixtures/setup.fixture';
import { Coockie } from '../types/models/coockie';

export class SetupSteps {
	private readonly mainPage: MainPage;

	constructor(page: Page) {
		this.mainPage = new MainPage(page);
	}

	public async addCoockies(coockies: Coockie[]) {
		await test.step('Add coockies', async () => {
			return await this.mainPage.addCoockies(coockies);
		});
	}

	public async clearAllCoockie() {
		await test.step('Clear all coockies', async () => {
			return await this.mainPage.clearCoockie();
		});
	}

}
