import type { Page } from '$lib/types/page';

export const pages: Page[] = [
	{ title: 'Roadmap', url: '/roadmap', cardSetting: { display: 'J', suit: '♦' } },
	{
		title: 'Planning',
		dropdown: [
			{
				title: 'Outline',
				url: '/outline',
				cardSetting: { display: 'Q', suit: '♣' }
			},
			{
				title: 'Written Response',
				url: '/written-response',
				cardSetting: { display: 'K', suit: '♥' }
			},
			{
				title: 'Draft',
				url: '/draft',
				cardSetting: { display: 'A', suit: '♠' }
			}
		]
	},
	{ title: 'Home', url: '/' },
	{
		title: 'Final',
		dropdown: [
			{
				title: 'Sources',
				url: '/sources',
				cardSetting: { display: 'J', suit: '♦' }
			},
			{
				title: 'Output',
				url: '/output',
				cardSetting: { display: 'Q', suit: '♣' }
			},
			{
				title: 'Reflection',
				url: '/reflection',
				cardSetting: { display: 'K', suit: '♥' }
			}
		]
	},
	{ title: 'Feedback', url: '/feedback', cardSetting: { display: 'A', suit: '♠' } }
];
