<script lang="ts">
	import type { Metadata } from '$lib/utils/config';
	import type { PageServerData } from './$types';
	import { siteLink, siteDescription, siteTitle } from '$lib/utils/config';

	import Hero from '$lib/main/_hero.svelte';
	import AboutMe from '$lib/main/_aboutMe.svelte';
	import Contact from '$lib/main/_contact.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Projects from '$lib/main/_projects.svelte';

	export let data: PageServerData;
	const posts: Metadata[] = data.posts;
	console.log("Another wanderer, here to lick my father's boots. Good job. ");
</script>

<svelte:head>
	<title>Anish Shrestha</title>
	<meta data-key="description" name="description" content={siteDescription} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content="/me.webp" />
	<meta property="og:url" content={siteLink} />
	<meta property="og:type" content="website" />
	<link rel="canonical" href={siteLink} />
</svelte:head>
<div class="container mx-auto grid gap-8">
	<section id="hero" class="h-auto min-h-[20em]">
		<Hero />
	</section>
	<AboutMe />
	<section id="latest-post" class="container flex flex-col gap-4">
		<!-- Heading Div -->
		<div class="flex items-center">
			<h1 class="text-2xl font-bold text-nord11">Latest Posts</h1>
			<div class="ml-2 h-[1px] w-32 bg-nord3 md:w-64" />
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
			class=" self-center rounded border border-nord11 bg-transparent py-2 px-4 text-center font-semibold text-nord11 duration-300 ease-in hover:border-transparent hover:bg-nord11 hover:text-nord4 focus:bg-nord11 focus:text-nord4"
			>View All</a
		>
	</section>
	<Projects />
	<Contact />
</div>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
