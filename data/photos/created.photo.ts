import { INewPhotoModel } from '../../models/new.photo.model';

export const newPhoto: INewPhotoModel = {
	albumId: 30,
	title: 'New photo title',
	url: 'New URL',
	thumbnailUrl: 'New thumbnail URL',
};

export const newPhotoWithoutAlbumID: INewPhotoModel = {
	title: 'New photo title',
	url: 'New URL',
	thumbnailUrl: 'New thumbnail URL',
};

export const newPhotoWithNotExistedAlbumID: INewPhotoModel = {
	albumId: 200,
	title: 'New photo title',
	url: 'New URL',
	thumbnailUrl: 'New thumbnail URL',
};
