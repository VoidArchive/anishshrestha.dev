import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
