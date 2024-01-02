<script>
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
 
	export let data;

	let customJs
	$: customJs = "console.log('Yo')";
</script>

<svelte:head>
	<title>{$page.data.meta_title ? $page.data.meta_title : data.settings.data.site_title + ' - ' + $page.data.title }</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
	{@html '<script>' + customJs + '</script>'}
</svelte:head>
<div class="text-slate-800">
	<Header navigation={data.navigation} settings={data.settings} />
	<main><slot /></main>
	<Footer navigation={data.navigation} settings={data.settings} />
</div>
<PrismicPreview {repositoryName} />