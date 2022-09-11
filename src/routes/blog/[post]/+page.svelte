<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { title, date, quote } = data.meta;
</script>

<svelte:head>
	<title>
		{title}
	</title>
</svelte:head>

<div class="mt-12">
	<Quote>{quote}</Quote>

	<article class="container prose prose-nord mt-12">
		<h1>{title}</h1>
		<div>
			Published: {date}
		</div>
		<svelte:component this={data.post} />
	</article>
</div>
