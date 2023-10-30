export interface Author {
	firstName: string;
	lastName: string;
	studentId: string;
}

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
