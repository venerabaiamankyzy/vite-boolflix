<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store";
export default {
  name: "AppVue",

  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    fetchFilterpage(term) {
      axios
        .get("https://api.themoviedb.org/3/search/" + "movie", {
          params: {
            api_key: "84085ac7e9dc8921140ff7714d95eabd",
            query: this.store.term,
            language: "it-IT",
          },
        })
        .then((response) => {
          store.movies = response.data.results;
        });
    },
  },
};
</script>

<template>
  <AppHeader @on-search="fetchFilterpage" />
  <AppMain />
</template>

<style lang="scss"></style>
