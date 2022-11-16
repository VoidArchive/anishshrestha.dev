<script lang="ts">
	import type { Project } from '$lib/utils/config';

	export let project: Project;
</script>

<div class="bg-nord2 text-nord4">
	<h2>{project.title}</h2>
</div>
