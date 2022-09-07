<script lang="ts">
	import Quote from '$lib/Quote.svelte';
	import AboutMe from './_aboutMe.svelte';
	import { onMount } from 'svelte';
</script>

<div class="container flex flex-col gap-8">
	<Quote />
	<AboutMe />
</div>
