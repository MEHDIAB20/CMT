<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="flex w-full min-h-screen font-sans bg-gray-800">
  <Navbar />
  <slot />
</div>
