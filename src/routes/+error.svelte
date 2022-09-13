<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="h-screen w-full flex flex-col justify-center items-center">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">{$page.status}</h1>
	<div class="bg-nord11 px-2 text-sm rounded rotate-12 absolute">{$page.error?.message}</div>
	<button class="mt-5">
		<a
			href="/"
			class="relative inline-block text-sm font-medium text-nord4 group active:text-orange-500 focus:outline-none focus:ring"
		>
			<span
				class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-nord4 group-hover:translate-y-0 group-hover:translate-x-0"
			/>

			<span class="relative block px-8 py-3 bg-nord1 border border-current">
				<router-link to="/">Go Home</router-link>
			</span>
		</a>
	</button>
</main>
