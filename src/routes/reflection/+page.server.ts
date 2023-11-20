import { reflections } from '$lib/tabs/reflections';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { reflections };
};
