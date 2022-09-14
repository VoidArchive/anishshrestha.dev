<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const { title, excerpt, date, updated, coverImage, categories } = data.meta;
	const formattedDate = new Date(date)?.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const formattedUpdated = new Date(updated)?.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/prism-gruvbox.css" />
	<title>
		{title}
	</title>
</svelte:head>

<div class="mt-20">
	<article class="container prose prose-nord mx-auto">
		<!-- Heading -->
		<div class="">
			<h1 class="mb-2">{title}</h1>
			<div class="  flex flex-col text-nord4 gap-2">
				{#if date}
					<p class="m-0">Published: {formattedDate}</p>
				{/if}
				{#if updated}
					<p class="m-0">Updated: {formattedUpdated}</p>
				{/if}
				<!-- 
				{#if categories}
					{#each categories as category}
						<p class="underline m-0">{category}</p>
					{/each}
				{/if} -->
			</div>
		</div>
		<!-- <svelte:component this={data.post} /> -->
		{@html data.PostContent}
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
