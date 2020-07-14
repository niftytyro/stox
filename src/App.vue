<template>
  <div class="container">
    <app-navbar></app-navbar>
    <div class="routing-view">
      <router-view></router-view>
    </div>
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
.routing-view {
  margin: 20px 0;
}
</style>
