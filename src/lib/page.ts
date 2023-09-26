import type { Page } from '$lib/types/page';

export const pages: Page[] = [
	{ title: 'Roadmap', url: '/roadmap' },
	{
		title: 'Planning',
		dropdown: [
			{
				title: 'Outline',
				url: '/outline'
			},
			{
				title: 'Written Response',
				url: '/written-response'
			},
			{
				title: 'Draft',
				url: '/draft'
			}
		]
	},
	{ title: 'Home', url: '/' },
	{
		title: 'Final',
		dropdown: [
			{
				title: 'Sources',
				url: '/sources'
			},
			{
				title: 'Output',
				url: '/output'
			},
			{
				title: 'Reflection',
				url: '/reflection'
			}
		]
	},
	{ title: 'Feedback', url: '/feedback' }
];
