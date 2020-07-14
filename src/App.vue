<template>
  <div class="container">
    <app-navbar></app-navbar>
    <div class="routing-view">
      <transition name="slide" appear mode="out-in">
        <router-view></router-view>
      </transition>
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

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 0.25s ease-out forwards;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.1s ease-out;
}

@keyframes slide-in {
  from {
    transform: translateY(30px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0.3;
  }
}
</style>
