import { drafts } from '$lib/tabs/drafts';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { drafts };
};
