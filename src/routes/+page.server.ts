import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/latest`);
	const posts = await postRes.json();
	return { posts };
};
