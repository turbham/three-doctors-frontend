<template>
  <div>
    <div class="flex flex-col space-y-4">
      <router-link :to="{ name: 'product', params: { id: product._id } }">
        <div class="bg-Platinum w-full h-[350px] overflow-hidden">
          <img
            :src="product.image"
            alt=""
            class="w-full h-full object-cover hover:scale-125 transition-all duration-1000 cursor-pointer"
          />
        </div>
      </router-link>
      <div class="flex flex-row items-center justify-between">
        <div class="">
          <p
            class="text-sm md:text-base font-windsor-pro-regular"
            :title="product.name"
          >
            {{ ReduceText(product.name) }}
          </p>
          <p class="text-sm font-windsor-pro-regular">7mm</p>
          <p class="text-lg md:text-xl font-windsor-pro-bold">
            ${{ product.price }}
          </p>
        </div>
        <button
          class="bg-ShamrockGreen text-white font-windsor-pro-bold px-4 py-2.5"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import myMixin from "../../utils/myMixin.js";

export default {
  name: "ProductItem",
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
      this.products = this.$store.state.data.productList;
      console.log("humm", this.products.length);
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
