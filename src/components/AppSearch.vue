<!-- <script>
// import AppHeader from "./components/AppHeader.vue";
export default {
  name: "AppSearch",
  data() {
    return {
      term: "",
    };
  },
  props: {
    placeholder: String,
  },
  // components: {
  // },
  emits: ["on-search"],

  methods: {
    seach() {
      this.$emit("on-search", this.term);
      this.term = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        :placeholder="placeholder || 'Cerca...'"
        v-model="store.term"
        @keyup.enter="seach"
      />
      <button class="btn btn-outline-secondary" type="button" @click="search">
        Search
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
</style> -->
