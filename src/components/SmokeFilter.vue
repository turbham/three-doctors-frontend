<template>
  <div class="smokeFilterB bg-white">
    <div class="container mx-auto py-12 md:py-28">
      <p
        class="text-DarkJungleGreen text-xl md:text-5xl mb-16 font-meduim font-windsor-pro-bold"
      >
        Best Selling Filters
      </p>
      <div>
        <div v-if="loading">
          <div
            class="mx-10 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
          >
            <div
              class="flex flex-col space-y-4 animate-pulse"
              v-for="data of loadingDiv"
              :key="data.id"
            >
              <router-link to="">
                <div
                  class="bg-slate-400 w-full h-[300px] md:h-[430px] border-4 border-BalticSea overflow-hidden"
                ></div>
              </router-link>
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col space-y-3">
                  <button
                    class="bg-slate-400 rounded w-44 h-3 text-white font-windsor-pro-bold"
                  ></button>
                  <button
                    class="bg-slate-400 rounded w-10 h-1 text-white font-windsor-pro-bold"
                  ></button>
                  <button
                    class="bg-slate-400 rounded w-8 h-3 text-white font-windsor-pro-bold"
                  ></button>
                </div>
                <button
                  class="bg-slate-400 rounded w-28 h-10 text-white font-windsor-pro-bold px-4 py-2.5"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12"
          v-else
        >
          <div v-for="product of products" :key="product.id">
            <SmokeFilterItem :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import myMixin from "../utils/myMixin.js";
import SmokeFilterItem from "@/views/product/SmokeFilterItem.vue";

export default {
  name: "SmokeFilter",
  mixins: [myMixin],
  props: ["product"],
  components: {
    SmokeFilterItem,
  },

  data() {
    return {
      products: [],
      loading: true,
      loadingDiv: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    };
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "getAllProducts",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList.slice(0, 3);
      this.loading = false;
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
