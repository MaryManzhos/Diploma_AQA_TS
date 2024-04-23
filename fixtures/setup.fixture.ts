import { test as base } from '@playwright/test';
import { LoginSteps } from '../steps/login.steps';
import { RegistrationSteps } from '../steps/registration.steps';
import { SetupSteps } from '../steps/setup.steps';
import { NewsSteps } from '../steps/news.steps';
import { SearchSteps } from '../steps/search.steps';
import { allure } from 'allure-playwright';
import { CatalogSteps } from '../steps/catalog.steps';
import { ProductSteps } from '../steps/product.steps';
import { CartSteps } from '../steps/cart.steps';
import { CurrencySteps } from '../steps/currency.steps';
import { MainNavigationSteps } from '../steps/main.navigation.steps';
import { RealtCatalogSteps } from '../steps/realt.catalog.steps';
import { UserSupportSteps } from '../steps/user.support.steps';

type SetupFixtures = {
	allureInfo: void;
	openPage: void;

	setupSteps: SetupSteps;
	loginSteps: LoginSteps;
	registrationSteps: RegistrationSteps;
	newsSteps: NewsSteps;
	searchSteps: SearchSteps;
	catalogSteps: CatalogSteps;
	productSteps: ProductSteps;
	cartSteps: CartSteps;
	currencySteps: CurrencySteps;
	mainNavigationSteps: MainNavigationSteps;
	realtCatalogSteps: RealtCatalogSteps;
	userSupportSteps: UserSupportSteps;
};

export const test = base.extend<SetupFixtures>({
	allureInfo: [
		async ({ }, use) => {
			await defaultAllureInfo();
			await use();
		},
		{ auto: true },
	],

	openPage: [
		async ({ baseURL, page }, use) => {
			if (baseURL) {
				await page.goto(baseURL);
			}

			await use();
		},
		{ auto: true },
	],

	setupSteps: async ({ page }, use) => {
		await use(new SetupSteps(page));
	},
	loginSteps: ({ page }, use) => use(new LoginSteps(page)),
	registrationSteps: ({ page }, use) => use(new RegistrationSteps(page)),
	newsSteps: ({ page }, use) => use(new NewsSteps(page)),
	searchSteps: ({ page }, use) => use(new SearchSteps(page)),
	catalogSteps: ({ page }, use) => use(new CatalogSteps(page)),
	productSteps: ({ page }, use) => use(new ProductSteps(page)),
	cartSteps: ({ page }, use) => use(new CartSteps(page)),
	currencySteps: ({ page }, use) => use(new CurrencySteps(page)),
	mainNavigationSteps: ({ page }, use) => use(new MainNavigationSteps(page)),
	realtCatalogSteps: ({ page }, use) => use(new RealtCatalogSteps(page)),
	userSupportSteps: ({ page }, use) => use(new UserSupportSteps(page)),
});

export const defaultAllureInfo = async () => {
	allure.parentSuite('Onliner tests');
};
