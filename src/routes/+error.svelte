<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="text-9xl font-extrabold tracking-widest text-white">{$page.status}</h1>
	<div class="absolute rotate-12 rounded bg-nord11 px-2 text-sm">{$page.error?.message}</div>
	<button class="mt-5">
		<a
			href="/"
			class="group relative inline-block text-sm font-medium text-nord4 focus:outline-none focus:ring active:text-orange-500"
		>
			<span
				class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-nord4 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
			/>

			<span class="relative block border border-current bg-nord1 px-8 py-3">
				<router-link to="/">Go Home</router-link>
			</span>
		</a>
	</button>
</main>
