<script lang="ts">
	import type { metadata } from '$lib/utils/config';
	import type { PageServerData } from './$types';

	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageServerData;
	const posts: metadata[] = data.posts;
</script>

<svelte:head><title>Blog - Anish shrestha</title></svelte:head>

<main class="container h-screen bg-nord0 flex flex-col my-20">
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
