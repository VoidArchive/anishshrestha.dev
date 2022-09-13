<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head><title>Blog - Anish shrestha</title></svelte:head>

<main class="container h-full bg-nord0 flex flex-col justify-center my-20">
	<div class="">
		<BlogCard posts={data.posts} />
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
