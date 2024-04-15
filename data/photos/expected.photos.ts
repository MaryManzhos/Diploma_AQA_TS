import { IPhotoModel } from '../../models/photo.model';

export const photoAlbumID: number = 7;

export const expectedPhotosByAlbumIDCount: number = 50;

export const photoID = 999;

export const expectedNewAlbumID = 101;

export const expectedFirstPhotoByAlbumID: IPhotoModel = {
	albumId: 7,
	id: 301,
	title: 'aspernatur est omnis qui laudantium illo in laborum dolore',
	url: 'https://via.placeholder.com/600/92ce9a',
	thumbnailUrl: 'https://via.placeholder.com/150/92ce9a',
};

export const expectedMediumPhotoByAlbumID: IPhotoModel = {
	albumId: 7,
	id: 325,
	title: 'libero perferendis quis suscipit reprehenderit',
	url: 'https://via.placeholder.com/600/e55861',
	thumbnailUrl: 'https://via.placeholder.com/150/e55861',
};

export const expectedLastPhotoByAlbumID: IPhotoModel = {
	albumId: 7,
	id: 350,
	title: 'et excepturi temporibus illum voluptatum a omnis ad',
	url: 'https://via.placeholder.com/600/1adbcb',
	thumbnailUrl: 'https://via.placeholder.com/150/1adbcb',
};

export const expectedPhotosByAlbumID: IPhotoModel[] = [
	expectedFirstPhotoByAlbumID,
	expectedMediumPhotoByAlbumID,
	expectedLastPhotoByAlbumID,
];

export const expectedPhotoByID: IPhotoModel = {
	albumId: 20,
	id: 999,
	title: 'dolorum excepturi et veniam assumenda sunt itaque',
	url: 'https://via.placeholder.com/600/ffa73e',
	thumbnailUrl: 'https://via.placeholder.com/150/ffa73e',
};
