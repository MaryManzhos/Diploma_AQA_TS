import { SEARCH_STRING_SEARCH_FRAME } from '../data/searchData';
import { EXISTED_USER_AUTH_COOCKIES } from '../data/users';
import { test } from '../fixtures/setup.fixture';
import { SortingTypes } from '../types/sorting.types';

test.describe('Order tests', () => {
	test.beforeEach('Setup auth coockies', async ({ setupSteps }) => {
		await setupSteps.addCoockies(EXISTED_USER_AUTH_COOCKIES);
	});

	test('User can chekout the order', async ({ searchSteps, productSteps, cartSteps }) => {
		await searchSteps.fillSearchInputOnTheMainPage(SEARCH_STRING_SEARCH_FRAME);
		await searchSteps.selectFindedProduct(SEARCH_STRING_SEARCH_FRAME);
		await productSteps.openOffersTab();
		await productSteps.sortOffers(SortingTypes.priceAsc);
		await productSteps.addToCartFromBestOffer();
		await productSteps.openCartPageWithProduct(SEARCH_STRING_SEARCH_FRAME);
		await cartSteps.goToCheckoutPage();
		await cartSteps.fillCheckoutForm();
	});

	test.afterEach('Remove orders from cart', async ({ setupSteps, cartSteps, productSteps }) => {
		await cartSteps.openMainPage();
		await productSteps.openCartPageWithProduct(SEARCH_STRING_SEARCH_FRAME);
		await cartSteps.goToCheckoutPage();
		await cartSteps.removeAddressFromCheckout();
		await cartSteps.openMainPage();
		await productSteps.openCartPageWithProduct(SEARCH_STRING_SEARCH_FRAME);
		await cartSteps.removeOrderFromCart();
	});
});
