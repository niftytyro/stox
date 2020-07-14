<template>
  <div class="wrapper">
    <div class="stock-cards-group">
      <app-stock-card v-for="(stock, index) in availableStocks" :stock="stock" :key="index"></app-stock-card>
    </div>
  </div>
</template>

<script>
import StockCard from "./StockCard";

export default {
  components: {
    "app-stock-card": StockCard
  },
  computed: {
    availableStocks() {
      return this.$store.getters.getAvailableStocks;
    }
  }
};
</script>

<style scoped>
.stock-cards-group {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>