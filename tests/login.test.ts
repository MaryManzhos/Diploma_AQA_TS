import { EXISTED_USER } from '../data/users';
import { test } from '../fixtures/setup.fixture';

test.describe('Login tests', () => {
	test('User can log in with valid credentials', async ({ loginSteps }) => {
		await loginSteps.openLoginPage();
		await loginSteps.loginUser(EXISTED_USER);
	});
});
