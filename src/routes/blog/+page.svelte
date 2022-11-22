<script lang="ts">
	import type { Metadata } from '$lib/utils/config';
	import type { PageServerData } from './$types';
	import { siteDescription, siteLink } from '$lib/utils/config';

	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageServerData;
	const posts: Metadata[] = data.posts;
</script>

<svelte:head>
	<title>Blog - Anish shrestha</title>
	<meta data-key="description" name="description" content={siteDescription} />
	<link rel="canonical" href="{siteLink}/blog" />
</svelte:head>

<main class="container my-20 flex h-screen flex-col bg-nord0">
	<div class="">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</main>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
