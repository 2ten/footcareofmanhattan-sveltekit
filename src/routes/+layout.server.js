import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings');
	//const navigation = await client.getSingle('navigation');
const navigation = await client.getSingle('navigation', {
  fetchLinks: ['sub_menu.menu_title','sub_menu.links']
});


	const footerNavigation = await client.getSingle('footerNavigation');

	return {
		settings,
		navigation,
		footerNavigation
	};
}
