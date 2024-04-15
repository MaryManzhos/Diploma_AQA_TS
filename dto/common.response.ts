export interface CommonResponse<T = any> {
	data?: T;
	status: number;
}
