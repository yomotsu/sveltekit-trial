<script lang="ts">
	import json from '../../data/index.json';
</script>

<svelte:head>
	<title>stories</title>
</svelte:head>

<ul>
	{#each json as item}
		<li>
			<a href="/stories/{item.id}/">{ item.id }</a>
		</li>
	{/each}
</ul>
