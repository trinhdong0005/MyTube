<script>
  let { children } = $props();
  import "../app.css";
  import Header from '$lib/components/Header.svelte';
</script>

<div class="bg-white dark:bg-gray-800 min-h-screen">
  <Header />
  {@render children()}
</div>