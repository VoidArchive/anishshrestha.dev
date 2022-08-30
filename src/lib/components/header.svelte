<script lang="ts">
	let menuVisible = false;

	interface Link {
		text: string;
		url: string;
	}

	const navLinks: Link[] = [
		{
			text: 'Blog',
			url: '/blog/'
		},
		{
			text: 'Projects',
			url: '/projects/'
		},
		{
			text: 'Series',
			url: '/series/'
		}
	];
</script>

<header
	class="sticky top-0 py-6 px-8 sm:px-16 bg-red-300 backdrop-blur-sm transition-transform ease-in">
	<nav class="mx-auto flex items-center justify-between gap-x-8" aria-label="Global">
		<a href="/" class="flex-none">
			<span class="sr-only">Anish</span><img
				class="h-8 w-28 md:h-12 md:w-full"
				src="/favicon.png"
				alt="" /></a>

		<!-- Desktop Menu -->
		<div class="md:flex md:items-center md:gap-x-10 md:flex-wrap">
			{#each navLinks as link}
				<a
					href={link.url}
					class="text-xl py-2 border-b-2 font-medium transition-all ease-in-out duration-150"
					>{link.text}</a>
			{/each}
		</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
	}
</style>
