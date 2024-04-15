import { IPostModel } from '../../models/post.model';

export const expectedPostsCount = 100;

export const expectedPostsByUserIDCount = 10;

export const expectedPostsByNotExistedUserIDCount = 0;

export const postID = 80;

export const postNotExistedID = 12345;

export const userID = 7;

export const notExistedUserID = 99;

export const expectedFirstPost: IPostModel = {
	userId: 1,
	id: 1,
	title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
	body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

export const expectedLastPost: IPostModel = {
	userId: 10,
	id: 100,
	title: 'at nam consequatur ea labore ea harum',
	body: 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut',
};

export const expectedAllPosts: IPostModel[] = [expectedFirstPost, expectedLastPost];

export const expectedPostByID: IPostModel = {
	userId: 8,
	id: 80,
	title: 'labore in ex et explicabo corporis aut quas',
	body: 'ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident',
};

export const expectedFirstPostByUserID: IPostModel = {
	userId: 7,
	id: 61,
	title: 'voluptatem doloribus consectetur est ut ducimus',
	body: 'ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit',
};

export const expectedMediumPostByUserID: IPostModel = {
	userId: 7,
	id: 65,
	title: 'consequatur id enim sunt et et',
	body: 'voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur',
};

export const expectedLastPostByUserID: IPostModel = {
	userId: 7,
	id: 70,
	title: 'voluptatem laborum magni',
	body: 'sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore',
};

export const expectedPostsByUserID: IPostModel[] = [
	expectedFirstPostByUserID,
	expectedMediumPostByUserID,
	expectedLastPostByUserID,
];

export const expectedPostsByNotExistedUserID: IPostModel[] = [];
