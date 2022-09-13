import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/posts`);
	const posts = await postRes.json();
	return { posts };
};
