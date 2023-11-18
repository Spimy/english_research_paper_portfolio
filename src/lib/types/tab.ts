import type { Author } from './author';

export interface Content {
	title?: string;
	body: string[];
}

export interface Reference {
	author: string;
	title: string;
	publisher: string;
	issuePage: string;
	url: string;
}

export interface Tab {
	query: string;
	authors: Author[];
	title: string;
	content: Content[];
	references: Reference[];
	download: {
		url: string;
		filename: string;
	};
	grade?: {
		received: number;
		maximum: number;
	};
}
