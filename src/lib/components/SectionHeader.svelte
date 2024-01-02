<script>
	import clsx from 'clsx';
	export let tag = 'div';
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={clsx('mx-auto max-w-6xl w-full',$$props.class)}
>
	<slot />
</svelte:element>
