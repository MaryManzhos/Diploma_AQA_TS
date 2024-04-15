import { INewPostModel } from '../../models/new.post.model';

export const newPost: INewPostModel = {
	userId: 9,
	title: 'New post',
	body: 'Description of new post',
};

export const postWithNewTitle: INewPostModel = {
	title: 'Updated post',
};
