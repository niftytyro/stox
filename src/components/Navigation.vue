<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      <a class="navbar-brand">Stock Trader</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" to="/portfolio">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/stocks">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
    </div>
    <div class="my-2 my-lg-0" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <span class="navbar-text" id="end-day-button" @click="endDay">End Day</span>
        </li>
        <li class="nav-item">
          <span class="navbar-text">Funds: {{ fund }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    fund() {
      return this.$store.getters.getFund;
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch("endDay");
    }
  }
};
</script>

<style scoped>
.navbar {
  border: 1px solid #dddddd;
  border-radius: 2px;
}
.navbar-brand {
  color: #666666;
  font-weight: 500;
}
.navbar-text {
  padding: 0 7px;
}
.nav-item {
  margin-left: 5px;
  margin-right: 5px;
}
.nav-item .item {
  color: #00000077;
}
#end-day-button {
  cursor: pointer;
}
</style>