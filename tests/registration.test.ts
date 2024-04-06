import { REGISTRATION_USER } from '../data/users';
import { test } from '../fixtures/setup.fixture';

test.describe('Registration tests', () => {
	test('New user can register account', async ({ loginSteps, registrationSteps }) => {
		await loginSteps.openLoginPage();
		await loginSteps.openRegistrationPage();
		await registrationSteps.fillEmailField(REGISTRATION_USER);
		await registrationSteps.confirmAgreement();
		await registrationSteps.registerNewUserWithErrors();
		await registrationSteps.fillPasswordField(REGISTRATION_USER);
		await registrationSteps.fillRepeatPasswordField(REGISTRATION_USER);
		await registrationSteps.registerNewUser();
	});
});
