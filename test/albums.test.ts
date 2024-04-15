import { createNewAlbum, getAlbumByID, getAlbumsByUserID, getAllAbums } from '../api/albums';
import { newAlbum } from '../data/albums/created.album';
import {
	albumID,
	albumUserID,
	expectedAlbumByID,
	expectedAlbumsByUserID,
	expectedAlbumsByUserIDCount,
	expectedAlbumsCount,
	expectedAllAlbums,
} from '../data/albums/expected.albums';

describe("Endpoint '/albums' tests", () => {
	test('Test - Getting all albums', async () => {
		const albums = await getAllAbums();
		expect(albums.status).toEqual(200);
		expect(albums.data).toHaveLength(expectedAlbumsCount);
		expect(albums.data).toEqual(expect.arrayContaining(expectedAllAlbums));
	});

	test('Test - Getting album by ID', async () => {
		const album = await getAlbumByID(albumID);
		expect(album.status).toEqual(200);
		expect(album.data).toEqual(expectedAlbumByID);
	});

	test('Test - Getting albums by userID', async () => {
		const albums = await getAlbumsByUserID(albumUserID);
		expect(albums.status).toEqual(200);
		expect(albums.data).toHaveLength(expectedAlbumsByUserIDCount);
		expect(albums.data).toEqual(expect.arrayContaining(expectedAlbumsByUserID));
	});

	test('Test - Creating new album', async () => {
		const createdAlbum = await createNewAlbum(newAlbum);
		expect(createdAlbum.status).toEqual(201);
		expect(createdAlbum.data?.id).not.toBeNull;
		expect(createdAlbum.data?.userId).toEqual(newAlbum.userId);
		expect(createdAlbum.data?.title).toEqual(newAlbum.title);
	});
});
