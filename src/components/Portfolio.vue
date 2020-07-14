<template>
  <div class="wrapper">
    <div class="stock-cards-group" v-if="myStocks.length">
      <app-stock-card
        v-for="(stock, index) in myStocks"
        :stock="stock"
        :operation="'Sell'"
        :key="index"
      ></app-stock-card>
    </div>
    <div class="empty-message" v-else>Nothing Here. Go buy something.</div>
  </div>
</template>

<script>
import StockCard from "./StockCard";

export default {
  components: {
    "app-stock-card": StockCard
  },
  computed: {
    myStocks() {
      return this.$store.getters.getMyStocks;
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
.empty-message {
  text-align: center;
  margin: auto;
}
</style>