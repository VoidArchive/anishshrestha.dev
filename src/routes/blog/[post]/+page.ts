import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const data = await import(`../../../posts/${params.post}.md`);
		return {
			post: data.default,
			meta: { ...data.metadata }
		};
	} catch (e) {
		throw error(404, 'post cannot be found: ' + params.post);
	}
};
