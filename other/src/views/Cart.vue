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
      <div>
        <div v-if="isCartListLoading">
          <div class="w-full lg:w-7/12 animate-pulse">
            <div
              class="flex flex-row items-start justify-between w-full lg:w-10/12 mb-4"
            >
              <div class="flex flex-row items-start space-x-5">
                <div class="w-40 h-40 bg-slate-400 relative"></div>
                <div class="space-y-3">
                  <p class="font-windsor-pro-bold h-4 w-full bg-slate-400"></p>
                  <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                    <span class="w-10 h-3 bg-slate-400"></span>
                    <span class="w-10 h-3 bg-slate-400"></span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                    <span
                      class="text-SpunPearl text-[12px] h-2 w-2 bg-slate-400"
                    ></span>
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end space-y-11">
                <p
                  class="text-sm lg:text-base font-semibold font-windsor-pro-bold bg-slate-400 h-3 w-4"
                ></p>
                <div class="w-3 h-4 bg-slate-400"></div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-7/12 animate-pulse">
            <div
              class="flex flex-row items-start justify-between w-full lg:w-10/12 mb-4"
            >
              <div class="flex flex-row items-start space-x-5">
                <div class="w-40 h-40 bg-slate-400 relative"></div>
                <div class="space-y-3">
                  <p class="font-windsor-pro-bold h-4 w-full bg-slate-400"></p>
                  <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                    <span class="w-10 h-3 bg-slate-400"></span>
                    <span class="w-10 h-3 bg-slate-400"></span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                    <span
                      class="text-SpunPearl text-[12px] h-2 w-2 bg-slate-400"
                    ></span>
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end space-y-11">
                <p
                  class="text-sm lg:text-base font-semibold font-windsor-pro-bold bg-slate-400 h-3 w-4"
                ></p>
                <div class="w-3 h-4 bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div
            v-show="cartsProduct.length === 0"
            class="flex flex-col items-center justify-center space-y-3"
          >
            <img
              src="../assets/images/empty-shopping-cart.png"
              class="w-24"
              alt=""
            />
            <p>Your cart is empty.</p>
            <p>You have not added any product to your cart.</p>
            <router-link
              to="products"
              class="font-windsor-pro-bold bg-black text-white w-fit flex items-center justify-center py-2 px-6 border border-GreyChateau"
              >Start Shopping</router-link
            >
          </div>
          <div v-show="cartsProduct.length >= 1">
            <div
              class="flex flex-col space-y-4 items-start lg:space-y-0 lg:flex-row lg:space-x-12"
            >
              <div class="w-full lg:w-7/12">
                <div v-for="product in cartsProduct" :key="product._id">
                  <div
                    class="flex flex-row items-start justify-between w-full lg:w-10/12 mb-4"
                  >
                    <div class="flex flex-row items-start space-x-5">
                      <div class="w-40 h-40 bg-GreyCloud relative">
                        <img
                          :src="product.image"
                          class="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div class="space-y-3">
                        <p class="font-windsor-pro-bold">
                          {{ product.name }}
                        </p>
                        <div
                          class="text-GreyChateau text-xs lg:text-sm space-x-3"
                        >
                          <span>Size</span>
                          <span>8mm</span>
                        </div>
                        <div class="flex flex-row items-center space-x-4">
                          <button
                            :disabled="product.quantity === 1"
                            @click="updateQuantity(product, -1)"
                            class="flex bg-Platinum px-2 rounded-lg"
                          >
                            -
                          </button>
                          <span class="text-SpunPearl text-[12px]">{{
                            product.quantity
                          }}</span>
                          <button
                            @click="updateQuantity(product, 1)"
                            class="flex bg-Platinum px-2 rounded-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end space-y-11">
                      <p
                        class="text-sm lg:text-base font-semibold font-windsor-pro-bold"
                      >
                        ${{ product.price }}
                      </p>
                      <div class="flex flex-row items-center space-x-3">
                        <div class="">
                          <img
                            src="../assets/icons/delete.svg"
                            class="w-5 cursor-pointer"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-3/12">
                <p class="mb-2">Do you have a promo code?</p>
                <div class="space-y-10">
                  <div class="flex flex-row items-center space-x-3 mb-6">
                    <input
                      v-model="inputValue"
                      type="text"
                      name=""
                      id="inputField"
                      class="w-full bg-VeryLightPink border-[0.1px] border-GreyChateau p-1.5 h-10"
                    />
                    <button
                      @click="displayError"
                      class="font-windsor-pro-bold bg-black text-white w-20 h-10 flex items-center justify-center py-2 px-6 border border-GreyChateau"
                    >
                      <span
                        v-if="isLoading"
                        class="w-20 h-10 flex justify-center items-center"
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline w-4 h-4 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span v-else>Apply</span>
                    </button>
                  </div>
                  <div class="text-base font-light space-y-1.5">
                    <div class="flex flex-row items-center justify-between">
                      <p>Subtotal</p>
                      <p>${{ cartTotal.toFixed(2) }}</p>
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
                    <p>${{ (cartTotal + 5).toFixed(2) }}</p>
                  </div>
                  <div class="space-y-2">
                    <router-link
                      to="/checkout"
                      class="font-windsor-pro-bold w-full flex justify-center p-3 bg-ShamrockGreen text-white"
                    >
                      Checkout
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-else>lol</div> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Cart",
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      cart: [],
      cartsProduct: [],
      inputValue: "",
      isLoading: false,
      isCartListLoading: false,
      // loading: false,
      // quantity: 1,
    };
  },

  methods: {
    async queryCart() {
      // this.loading = true;
      this.isCartListLoading = true;
      const viewaddCartId = localStorage.getItem("cartId");
      await this.$store.dispatch("query", {
        endpoint: "viewaddCart",
        storeKey: "cartList",
        payload: { viewaddCartId: viewaddCartId },
      });
      this.carts = this.$store.state.data.cartList;
      console.log("this.cart", this.carts);
      this.cartsProduct = this.carts.productId;
      console.log("bb cartsProduct", this.cartsProduct);
      console.log("this.cart in cart", this.carts);

      // check each product to set the product quantity
      this.carts.productId.forEach((product) => {
        const index = this.cartsProduct.indexOf(product._id);
        if (index !== -1) {
          product.quantity = this.carts[index].quantity;
        } else {
          product.quantity = 1;
        }
      });
      // this.loading = false;
      this.isCartListLoading = false;
    },

    async updateQuantity(product, amount) {
      product.quantity += amount;

      // Update the quantity of the product in the cart
      const viewaddCartId = localStorage.getItem("cartId");
      await this.$store.dispatch("updateCart", {
        endpoint: "updateCart",
        payload: {
          viewaddCartId: viewaddCartId,
          productId: product._id,
          quantity: product.quantity,
        },
      });
    },

    // check if the promo code is valid
    displayError() {
      if (this.inputValue !== "") {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          toast.error("Invalid promo code", {
            autoClose: 1000,
          });
          this.inputValue = "";
        }, 2000);
      }
    },
  },

  computed: {
    // get the total priice of products added to cart
    cartTotal() {
      let total = 0;
      for (let product of this.cartsProduct) {
        total += parseFloat(product.price);
      }
      this.subtotal = total;
      // console.log("the subtotal", total);
      return total;
    },
  },

  created() {
    this.queryCart();
  },
};
</script>
