import { output } from '$lib/tabs/output';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { output };
};
