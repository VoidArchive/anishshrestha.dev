<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/utils/config';
</script>

{#each projects as project}
	<!-- content here -->
	<ProjectCard {project} />
{/each}
