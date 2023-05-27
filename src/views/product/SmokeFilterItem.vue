<template>
  <div class="flex flex-col space-y-4 mx-2 md:mx-0">
    <router-link :to="{ name: 'product', params: { id: product._id } }">
      <div
        class="bg-white w-full h-[300px] md:h-[430px] relative border-4 border-BalticSea overflow-hidden"
      >
        <img
          :src="product.image"
          class="w-full h-full object-cover hover:scale-125 transition-all duration-1000 cursor-pointer"
          :alt="product.name"
        />
        <!-- <div class="absolute top-10 right-10">
              <img src="../assets/icons/fi_heart.svg" alt="" />
            </div> -->
      </div>
    </router-link>
    <div class="flex flex-row items-center justify-between">
      <div class="text-DarkJungleGreen">
        <p class="text-sm md:text-lg font-windsor-pro-bold">
          {{ ReduceText(product.name) }}
        </p>
        <p class="font-sf-pro-display-medium text-2xl font-windsor-pro-bold">
          ${{ product.price }}
        </p>
      </div>
      <button
        @click="addToCart"
        class="bg-BalticSea text-white font-windsor-pro-bold px-6 py-3"
      >
        <span v-if="isLoading">
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
        <span v-else>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import myMixin from "../../utils/myMixin.js";

export default {
  name: "SmokeFilterItem",
  mixins: [myMixin],
  props: ["product"],

  data() {
    return {
      id: null,
      isLoading: false,
    };
  },

  methods: {
    async addToCart() {
      let checkCartId = window.localStorage.getItem("cartId");
      const cartItems = this.$store.getters.getCartList?.productId;
      console.log("lol smok", cartItems);

      // check if product already exist in cart
      let doesExist = cartItems.find(({ _id }) => _id === this.product._id);
      if (doesExist) {
        toast.error("Product already exist in cart", {
          autoClose: 1000,
        });
        return;
      }
      const cartInput = {
        quantity: 1,
        productId: this.product._id,
        cartId: checkCartId,
      };

      const response = await this.$store.dispatch("mutate", {
        endpoint: "addCart",
        data: { input: cartInput },
      });

      if (response) {
        const viewaddCartId = localStorage.getItem("cartId");
        await this.$store.dispatch("query", {
          endpoint: "viewaddCart",
          storeKey: "cartList",
          payload: { viewaddCartId: viewaddCartId },
        });

        toast.success("Product added successfully", {
          autoClose: 1000,
        });
      }
    },
  },
};
</script>
