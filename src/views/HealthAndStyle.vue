<template>
  <div>
    <div v-if="isModalOpen">
      <div
        class="h-screen bg-[url('../assets/images/Are-you_18_bg.png')] text-PaleOrange px-1 flex flex-col items-center justify-center"
      >
        <div class="mb-6 md:mb-16">
          <img
            src="../assets/images/3Doctors-black-logo.png"
            class="w-32 md:w-64"
            alt=""
          />
        </div>
        <div class="space-y-2 md:space-y-8 mb-8 md:mb-16">
          <h1 class="font-windsor-pro-bold text-3xl md:text-6xl text-center">
            ARE YOU 18 OR OLDER?
          </h1>
          <div class="flex flex-row items-center justify-center space-x-10">
            <button
              @click="confirmAge"
              class="border border-PaleOrange px-8 py-2 md:px-24 md:py-3 hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
            >
              YES
            </button>
            <button
              @click="rejectAge"
              class="border border-PaleOrange px-8 py-2 md:px-24 md:py-3 hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
            >
              NO
            </button>
          </div>
        </div>
        <div class="space-y-3 md:space-y-8">
          <p class="text-base md:text-2xl max-w-[56rem] text-center">
            This page contains information on products such as charcoal filters
            and rolling papers, which are intended exclusively for adult
            smokers.
          </p>
          <p class="text-base md:text-2xl max-w-[51rem] text-center">
            By continuing to search, you accept your interest and desire for
            information about
            <span class="font-bold">3 Doktors</span> products available on this
            page.
          </p>
        </div>
      </div>
    </div>

    <div v-if="isWebsiteAccessible">
      <!-- <Navbar /> -->
      <HomeHeader />
      <SmokeFilter />
      <!-- <Apparel /> -->
      <GuidlineAndRecommendationSlide />
      <Footer />
    </div>
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
      isModalOpen: false,
      isWebsiteAccessible: false,
    };
  },
  mounted() {
    const userIsAnAdult = localStorage.getItem("userIsAnAdult");
    const userIsNotAnAdult = localStorage.getItem("userIsNotAnAdult");

    if (userIsAnAdult) {
      this.isWebsiteAccessible = true;
    } else if (userIsNotAnAdult) {
      this.isModalOpen = true;
    } else if (!userIsNotAnAdult) {
      this.isModalOpen = true;
    } else {
      this.isWebsiteAccessible = true;
    }
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listcreateProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
    },
    confirmAge() {
      localStorage.setItem("userIsAnAdult", true);
      this.isModalOpen = false;
      this.isWebsiteAccessible = true;
    },
    rejectAge() {
      localStorage.setItem("userIsNotAnAdult", true);
      this.isModalOpen = false;
      window.location.href = "/";
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
