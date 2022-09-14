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
			alt: 'instagram',
			id: '/SocialSprite.svg#instagram',
			url: 'https://www.instagram.com/anis_shrestha/'
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
		}
	];
</script>

<footer>
	<!-- Email -->
	<div class="hidden md:block w-10 fixed bottom-0 left-auto right-4 z-10 ">
		<div class="line">
			<a
				class="text-vertical mx-auto my-5 text-nord4 hover:text-nord11 text-sm scale-y-95 hover:scale-y-100 ease-in duration-300"
				href="mailto:anishshresthacode@gmail.com"
				>anishshresthacode@gmail.com
			</a>
		</div>
	</div>

	<!-- Social Link -->
	<div class="md:w-10 md:fixed bottom-0 md:right-auto md:left-4 md:z-10">
		<div class="line gap-6 justify-center">
			{#each socialLinks as icon}
				<a href={icon.url} target="_blank" rel="noopener" alt={icon.alt}>
					<svg
						class="{icon.alt === 'mail'
							? 'md:hidden'
							: ''} stroke-nord4 hover:stroke-nord11 scale-90 hover:scale-100 duration-300"
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
	<div class="text-nord4 text-center p-4 text-xs">
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
