import { postsPerPage } from './config';

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/posts/*.md')).map(async ([path, resolver]) => {
			// @ts-expect-error -> Could not find the type for resolver
			const { metadata } = await resolver();
			const slug = path.split('/').pop()?.slice(0, -3);
			return { ...metadata, slug };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit != 1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		date: post.date,
		updated: post.updated,
		categories: post.categories
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
