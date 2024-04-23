import { test } from '../fixtures/setup.fixture';

test.describe('User support tests', () => {
	test('User can use support', async ({ userSupportSteps }) => {
		await userSupportSteps.openUserSupportPage();
		await userSupportSteps.fillSupportForm();
	});
});
