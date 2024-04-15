import { ENDPOINT_PHOTOS } from '../data/routes';
import { CommonResponse } from '../dto/common.response';
import { INewPhotoModel } from '../models/new.photo.model';
import { IPhotoModel } from '../models/photo.model';
import { get, post } from './common.api';

export async function getAllPhotos(): Promise<CommonResponse<IPhotoModel[]>> {
	const path = `${ENDPOINT_PHOTOS}`;
	return await get(path);
}

export async function getPhotosByAlbumID(albumID: number): Promise<CommonResponse<IPhotoModel[]>> {
	const path = `${ENDPOINT_PHOTOS}`;
	const params = {
		albumId: albumID,
	};
	return await get(path, params);
}

export async function getPhotoByID(id: number): Promise<CommonResponse<IPhotoModel>> {
	const path = `${ENDPOINT_PHOTOS}/${id}`;
	return await get(path);
}

export async function createNewPhoto(newPhoto: INewPhotoModel): Promise<CommonResponse<IPhotoModel>> {
	const path = `${ENDPOINT_PHOTOS}`;
	return await post(path, newPhoto);
}
