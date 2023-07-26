<template>
  <div>
    <div
      class="h-[100vh] bg-[url('../assets/images/Are-you_18_bg.png')] text-PaleOrange px-1 flex flex-col items-center justify-center"
    >
      <div class="">
        <img src="../assets/images/logg.svg" alt="" class="w-64" />
      </div>
      <div class="space-y-2 md:space-y-8 mb-8 md:mb-16">
        <h1 class="font-windsor-pro-bold text-3xl md:text-6xl text-center">
          ARE YOU 18 OR OLDER?
        </h1>
        <div class="flex flex-row items-center justify-center space-x-10">
          <router-link
            to="/health-and-style"
            class="border border-PaleOrange px-8 py-2 md:px-24 md:py-3 hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
          >
            YES
          </router-link>
          <!-- <router-link
            to="/"
            class="border border-PaleOrange px-8 py-2 md:px-24 md:py-3 hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
          >
            NO
          </router-link> -->
        </div>
      </div>
      <div class="space-y-3 md:space-y-8">
        <p class="text-base md:text-2xl max-w-[56rem] text-center">
          This page contains information on products such as charcoal filters
          and rolling papers, which are intended exclusively for adult smokers.
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
  <!-- <div>
    <div v-if="isLoading">
      <div
        class="bg-[url('../assets/images/Are-you_18_bg.png')] bg-cover bg-no-repeat flex flex-row justify-center items-center h-[100vh]"
      >
        <img
          src="../assets/images/logg.svg"
          class="animate-ping w-44 md:w-96"
          alt=""
        />
      </div>
    </div>
    <div v-else>
      <div
        class="bg-[url('../assets/images/Are-you_18_bg.png')] bg-cover bg-no-repeat"
      >
        <div
          class="flex items-center justify-center h-[80px] sticky top-0 z-50"
        >
          <router-link to="/">
            <img src="../assets/images/logg.svg" class="w-64" alt="" />
          </router-link>
        </div>
        <div class="min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]">
          <div class="flex justify-center h-full">
            <div
              class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-8 h-full"
            >
              <div
                class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
              >
                <img
                  src="../assets/images/homepage-img-1.png"
                  class="absolute h-full w-full py-4 object-cover"
                  alt=""
                />
                <img
                  src="../assets/images/homepage-img-2.png"
                  class="fadeInClass h-full w-full py-4 object-cover"
                  alt=""
                />
                <div
                  class="w-[90%] h-44 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-PaleOrange px-4 py-6 border border-DarkJungleGreen"
                >
                  <h1
                    class="text-DarkJungleGreen text-xl font-windsor-pro-bold text-center md:text-left"
                  >
                    HEALTH AND STYLE
                  </h1>

                  <p class="text-[10px] md:text-xs mb-6">
                    Revolutionize Your Lifestyle:<br />
                    Smart Smoking for a Healthier You!
                  </p>
                  <div>
                    <router-link
                      to="/verification"
                      class="bg-BrownBramble text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                    >
                      Shop Now
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
              >
                <img
                  src="../assets/images/lifestyle-img-2.svg"
                  class="absolute h-full w-full py-4 object-cover"
                  alt=""
                />
                <img
                  src="../assets/images/lifestyle-img-1.jpg"
                  class="fadeInClass h-full w-full py-4 object-cover"
                  alt=""
                />
                <div class="absolute my-4 inset-0 bg-black bg-opacity-75"></div>
                <p
                  class="w-full uppercase font-windsor-pro-bold text-center text-white p-2 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-base md:text-4xl"
                >
                  Coming Soon
                </p>
                <div
                  class="w-[90%] h-44 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-ShamrockGreen px-4 py-6 border border-DarkJungleGreen"
                >
                  <h1
                    class="text-white text-xl font-windsor-pro-bold text-center md:text-left"
                  >
                    LIFESTYLE
                  </h1>
                  <p class="text-white text-[10px] md:text-xs mb-6 max-w-xs">
                    Elevate your style with innovative,<br />
                    fashion-forward clothing accessories.
                  </p>
                  <div>
                    <button
                      disabled
                      class="cursor-pointer text-OlsoGrey bg-DarkJungleGreen px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
              >
                <img
                  src="../assets/images/sport-gear-img1.jpg"
                  class="absolute h-full w-full py-4 object-cover"
                  alt=""
                />
                <img
                  src="../assets/images/sport-gear-img2.jpg"
                  class="fadeInClass h-full w-full py-4 object-cover"
                  alt=""
                />
                <div class="absolute my-4 inset-0 bg-black bg-opacity-75"></div>
                <p
                  class="w-full uppercase font-windsor-pro-bold text-center text-white p-2 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-base md:text-4xl"
                >
                  Coming Soon
                </p>
                <div
                  class="w-[90%] h-44 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-PaleRose px-4 py-6 border border-DarkJungleGreen"
                >
                  <h1
                    class="text-DarkJungleGreen text-xl font-windsor-pro-bold text-center md:text-left"
                  >
                    SPORT GEAR
                  </h1>
                  <p class="text-[10px] md:text-xs mb-6 overlay-dark">
                    Breaking Boundaries, Equipping Everyone: <br />
                    Embrace All-Inclusive Sport Gear!
                  </p>
                  <div>
                    <button
                      disabled
                      class="cursor-pointer text-RoseBud bg-BeanRed px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      isLoading: true,
    };
  },

  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
.rotate-img-1 {
  cursor: pointer;
  transition: all 1s;
  -webkit-transform: rotateZ(-30deg);
  -ms-transform: rotateZ(-30deg);
  transform: rotateZ(-10deg);
}
.rotate-img-2 {
  cursor: pointer;
  transition: all 1s;
  -webkit-transform: rotateZ(30deg);
  -ms-transform: rotateZ(30deg);
  transform: rotateZ(10deg);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.fadeInClass {
  animation-name: fadeIn;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
</style>
