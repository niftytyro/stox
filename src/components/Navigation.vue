<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Stock Trader</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stocks</a>
        </li>
      </ul>
    </div>
    <div class="my-2 my-lg-0" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <span class="navbar-text">End Day</span>
        </li>
        <li class="nav-item">
          <span class="navbar-text">Funds: ${{ fund }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    fund() {
      return "10.00";
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
.nav-item {
  margin-left: 5px;
  margin-right: 5px;
}
.nav-item .item {
  color: #00000077;
  /* padding: 0.5rem 1rem 0; */
  /* font-size: 1rem; */
}
</style>