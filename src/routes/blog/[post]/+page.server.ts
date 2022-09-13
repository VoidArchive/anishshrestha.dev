import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.post}.md`);
		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata }
		};
	} catch (err) {
		throw error(404);
	}
};
