import { BasePage } from '../base.page';

export class MatchingTab extends BasePage {
	private readonly tab = this.page.locator('a.compare-button__sub').filter({ hasText: 'в сравнении' });

	public async goToMatchingPage() {
		await this.tab.click();
	}

	public async waitForMatchinPopupIsDislayed() {
		await this.tab.waitFor({ state: 'visible' });
	}
}
