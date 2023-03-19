<script>
  import Comment from "../components/CommentComponent.svelte";
  import ScoreComponent from "../components/ScoreComponent.svelte";
  import { commentsStore, storeFunctions } from "../data/CommentsStore.js";

  export let comments = [];
  const cards = [
    { name: "Moyenne points des cours", value: "" },
    { name: "Moyenne points mises", value: "" },
    { name: "Nombre d'avis", value: "" },
    { name: "Nombre de cours enseignés", value: "" },
  ];
  storeFunctions.init(true);
  commentsStore.subscribe((data) => {
    comments = data;

    let classGrade = 0;
    comments.forEach(
      (element) => (classGrade += parseFloat(element.classGrade))
    );
    cards[0].value = (classGrade / comments.length).toFixed(2);

    let avgPoints = 0;
    comments.forEach((element) => (avgPoints += element.points));
    cards[1].value = Math.round(avgPoints / comments.length);

    cards[2].value = comments.length;

    let classes = comments.map((element) => element.class);
    let unique = [...new Set(classes)];
    cards[3].value = unique.length;

    console.log("comments:" + comments);
  });
</script>

<div class="flex w-full min-h-screen font-sans bg-gray-800">
  <main class="flex flex-col flex-1 gap-6 px-4 pb-8">
    <header>
      <h1 class="text-3xl font-semibold leading-loose text-white ml-12">
        Albert Bemmaor
      </h1>
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
        <Comment review={comment} courseName={true} />
      </div>
    {/each}
  </main>
</div>
