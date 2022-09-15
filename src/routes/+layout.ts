export const prerender = true;
import type { Load } from '@sveltejs/kit';

// https://kit.svelte.dev/docs/types#generated-types
export const load: Load = async ( { url: { pathname } } ) => {

	return { pathname };

};
