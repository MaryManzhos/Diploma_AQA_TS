export class RegistrationForm {
	private _email: string = '';
	public get email(): string {
		return this._email;
	}
	private _password: string = '';
	public get password(): string {
		return this._password;
	}
	private _username: string = '';
	public get username(): string {
		return this._username;
	}
	private _age: number = 0;
	public get age(): number {
		return this._age;
	}
	private _termsAgreement: boolean = false;
	public get termsAgreement(): boolean {
		return this._termsAgreement;
	}
	private _registered: boolean = false;
	public get registered(): boolean {
		return this._registered;
	}

	public setEmail(email: string) {
		let emailRegExp =
			/^((([0-9A-Za-z]{1}[-_0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-_A-Za-z0-9]{1,}\.){1,2}[-_A-Za-z\.]{2,})$/;

		if (emailRegExp.exec(email) != null) {
			this._email = email;
		} else {
			throw new Error('Invalid email!');
		}
	}

	public setPassword(password: string) {
		let passwordRegExp = /(?=.*[0-9]).{8,}/;

		if (passwordRegExp.exec(password) != null) {
			this._password = password;
		} else {
			throw new Error('Invalid password!');
		}
	}

	public setUsername(username: string) {
		if (username.trim() != '') {
			this._username = username;
		} else {
			throw new Error('Invalid username!');
		}
	}

	public setAge(age: number) {
		if (age > 0 && age < 150) {
			this._age = age;
		} else {
			throw new Error('Invalid age!');
		}
	}

	public agreeWithTerms() {
		this._termsAgreement = true;
	}

	public register() {
		let errorString: string = '';
		errorString += this._email == '' ? 'Invalid email!\n' : '';
		errorString += this._password == '' ? 'Invalid password!\n' : '';
		errorString += this._username == '' ? 'Invalid username!\n' : '';
		errorString += this._age == 0 ? 'Invalid age!\n' : '';
		errorString += !this._termsAgreement ? 'Agreement not received!\n' : '';

		if (errorString.trim() != '') {
			return 'Registration is failed! Reason(s):\n' + errorString;
		} else {
			let date = new Date();
			let currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
			let currentTime = `${date.getTime()}`;
			this._registered = true;
			return 'Registration is successful! ' + 'Date of registration: ' + currentDate + ' ' + currentTime + '!';
		}
	}
}
