<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-32">
      <p class="mb-10 font-rebond-grotesque-regular">
        <router-link to="/health-and-style">Homepage</router-link>
        <span> / Filters</span>
      </p>
      <p class="mb-16 font-windsor-pro-bold text-2xl text-BrownBramble">
        Filter &amp; Accessories ({{ this.products.length }})
      </p>
      <div class="w-full xl:w-10/12">
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
                  class="bg-slate-400 w-full h-[350px] border-4 border-BalticSea overflow-hidden"
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
          class="mx-10 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
          v-else
        >
          <div v-for="product of paginatedProducts" :key="product.id">
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-center my-20">
          <button
            class="mr-4 px-4 py-2 bg-BalticSea text-white font-bold"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            &#171;
          </button>
          <div v-for="page in totalPages" :key="page">
            <button
              class="text-sm mx-2 px-3.5 py-2 text-BalticSea font-bold border-[1px]"
              :class="{
                'border-BalticSea text-BalticSea': page === currentPage,
              }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="ml-4 px-4 py-2 bg-BalticSea text-white font-bold"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            &#187;
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ProductItem from "./ProductItem.vue";

export default {
  name: "Products",
  components: {
    Navbar,
    Footer,
    ProductItem,
  },
  data() {
    return {
      products: [],
      loading: true,
      currentPage: 1,
      pageSize: 9,
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
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.pageSize);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.products.slice(startIndex, endIndex);
    },
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "getAllProducts",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
      // console.log("totall pp", this.products.length);
      this.loading = false;
    },

    goToPage(page) {
      this.currentPage = page;
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
