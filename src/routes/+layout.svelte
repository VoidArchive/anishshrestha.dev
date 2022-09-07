<script lang="ts">
	import '../app.css';
	import '../font.css';
	import Header from './_header.svelte';
</script>

<div class="bg-nord0 h-screen ">
	<Header />
	<main>
		<slot />
	</main>
</div>
