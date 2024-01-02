<script>
	import { PrismicText } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import EyebrowHeadline from '$lib/components/EyebrowHeadline.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Review from './Review.svelte';

	/** @type {import("@prismicio/client").Content.ImageCardsSlice} */
	export let slice;

	let columnsClass;

	switch(slice.items.length) {
	  case 3:
	    columnsClass = 'md:grid-cols-3';
	    break;
	  case 4:
	   	columnsClass = 'md:grid-cols-4';
	    break;
	  case 5:
	   	columnsClass = 'md:grid-cols-5';
	    break;
	  case 6:
	   	columnsClass = 'md:grid-cols-6';
	    break;
	  case 7:
	   	columnsClass = 'md:grid-cols-7';
	    break;
	  case 8:
	   	columnsClass = 'md:grid-cols-8';
	    break;
	  case 9:
	   	columnsClass = 'md:grid-cols-9';
	    break;
	  case 10:
	   	columnsClass = 'md:grid-cols-10';
	    break;
	  default:
	  	columnsClass = 'md:grid-cols-2';
	}

</script>

<Bounded
	tag="section"
	class="bg-slate-100"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	yPadding="sm"
>
	<div class="grid gap-12">
		<SectionHeader tag="div">
			{#if prismic.isFilled.richText(slice.primary.eyebrowHeadline)}
			<EyebrowHeadline field={slice.primary.eyebrowHeadline} />
			{/if}
			<div class="max-w-4xl">
				<PrismicRichText field={slice.primary.text} />
			</div>
		</SectionHeader>
		<ul class="flex overflow-x-auto snap-mandatory snap-x gap-4 md:grid grid-cols-1 items-start md:gap-8 auto-rows-fr items-stretch {columnsClass}">
			{#each slice.items as item}
				<Review {item} />
			{/each}
		</ul>
	</div>
</Bounded>
