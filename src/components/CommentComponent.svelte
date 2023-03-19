<script setup>
  export let review = {
  };

  export let courseName = false;
</script>

<div class="p-4 w-4/5 bg-gray-900 rounded-lg mx-auto mb-4">
  <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-8 m-auto">
    <div class="md:w-2/3">
      <div class="text-3xl font-semibold text-white">
        Commentaire sur le cours
        {#if courseName}
          : {review.Nom_cours}
        {/if}
      </div>
      <div class="text-sm tracking-wide text-gray-500">
        {review.classComment}
      </div>
      <div class="text-3xl font-semibold text-white mt-12">
        Commentaire sur le prof
      </div>
      <div class="text-sm tracking-wide text-gray-500">
        {review.profComment}
      </div>
      <div class="text-right text-sm tracking-wide mt-12 text-white">
        Avis donné le {review.date} à {review.time}
      </div>
    </div>
    <div class="rounded-lg bg-gray-800 p-4 text-white md:w-1/3">
      <ul>
        <li>
          <strong>Professeur :</strong>
          <a href="#">{review.Nom_prof}</a>
        </li>
        <li><strong>Note Cours :</strong> {review.classGrade}</li>
        <li><strong>Note Professeur :</strong> {review.profGrade}</li>
        <li>
          <strong>Jour : </strong>
          {review.Jour}
        </li>
        <li><strong>Heure :</strong> -</li>
        <li><strong>Points Mises :</strong> {review.points}</li>
        <li><strong>Trimestre :</strong> {review.trimestre}</li>
        <li><strong>Année : </strong>{review.scholarYear}</li>
      </ul>
    </div>
  </div>
</div>
