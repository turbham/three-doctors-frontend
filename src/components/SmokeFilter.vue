<template>
  <div class="smokeFilterBg">
    <div class="container mx-auto py-12 md:py-28">
      <p
        class="text-white text-xl md:text-5xl mb-16 font-meduim font-windsor-pro-bold"
      >
        Smoke Filters
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12"
      >
        <div
          class="flex flex-col space-y-4 mx-2 md:mx-0"
          v-for="product of products"
          :key="product.id"
        >
          <router-link :to="{ name: 'product', params: { id: product._id } }">
            <div
              class="bg-white w-full h-[300px] md:h-[430px] relative overflow-hidden"
            >
              <img
                :src="product.image"
                class="w-full h-full object-cover hover:scale-125 transition-all duration-1000 cursor-pointer"
                alt=""
              />
              <!-- <div class="absolute top-10 right-10">
              <img src="../assets/icons/fi_heart.svg" alt="" />
            </div> -->
            </div>
          </router-link>
          <div class="flex flex-row items-center justify-between">
            <div class="text-white">
              <p class="text-sm md:text-lg font-windsor-pro-bold">
                {{ ReduceText(product.name) }}
              </p>
              <p
                class="font-sf-pro-display-medium text-2xl font-windsor-pro-bold"
              >
                ${{ product.price }}
              </p>
            </div>
            <button
              class="bg-BalticSea text-white font-windsor-pro-bold px-6 py-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myMixin from "../utils/myMixin.js";

export default {
  name: "SmokeFilter",
  mixins: [myMixin],
  props: ["product"],

  data() {
    return {
      products: [],
      id: null,
    };
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listcreateProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList.slice(0, 3);
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
