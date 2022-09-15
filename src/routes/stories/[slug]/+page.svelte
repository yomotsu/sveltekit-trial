<script lang="ts">
	type PageData = {
		id: string,
	}
  export let data: PageData;
</script>

<svelte:head>
	<title>{data.id}</title>
</svelte:head>

<h1>{data.id}</h1>
