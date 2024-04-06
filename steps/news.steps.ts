import { Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { test } from '../fixtures/setup.fixture';
import { ReactionBar } from '../pages/components/reaction.bar';
import { NewsPage } from '../pages/news.page';

export class NewsSteps {
	private readonly mainPage: MainPage;
	private readonly newsPage: NewsPage;
	private readonly reactionBar: ReactionBar;

	constructor(page: Page) {
		this.mainPage = new MainPage(page);
		this.reactionBar = new ReactionBar(page);
		this.newsPage = new NewsPage(page);
	}

	async opneAutoNewsPage() {
		await test.step(`Open first news by category "АВТО"`, async () => {
			await this.mainPage.goToFirstNewsFromCategory();
			await this.newsPage.waitForNewsItemIsLoaded();
			return await this.newsPage.waitForPageIsLoaded();
		});
	}

	async addReaction() {
		await test.step('Add reaction "LIKE"', async () => {
			if (!await this.newsPage.isNewsItemAdded()) {
				await this.reactionBar.waitForNewsIsLoaded();
				await this.reactionBar.scrollPage();
			}
			await this.reactionBar.waitForReactionIsLoaded();
			await this.reactionBar.setReactionCount();
			await this.reactionBar.addReaction();
			if (await this.newsPage.isNewsItemAdded()) {
				return await this.reactionBar.validateAddedReactionCount();
			} else {
				return await this.reactionBar.validateReactionCount();
			}
		});
	}

	async addAddedReaction() {
		await test.step('Add reaction "LIKE"', async () => {
			await this.reactionBar.reloadPage();
			await this.newsPage.waitForPageIsLoaded();
			if (!await this.newsPage.isNewsItemAdded()) {
				await this.reactionBar.waitForNewsIsLoaded();
				await this.reactionBar.scrollPage();
			}
			await this.reactionBar.waitForReactionIsLoaded();
			await this.reactionBar.setReactionCount();
			await this.reactionBar.addReaction();
			return await this.reactionBar.validateReactionCount();
		});
	}
}
