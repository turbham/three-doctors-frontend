<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-10 md:mb-24">
      <div class="space-y-12 mb-12">
        <p>Homepage / Cart</p>
        <p
          class="text-lg md:text-2xl font-medium font-windsor-pro-bold text-BrownBramble"
        >
          Cart
        </p>
      </div>
      <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start">
        <div class="w-full lg:w-8/12 space-y-16">
          <div class="space-y-4">
            <div class="w-full lg:w-8/12">
              <div class="flex flex-row items-start justify-between">
                <div class="flex flex-col items-start space-y-5">
                  <div v-for="cart in carts" :key="cart.id">
                    <div class="w-40 h-40 bg-GreyCloud relative">
                      <img
                        :src="cart.image"
                        class="h-full object-cover"
                        alt=""
                      />
                      <div class="absolute top-4 right-4">
                        <img src="../assets/icons/fi_small_heart.svg" alt="" />
                      </div>
                    </div>
                    <div class="space-y-3">
                      <p class="font-windsor-pro-bold">
                        {{ cart.name }}
                      </p>
                      <div
                        class="text-GreyChateau text-xs lg:text-sm space-x-3"
                      >
                        <span>Size</span>
                        <span>8mm</span>
                      </div>
                      <div class="flex flex-row items-center space-x-4">
                        <button class="flex bg-Platinum px-2 rounded-lg">
                          -
                        </button>
                        <span class="text-SpunPearl text-[12px]">0</span>
                        <button class="flex bg-Platinum px-2 rounded-lg">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end space-y-11">
                    <p
                      class="text-sm lg:text-base font-semibold font-windsor-pro-bold"
                    >
                      $24.00
                    </p>
                    <div class="flex flex-row items-center space-x-3">
                      <div class="">
                        <img
                          src="../assets/icons/fi_small_heart.svg"
                          class="w-5"
                          alt=""
                        />
                      </div>
                      <div class="">
                        <img
                          src="../assets/icons/delete.svg"
                          class="w-5"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-sm">
            <p>Shipping</p>
            <p>
              <span class="font-light">Arrives by Thu,Apr 20 </span>
              <span class="font-semibold underline">Edit Location</span>
            </p>
          </div>
        </div>
        <div class="w-full lg:w-3/12">
          <p class="mb-2">Do you have a promo code?</p>
          <div class="space-y-10">
            <div class="flex flex-row items-center space-x-3 mb-6">
              <input
                type="text"
                name=""
                id=""
                class="w-full bg-VeryLightPink border-[0.1px] border-GreyChateau p-1.5 h-10"
              />
              <button
                class="font-windsor-pro-bold bg-black text-white w-fit py-2 px-6 border border-GreyChateau"
              >
                Apply
              </button>
            </div>
            <div class="text-base font-light space-y-1.5">
              <div class="flex flex-row items-center justify-between">
                <p>Subtotal</p>
                <p>$300.00</p>
              </div>
              <div class="flex flex-row items-center justify-between">
                <p>Estimated Shipping</p>
                <p>$5.00</p>
              </div>
              <div class="flex flex-row items-center justify-between">
                <p>Estimated Tax</p>
                <p></p>
              </div>
            </div>
            <div
              class="flex flex-row items-center justify-between font-light border-y-[0.1px] border-black py-6"
            >
              <p>Total</p>
              <p>$305.00</p>
            </div>
            <div class="space-y-2">
              <router-link
                to="/checkout"
                class="font-windsor-pro-bold w-full flex justify-center p-3 bg-ShamrockGreen text-white"
              >
                Checkout
              </router-link>
              <!-- <button
                class="w-full flex justify-center p-3 rounded-xl bg-AquaHaze text-white"
              >
                <img src="../assets/icons/payPal-logo.svg" alt="" />
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <OtherProduct />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import OtherProduct from "@/views/product/OtherProduct.vue";
export default {
  name: "Cart",
  components: {
    Navbar,
    Footer,
    OtherProduct,
  },
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    async queryCart() {
      await this.$store.dispatch("query", {
        endpoint: "listaddCart",
        storeKey: "cartList",
      });
      this.carts = this.$store.state.data.cartList;
    },
  },

  computed: {
    carts() {
      // Replace 'cart_id' with the actual property name that represents the cart ID
      const cartId = "cart_id";
      // Filter the 'carts' array to get only the items that have the cart ID
      return this.carts.filter((cart) => cart.cart_id === cartId);
    },
  },

  created() {
    this.queryCart();
  },
};
</script>
