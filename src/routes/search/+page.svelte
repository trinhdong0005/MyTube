<script lang="ts">
  import VideoCard from '$lib/components/VideoCard.svelte';
  import type { SearchInfo } from '$lib/types';

  export let data: {
    results: SearchInfo[];
    query: string;
  };

  const searchTitle = `Search results for "${data.query}"`;
</script>

<svelte:head>
	<title>{searchTitle}</title>
</svelte:head>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">{searchTitle}</h1>
  {#if data.results.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each data.results as file}
        <VideoCard {file} />
      {/each}
    </div>
  {:else}
    <p>No results found.</p>
  {/if}
</div>
