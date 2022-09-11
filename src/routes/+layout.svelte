<script lang="ts">
	import '../app.css';
	import '../font.css';
	import Header from '$lib/main/_header.svelte';
	import Footer from '$lib/main/_footer.svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	let load = false;
	onMount(() => {
		load = true;
	});
	export let data: LayoutData;
</script>

<div class="bg-nord0 h-full">
	{#if load}
		<Header />

		{#key data.currentRoute}
			<main in:fade={{ duration: 2000 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
		<Footer />
	{/if}
</div>
