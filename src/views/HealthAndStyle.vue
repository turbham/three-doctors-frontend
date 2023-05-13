<template>
  <div>
    <Navbar />
    <HomeHeader />
    <SmokeFilter />
    <!-- <Apparel /> -->
    <GuidlineAndRecommendationSlide />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import SmokeFilter from "@/components/SmokeFilter.vue";
// import Apparel from "@/components/Apparel.vue";
import GuidlineAndRecommendationSlide from "@/components/GuidlineAndRecommendationSlide.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HealthAndStyle",
  components: {
    Navbar,
    HomeHeader,
    SmokeFilter,
    // Apparel,
    GuidlineAndRecommendationSlide,
    Footer,
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
