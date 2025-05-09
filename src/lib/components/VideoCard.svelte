<script lang="ts">
  import type { IVideoCard } from "$lib/types";
  import { formatDuration } from "$lib/utils";

  export let file: IVideoCard;
</script>

<a href={`/watch/${file.file_code}`} class="block">
  <div class="relative w-full aspect-video overflow-hidden rounded shadow">
    <img
      src={file.single_img}
      alt={file.title}
      class="absolute inset-0 w-full h-full object-contain"
    />
    <span
      class="absolute bottom-1 right-1 text-xs bg-black/70 text-white px-1 rounded"
    >
      {formatDuration(file.length)}
    </span>
  </div>
  <h2 class="mt-2 font-semibold text-sm dark:text-white">{file.title}</h2>
  <p class="text-xs text-gray-500">{file.uploaded} – {file.views} views</p>
</a>
