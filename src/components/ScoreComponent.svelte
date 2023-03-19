<script setup>
  export let cards = [];
</script>

<div class="flex flex-col md:flex-row  gap-y-6 md:gap-x-16 mx-auto">
  {#each cards as card}
    <div class="flex flex-col p-4 w-44 bg-gray-900 rounded-lg gap-y-3">
      <div class="flex items-center gap-x-3">
        <div class="p-2 bg-gray-800 rounded-lg" />
        <div class="p-0.5 rounded-full bg-accent-green">
          <!-- put smiley here with accent green or red -->
        </div>
      </div>
      <div class="text-3xl font-semibold text-white">
        {card.value}
      </div>
      <div class="text-sm tracking-wide text-gray-500">
        {card.name}
      </div>
    </div>
  {/each}
</div>
