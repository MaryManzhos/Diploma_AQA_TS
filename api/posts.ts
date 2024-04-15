import { ENDPOINT_POSTS, ENDPOINT_POST_COMMENTS } from '../data/routes';
import { get, post, put, patch, _delete } from './common.api';
import { IPostModel } from '../models/post.model';
import { CommonResponse } from '../dto/common.response';
import { ICommentModel } from '../models/comment.model';
import { INewPostModel } from '../models/new.post.model';

export async function getAllPosts(): Promise<CommonResponse<IPostModel[]>> {
	const path = `${ENDPOINT_POSTS}`;
	return await get(path);
}

export async function getPostByID(id: number): Promise<CommonResponse<IPostModel>> {
	const path = `${ENDPOINT_POSTS}/${id}`;
	return await get(path);
}

export async function getPostsByUserID(userID: number): Promise<CommonResponse<IPostModel[]>> {
	const path = `${ENDPOINT_POSTS}`;
	const params = {
		userId: userID,
	};
	return await get(path, params);
}

export async function getCommentsByPostID(id: number): Promise<CommonResponse<ICommentModel[]>> {
	const path = `${ENDPOINT_POSTS}/${id}${ENDPOINT_POST_COMMENTS}`;
	return await get(path);
}

export async function createNewPost(newPost: INewPostModel): Promise<CommonResponse<IPostModel>> {
	const path = `${ENDPOINT_POSTS}`;
	return await post(path, newPost);
}

export async function upadetePostByID(id: number, newPost: IPostModel): Promise<CommonResponse<IPostModel>> {
	const path = `${ENDPOINT_POSTS}/${id}`;
	return await put(path, newPost);
}

export async function updatePartialPostByID(id: number, newPost: INewPostModel): Promise<CommonResponse<IPostModel>> {
	const path = `${ENDPOINT_POSTS}/${id}`;
	return await patch(path, newPost);
}

export async function deletePostByID(id: number): Promise<CommonResponse<IPostModel>> {
	const path = `${ENDPOINT_POSTS}/${id}`;
	return await _delete(path);
}
