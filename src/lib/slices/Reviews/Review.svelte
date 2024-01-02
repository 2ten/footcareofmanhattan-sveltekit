<script>
	import * as prismic from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let item;
</script>

<li class="shrink-0 snap-center w-[66vw] grid grid-rows-[auto_1fr_auto] gap-2 bg-slate-50 p-5 md:px-10 md:py-9 md:w-auto rounded-xl shadow-xl shadow-slate-100">
	<div class="text-amber-400 text-s">★★★★★</div>
	<div class="leading-tight text-s">
		<PrismicRichText field={item.review} />
	</div>
	<div class="italic text-s font-bold mt-1">
		<PrismicRichText field={item.author} />
	</div>
</li>
