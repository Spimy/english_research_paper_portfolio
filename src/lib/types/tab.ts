import type { Author } from './author';

export interface Tab {
	query: string;
	authors: Author[];
	title: string;
	content: string;
	references: string[];
	download: {
		url: string;
		filename: string;
	};
	grade?: {
		received: number;
		maximum: number;
	};
}
