<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<section id="project" class="container flex flex-col gap-4">
	<!-- Heading Div -->
	<div class="flex items-center">
		<h1 class="text-2xl font-bold text-nord11">Latest Posts</h1>
		<div class="w-32 md:w-64 h-[1px] bg-nord3 ml-2" />
	</div>

	<div class="grid grid-flow-row gap-4">
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</section>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
