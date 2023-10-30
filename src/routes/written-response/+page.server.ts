import { writtenResponses } from '$lib/tabs/written-responses';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { writtenResponses };
};
