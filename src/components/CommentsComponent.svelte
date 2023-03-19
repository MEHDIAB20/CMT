<script>
  import Comment from "../components/CommentComponent.svelte";
  import ScoreComponent from "../components/ScoreComponent.svelte";
  import { commentsStore, storeFunctions } from "../data/CommentsStore.js";
  import { goto } from "$app/navigation";

  export let comments = [];
  let noteCours = 0;
  let cards = [
    { name: "Note du cours", value: noteCours + "-/10" },
    { name: "Pédagogie des profs", value: "6.5/10" },
    { name: "Moyenne points mises", value: "-" },
    { name: "Nombre d'avis", value: "-" },
  ];
  storeFunctions.init(false);
  commentsStore.subscribe((data) => {
    comments = data;

    let classGrade = 0;
    comments.forEach((element) => {
      classGrade += parseFloat(element.classGrade);
    });
    cards[0].value = (classGrade / comments.length).toFixed(2);

    let profGrade = 0;
    comments.forEach((element) => {
      profGrade += parseFloat(element.profGrade);
    });
    cards[1].value = (profGrade / comments.length).toFixed(2);

    let avgPoints = 0;
    comments.forEach((element) => (avgPoints += element.points));
    cards[2].value = Math.round(avgPoints / comments.length);

    cards[3].value = comments.length;

    cards = cards;
  });
</script>

<div class="flex w-full min-h-screen font-sans bg-gray-800">
  <main class="flex flex-col flex-1 gap-6 px-4 pb-8">
    <header>
      <h1 class="text-3xl font-semibold leading-loose text-white ml-12">
        COMM31425 - Séminaire Communication Synthèse
      </h1>

      <button
        class="bg-primary text-white w-1/3 h-14 md:w-1/4 md:h-10 mx-auto h-10 rounded-md  ml-12 font-bold"
        on:click={() => goto("/commenter")}
      >
        ajouter Commentaire
      </button>
    </header>
    <hr class="border-gray-700" />

    <ScoreComponent {cards} />

    <div class="flex">
      <!-- <button>
            test 1
        </button>
        <button>
            test 2
        </button> -->
    </div>

    {#each comments as comment}
      <div>
        <Comment review={comment} />
      </div>
    {/each}
  </main>
</div>
