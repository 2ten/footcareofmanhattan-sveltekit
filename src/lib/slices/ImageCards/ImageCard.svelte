<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.ImageCardsSliceDefaultItem} */
	export let item;
</script>

<li>
	{#if prismic.isFilled.image(item.image)}
		<div class="bg-gray-100 rounded-xl">
			{#if prismic.isFilled.link(item.buttonLink)}
				<PrismicLink field={item.buttonLink} tabindex={-1}>
					<PrismicImage field={item.image} sizes="100vw" class="w-full rounded-xl shadow-lg shadow-slate-200" />
				</PrismicLink>
			{:else}
				<PrismicImage field={item.image} sizes="100vw" class="w-full rounded-xl shadow-lg shadow-slate-200" />
			{/if}
		</div>
	{/if}
	<div class="py-4 px-10 text-center">
	<PrismicRichText field={item.text} />
	{#if prismic.isFilled.link(item.buttonLink)}
		<div>
			<PrismicLink field={item.buttonLink} class="text-m text-sky-600">
				{item.buttonText || 'More Info'}
			</PrismicLink>
		</div>
	{/if}
	</div>
</li>
