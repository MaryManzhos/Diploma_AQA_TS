import { Page } from '@playwright/test';
import { MainNavigationMenu } from '../pages/components/main.navigation.menu';
import { test } from '../fixtures/setup.fixture';

export class MainNavigationSteps {
	private readonly mainNavigationMenu: MainNavigationMenu;

	constructor(page: Page) {
		this.mainNavigationMenu = new MainNavigationMenu(page);
	}

	async openCatalogPage() {
		await test.step(`Open catalog page`, async () => {
			return await this.mainNavigationMenu.clickItem('Каталог');
		});
	}

	async goToRealtCatalogPage() {
		await test.step(`Go to realt catalog page`, async () => {
			await this.mainNavigationMenu.focusOnItem('Дома и квартиры');
			await this.mainNavigationMenu.waitDropdownIsDisplayed();
			return await this.mainNavigationMenu.clickDropdownTitle('Минск');
		});
	}
}
