import { ENDPOINT_ALBUMS } from '../data/routes';
import { CommonResponse } from '../dto/common.response';
import { IAlbumModel } from '../models/album.model';
import { INewAlbumModel } from '../models/new.album';
import { get, post } from './common.api';

export async function getAllAbums(): Promise<CommonResponse<IAlbumModel[]>> {
	const path = `${ENDPOINT_ALBUMS}`;
	return get(path);
}

export async function getAlbumByID(id: number): Promise<CommonResponse<IAlbumModel>> {
	const path = `${ENDPOINT_ALBUMS}/${id}`;
	return get(path);
}

export async function getAlbumsByUserID(userID: number): Promise<CommonResponse<IAlbumModel[]>> {
	const path = `${ENDPOINT_ALBUMS}`;
	const params = {
		userId: userID,
	};
	return await get(path, params);
}

export async function createNewAlbum(newAlbum: INewAlbumModel): Promise<CommonResponse<IAlbumModel>> {
	const path = `${ENDPOINT_ALBUMS}`;
	return await post(path, newAlbum);
}
