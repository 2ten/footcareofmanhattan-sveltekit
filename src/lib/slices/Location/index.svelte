<script>
	import * as prismic from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import EyebrowHeadline from '$lib/components/EyebrowHeadline.svelte';

	/** @type {import("@prismicio/client").Content.LocationSlice} */
	export let slice;

</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-slate-50">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid md:grid-cols-2 w-full gap-16">
			<div class="py-8 md:px-8">
				{#if prismic.isFilled.richText(slice.primary.eyebrowHeadline)}
				<EyebrowHeadline field={slice.primary.eyebrowHeadline} />
				{/if}
				<PrismicRichText field={slice.primary.text} />	
			</div>
			<div>
				{@html slice.primary.map}
			</div>
		</div>
	</div>
</section>
