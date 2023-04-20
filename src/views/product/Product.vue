<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-16">
      <p class="mb-16">HomePage / Filters</p>
      <div
        class="flex flex-col items-start space-y-4 md:space-y-0 md:flex-row md:space-x-4"
      >
        <div class="w-full md:w-2/12">
          <p>Filter &amp;Accessories (50)</p>
          <p>Filter Type 1</p>
          <p>Filter Type 2</p>
          <p>Filter Type 3</p>
        </div>
        <div class="w-full md:w-10/12">
          <div
            class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
          >
            <!-- <div v-for="product in products" :key="product._id"> -->
            <router-link
              :to="{
                name: 'product-details',
                params: { id: product._id },
              }"
              :key="product.id"
              v-for="product in products"
            >
              <div class="rounded-2xl flex flex-col space-y-4">
                <div class="bg-Platinum w-full h-[300px] rounded-2xl relative">
                  <img src="" alt="" />
                  <div class="absolute top-6 right-6">
                    <img :src="product.image" alt="" />
                  </div>
                </div>
                <div class="flex flex-row items-center justify-between">
                  <div class="">
                    <p class="text-sm md:text-base">{{ product.name }}</p>
                    <p class="font-sf-pro-display-medium text-xl">
                      ${{ product.price }}
                    </p>
                  </div>
                  <button class="rounded-2xl px-6 py-4">Add to cart</button>
                </div>
              </div>
            </router-link>
            <!-- </div> -->
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
// import { mapGetters } from "vuex";
export default {
  name: "Product",
  components: {
    Navbar,
    Footer,
  },
  props: ["productLists"],
  setup() {
    const activeGallery = () => {
      return $route.path === "/product";
    };
    return {
      activeGallery,
    };
  },
  data() {
    return {
      products: [],
      id: null,
    };
  },

  // computed: {
  //   ...mapGetters(["getProduct"]),
  // },

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
    // this.product = this.getProduct;
  },
};
</script>
