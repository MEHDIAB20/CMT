<script setup>
  import { storeFunctions } from "../data/CommentsStore.js";
  import { goto } from "$app/navigation";

  export let review = {
    classComment: "",
    profComment: "",
    date: "",
    time: "",
    classGrade: 5,
    profGrade: 5,
    points: 0,
    trimestre: "",
    scholarYear: "",
    Nom_prof: "",
  };
</script>

<div class="p-4 w-4/5 bg-gray-900 rounded-lg m-auto mt-6">
  <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-8 m-auto">
    <div class="md:w-1/3">
      <div class="text-3xl font-semibold text-white p-2">
        Commentaire sur le cours
      </div>
      <div>
        <textarea
          class="text-sm tracking-wide bg-gray-600 text-white w-full h-40 p-2"
          bind:value={review.classComment}
        />
      </div>
      <div class="text-3xl font-semibold text-white mt-2">
        Commentaire sur le prof
      </div>
      <div>
        <textarea
          class="text-sm tracking-wide  bg-gray-600 text-white w-full h-40"
          bind:value={review.profComment}
        />
      </div>
    </div>
    <div class="rounded-lg bg-gray-800 p-4 text-white md:w-1/3">
      <ul>
        <li>
          <strong>Professeur :</strong>
          <a href="#"
            ><input
              type="text"
              class="bg-gray-600 text-white w-full"
              bind:value={review.Nom_prof}
            /></a
          >
        </li>
        <li>
          <strong>Note Cours :</strong>
          <input
            class="bg-gray-600 text-white w-full"
            min="0"
            max="20"
            type="number"
            bind:value={review.classGrade}
          />
        </li>
        <li>
          <strong>Note Professeur :</strong><input
            type="number"
            min="0"
            max="20"
            class="bg-gray-600 text-white w-full"
            bind:value={review.profGrade}
          />
        </li>
        <li>
          <strong>Points Mises :</strong><input
            type="number"
            min="0"
            max="200"
            class="bg-gray-600 text-white w-full"
            bind:value={review.points}
          />
        </li>
        <li>
          <strong>Trimestre :</strong><input
            type="text"
            placeholder="T1"
            class="bg-gray-600 text-white w-full"
            bind:value={review.trimestre}
          />
        </li>
        <li>
          <strong>Année : </strong><input
            type="text"
            placeholder="2023/2024"
            class="bg-gray-600 text-white w-full"
            bind:value={review.scholarYear}
          />
        </li>
      </ul>
    </div>
    <div class="mt-10 md:mt-0 md:w-1/3 relative">
      <button
        class="bg-primary text-white w-full h-10 rounded-md absolute bottom-0"
        on:click={() => {
          storeFunctions.addComment(review);
          goto("/cours");
        }}
      >
        commenter
      </button>
    </div>
  </div>
</div>
