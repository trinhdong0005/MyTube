<script lang="ts">
  import VideoCard from '$lib/components/VideoCard.svelte';
  import type { FileItem } from '$lib/types';
  import { PUBLIC_APP_NAME } from '$env/static/public';

  export let data: {
    files: FileItem[];
    totalPages: number;
    currentPage: number;
  };
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="p-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-6">
    {#each data.files as file}
      <VideoCard {file}/>
    {/each}
  </div>

  <!-- Pagination -->
  <div class="flex justify-center space-x-2">
    {#each Array(data.totalPages).fill(0).map((_, i) => i + 1) as page}
      <a
        href={`/?page=${page}`}
        class="px-3 py-1 rounded border text-sm transition
              {page === data.currentPage ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}">
        {page}
      </a>
    {/each}
  </div>
</div>
