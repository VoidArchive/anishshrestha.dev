<script lang="ts">
	interface metadata {
		title: string;
		slug: string;
		excerpt: string;
		coverImage?: string;
		date: Date;
		updated?: Date;
		categories?: string[];
	}

	export let posts: metadata[];
</script>

<div class="grid grid-flow-row gap-4">
	{#each posts as post}
		<div class="scale-95 hover:scale-100 ease-in duration-200 min-w-min">
			<a href="/blog/{post.slug}">
				<div class="bg-nord2 shadow-md rounded-lg">
					<div class="p-6">
						<h2 class="text-nord9 font-bold text-xl tracking-tight ">
							{post.title}
						</h2>

						<p class="font-light text-sm text-nord4">
							{post.excerpt}
						</p>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
