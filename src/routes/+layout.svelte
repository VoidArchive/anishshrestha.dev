<script lang="ts">
	import '../app.css';
	import '../font.css';
	import Header from '$lib/main/_header.svelte';
	import Footer from '$lib/main/_footer.svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="h-full bg-nord0">
	{#key data.currentRoute}
		<Header />
		<main transition:fade={{ duration: 150 }}>
			<slot />
		</main>
		<Footer />
	{/key}
</div>
