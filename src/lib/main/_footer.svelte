<script lang="ts">
	let currentYear = new Date().getFullYear();
	interface Link {
		alt: string;
		url?: string;
		id: string;
	}

	const socialLinks: Link[] = [
		{
			alt: 'github',
			id: '/SocialSprite.svg#github',
			url: 'https://github.com/voidarchive'
		},

		{
			alt: 'linkedin',
			id: '/SocialSprite.svg#linkedin',
			url: 'https://www.linkedin.com/in/voidarchive/'
		},
		{
			alt: 'twitter',
			id: '/SocialSprite.svg#twitter',
			url: 'https://twitter.com/VoidArchive'
		},
		{
			alt: 'mail',
			id: '/SocialSprite.svg#mail',
			url: 'mailto:anishshresthacode@gmail.com'
		},
		{
			alt: 'rss',
			id: '/SocialSprite.svg#rss',
			url: '/rss.xml'
		}
	];
</script>

<footer>
	<!-- Email -->
	<div class="fixed bottom-0 left-auto right-4 z-10 hidden w-10 md:block ">
		<div class="line">
			<a
				class="text-vertical mx-auto my-5 scale-y-95 text-sm text-nord4 duration-300 ease-in hover:scale-y-100 hover:text-nord11"
				href="mailto:anishshresthacode@gmail.com"
				>anishshresthacode@gmail.com
			</a>
		</div>
	</div>

	<!-- Social Link -->
	<div class="bottom-0 md:fixed md:right-auto md:left-4 md:z-10 md:w-10">
		<div class="line justify-center gap-6">
			{#each socialLinks as icon}
				<a
					href={icon.url}
					target="_blank"
					rel="noopener {icon.alt === 'rss' ? 'external' : ''}"
					alt={icon.alt}
					class={icon.alt === 'mail' ? 'md:hidden' : ''}
				>
					<svg
						class=" scale-90 stroke-nord4 duration-300 hover:scale-100 hover:stroke-nord11"
						width="24"
						height="24"
					>
						<use xlink:href={icon.id} href={icon.id} />
					</svg>
				</a>
			{/each}
		</div>
	</div>

	<!-- Copyright div -->
	<div class="p-4 text-center text-xs text-nord4">
		© {currentYear} Copyright: Anish shrestha. Made with SvelteKit
	</div>
</footer>

<style>
	.line {
		display: flex;
		gap: 1rem;
	}
	@media (min-width: 48em) {
		.text-vertical {
			writing-mode: vertical-rl;
		}
		.line {
			flex-direction: column;
			-webkit-box-align: center;
			align-items: center;
			position: relative;
			gap: 1.5rem;
		}
		.line::after {
			content: '';
			display: block;
			width: 1px;
			height: 90px;
			margin: 0px auto;
			--tw-text-opacity: 1;
			background-color: rgb(216 222 233 / var(--tw-text-opacity));
		}
	}
</style>
