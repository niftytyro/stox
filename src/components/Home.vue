<template>
  <div class="wrapper">
    <h1>Trade or View your Portfolio</h1>
    <p>Click on 'End Day' to begin a new day.</p>
    <hr />
    <h5>Your Funds: {{ funds }}</h5>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.getFund;
    }
  }
};
</script>

<style scoped>
.wrapper {
  border: 1px solid #cccccc;
  border-radius: 2px;
  box-shadow: 0px 0px 5px -2.5px #666666;
  padding: 20px;
}
h1 {
  color: #000000cc;
}
p {
  font-size: 15px;
  font-weight: 500;
  color: #000000bb;
}
h5 {
  color: #000000bb;
  font-weight: 900;
}
</style>