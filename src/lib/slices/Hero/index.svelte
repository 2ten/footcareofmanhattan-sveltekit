<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;
</script>

<section
	class="relative bg-slate-900 text-white aspect-video"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if prismic.isFilled.image(slice.primary.backgroundImage)}
		<PrismicImage
			field={slice.primary.backgroundImage}
			alt=""
			class="absolute inset-0 h-full w-full pointer-events-none select-none object-cover opacity-90"
		/>
	{/if}
	<div class="absolute h-full w-full flex items-end">
		<div class="mx-auto w-full max-w-7xl">
			<div class="py-32 lg:w-2/3">
			<PrismicRichText
				field={slice.primary.text}
				components={{
					heading1: Heading
				}}
			/>
			{#if prismic.isFilled.link(slice.primary.buttonLink)}
				<PrismicLink
					field={slice.primary.buttonLink}
					class="rounded bg-white px-5 py-3 font-medium text-slate-800"
				>
					{slice.primary.buttonText || 'Learn More'}
				</PrismicLink>
			{/if}
			</div>
		</div>
	</div>

</section>
