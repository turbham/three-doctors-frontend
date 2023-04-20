import { createStore } from 'vuex';
import auth from './auth';
import data from "./data";
import user from './user';

export default createStore({
  state: {
    isAuthenticated: true
  },
  getters: {
  },
  getters: {},
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(
        (i) => (i.product.id = item.product.id)
      );
      console.log("exists o", exists);
      if (exists.lenght) {
        exists[0].quantity =
          parseInt(exists[0].quantity) + parseInt(item.quantity);
      } else {
        state.cart.items.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  modules: {
    auth,
    user,
    data
  }
})
