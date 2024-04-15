import { ICommentModel } from '../../models/comment.model';

export const commentsPostID = 9;

export const commentsNotExistedPostID = 999;

const expectedComment_1: ICommentModel = {
	postId: 9,
	id: 41,
	name: 'voluptas deleniti ut',
	email: 'Lucio@gladys.tv',
	body: 'facere repudiandae vitae ea aut sed quo ut et\nfacere nihil ut voluptates in\nsaepe cupiditate accusantium numquam dolores\ninventore sint mollitia provident',
};

const expectedComment_2: ICommentModel = {
	postId: 9,
	id: 42,
	name: 'nam qui et',
	email: 'Shemar@ewell.name',
	body: 'aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui',
};

const expectedComment_3: ICommentModel = {
	postId: 9,
	id: 43,
	name: 'molestias sint est voluptatem modi',
	email: 'Jackeline@eva.tv',
	body: 'voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem',
};

const expectedComment_4: ICommentModel = {
	postId: 9,
	id: 44,
	name: 'hic molestiae et fuga ea maxime quod',
	email: 'Marianna_Wilkinson@rupert.io',
	body: 'qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis',
};

const expectedComment_5: ICommentModel = {
	postId: 9,
	id: 45,
	name: 'autem illo facilis',
	email: 'Marcia@name.biz',
	body: 'ipsum odio harum voluptatem sunt cumque et dolores\nnihil laboriosam neque commodi qui est\nquos numquam voluptatum\ncorporis quo in vitae similique cumque tempore',
};

export const expectedComments: ICommentModel[] = [
	expectedComment_1,
	expectedComment_2,
	expectedComment_3,
	expectedComment_4,
	expectedComment_5,
];

export const expectedCommentsByNotExistedPostID: ICommentModel[] = [];
