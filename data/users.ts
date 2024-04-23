import { Coockie } from '../types/models/coockie';
import { User } from '../types/models/user';

export const EXISTED_USER: User = {
	userName: 'onlinerUser@proton.me',
	password: 'onliner123/*---',
};

export const REGISTRATION_USER: User = {
	userName: 'userForRegistration@proton.me',
	password: 'on_liner_R_123/*---',
};

export const EXISTED_USER_AUTH_COOCKIES: Coockie[] = [
	{
		name: 'oss',
		value: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozODAyOTY5LCJ1c2VyX3R5cGUiOiJ1c2VyIiwiZmluZ2VycHJpbnQiOiIzYTQwYmYwODI5ZjAxNDZjMzg2NWYxNjZkNTk1OGMyOSIsImV4cCI6MjAyODU0OTYyMSwiaWF0IjoxNzEzMTg5NjIxfQ.rl2skWPf8nH0UYaEodcP4MJKBUxiqeuomJLUSNnjv0CmuFyDb9oF0zxhWil2nroXkDWM03tTZsaBkdOSgViJqg',
		domain: '.onliner.by',
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'Lax',
	},
	{
		name: 'logged_in',
		value: '1',
		domain: '.onliner.by',
		path: '/',
		httpOnly: false,
		secure: true,
		sameSite: 'Lax',
	},
	{
		name: 'fingerprint',
		value: 'd5192111-e1d4-4074-a5bc-f7276bc1b030',
		domain: '.onliner.by',
		path: '/',
		httpOnly: false,
		secure: true,
		sameSite: 'Lax',
	},
]