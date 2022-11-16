<script lang="ts">
</script>

<section id="about-me" class="container flex flex-col items-start gap-4">
	<!-- Heading Div -->
	<div class="flex items-center">
		<h1 class="text-2xl font-bold text-nord11">About Me</h1>
		<div class="ml-2 h-[1px] w-32 bg-nord3 md:w-64" />
	</div>
	<!-- Body Section of About Me -->
	<div class="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
		<!-- Paragraph Div -->
		<div class="space-y-2 text-base md:w-1/2">
			<p class="text-nord4 ">
				Hey! My name is Anish and I write and build random stuff on the Internet. I am also the
				co-founder of <a
					class="link-underline link-underline-black font-semibold"
					href="https://bhetum.co"
					rel="noopener"
					target="_blank">Bhetum</a
				>
				that makes meeting new people easy. Before that, I worked as a backend engineer with python and
				Odoo The quote you see above are things that resonates with me, it loads new one on every refresh.
				Try it out!
			</p>
			<p class="text-nord4">
				My goal in life is to someday, open a library in a secluded mountain and spend the rest of
				my life reading books. But for now, I have been learning <a
					class="link-underline font-semibold"
					href="https://kit.svelte.dev/"
					rel="noopener"
					target="_blank">SvelteKit with Typescript</a
				>
				for full-stack web development and
				<a
					class="link-underline font-semibold"
					href="https://www.rust-lang.org/"
					rel="noopener"
					target="_blank">Rust</a
				> on the side for data structures and algorithms.
			</p>
			<p class="text-nord4">Technologies I use to build stuff:</p>
			<ul class="columns-2 space-y-2 text-nord4">
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
				class="scale-90 rounded-xl drop-shadow-lg grayscale duration-300 ease-in hover:scale-100 hover:grayscale-0"
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
</style>
