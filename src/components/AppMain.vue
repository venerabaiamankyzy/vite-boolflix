<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div v-for="movie in store.movies">
      <h1>{{ movie.title }}</h1>
      <h2>{{ movie.original_title }}</h2>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
