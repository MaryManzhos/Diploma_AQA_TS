import { EXISTED_USER_AUTH_COOCKIES } from '../data/users';
import { test } from '../fixtures/setup.fixture';

test.describe('News tests', () => {
	test.beforeEach('Setup', async ({ setupSteps }) => {
		await setupSteps.addCoockies(EXISTED_USER_AUTH_COOCKIES);
	});

	test('User can add rection to the news', async ({ newsSteps }) => {
		await newsSteps.opneAutoNewsPage();
		await newsSteps.addReaction();
		await newsSteps.addReaction();
	});
});
