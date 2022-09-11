<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { title, date, quote } = data.meta;
</script>

<svelte:head>
	<link rel="stylesheet" href="/prism-gruvbox.css" />
	<title>
		{title}
	</title>
</svelte:head>

<div class="space-y-12">
	<Quote>{quote}</Quote>

	<article class="container prose prose-nord mx-auto">
		<h1>{title}</h1>
		<div>
			Published: {date}
		</div>
		<svelte:component this={data.post} />
	</article>
</div>

<div>
	<script
		src="https://utteranc.es/client.js"
		repo="voidarchive/anishshrestha.dev"
		issue-term="pathname"
		theme="dark-blue"
		crossorigin="anonymous"
		async>
	</script>
</div>
