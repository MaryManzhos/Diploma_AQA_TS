import { BasePage } from "./base.page";

export class NewsPage extends BasePage {
    private readonly newsItem = this.page.locator('div.news-grid__part').first();

    private readonly newsItemSelected = this.page.locator('div.st-selected').first();

    public async waitForNewsItemIsLoaded() {
        await this.newsItem.waitFor({state: "attached"});
    }

    public async isNewsItemAdded() {
        return await this.newsItemSelected.isVisible();
    }

    public async waitForReactionAdded() {
        await this.newsItemSelected.waitFor({state: "visible"});
    }
}