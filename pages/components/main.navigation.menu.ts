import { BasePage } from '../base.page';

export class MainNavigationMenu extends BasePage {
	private readonly items = this.page.locator('a.b-main-navigation__link');
	private readonly dropdowns = this.page.locator('div.b-main-navigation__dropdown_visible');
	private readonly dropdownRentTitle = this.page.locator(
		"//a[contains(text(), 'Аренда')]/ancestor::div[contains(@class, 'b-main-navigation__dropdown-column')]"
	);

	public async clickItem(itemName: string) {
		await this.items.filter({ hasText: itemName }).click();
	}

	public async focusOnItem(itemName: string) {
		await this.items.filter({ hasText: itemName }).hover();
	}

	public async waitDropdownIsDisplayed() {
		await this.dropdowns.first().waitFor({ state: 'attached' });
	}

	public async clickDropdownTitle(cityName: string) {
		await this.dropdownRentTitle.getByText(cityName).click();
	}
}
