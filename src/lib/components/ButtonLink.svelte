<script lang="ts">
	export let href: '/';
	let className: string = '';
	export { className as class };
</script>

<a
	{href}
	class="{className} text-center bg-transparent hover:bg-nord11 text-nord11 font-semibold hover:text-nord4 py-2 px-4 border border-nord11 hover:border-transparent rounded"
>
	<slot /></a
>
