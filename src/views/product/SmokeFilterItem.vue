<template>
  <div class="flex flex-col space-y-4 mx-2 md:mx-0">
    <router-link :to="{ name: 'product', params: { id: product._id } }">
      <div
        class="bg-white w-full h-[300px] md:h-[430px] relative border-4 border-BalticSea overflow-hidden"
      >
        <img
          :src="product.images[0]"
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
      <router-link
        :to="{ name: 'product', params: { id: product._id } }"
        class="bg-BalticSea text-white font-windsor-pro-bold px-6 py-3"
      >
        View Product
      </router-link>
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
        const cartId = localStorage.getItem("cartId");
        await this.$store.dispatch("query", {
          endpoint: "getCartById",
          storeKey: "cartList",
          payload: { cartId: cartId },
        });

        toast.success("Product added successfully", {
          autoClose: 1000,
        });
      }
    },
  },
};
</script>
