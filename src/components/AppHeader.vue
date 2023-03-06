<script>
import { store } from "../data/store";

export default {
  name: "AppHeader",

  data() {
    return {
      store,
    };
  },
  emits: ["on-search"],

  methods: {
    seach() {
      this.$emit("on-search", this.store.term);
      store.term = "";
    },
  },

  // components: {
  //   AppSearch,
  // },
};
</script>

<template>
  <header>
    <div class="logo">
      <a href="#">BOOLFLIX</a>
    </div>
    <div class="search">
      <form @submit.prevent="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            :placeholder="placeholder || 'Cerca...'"
            v-model="store.term"
            @keyup.enter="seach"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="seach"
          >
            Search
          </button>
        </div>
      </form>
      <!-- <AppSearch placeholder="Search movies..." @on-search="fetchFilterpage" /> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/variables" as *;

header {
  @include flex-between("both");
  background-color: rgba(31, 31, 31);
  padding: 0 20px;
  .logo {
    a {
      text-decoration: none;
      font-size: 1.7rem;
      color: $logo-color;
      font-weight: 600;
    }
  }
  .search {
    padding-top: 10px;
  }
}
</style>
