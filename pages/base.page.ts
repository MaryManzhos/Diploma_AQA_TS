import { Page } from '@playwright/test';
import { Coockie } from '../types/models/coockie';

export abstract class BasePage {
	constructor(protected readonly page: Page) {}

	public async openPage(url: string = '') {
		await this.page.goto(url);
	}

	public async reloadPage() {
		await this.page.reload();
	}

	public async waitForPageIsLoaded() {
		await this.page.waitForTimeout(3000);
	}

	public async addCoockies(coockies: Coockie[]) {
		await this.page.context().addCookies(coockies);
	}

	public async clearCoockie() {
		await this.page.context().clearCookies();
	}
}
