import { authors } from '$lib/authors';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { authors };
};
