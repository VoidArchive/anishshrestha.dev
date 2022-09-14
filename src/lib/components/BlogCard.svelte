<script lang="ts">
	import type { metadata } from '$lib/utils/config';
	export let post: metadata;
	const formattedDate = new Date(post.date)?.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
	const formattedUpdated = new Date(post.updated)?.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="grid grid-flow-row gap-4">
	<div class="scale-95 hover:scale-100 ease-in duration-200 min-w-min">
		<a href="/blog/{post.slug}">
			<div class="bg-nord2 shadow-md rounded-lg">
				<div class="p-6">
					<h2 class="text-nord8 font-bold text-xl tracking-tight ">
						{post.title}
					</h2>
					<p class="text-nord11 text-sm">{formattedDate}</p>
					<p class="mt-1 text-nord4">
						{post.excerpt}
					</p>
				</div>
			</div>
		</a>
	</div>
</div>
