import { postsPerPage } from '$lib/utils/config';
import fetchPosts from '$lib/utils/fetchPosts';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const options = {
		limit: postsPerPage
	};
	const { posts } = await fetchPosts(options);
	return json(posts);
};
