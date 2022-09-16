export const siteTitle = 'Anish shrestha';
export const siteDescription =
	'A place where I share what I am learning and where I put my unfinished project to give them my respect.';
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
	// {
	// 	text: 'Series',
	// 	url: '/series',
	// 	disabled: true
	// },
	{
		text: 'Feedback',
		url: 'https://github.com/VoidArchive/Feedback/issues/new?assignees=VoidArchive&labels=&template=feedback.md&title=feedback'
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
	// {
	// 	text: 'Series',
	// 	url: '/series'
	// },
	{
		text: 'Github',
		url: '/about'
	},
	{
		text: 'Give Feedback',
		url: 'https://github.com/VoidArchive/Feedback/issues/new?assignees=VoidArchive&labels=&template=feedback.md&title=feedback'
	}
];

export interface Metadata {
	title: string;
	slug: string;
	excerpt: string;
	coverImage?: string;
	date: Date;
	updated: Date;
	categories?: string[];
}
