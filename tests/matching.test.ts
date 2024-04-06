import { test } from '../fixtures/setup.fixture';

test.describe('Order matching tests', () => {
	test('User can match orders', async ({ mainNavigationSteps, catalogSteps, productSteps }) => {
		await mainNavigationSteps.openCatalogPage();
		await catalogSteps.goToProductPageFromPopularCategory('Телевизоры');
		await catalogSteps.chooseProduct('Телевизор', 1);
		await productSteps.addProductToMatching();
		await productSteps.backToProductsPage('Телевизоры');
		await catalogSteps.chooseProduct('Телевизор', 5);
		await productSteps.addProductToMatching();
		await productSteps.openMatchingTab();
	});
});
