<script lang="ts">
	import { siteLink } from '$lib/utils/config';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const { title, excerpt, date, updated } = data.meta;
	const slug = data.slug;
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
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="twitter:description" content={excerpt} />
	<!-- TODO: Add image meta tags og:image and twitter:image -->

	<link rel="canonical" href="{siteLink}/blog/{slug}" />
</svelte:head>

<div class="mx-6 mt-20 md:mx-0">
	<article class="container prose prose-nord mx-auto">
		<!-- Heading -->
		<div>
			<h1 class="mb-2">{title}</h1>
			<div class="  flex flex-col gap-2 text-nord4">
				{#if date}
					<time datetime={date} class="m-0">Published: {formattedDate}</time>
				{/if}
				{#if updated}
					<time datetime={updated} class="m-0">Updated: {formattedUpdated}</time>
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
<!-- 
<div>
	<script
		src="https://utteranc.es/client.js"
		repo="voidarchive/anishshrestha.dev"
		issue-term="pathname"
		theme="dark-blue"
		crossorigin="anonymous"
		async
	>
	</script>
</div> -->
