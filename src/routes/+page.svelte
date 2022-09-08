<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import AboutMe from './_aboutMe.svelte';
	import Project from './_latest-posts.svelte';
	import Contact from './_contact.svelte';
</script>

<svelte:head>
	<title>Anish Shrestha</title>
</svelte:head>
<div class="container grid gap-8 mx-auto">
	<Quote />
	<AboutMe />
	<Project />
	<Contact />
</div>
