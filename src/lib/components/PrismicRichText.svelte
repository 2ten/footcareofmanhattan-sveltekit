<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Heading1 from './PrismicRichText/Heading1.svelte';
	import Heading2 from './PrismicRichText/Heading2.svelte';
	import Heading3 from './PrismicRichText/Heading3.svelte';
	import Heading4 from './PrismicRichText/Heading4.svelte';
	import Heading5 from './PrismicRichText/Heading5.svelte';
	import Heading6 from './PrismicRichText/Heading6.svelte';
	import Paragraph from './PrismicRichText/Paragraph.svelte';
	import OList from './PrismicRichText/OList.svelte';
	import OListItem from './PrismicRichText/OListItem.svelte';
	import List from './PrismicRichText/List.svelte';
	import ListItem from './PrismicRichText/ListItem.svelte';
	import Preformatted from './PrismicRichText/Preformatted.svelte';
	import Strong from './PrismicRichText/Strong.svelte';
	import Hyperlink from './PrismicRichText/Hyperlink.svelte';

	/** @type {import('svelte').ComponentProps<PrismicRichText>['field']} */
	export let field;

	/** @type {import('svelte').ComponentProps<PrismicRichText>['components']} */
	export let components = {};
</script>

<PrismicRichText
	{field}
	components={{
		heading1: Heading1,
		heading2: Heading2,
		heading3: Heading3,
		heading4: Heading4,
		heading5: Heading5,
		heading6: Heading6,
		paragraph: Paragraph,
		oList: OList,
		oListItem: OListItem,
		list: List,
		listItem: ListItem,
		preformatted: Preformatted,
		strong: Strong,
		hyperlink: Hyperlink,
		...components
	}}
/>
