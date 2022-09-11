<script lang="ts">
	import quotes from '$lib/quote.json';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Quote from '$lib/components/Quote.svelte';

	interface Quote {
		text: string;
		author: string;
	}
	const quote: Quote = quotes[Math.floor(Math.random() * quotes.length)];
	let visible: boolean = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div
		in:fly={{ y: -100, duration: 2000 }}
		class="container flex flex-col items-center justify-center max-w-3xl my-8 md:my-16"
	>
		<Quote class="text-xl">
			{quote.text}
		</Quote>

		<p class="text-nord11 text-sm">
			- {quote.author}
		</p>
	</div>
{/if}

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
