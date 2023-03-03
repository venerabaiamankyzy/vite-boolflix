<script>
// import AppHeader from "./components/AppHeader.vue";
export default {
  name: "AppSearch",
  data() {
    return {
      title: "Hello World",
    };
  },
  props: {
    message: String,
  },
  // components: {
  //   AppHeader,
  //
  // },
};
</script>

<template>
  <h1>
    {{ message }}
  </h1>
</template>

<style lang="scss" scoped></style>
