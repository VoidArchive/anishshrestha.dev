<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<p class="text-center font-semibold text-nord4 p-4 {className}">
	<svg
		class=" rotate-180 inline-block text-nord11"
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
	<slot />
	<svg
		class="inline-block text-nord11"
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
</p>
