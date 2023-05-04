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
            getCartLength || 0
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
      // cart: {
      //   items: [],
      // },
      cartItems: [],
    };
  },
  // beforeCreate() {
  //   this.$store.commit("initializeStore");
  // },
  // mounted() {
  //   console.log(this.productIdLength);
  // },

  methods: {
    async queryCart() {
      const viewaddCartId = localStorage.getItem("cartId");
      await this.$store.dispatch("query", {
        endpoint: "viewaddCart",
        storeKey: "cartList",
        payload: { viewaddCartId: viewaddCartId },
      });
    },
  },
  created() {
    this.queryCart();
  },
  computed: {
    getCartLength() {
      const cartItems = this.$store.getters.getCartList?.productId;
      if (cartItems && cartItems.length) return cartItems.length;
    },
  },

  watch: {
    getCartLength(value) {
      // console.log("the value", value);
      return value
    },
  },
};
</script>
