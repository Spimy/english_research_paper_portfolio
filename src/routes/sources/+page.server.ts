import { references } from '$lib/references';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { references };
};
