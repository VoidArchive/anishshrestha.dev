<script lang="ts">
	export let title: string;
	export let quote: string;
	export let href: string;
	let className: string;
	export { className as class };
</script>

<div class="scale-95 hover:scale-100 ease-in duration-200 min-w-min {className}">
	<a {href}>
		<div class="bg-nord2 shadow-md rounded-lg">
			<div class="p-6">
				<h2 class="text-nord9 font-bold text-xl tracking-tight ">
					{title}
				</h2>

				<p class="font-light text-sm text-nord4">
					{quote}
				</p>
			</div>
		</div>
	</a>
</div>
