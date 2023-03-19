import { writable } from "svelte/store";
import { supabaseFunctions } from "../data/supabase.js";

let comments = [];
export const commentsStore = writable(comments);

let init = async (filterByProf) => {
  comments = await supabaseFunctions.getComments();
  comments = comments.sort((c1, c2) => new Date(c2.created_at) > new Date(c1.created_at));
  if (filterByProf) filterByProfName();
  else commentsStore.set(comments);
};

let filterByProfName = async () => {
  comments = comments.filter((c) => c.Nom_prof == "Albert Bemmaor");
  console.log("filtred :");
  console.log(comments);
  commentsStore.set(comments);
};

let addComment = async (comment) => {
  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let date = cYear + "-" + cMonth + "-" + cDay;
  comment.time = time;
  comment.date = date;
  comment.Nom_cours = "COMM31425 - Séminaire Communication Synthèse"
  await supabaseFunctions.addReview(comment);
  init(false)
};


export let storeFunctions = {
  init,
  addComment,
  filterByProfName
};
