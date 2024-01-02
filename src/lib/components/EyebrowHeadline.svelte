<script>
	import clsx from 'clsx';
	import { PrismicText } from '@prismicio/svelte';

	export let tag;
	export let field;
	let type = field[0]['type'];

	switch(type) {
	  case 'heading1':
	    tag = 'h1';
	    break;
	  case 'heading2':
	   	tag = 'h2';
	    break;
	  case 'heading3':
	    tag = 'h3';
	    break;
	  default:
	    tag = 'div';
	}
</script>

<svelte:element
	this={tag}
	class="{clsx('text-xs uppercase tracking-widest mb-2',$$props.class)}"
>
	<slot />
	<PrismicText field={field} />
</svelte:element>
