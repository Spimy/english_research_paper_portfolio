import { gachaResult } from '$lib/gacha-result';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return { gachaResult };
};
