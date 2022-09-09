<script lang="ts">
</script>

<section id="about-me" class="container flex flex-col items-start gap-4">
	<!-- Heading Div -->
	<div class="flex items-center">
		<h1 class="text-2xl font-bold text-nord11">About Me</h1>
		<div class="w-32 md:w-64 h-[1px] bg-nord3 ml-2" />
	</div>
	<!-- Body Section of About Me -->
	<div class="flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
		<!-- Paragraph Div -->
		<div class="md:w-1/2 space-y-2 text-base">
			<p class="text-nord4 ">
				Hey! My name is Anish and I write and build random stuff on the Internet. I am also the
				co-founder of <a
					class="font-semibold link-underline link-underline-black"
					href="https://bhetum.co"
					rel="noopener"
					target="_blank">Bhetum</a
				>
				that makes meeting new people easy. Before that, I worked as a backend engineer with python and
				Odoo(OpenERP).
			</p>
			<p class="text-nord4">
				My goal in life is to someday, open a library in a secluded mountain and spend the rest of
				my life reading books. But for now, I have been learning <a
					class="font-semibold link-underline link-underline-black"
					href="https://kit.svelte.dev/"
					rel="noopener"
					target="_blank">SvelteKit with Typescript</a
				>
				for full-stack web development and
				<a
					class="font-semibold link-underline link-underline-black"
					href="https://www.rust-lang.org/"
					rel="noopener"
					target="_blank">Rust</a
				> on the side for data structures and algorithms.
			</p>
			<p class="text-nord4">Technologies I use to build stuff:</p>
			<ul class="text-nord4 columns-2 space-y-2">
				<li>SvelteKit</li>
				<li>Typescript</li>
				<li>TailwindCSS</li>
				<li>Rust</li>
				<li>Python</li>
				<li>PostgreSQL</li>
			</ul>
		</div>

		<!-- Image of Me -->
		<picture class="">
			<img
				width="300"
				height="300"
				class="rounded-xl grayscale hover:grayscale-0 scale-90 hover:scale-100 ease-in duration-300 drop-shadow-lg"
				src="/me.webp"
				alt="This is me"
			/>
		</picture>
	</div>
</section>

<style>
	.container {
		--max-width: 1000px;
		--padding: 1rem;

		width: min(var(--max-width), 100% - (var(--padding) * 2));
		margin-inline: auto;
	}

	li::before {
		content: '\27A4';
		color: #bf616a;
		font-size: 12px;
		margin-right: 8px;
	}

	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#bf616a, #bf616a);
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%;
	}
</style>
