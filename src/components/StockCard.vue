<template>
  <div class="card" style="min-width: 18rem;">
    <div class="card-header">
      <span class="stock-title">{{ stock['title'] }}</span>
      <span class="stock-price">Price: {{ stock['price'] }}</span>
      <span class="stock-quantity" v-if="stock['quantity']>0">| Quantity: {{ stock['quantity'] }}</span>
    </div>
    <div class="card-body">
      <span class="card-title">
        <input type="text" placeholder="Quantity" v-model="inputStock" />
      </span>
      <span class="card-text">
        <button class="btn btn-primary" @click="buyStock">{{ operation }}</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputStock: ""
    };
  },
  props: ["stock", "operation"],
  methods: {
    buyStock() {
      this.$store.dispatch(this.operation.toLowerCase() + "Stock", {
        title: this.stock["title"],
        price: parseFloat(this.stock["price"].substr(1)),
        quantity: parseInt(this.inputStock)
      });
    }
  }
};
</script>

<style scoped>
.card {
  width: 47%;
  margin: 10px 0;
  box-shadow: 0 0 5px -4px #000;
}
.card-header {
  color: #0056b8;
  background: #0056b815;
}
.stock-title {
  font-weight: 500;
  font-size: 18px;
}
.stock-price,
.stock-quantity {
  font-size: 13px;
  margin-left: 5px;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.btn {
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 5px;
}
input {
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  padding: 5px 5px 5px 10px;
}
input:focus {
  border: 1px solid #3392ff;
  border-radius: 5px;
  outline: none;
}
</style>