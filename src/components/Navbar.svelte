<script setup>
  import DiscountIcon from "../img/discount.svelte";
  import GraphIcon from "../img/graph.svelte";
  import HomeIcon from "../img/home.svelte";
  import { goto } from '$app/navigation'

  const menus = [
    { name: "home", icon: HomeIcon, route: "/" },
    { name: "Profs", icon: DiscountIcon, route: "/profs" },
    { name: "Cours", icon: GraphIcon , route: "/cours"},
  ];

  let activeIcon = "home";

  let setActive = (name, route) => {
    activeIcon = name;
    console.log("active : " +name);
    goto(route)
  };
</script>

<div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
  <div class="flex flex-col gap-y-4 items-end self-end pl-4">
    {#each menus as menu}
      {#if activeIcon == menu.name}
        <div
          class="bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0"
        >
          <button
            class="p-4 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary"
          >
            <svelte:component this={menu.icon} color="white" />
          </button>
        </div>
      {:else}
        <div>
          <button
            class="p-4 my-4 mr-4 ml-3 rounded-xl text-primary"
            on:click={() => setActive(menu.name, menu.route)}
          >
            <svelte:component this={menu.icon} color="rgb(235 150 106)" />
          </button>
        </div>
      {/if}
    {/each}
  </div>
</div>
