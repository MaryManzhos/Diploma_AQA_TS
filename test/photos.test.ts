import { createNewPhoto, getPhotoByID, getPhotosByAlbumID } from '../api/photos';
import { newPhoto, newPhotoWithNotExistedAlbumID, newPhotoWithoutAlbumID } from '../data/photos/created.photo';
import {
	expectedPhotoByID,
	expectedPhotosByAlbumID,
	expectedPhotosByAlbumIDCount,
	photoAlbumID,
	photoID,
} from '../data/photos/expected.photos';

describe("Endpoint '/photos' tests", () => {
	test('Test - Getting all photos by albumID', async () => {
		const photos = await getPhotosByAlbumID(photoAlbumID);
		expect(photos.status).toEqual(200);
		expect(photos.data).toHaveLength(expectedPhotosByAlbumIDCount);
		expect(photos.data).toEqual(expect.arrayContaining(expectedPhotosByAlbumID));
	});

	test('Test - Getting photo by ID', async () => {
		const photo = await getPhotoByID(photoID);
		expect(photo.status).toEqual(200);
		expect(photo.data).toEqual(expectedPhotoByID);
	});

	test('Test - Creating new photo', async () => {
		const createdPhoto = await createNewPhoto(newPhoto);
		expect(createdPhoto.status).toEqual(201);
		expect(createdPhoto.data?.id).not.toBeNull;
		expect(createdPhoto.data?.albumId).toEqual(newPhoto.albumId);
		expect(createdPhoto.data?.title).toEqual(newPhoto.title);
		expect(createdPhoto.data?.url).toEqual(newPhoto.url);
		expect(createdPhoto.data?.thumbnailUrl).toEqual(newPhoto.thumbnailUrl);
	});

	test('Test - Creating new photo without albumID', async () => {
		const createdPhoto = await createNewPhoto(newPhotoWithoutAlbumID);
		expect(createdPhoto.status).toEqual(201);
		expect(createdPhoto.data?.id).not.toBeNull;
		expect(createdPhoto.data?.title).toEqual(newPhotoWithoutAlbumID.title);
		expect(createdPhoto.data?.url).toEqual(newPhotoWithoutAlbumID.url);
		expect(createdPhoto.data?.thumbnailUrl).toEqual(newPhotoWithoutAlbumID.thumbnailUrl);
	});

	test('Test - Creating new photo with not existed albumID', async () => {
		const createdPhoto = await createNewPhoto(newPhotoWithNotExistedAlbumID);
		expect(createdPhoto.status).toEqual(201);
		expect(createdPhoto.data?.id).not.toBeNull;
		expect(createdPhoto.data?.albumId).toEqual(newPhotoWithNotExistedAlbumID.albumId);
		expect(createdPhoto.data?.title).toEqual(newPhotoWithNotExistedAlbumID.title);
		expect(createdPhoto.data?.url).toEqual(newPhotoWithNotExistedAlbumID.url);
		expect(createdPhoto.data?.thumbnailUrl).toEqual(newPhotoWithNotExistedAlbumID.thumbnailUrl);
	});
});
