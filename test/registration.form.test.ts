import { RegistrationForm } from '../src/registration.form';

let registrationForm: RegistrationForm;

beforeEach(() => {
	registrationForm = new RegistrationForm();
});

describe('Set email tests', () => {
	const validEmails = [
		'12345@gmail.com',
		'TesT@gmail.com',
		'T12_S-t.Gt@gmail.com',
		'T12_S-t.Gt9@gmail.com',
		'TE.st_123t-t@_g-MA.Il_987.com',
		'TE.st_123t-t@-g-MA.Il_987.com',
		'TE.st_123t-t@g-MA.Il_987.by.c_O-m',
		'TE.st_123t-t@g-MA.Il_987.c_O-m.BY',
	];

	test.each(validEmails)('Set valid emails', (validEmail) => {
		registrationForm.setEmail(validEmail);
		expect(registrationForm.email).toEqual(validEmail);
	});

	const invalidEmails = [
		'',
		'_loGin123@gmail.com',
		'-loGin123@gmail.com',
		'.loGin123@gmail.com',
		'loGin123_@gmail.com',
		'loGin123-@gmail.com',
		'loGin123.@gmail.com',
		'логин@gamil.com',
		'fh&*!)df@gmail.com',
		'TesTgmail.com',
		'login@.com',
		'login@!.com',
		'login@com',
		'login@gmail.123_com',
		'login@gmail.c',
		'login@gmail.&^',
		'login@gmail.com.^',
	];

	test.each(invalidEmails)('Set invalid emails', (invalidEmail) => {
		expect(() => registrationForm.setEmail(invalidEmail)).toThrow('Invalid email!');
	});
});

describe('Set password tests', () => {
	const validPasswords = ['paSS_wor!@#$%^&*()_+d123', '12345678', 'pass56789', '!@#%^*123dfjksd'];

	test.each(validPasswords)('Set valid passwords', (validPassword) => {
		registrationForm.setPassword(validPassword);
		expect(registrationForm.password).toEqual(validPassword);
	});

	const invalidPasswords = ['', 'qwerцукенtyY@*!@#$%^&*()_+', 'qwErty7'];

	test.each(invalidPasswords)('Set invalid passwords', (invalidPassword) => {
		expect(() => registrationForm.setPassword(invalidPassword)).toThrow('Invalid password!');
	});
});

describe('Set username tests', () => {
	const validUsernames = [' userName ', 'user name', 'userName', 'USER123name!@#$%^&*()_+явыломрв3267'];

	test.each(validUsernames)('Set valid passwords', (validUsername) => {
		registrationForm.setUsername(validUsername);
		expect(registrationForm.username).toEqual(validUsername);
	});

	const invalidUsernames = ['   ', ''];

	test.each(invalidUsernames)('Set invalid passwords', (invalidUsername) => {
		expect(() => registrationForm.setUsername(invalidUsername)).toThrow('Invalid username!');
	});
});

describe('Set age tests', () => {
	const validAges = [1, 149];

	test.each(validAges)('Set valid ages', (validAge) => {
		registrationForm.setAge(validAge);
		expect(registrationForm.age).toEqual(validAge);
	});

	const invalidAges = [-1, 0, 150, 151];

	test.each(invalidAges)('Set invalid ages', (invalidAge) => {
		expect(() => registrationForm.setAge(invalidAge)).toThrow('Invalid age!');
	});
});

describe('Set terms agreement tests', () => {
	test('Set terms agreement', () => {
		registrationForm.agreeWithTerms();
		expect(registrationForm.termsAgreement).toBeTruthy();
	});
});

