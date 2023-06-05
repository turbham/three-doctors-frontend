<template>
  <div
    class="bg-[url('../assets/images/Are-you_18_bg.png')] bg-no-repeat bg-cover"
  >
    <Navbar />
    <div class="pt-32 pb-12 flex flex-col h-[65vh] md:h-screen">
      <div class="flex flex-col justify-center items-center">
        <h2
          class="px-1 font-windsor-pro-bold text-xl sm:text-4xl lg:text-5xl text-PaleOrange text-center"
        >
          Revolutionize Your Lifestyle: <br />
          Smart Smoking for a healthier You!
        </h2>
      </div>
      <div class="h-[10vh]"></div>
      <div class="container flex flex-row space-x-10 md:space-x-20 xl:px-60">
        <div class="w-1/2">
          <div class="w-full h-fit md:h-[40vh] border-4 border-PaleOrange">
            <img
              src="../assets/images/homepage-img-1.png"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div class="h-[2vh]"></div>
          <div class="">
            <div class="flex flex-col justify-center items-center space-y-4">
              <h3
                class="text-xs sm:text-base md:text-2xl font-windsor-pro-bold text-PaleOrange"
              >
                FILTER PAPERS
              </h3>
              <router-link
                to="/products"
                class="text-PaleOrange px-4 md:px-6 py-2 md:py-3 text-xs md:text-base font-windsor-pro-bold border border-PaleOrange hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
              >
                Shop Now
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="w-full h-fit md:h-[40vh] border-4 border-PaleOrange">
            <img
              src="../assets/images/homepage-img-2.png"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div class="h-[2vh]"></div>
          <div class="">
            <div class="flex flex-col justify-center items-center space-y-4">
              <h3
                class="text-xs sm:text-base md:text-2xl font-windsor-pro-bold text-PaleOrange"
              >
                ROLLING PAPPERS
              </h3>
              <router-link
                to="/products"
                class="text-PaleOrange px-4 md:px-6 py-2 md:py-3 text-xs md:text-base font-windsor-pro-bold border border-PaleOrange hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
              >
                Shop Now
              </router-link>
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

