<section id="latest-post" class="container flex flex-col gap-4">
	<!-- Heading Div -->
	<div class="flex items-center">
		<h1 class="text-2xl font-bold text-nord11">Projects</h1>
		<div class="ml-2 h-[1px] w-32 bg-nord3 md:w-64" />
	</div>

	<!-- Projects -->
	<div class=" project1 flex flex-col items-center justify-evenly space-x-2 p-5 md:flex-row">
		<div class="flex flex-col gap-2">
			<h1 class="text-xl font-bold text-nord11">Bhetum</h1>
			<p class="max-w-sm text-nord6">
				Bhetum is a platform where we organize events and invite stranger to attend different
				activities.
			</p>
			<p class="mt-1 text-sm">
				<span class="mr-2 rounded-sm bg-nord10 p-1">#Typescript</span><span
					class=" rounded-sm bg-nord10 p-1">#SvelteKit</span
				>
			</p>
			<a
				href="https://www.bhetum.co"
				class="mt-4  rounded border border-nord11 bg-transparent py-2 px-4 text-center font-semibold text-nord11 duration-300 ease-in hover:border-transparent hover:bg-nord11 hover:text-nord4 focus:bg-nord11 focus:text-nord4"
				>View</a
			>
		</div>
		<a href="https://www.bhetum.co" target="_blank">
			<img
				width="500"
				height="500"
				class="rounded-md opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
				src="/projects/bhetum-cover.png"
				alt="bhetum-website"
			/>
		</a>
	</div>

	<div class=" project2 flex flex-col items-center justify-evenly p-5 md:flex-row-reverse ">
		<div class="flex flex-col gap-2">
			<h1 class="text-xl font-bold text-nord11">Automate Meroshare</h1>
			<p class="max-w-sm text-nord6">
				Automate mero share is a CLI tools that can automatically fill new ipo available on
				meroshare and check if it has been alloted or not.
			</p>
			<p class="text-sm">
				<span class="mr-2 rounded-sm bg-nord10 p-1">#Python</span><span
					class=" rounded-sm bg-nord10  p-1">#Selenium</span
				>
			</p>
			<a
				href="https://github.com/VoidArchive/meroshare-automate"
				class="mt-4  rounded border border-nord11 bg-transparent py-2 px-4 text-center font-semibold text-nord11 duration-300 ease-in hover:border-transparent hover:bg-nord11 hover:text-nord4 focus:bg-nord11 focus:text-nord4"
				>View</a
			>
		</div>
		<a class="mr-4" href="https://github.com/VoidArchive/meroshare-automate" target="_blank">
			<img
				width="500"
				height="500"
				class="rounded-md opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
				src="/projects/meroshare-cover.png"
				alt="bhetum-website"
			/>
		</a>
	</div>
</section>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}
</style>
