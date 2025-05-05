<script lang="ts">
	let open = false;
	const navItems = [
		{ href: '#work', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur md:backdrop-blur-lg"
	aria-label="Main"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
		<!-- Logo / Brand -->
		<a href="#hero" class="text-xl font-semibold tracking-wide select-none"> Anish </a>

		<!-- Desktop links -->
		<ul class="hidden gap-8 md:flex">
			{#each navItems as item}
				<li>
					<a href={item.href} class="text-sm font-medium opacity-80 transition hover:opacity-100"
						>{item.label}</a
					>
				</li>
			{/each}
		</ul>

		<!-- Mobile hamburger -->
		<button
			class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:border-white/20 focus:ring-2 focus:ring-amber-500/40 focus:outline-none md:hidden"
			on:click={() => (open = !open)}
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
		>
			<!-- icon lines -->
			<svg
				class="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				{#if !open}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
					/>
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile dropdown -->
	{#if open}
		<div
			class="border-t border-white/5 bg-black/90 backdrop-blur-sm md:hidden"
			on:click={() => (open = false)}
		>
			<ul class="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="block text-base font-medium opacity-90 transition hover:opacity-100"
							>{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	nav {
		/* fade-in when page loads */
		animation: fadeDown 0.4s ease-out;
	}
	@keyframes fadeDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
	}
</style>
