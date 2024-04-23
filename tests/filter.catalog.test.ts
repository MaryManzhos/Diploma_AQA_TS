import { test } from '../fixtures/setup.fixture';

test.describe('Filter catalog tests', () => {
	test('User can filtered products', async ({ mainNavigationSteps, catalogSteps }) => {
		await mainNavigationSteps.openCatalogPage();
		await catalogSteps.openProductsCtegoryPage();
		await catalogSteps.setBrandInFilter('ASUS');
		await catalogSteps.setMatrixFrequencyInFilter('120 Гц', '165 Гц');
		await catalogSteps.setBonusInFilter('Суперцена');
		await catalogSteps.deleteFilterTag('Суперцена', ['ASUS', '120 Гц - 165 Гц']);
	});
});
