import { expect } from '@playwright/test';
import { BasePage } from '../base.page';

export class ReactionBar extends BasePage {

	private initialReactionCount: number = 0;

	private reactionCount: number = 0;

	private readonly reactionItems = {
		slightSmile: this.page.locator('div[data-reaction="slight_smile"]'),
		slightSmileCount: this.page.locator('div[data-reaction="slight_smile"]').locator('span.st-count')
	};

	private readonly newsLink = this.page.locator('div.news-reference__list');
	private readonly newsItem = this.page.locator('div.news-text');

	public async waitForNewsIsLoaded() {
		return await this.newsLink.first().waitFor({state: 'visible'})
	}

	public async scrollPage() {
		await this.newsLink.first().scrollIntoViewIfNeeded();
	}

	public async waitForReactionIsLoaded() {
		return await this.reactionItems.slightSmile.first().waitFor({state: "visible", timeout: 3000});
	}

	public async addReaction() {
		await this.reactionItems.slightSmile.first().focus();
		await this.reactionItems.slightSmile.first().click();
	}

	public async setReactionCount() {
		this.initialReactionCount = +(await this.reactionItems.slightSmile.first().innerText({timeout: 3000}));
		this.reactionCount = this.initialReactionCount + 1;
	}

	public async getReactionCount() {
		this.initialReactionCount = +(await this.reactionItems.slightSmile.first().innerText({timeout: 3000}));
		this.reactionCount = this.initialReactionCount + 1;
	}

	public async validateReactionCount() {
		await expect(this.reactionItems.slightSmileCount.first()).toContainText((this.reactionCount).toString());

	}

	public async validateAddedReactionCount() {
		await expect(this.reactionItems.slightSmileCount.first()).toContainText((this.initialReactionCount).toString());
	}
}