describe('Register tests', () => {
	const validCredentials = [
		{
			email: 'T12_S-t.Gt@gmail.com',
			password: 'paSS_wor!@#$%^&*()_+d123',
			userName: 'userName',
			age: 18,
			resultMessage: 'Registration is successful!',
		},
	];

	test.each(validCredentials)('Successful registration', (validCredential) => {
		registrationForm.setEmail(validCredential.email);
		registrationForm.setPassword(validCredential.password);
		registrationForm.setUsername(validCredential.userName);
		registrationForm.setAge(validCredential.age);
		registrationForm.agreeWithTerms();
		expect(registrationForm.register()).toContain(validCredential.resultMessage);
		expect(registrationForm.registered).toBeTruthy();
	});

	const invalidCredentials = [
		{
			caseID: 1,
			email: '_loGin123@gmail.com',
			password: 'paSS_wor!@#$%^&*()_+d123',
			userName: 'userName',
			age: 21,
			resultMessage: 'Registration is failed! Reason(s):\n' + 'Invalid email!\n',
		},
		{
			caseID: 2,
			email: 'T12_S-t.Gt@gmail.com',
			password: 'qwErty7',
			userName: 'userName',
			age: 21,
			resultMessage: 'Registration is failed! Reason(s):\n' + 'Invalid password!\n',
		},
		{
			caseID: 3,
			email: 'T12_S-t.Gt@gmail.com',
			password: 'paSS_wor!@#$%^&*()_+d123',
			userName: '   ',
			age: 21,
			resultMessage: 'Registration is failed! Reason(s):\n' + 'Invalid username!\n',
		},
		{
			caseID: 4,
			email: 'T12_S-t.Gt@gmail.com',
			password: 'paSS_wor!@#$%^&*()_+d123',
			userName: 'userName',
			age: 0,
			resultMessage: 'Registration is failed! Reason(s):\n' + 'Invalid age!\n',
		},
		{
			caseID: 5,
			email: 'T12_S-t.Gt@gmail.com',
			password: 'paSS_wor!@#$%^&*()_+d123',
			userName: 'userName',
			age: 21,
			resultMessage: 'Registration is failed! Reason(s):\n' + 'Agreement not received!\n',
		},
		{
			caseID: 6,
			email: '_loGin123@gmail.com',
			password: 'qwErty7',
			userName: '   ',
			age: 0,
			resultMessage:
				'Registration is failed! Reason(s):\n' +
				'Invalid email!\n' +
				'Invalid password!\n' +
				'Invalid username!\n' +
				'Invalid age!\n' +
				'Agreement not received!\n',
		},
	];

	test.each(invalidCredentials)('Failed registration', (invalidCredential) => {
		switch (invalidCredential.caseID) {
			case 1:
				try {
					registrationForm.setEmail(invalidCredential.email);
				} catch (error) {
				} finally {
					registrationForm.setPassword(invalidCredential.password);
					registrationForm.setUsername(invalidCredential.userName);
					registrationForm.setAge(invalidCredential.age);
					registrationForm.agreeWithTerms();
				}
				break;
			case 2:
				try {
					registrationForm.setPassword(invalidCredential.password);
				} catch (error) {
				} finally {
					registrationForm.setEmail(invalidCredential.email);
					registrationForm.setUsername(invalidCredential.userName);
					registrationForm.setAge(invalidCredential.age);
					registrationForm.agreeWithTerms();
				}
				break;
			case 3:
				try {
					registrationForm.setUsername(invalidCredential.userName);
				} catch (error) {
				} finally {
					registrationForm.setEmail(invalidCredential.email);
					registrationForm.setPassword(invalidCredential.password);
					registrationForm.setAge(invalidCredential.age);
					registrationForm.agreeWithTerms();
				}
				break;
			case 4:
				try {
					registrationForm.setAge(invalidCredential.age);
				} catch (error) {
				} finally {
					registrationForm.setEmail(invalidCredential.email);
					registrationForm.setPassword(invalidCredential.password);
					registrationForm.setUsername(invalidCredential.userName);
					registrationForm.agreeWithTerms();
				}
				break;
			case 5:
				registrationForm.setAge(invalidCredential.age);
				registrationForm.setEmail(invalidCredential.email);
				registrationForm.setPassword(invalidCredential.password);
				registrationForm.setUsername(invalidCredential.userName);
				break;
			case 6:
				try {
					registrationForm.setEmail(invalidCredential.email);
				} catch (error) {}

				try {
					registrationForm.setPassword(invalidCredential.password);
				} catch (error) {}

				try {
					registrationForm.setUsername(invalidCredential.userName);
				} catch (error) {}

				try {
					registrationForm.setAge(invalidCredential.age);
				} catch (error) {}
				break;
			default:
				break;
		}

		expect(registrationForm.register()).toEqual(invalidCredential.resultMessage);
		expect(registrationForm.registered).toBeFalsy();
	});
});
