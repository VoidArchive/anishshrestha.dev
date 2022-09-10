<script lang="ts">
	import '../app.css';
	import '../font.css';
	import Header from './_header.svelte';
	import Footer from './_footer.svelte';
</script>

<div class="bg-nord0 h-full">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
