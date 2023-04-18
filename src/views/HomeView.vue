<template>
  <div>
    <Navbar />
    <HomeHeader />
    <SmokeFilter />
    <Apparel />
    <GuidlineAndRecommendation />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import SmokeFilter from "@/components/SmokeFilter.vue";
import Apparel from "@/components/Apparel.vue";
import GuidlineAndRecommendation from "@/components/GuidlineAndRecommendation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
    HomeHeader,
    SmokeFilter,
    Apparel,
    GuidlineAndRecommendation,
    Footer,
  },
};
</script>
