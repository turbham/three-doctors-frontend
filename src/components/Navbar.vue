<template>
  <div class="flex items-center h-[80px] sticky top-0 z-50 bg-VeryLightPink">
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-between">
        <router-link to="/">
          <img src="../assets/icons/logo.svg" alt="" />
        </router-link>
        <div class="hidden md:flex items-center md:space-x-10 lg:space-x-16">
          <router-link to="/products">SMART FILTERS</router-link>
          <router-link to="/products">APPAREL</router-link>
        </div>
        <router-link to="/cart" class="flex items-center space-x-2">
          <p>CART</p>
          <span class="border-dotted border border-black px-2 rounded-full">{{
            cartTotalLenth
          }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  computed: {
    cartTotalLenth() {
      let totalLenth = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLenth += this.cart.items[i].quantity;
      }
      return totalLenth;
    },
  },
};
</script>
