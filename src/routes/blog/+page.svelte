<script lang="ts">
	import type { PageData } from './$types';
	import Quote from '$lib/components/Quote.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let data: PageData;
</script>

<svelte:head><title>Blog - Anish shrestha</title></svelte:head>

<main class="container h-screen bg-nord0">
	<Quote class="text-sm">This is a quotes</Quote>
	<ul>
		{#each data.posts as post}
			<div class="">
				<BlogCard
					href="/blog/{post.path}"
					class="my-4"
					title={post.meta.title}
					quote={post.meta.date}
				/>
			</div>
		{/each}
	</ul>
</main>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
