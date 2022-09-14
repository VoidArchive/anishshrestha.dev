<script lang="ts">
	import type { metadata } from '$lib/utils/config';
	import type { PageServerData } from './$types';

	import Hero from '$lib/main/_hero.svelte';
	import AboutMe from '$lib/main/_aboutMe.svelte';
	import Contact from '$lib/main/_contact.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageServerData;
	const posts: metadata[] = data.posts;
	console.log(posts);
</script>

<svelte:head>
	<title>Anish Shrestha</title>
</svelte:head>
<div class="container grid gap-8 mx-auto">
	<section id="hero" class="min-h-[20em] h-auto">
		<Hero />
	</section>
	<AboutMe />
	<section id="latest-post" class="container flex flex-col gap-4">
		<!-- Heading Div -->
		<div class="flex items-center">
			<h1 class="text-2xl font-bold text-nord11">Latest Posts</h1>
			<div class="w-32 md:w-64 h-[1px] bg-nord3 ml-2" />
		</div>
		<!-- Blog grid -->

		<div class="">
			{#each posts as post}
				<BlogCard {post} />
			{/each}
		</div>

		<!-- See more button -->
		<a
			href="/blog"
			class=" ease-in duration-300 self-center text-center bg-transparent focus:bg-nord11 focus:text-nord4 hover:bg-nord11 text-nord11 font-semibold hover:text-nord4 py-2 px-4 border border-nord11 hover:border-transparent rounded"
			>View All</a
		>
	</section>
	<Contact />
</div>

<style>
	#latest-post {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
