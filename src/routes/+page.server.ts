import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	slotMachineWin: async ({ cookies }) => {
		cookies.set('passed', 'true', {
			maxAge: 60 * 60 * 24, // 24 hours
			httpOnly: false,
			secure: false
		});
	}
};
