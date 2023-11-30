import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface Social {
	icon: IconDefinition;
	url: string;
}

export interface Author {
	firstName: string;
	lastName: string;
	studentId: string;
	course: string;
	title: string;
	profileImage: string[];
	social: Social[];
}
