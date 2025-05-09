<script lang="ts">
  import type { FileInfo } from '$lib/types';
  import { formatDuration } from '$lib/utils';

  export let data: {
    file: FileInfo;
  };

  const { file } = data;
</script>

<svelte:head>
	<title>{file.title}</title>
</svelte:head>

<div class="p-4 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-4 dark:text-white">{file.title}</h1>

  <iframe
    title={file.title}
    class="w-full aspect-video mb-4"
    src={`${file.protected_embed}`}
    allowfullscreen
  ></iframe>

  <div class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
    <p>📅 Uploaded: {file.uploaded}</p>
    <p>⏱ Duration: {formatDuration(file.length)}</p>
    <p>👁 Views: {file.views}</p>
    <p>💾 Size: {(Number(file.size) / (1024 * 1024)).toFixed(2)} MB</p>
    <a
      href={file.protected_dl}
      class="inline-block mt-3 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      download
    >
      ⬇️ Download
    </a>
  </div>
</div>
