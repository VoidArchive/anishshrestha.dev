<script lang="ts">
	import '../app.css';
	import Navbar from './components/navbar.svelte';
	let { children } = $props();
</script>

<div
	class="min-h-screen bg-gradient-to-b from-black via-[#0b0804]/95 to-black text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[rgba(139,100,28,0.10)] after:mix-blend-color-dodge after:content-['']"
>
	<Navbar />
	<!-- <div class="min-h-screen bg-black"> -->
	{@render children()}
</div>
