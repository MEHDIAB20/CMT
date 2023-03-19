import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oystdujlaxfltxlyflhw.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95c3RkdWpsYXhmbHR4bHlmbGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNjQyOTUsImV4cCI6MTk5NDY0MDI5NX0.Rm7z5paYnqw6tY6gqcxy4Ds3Dfxd8fBaYEEST6KpPyw";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let getComments = async () => {
  let { data, error } = await supabase.from("review").select("*");
  return data;
};

let addReview = async (comment) => {
  const { data, error } = await supabase
    .from("review")
    .insert([comment]);
};

export let supabaseFunctions = {
  getComments, addReview
}
