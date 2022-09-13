export const siteTitle = 'Graveyard for my projects';
export const siteDescription = 'A place where I share what I am learning';
export const siteURL = 'anishshrestha.dev';
export const siteLink = 'https://www.anishshrestha.dev';
export const siteAuthor = 'Anish shrestha';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

interface Link {
	text: string;
	url: string;
	disabled?: boolean;
}

export const navLinks: Link[] = [
	{
		text: 'Graveyard',
		url: '/projects',
		disabled: true
	},
	{
		text: 'Blog',
		url: '/blog'
	},
	{
		text: 'Series',
		url: '/series',
		disabled: true
	},
	{
		text: 'Feedback',
		url: 'https://github.com/VoidArchive/Feedback/issues/new'
	}
];

export const mobileNavLinks: Link[] = [
	{
		text: 'Home',
		url: '/'
	},
	{
		text: 'Graveyard',
		url: '/projects'
	},
	{
		text: 'Blog',
		url: '/blog'
	},
	{
		text: 'Series',
		url: '/series'
	},
	{
		text: 'Github',
		url: '/about'
	},
	{
		text: 'Give Feedback',
		url: 'https://github.com/VoidArchive/Feedback/issues/new'
	}
];
