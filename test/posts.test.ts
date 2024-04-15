import {
	createNewPost,
	deletePostByID,
	getAllPosts,
	getCommentsByPostID,
	getPostByID,
	getPostsByUserID,
	updatePartialPostByID,
} from '../api/posts';
import {
	commentsNotExistedPostID,
	commentsPostID,
	expectedComments,
	expectedCommentsByNotExistedPostID,
} from '../data/comments/expected.comments';
import { newPost, postWithNewTitle } from '../data/posts/created.post';
import {
	expectedAllPosts,
	expectedPostByID,
	expectedPostsByNotExistedUserID,
	expectedPostsByNotExistedUserIDCount,
	expectedPostsByUserID,
	expectedPostsByUserIDCount,
	expectedPostsCount,
	notExistedUserID,
	postID,
	postNotExistedID,
	userID,
} from '../data/posts/expected.posts';

describe("Endpoint '/posts' tests", () => {
	test('Test - Getting all posts', async () => {
		const posts = await getAllPosts();
		expect(posts.status).toEqual(200);
		expect(posts.data).toHaveLength(expectedPostsCount);
		expect(posts.data).toEqual(expect.arrayContaining(expectedAllPosts));
	});

	test('Test - Getting post by ID', async () => {
		const post = await getPostByID(postID);
		expect(post.status).toEqual(200);
		expect(post.data).toEqual(expectedPostByID);
	});

	test('Test - Error by getting post by not existed ID', async () => {
		const post = await getPostByID(postNotExistedID);
		expect(post.status).toEqual(404);
	});

	test('Test - Getting posts by userID', async () => {
		const posts = await getPostsByUserID(userID);
		expect(posts.status).toEqual(200);
		expect(posts.data).toHaveLength(expectedPostsByUserIDCount);
		expect(posts.data).toEqual(expect.arrayContaining(expectedPostsByUserID));
	});

	test('Test - Getting emty list posts by not existed userID', async () => {
		const posts = await getPostsByUserID(notExistedUserID);
		expect(posts.status).toEqual(200);
		expect(posts.data).toHaveLength(expectedPostsByNotExistedUserIDCount);
		expect(posts.data).toEqual(expectedPostsByNotExistedUserID);
	});

	test('Test - Getting comments by postID', async () => {
		const comments = await getCommentsByPostID(commentsPostID);
		expect(comments.status).toEqual(200);
		expect(comments.data).toHaveLength(expectedComments.length);
		expect(comments.data).toEqual(expectedComments);
	});

	test('Test - Getting empty list comments by not existed postID', async () => {
		const comments = await getCommentsByPostID(commentsNotExistedPostID);
		expect(comments.status).toEqual(200);
		expect(comments.data).toHaveLength(expectedCommentsByNotExistedPostID.length);
		expect(comments.data).toEqual(expectedCommentsByNotExistedPostID);
	});

	test('Test - Creating new post', async () => {
		const createdPost = await createNewPost(newPost);
		expect(createdPost.status).toEqual(201);
		expect(createdPost.data?.id).not.toBeNull;
		expect(createdPost.data?.userId).toEqual(newPost.userId);
		expect(createdPost.data?.title).toEqual(newPost.title);
		expect(createdPost.data?.body).toEqual(newPost.body);
	});

	test('Test - Updating title in the post', async () => {
		const currentPost = await getPostByID(postID);
		const updatedPost = await updatePartialPostByID(postID, postWithNewTitle);
		expect(updatedPost.status).toEqual(200);
		expect(updatedPost.data?.id).toEqual(currentPost.data?.id);
		expect(updatedPost.data?.userId).toEqual(currentPost.data?.userId);
		expect(updatedPost.data?.title).toEqual(postWithNewTitle.title);
		expect(updatedPost.data?.body).toEqual(currentPost.data?.body);
	});

	test('Test - Deleting the post', async () => {
		const deletedPost = await deletePostByID(postID);
		expect(deletedPost.status).toEqual(200);
	});
});
