<template>
  <div class="container">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    "app-navbar": Navigation
  }
};
</script>

<style scoped>
.container {
  padding-top: 30px;
}
</style>
