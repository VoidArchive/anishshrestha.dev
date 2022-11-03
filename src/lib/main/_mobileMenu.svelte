<script lang="ts">
	import { fade } from 'svelte/transition';
	import { mobileNavLinks } from '$lib/utils/config';

	let visible = false;

	function menuToggle() {
		visible = !visible;
	}
</script>

<nav class="md:hidden" aria-label="Main menu">
	{#if visible}
		<div
			in:fade
			class="absolute left-6 right-6 z-10 mt-10 flex flex-col items-center space-y-6 self-end rounded-md bg-nord3 py-8 font-bold drop-shadow-md sm:w-auto sm:self-center"
		>
			{#each mobileNavLinks as link}
				<a on:click={menuToggle} href={link.url} class="text-nord4">{link.text}</a>
			{/each}
		</div>
	{/if}

	<button on:click={menuToggle} class:visible class="hamburger" aria-expanded={visible}>
		<span class="hamburger-top" />
		<span class="hamburger-middle" />
		<span class="hamburger-bottom" />
	</button>
</nav>

<style>
	.hamburger {
		cursor: pointer;
		width: 1.5em;
		height: 1.5em;
		transition: all 0.25s;
		position: relative;
	}
	.hamburger-top,
	.hamburger-middle,
	.hamburger-bottom {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.5em;
		height: 2px;
		background: rgb(216 222 233);
		transform: rotate(0);
		transition: all 0.5s;
	}

	.hamburger-middle {
		transform: translateY(7px);
	}
	.hamburger-bottom {
		transform: translateY(14px);
	}

	.visible {
		transform: rotate(90deg);
		transform: translateY(0px);
	}

	.visible .hamburger-top {
		transform: rotate(45deg) translateY(6px) translate(6px);
	}
	.visible .hamburger-middle {
		display: none;
	}
	.visible .hamburger-bottom {
		transform: rotate(-45deg) translateY(6px) translate(-6px);
	}
</style>
