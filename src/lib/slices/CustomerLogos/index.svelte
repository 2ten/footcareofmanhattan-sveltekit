<script>
	import { isFilled } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import EyebrowHeadline from '$lib/components/EyebrowHeadline.svelte';

	/**
	 * @type {import("@prismicio/client").Content.${CustomerLogos}Slice}
	 */
	export let slice;
	let itemClass = 'opacity-75';
	if(slice.variation == 'grayscale'){
		itemClass += ' grayscale';
	}

	let columnsClass;

	switch(slice.items.length) {
	  case 3:
	    columnsClass = 'grid-cols-3';
	    break;
	  case 4:
	   	columnsClass = 'grid-cols-4';
	    break;
	  case 5:
	   	columnsClass = 'grid-cols-5';
	    break;
	  case 6:
	   	columnsClass = 'grid-cols-6';
	    break;
	  case 7:
	   	columnsClass = 'grid-cols-7';
	    break;
	  case 8:
	   	columnsClass = 'grid-cols-8';
	    break;
	  case 9:
	   	columnsClass = 'grid-cols-9';
	    break;
	  case 10:
	   	columnsClass = 'grid-cols-10';
	    break;
	  default:
	  	columnsClass = 'grid-cols-2';
	}

</script>

<Bounded
	as="section"
	class="bg-white"
	yPadding="sm"
	maxWidth="max-w-7xl"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>

	{#if isFilled.richText(slice.primary.eyebrowHeadline)}
		<EyebrowHeadline field={slice.primary.eyebrowHeadline} class="text-center" />
	{/if}
	{#if slice.items.length > 0}
		<ul class="grid {columnsClass} gap-2">
			{#each slice.items as item}
				{#if isFilled.image(item.image)}
					<li>
						<PrismicLink field={item.link}>
							<PrismicImage
								field={item.image}
								class="{itemClass}"
								loading="lazy"
							/>
						</PrismicLink>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}

	{#if isFilled.link(slice.primary.callToActionLink)}
	<div class="text-center">
		<PrismicLink
			field={slice.primary.callToActionLink}
			class="rounded-full bg-blue-600 px-8 py-3 text-sm text-white"
		>
			{slice.primary.callToActionLabel  || 'Learn More'}
		</PrismicLink>
	</div>
	{/if}
	

</Bounded>
