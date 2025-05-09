<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_APP_NAME } from '$env/static/public';
  let searchTerm = "";

  function search(e: SubmitEvent) {
    e.preventDefault();
    if (searchTerm.trim()) {
      goto(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  }
</script>

<header
  class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between"
>
  <a href="/" class="text-xl font-bold">{PUBLIC_APP_NAME}</a>

  <form on:submit={search} class="flex items-center space-x-2">
    <input
      bind:value={searchTerm}
      type="text"
      placeholder="Search videos..."
      class="px-3 py-1 rounded bg-white text-black focus:outline-none"
    />
    <button
      type="submit"
      class="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700">Search</button
    >
  </form>
</header>
