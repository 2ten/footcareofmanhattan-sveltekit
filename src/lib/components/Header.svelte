<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

	let previousY
	let currentY
	let clientHeight

	const getDirection = (y) => {

		const direction = !previousY || previousY < currentY ? 'down' : 'up'
		previousY = y 
		return direction
	} 

	$: scrollDirection = getDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4

	$: open = false
</script>
<svelte:window bind:scrollY={currentY} />

<header class="fixed z-50 w-full top-0 left-0 right-0 bg-white bg-opacity-50 py-8 transition-transform ease-in"
class:md:motion-safe:-translate-y-full={offscreen}
bind:clientHeight
>
	<div class="mx-auto w-full max-w-7xl px-8">
		<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
			<a href="/" class="text-xl font-semibold tracking-tight">
				{settings.data.site_title}
			</a>
			<nav class="fixed top-0 bottom-0 right-0 translate-x-full bg-white w-80 max-w-80 transition-transform ease-in md:w-auto md:static md:bg-transparent md:translate-x-0"
			class:motion-safe:translate-x-0={open}
			>
				<ul class="p-8 md:p-0 md:flex flex-wrap gap-6 md:gap-10">
					{#each navigation.data?.links as item}
						<li class="py-2 md:py-0 font-semibold tracking-tight text-slate-800">
							<PrismicLink field={item.link}>
								<PrismicText field={item.label} />
							</PrismicLink>
						</li>
					{/each}
				</ul>
			</nav>
			<button class="md:hidden z-50" on:click={() =>  open = !open}>
				Menu
			</button>
		</div>
	</div>
</header>
