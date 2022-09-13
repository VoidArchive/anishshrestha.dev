<script lang="ts">
	import Hero from '$lib/main/_hero.svelte';
	import AboutMe from '$lib/main/_aboutMe.svelte';
	import Blog from '$lib/main/_latest-posts.svelte';
	import Contact from '$lib/main/_contact.svelte';
</script>

<svelte:head>
	<title>Anish Shrestha</title>
</svelte:head>
<div class="container grid gap-8 mx-auto">
	<section id="hero" class="min-h-[20em] h-auto">
		<Hero />
	</section>
	<AboutMe />
	<Blog />
	<Contact />
</div>
