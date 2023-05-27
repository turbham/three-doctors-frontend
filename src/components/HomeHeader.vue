<template>
  <div
    class="bg-[url('../assets/images/Are-you_18_bg.png')] bg-no-repeat bg-cover min-h-[calc(65vh-80px)] xl:min-h-[calc(100vh-80px)]"
  >
    <Navbar />
    <div class="space-y-10 md:space-y-20 pt-24 pb-6 md:pt-40 md:pb-24">
      <div class="flex flex-col justify-center items-center space-y-6">
        <h2
          class="px-1 font-windsor-pro-bold text-xl sm:text-4xl lg:text-6xl text-PaleOrange text-center"
        >
          Revolutionize Your Lifestyle: <br />
          Smart Smoking for a healthier You!
        </h2>
      </div>
      <div>
        <div
          class="container mx-auto grid grid-cols-2 gap-10 md:gap-16 md:px-24"
        >
          <div class="space-y-5">
            <div class="w-full bg-LightGrey border-4 border-PaleOrange">
              <img
                src="../assets/images/filter_smoke_2.png"
                class="w-full"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center items-center space-y-4">
              <h3
                class="text-base md:text-2xl font-windsor-pro-bold text-PaleOrange"
              >
                FILTER PAPERS
              </h3>
              <router-link
                to=""
                class="text-PaleOrange px-6 py-3 text-xs md:text-base font-windsor-pro-bold border border-PaleOrange hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
              >
                Shop Now
              </router-link>
            </div>
          </div>
          <div class="space-y-5">
            <div class="w-full bg-LightGrey border-4 border-PaleOrange">
              <img
                src="../assets/images/filter_smoke_2.png"
                class="w-full"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center items-center space-y-4">
              <h3
                class="text-base md:text-2xl font-windsor-pro-bold text-PaleOrange"
              >
                ROLLING PAPERS
              </h3>
              <router-link
                to=""
                class="text-PaleOrange px-6 py-3 text-xs md:text-base font-windsor-pro-bold border border-PaleOrange hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
              >
                Shop Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-PaleOrange flex flex-row overflow-auto space-x-4 scrollbar-hide py-3 md:py-6 border-y-[3px] border-DarkJungleGreen text-xs md:text-sm"
  >
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
    <div class="slide">
      <span>FILTER PAPERS</span>
    </div>
    <div class="slide">
      <span>ROLLING PAPERS</span>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeHeader",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.slide {
  animation: scroll 60s linear infinite;
}

.slide span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px !important;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translatex(-1000%);
  }
}
</style>
