<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

	/* peek-a-boo header */

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


	/* mobile nav */
	let active = false;
	$: $page.url && (active = false)
	$: if(browser){
		document.body.classList.toggle('overflow-hidden', active);
	}

	/* nav active class */
	let navClass = 'md:py-0 font-semibold tracking-tight text-slate-800';
	let navClassActive = 'md:py-0 font-semibold tracking-tight text-cyan-800';

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
			<nav class="md:w-auto md:static md:bg-transparent md:translate-x-0">
				<ul class="hidden md:p-0 md:flex flex-wrap md:gap-10">
					{#each navigation.data?.links as item}
						{@const activeLink = item.link.url === $page.url.pathname}
						<li class={activeLink ? navClassActive : navClass}>
							<PrismicLink field={item.link}>
								<PrismicText field={item.label} />
							</PrismicLink>
						</li>
					{/each}
				</ul>
			</nav>
			<button class="md:hidden z-50 w-12" 
				aria-expanded={active ? "true" : "false"} 
				aria-controls="mobileNav" 
				aria-label={active ? "Close Navigation" : "Open Navigation"} 
				class:active
				on:click={() => active = !active} ><hr /><hr /><hr /></button>
		</div>
	</div>
</header>
{#if active}
<nav class="fixed z-50 top-0 bottom-0 right-0 translate-x-full bg-white w-80 max-w-80 transition-transform ease-in md:hidden" id="mobileNav" class:motion-safe:translate-x-0={active}>
	<ul class="p-8" role="navigation">
		{#each navigation.data?.links as item}
			{@const activeLink = item.link.url === $page.url.pathname}
			<li class={activeLink ? navClassActive : navClass}>			
				<PrismicLink field={item.link}>
					<PrismicText field={item.label} />
				</PrismicLink>
			</li>
		{/each}
	</ul>
</nav>
{/if}
