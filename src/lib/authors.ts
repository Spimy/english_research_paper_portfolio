import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import type { Author } from './types/author';

export const authors: Author[] = [
	{
		firstName: 'Joshua',
		lastName: 'Edwin Rene Bonham',
		studentId: '23020050',
		course: 'Bachelor of Software Engineering (Hons)',
		social: [
			{ icon: faInstagram, url: 'https://www.instagram.com/jb_bru' },
			{ icon: faGithub, url: 'https://www.github.com/JBBru-helloworld' }
		],
		title: 'Gambling Therapist',
		profileImage: 'https://placehold.co/400'
	},
	{
		firstName: 'William',
		lastName: 'Law Hong Waye',
		studentId: '23020043',
		course: 'Bachelor of Software Engineering (Hons)',
		social: [
			{ icon: faGlobe, url: 'https://www.spimy.dev' },
			{ icon: faInstagram, url: 'https://www.instagram.com/william3001_lhw' },
			{ icon: faGithub, url: 'https://www.github.com/spimy' }
		],
		title: 'Professional Gambler',
		profileImage: 'https://placehold.co/400'
	},
	{
		firstName: 'Shaan',
		lastName: 'Mohammad Ibne Javed Soyfoo',
		studentId: '23030935',
		course: 'BSC (Hons) in Computer Science',
		social: [{ icon: faInstagram, url: 'https://www.instagram.com/_shaan_s' }],
		title: 'Gambler Psychologist',
		profileImage: 'https://placehold.co/400'
	}
];
