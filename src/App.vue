<template>
  <div id="app">
    <NavHeader />
    <router-view />
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";

export default {
  components: {
    NavHeader,
  },
};
</script>

<style>
body {
  background-color: #F5F5F7; /* Replace with your desired background color */
}
</style>