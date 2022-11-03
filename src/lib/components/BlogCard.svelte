<script lang="ts">
	import type { Metadata } from '$lib/utils/config';
	export let post: Metadata;
	const formattedDate = new Date(post.date)?.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
	// const formattedUpdated = new Date(post.updated)?.toLocaleDateString('en-us', {
	// 	year: 'numeric',
	// 	month: 'long',
	// 	day: 'numeric'
	// });
</script>

<div class="grid grid-flow-row gap-4">
	<div class="min-w-min scale-95 duration-200 ease-in hover:scale-100">
		<a href="/blog/{post.slug}">
			<div class="rounded-lg bg-nord2 shadow-md">
				<div class="p-6">
					<h2 class="text-xl font-bold tracking-tight text-nord8 ">
						{post.title}
					</h2>
					<p class="text-sm text-nord11">{formattedDate}</p>
					<p class="mt-1 text-nord4">
						{post.excerpt}
					</p>
				</div>
			</div>
		</a>
	</div>
</div>
