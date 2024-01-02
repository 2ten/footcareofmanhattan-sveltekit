<script>
	import clsx from 'clsx';

	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import EyebrowHeadline from '$lib/components/EyebrowHeadline.svelte';

	/** @type {import("@prismicio/client").Content.TextWithImageSlice} */
	export let slice;

	/* image size */

	let containerClass = 'flex flex-col md:flex-row flex-col-reverse';
	let imageClass = 'md:flex-none mb-8 md:mb-0';
	let textClass = 'md:flex-1 md:pr-8 md:pt-8';

	switch(slice.primary.image_width) {
	  case 'Small':
	    imageClass += ' md:basis-1/3';
	    break;
	  case 'Medium':
	   	imageClass += ' md:basis-1/2';
	    break;
	  case 'Large':
	   	imageClass += ' md:basis-7/12';
	    break;
	  default:
	  	imageClass += ' md:basis-1/2';
	}
	if(slice.variation == 'imageLeft'){
		containerClass += ' md:flex-row-reverse';
		textClass = 'md:flex-1 md:pl-8 md:pt-8';
		imageClass += ' md:-translate-x-6';
	}else{
		imageClass += ' md:translate-x-6';
	}

</script>

<Bounded
	as="section"
	class="bg-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="{containerClass}">
		<div class="{textClass}">
			{#if prismic.isFilled.richText(slice.primary.eyebrowHeadline)}
			<EyebrowHeadline field={slice.primary.eyebrowHeadline} />
			{/if}
			<PrismicRichText field={slice.primary.text} />
			{#if prismic.isFilled.link(slice.primary.buttonLink)}
				<PrismicLink
					field={slice.primary.buttonLink}
					class="rounded-full bg-blue-600 px-8 py-3 text-sm text-white"
				>
					{slice.primary.buttonText || 'Learn More'}
				</PrismicLink>
			{/if}
		</div>
		<div class={imageClass}>
			{#if prismic.isFilled.image(slice.primary.image)}
				<div class="bg-gray-100 rounded-xl">
					<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full rounded-xl shadow-xl" />
				</div>
			{/if}
		</div>
	</div>
</Bounded>
