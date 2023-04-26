<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-16">
      <p class="mb-10 font-rebond-grotesque-regular">HomePage / Filters</p>
      <p class="mb-16 font-windsor-pro-bold text-2xl text-BrownBramble">
        Filters &amp; Accessories (50)
      </p>
      <div class="w-full xl:w-10/12">
        <div
          class="mx-10 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
        >
          <div v-for="product of products" :key="product.id">
            <ProductItem :product="product" />
          </div>
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
  name: "Product",
  props: ["products"],
  components: {
    Navbar,
    Footer,
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listcreateProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
