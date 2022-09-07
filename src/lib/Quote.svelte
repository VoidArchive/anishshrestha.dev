<script lang="ts">
	import quotes from '$lib/quote.json';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	export let visible: boolean = false;
	onMount(() => {
		visible = true;
	});

	function typewriter(node: Node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent != null ? node.textContent : '';
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

{#if visible}
	<div
		transition:fly={{ y: -100, duration: 2000 }}
		class="container flex flex-col items-center justify-center max-w-3xl my-8 md:my-16"
	>
		<h1 class="text-center text-xl font-semibold text-nord4 p-4">
			<svg
				class="icon icon-tabler icon-tabler-quote rotate-180 inline-block text-nord11"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				><path stroke="none" d="M0 0h24v24H0z" /><path
					d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"
				/></svg
			>
			{quote.text}
			<svg
				class="icon icon-tabler icon-tabler-quote inline-block text-nord11"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				><path stroke="none" d="M0 0h24v24H0z" /><path
					d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"
				/></svg
			>
		</h1>
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
