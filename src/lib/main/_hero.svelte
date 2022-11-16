<script lang="ts">
	import quotes from './quote.json';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Quote from '$lib/components/Quote.svelte';

	interface Quotes {
		text: string;
		author: string;
	}
	let visible = false;
	let quote: Quotes;

	function reloadQuote() {
		quote = quotes[Math.floor(Math.random() * quotes.length)];
		visible = true;
	}

	onMount(() => {
		reloadQuote();
	});
</script>

{#if visible}
	<div
		transition:fly={{ y: -100, duration: 2000 }}
		class="container my-8 flex max-w-3xl flex-col items-center justify-center md:my-16"
	>
		<Quote class="text-xl">
			{quote.text}
		</Quote>

		<p class="text-sm text-nord11">
			- {quote.author}
		</p>
		<button class="" on:click={reloadQuote}>
			<svg
				class="mt-2 scale-90 fill-nord4 duration-300 hover:scale-100 hover:fill-nord11"
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path
					d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
				/></svg
			>
		</button>
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
