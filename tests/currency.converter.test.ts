import { test } from '../fixtures/setup.fixture';

test.describe('Currency converter tests', () => {
	test('User can convert currency', async ({ currencySteps }) => {
		await currencySteps.openCurrencyPage();
		await currencySteps.chooseBuyConvertion();
		await currencySteps.fillAmountInput('1000');
		await currencySteps.selectCurrency('EUR', '1000');
	});
});
