import { test } from '../fixtures/setup.fixture';

test.describe('Catalog of realty tests', () => {
	test('User can work with realt catalog', async ({ mainNavigationSteps, realtCatalogSteps }) => {
		await mainNavigationSteps.goToRealtCatalogPage();
		await realtCatalogSteps.selectRealtTypeInFilter('Квартира', '2');
		await realtCatalogSteps.setPriceInFilter('', '500');
		await realtCatalogSteps.selectSubwayTypeInFilter('Возле метро');
		await realtCatalogSteps.selectSortingType('Сначала дорогие');
	});
});
