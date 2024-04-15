import axios from 'axios';
import { BASE_URL } from '../data/routes';
import { CommonResponse } from '../dto/common.response';

export async function get(path: string, params?: any) {
	const url = `${BASE_URL}${path}`;

	let commonResponse: CommonResponse;
	try {
		let response = await axios.get(url, {
			params: params,
			headers: {
				Accept: 'application/json',
			},
		});

		commonResponse = {
			data: response.data,
			status: response.status,
		};
		return commonResponse;
	} catch (error: any) {
		commonResponse = {
			status: error.response.status,
		};
		return commonResponse;
	}
}

export async function post(path: string, body: object) {
	const url = `${BASE_URL}${path}`;

	let commonResponse: CommonResponse;
	try {
		let response = await axios.post(url, body, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		commonResponse = {
			data: response.data,
			status: response.status,
		};
		return commonResponse;
	} catch (error: any) {
		commonResponse = {
			status: error.response.status,
		};
		return commonResponse;
	}
}

export async function put(path: string, body: object) {
	const url = `${BASE_URL}${path}`;

	let commonResponse: CommonResponse;
	try {
		let response = await axios.put(url, body, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		commonResponse = {
			data: response.data,
			status: response.status,
		};
		return commonResponse;
	} catch (error: any) {
		commonResponse = {
			status: error.response.status,
		};
		return commonResponse;
	}
}

export async function patch(path: string, body: object) {
	const url = `${BASE_URL}${path}`;

	let commonResponse: CommonResponse;
	try {
		let response = await axios.patch(url, body, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		commonResponse = {
			data: response.data,
			status: response.status,
		};
		return commonResponse;
	} catch (error: any) {
		commonResponse = {
			status: error.response.status,
		};
		return commonResponse;
	}
}

export async function _delete(path: string) {
	const url = `${BASE_URL}${path}`;

	let commonResponse: CommonResponse;
	try {
		let response = await axios.delete(url, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		commonResponse = {
			data: response.data,
			status: response.status,
		};
		return commonResponse;
	} catch (error: any) {
		commonResponse = {
			status: error.response.status,
		};
		return commonResponse;
	}
}
