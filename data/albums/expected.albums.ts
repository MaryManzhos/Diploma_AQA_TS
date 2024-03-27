import { IAlbumModel } from '../../models/album.model';

export const expectedAlbumsCount: number = 100;

export const albumID = 99;

export const albumUserID = 4;

export const expectedAlbumsByUserIDCount = 10;

export const expectedFirsAlbum: IAlbumModel = {
	userId: 1,
	id: 1,
	title: 'quidem molestiae enim',
};

export const expectedMediumAlbum: IAlbumModel = {
	userId: 5,
	id: 50,
	title: 'sed qui sed quas sit ducimus dolor',
};

export const expectedLastAlbum: IAlbumModel = {
	userId: 10,
	id: 100,
	title: 'enim repellat iste',
};

export const expectedAllAlbums: IAlbumModel[] = [expectedFirsAlbum, expectedMediumAlbum, expectedLastAlbum];

export const expectedAlbumByID: IAlbumModel = {
	userId: 10,
	id: 99,
	title: 'consectetur ut id impedit dolores sit ad ex aut',
};

export const expectedFirsAlbumByUserID: IAlbumModel = {
	userId: 4,
	id: 31,
	title: 'adipisci laborum fuga laboriosam',
};

export const expectedMediumAlbumByUserID: IAlbumModel = {
	userId: 4,
	id: 35,
	title: 'et impedit nisi quae magni necessitatibus sed aut pariatur',
};

export const expectedLastAlbumByUserID: IAlbumModel = {
	userId: 4,
	id: 40,
	title: 'voluptas neque et sint aut quo odit',
};

export const expectedAlbumsByUserID: IAlbumModel[] = [
	expectedFirsAlbumByUserID,
	expectedMediumAlbumByUserID,
	expectedLastAlbumByUserID,
];
