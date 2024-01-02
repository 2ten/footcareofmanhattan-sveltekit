<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from './Bounded.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

	console.log(navigation.data.menus)

</script>

<Bounded tag="footer" yPadding="sm" class="bg-slate-100">
	<div class="md:flex items-start justify-between gap-x-6 gap-y-3 leading-none">
		<div class="md:flex-none md:basis-80">

			{settings.data.company_name}<br>
			{settings.data.company_email}<br>
			{settings.data.company_phone}<br>
			<PrismicRichText field={settings.data.company_address} />
			{#each settings.data?.hours as item}
			{item.day} {item.hours}<br>
			{/each}

		</div>
		<nav class="md:flex-1 md:pl-8 md:grid grid-cols-4 gap-2">
			{#each navigation.data?.menus as item}
				<div>
				<PrismicRichText field={item.menu.data.menu_title} />
				<ul>
				{#each item.menu.data?.links as link}
				<li>
					<PrismicLink field={link.link}>
						<PrismicText field={link.label} />
					</PrismicLink>
				</li>
				{/each}
				</ul>
				</div>
			{/each}
		</nav>
	</div>
	<div class="footer-bottom text-xs pt-16">
		<div>&copy; terms privacy accessibility
	</div>
</Bounded>
