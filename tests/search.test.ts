import { SEARCH_STRING_MAIN_SEARCH, SEARCH_STRING_SEARCH_FRAME } from '../data/searchData';
import { test } from '../fixtures/setup.fixture';

test.describe('Search tests', () => {
	test('User can search by product', async ({ searchSteps }) => {
		await searchSteps.fillSearchInputOnTheMainPage(SEARCH_STRING_MAIN_SEARCH);
		await searchSteps.clearSearchInputOnSearchFrame();
		await searchSteps.fillSearchInputOnSearchFrame(SEARCH_STRING_SEARCH_FRAME);
		await searchSteps.selectFindedProduct(SEARCH_STRING_SEARCH_FRAME);
	});
});
