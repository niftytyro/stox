import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        fund: 1000.0,
        'available-stocks': [
            { 'title': 'BMW', price: 100 },
            { 'title': 'Apple', price: 186 },
            { 'title': 'Google', price: 150 },
            { 'title': 'Tesla', price: 210 }
        ],
        'my-stocks': []
    },
    getters: {
        'getFund'(state) {
            var fund = String(state.fund);
            if (fund.indexOf('.') < 0) {
                fund += '.00';
            }
            else {
                fund = fund.substr(0, fund.indexOf('.')) + fund.substr(fund.indexOf('.'), 3).padEnd(3, '0');
            }
            return '$' + fund;
        },
        'getAvailableStocks'(state) {
            var stocks = [];
            state["available-stocks"].forEach((value, index) => {
                var stock = String(value['price']);
                if (stock.indexOf('.') < 0) {
                    stock += '.00';
                }
                else {
                    stock = stock.substr(0, stock.indexOf('.')) + stock.substr(stock.indexOf('.'), 3).padEnd(3, '0');
                }

                stock = '$' + stock;
                stocks.push({ 'title': value['title'], 'price': stock });
            });
            return stocks;
        },
        'getMyStocks'(state) {
            var stocks = [];
            state["my-stocks"].forEach((value, index) => {
                var stock = String(value['price']);
                if (stock.indexOf('.') < 0) {
                    stock += '.00';
                }
                else {
                    stock = stock.substr(0, stock.indexOf('.')) + stock.substr(stock.indexOf('.'), 3).padEnd(3, '0');
                }

                stock = '$' + stock;
                stocks.push({ 'title': value['title'], 'price': stock, 'quantity': value['quantity'] });
            });
            return stocks;
        }
    },
    mutations: {
        'endDay'(state) {
            state["available-stocks"].forEach((value, index) => {
                var change = Math.random();
                var factor = Math.random() * 10;
                if (Math.random() < 0.5) {
                    var price = value.price - change * factor;
                } else {
                    var price = value.price + change * factor;
                }
                state["available-stocks"][index].price = price;
            });
        },
        'buyStock'(state, stock) {
            if (stock["quantity"] * stock["price"] <= state.fund) {
                var done = false;
                state['my-stocks'].forEach((value, index) => {
                    if ((value['title'] == stock['title']) && (value['price'] == stock['price'])) {
                        state["my-stocks"][index]["quantity"] += parseFloat(stock["quantity"]);
                        state.fund -= parseFloat(stock["quantity"]) * parseFloat(stock["price"]);
                        done = true;
                        return;
                    }
                });
                if (!done) {
                    state['my-stocks'].push({ 'title': stock["title"], 'quantity': stock["quantity"], 'price': stock["price"] });
                    state.fund -= parseFloat(stock["quantity"]) * parseFloat(stock["price"]);
                }
            } else {
                alert("Not enough funds!");
            }
        },
        'sellStock'(state, stock) {
            var done = false;
            var currentPrice;
            state["available-stocks"].forEach((value, index) => {
                console.log(index);
                if (value["title"] == stock["title"]) {
                    currentPrice = value["price"];
                }
            });
            state['my-stocks'].forEach((value, index) => {
                if ((value['title'] == stock['title']) && (value['quantity'] >= stock['quantity'])) {
                    state["my-stocks"][index]["quantity"] -= parseFloat(stock["quantity"]);
                    state.fund += parseFloat(stock["quantity"]) * currentPrice;
                    done = true;
                    if (state["my-stocks"][index]["quantity"] <= 0) {
                        state["my-stocks"].splice(index, 1);
                    }
                    return;
                }
            });
            if (!done) {
                alert("You don't have this item");
            }
        }
    },
    actions: {
        'endDay'(context) {
            context.commit('endDay');
        },
        'buyStock'(context, payload) {
            context.commit('buyStock', payload);
        },
        'sellStock'(context, payload) {
            context.commit('sellStock', payload);
        }
    }
});