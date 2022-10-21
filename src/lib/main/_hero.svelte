<script lang="ts">
	import quotes from './quote.json';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Quote from '$lib/components/Quote.svelte';

	interface Quotes {
		text: string;
		author: string;
	}
	const quote: Quotes = quotes[Math.floor(Math.random() * quotes.length)];
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div
		in:fly={{ y: -100, duration: 2000 }}
		class="container my-8 flex max-w-3xl flex-col items-center justify-center md:my-16"
	>
		<Quote class="text-xl">
			{quote.text}
		</Quote>

		<p class="text-sm text-nord11">
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
