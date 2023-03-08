import { reactive } from "vue";

export const store = reactive({
  term: "",
  movies: [],
  series: [],

  countryFlagUrl: "https://www.countryflagicons.com/FLAT/32/",
  // endpoint: "https://api.themoviedb.org/3",

  api_key: "84085ac7e9dc8921140ff7714d95eabd",
});
