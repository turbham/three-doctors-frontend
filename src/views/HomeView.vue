<template>
  <div>
    <div
      class="flex items-center justify-center h-[80px] sticky top-0 z-50 bg-VeryLightPink"
    >
      <router-link to="/">
        <img
          src="../assets/images/3Doctors-black-logo.png"
          class="w-40"
          alt=""
        />
      </router-link>
    </div>
    <div
      class="bg-BrownBramble min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
    >
      <div class="flex justify-center h-full">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 md:px-8 h-full">
          <div
            class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
          >
            <img
              src="../assets/images/homepage-img-1.png"
              class="absolute h-full w-full py-4 object-cover"
              alt=""
            />
            <img
              src="../assets/images/imag.png"
              class="fadeInClass h-full w-full py-4 object-cover"
              alt=""
            />
            <div
              class="w-[90%] h-60 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-PaleOrange px-4 py-6 border border-DarkJungleGreen"
            >
              <h1
                class="text-DarkJungleGreen text-xl font-windsor-pro-bold text-center md:text-left"
              >
                HEALTH AND STYLE
              </h1>
              <p class="text-[8px] md:text-[10px] mb-6 max-w-[16rem]">
                Why compromise on your health or style when you can have both?
                With innovative features such as HEPA filtration and carbon
                scrubbing, our products purify and enhance a more conscious
                smoking experience
              </p>
              <div>
                <router-link
                  to="/health-and-style"
                  class="bg-BrownBramble text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                >
                  View site
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
          >
            <img
              src="../assets/images/homepage-img-2.png"
              class="absolute h-full w-full py-4 object-cover"
              alt=""
            />
            <img
              src="../assets/images/imamm.jpeg"
              class="fadeInClass h-full w-full py-4 object-cover"
              alt=""
            />
            <!-- <div class="flex justify-center items-center relative w-full h-full">
              <img
                src="../assets/images/homepage-img-2.png"
                class="absolute h-fit  object-cover"
                alt=""
              />
              <img
                src="../assets/images/imamm.jpeg"
                class="fadeInClass h-fit  object-cover"
                alt=""
              />
            </div> -->
            <div
              class="w-[90%] h-60 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-PaleOrange px-4 py-6 border border-DarkJungleGreen"
            >
              <h1
                class="text-DarkJungleGreen text-xl font-windsor-pro-bold text-center md:text-left"
              >
                SPORT GEAR
              </h1>
              <p class="text-[8px] md:text-[10px] mb-6">
                Are you ready to elevate your game and reach your fitness goals?
                Look no further than our top-of-the-line sport gear! Whether
                you're a beginner or a pro, our products are designed to help
                you perform at your best. With advanced cushioning, lightweight
                materials, and innovative features, our gear will give you the
                comfort and confidence you need to push your limits and excel.
                Don't settle for less - upgrade your workout routine with our
                high-performance sport gear today!
              </p>
              <div>
                <router-link
                  to="/sport-gear"
                  class="bg-BrownBramble text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                >
                  View site
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
          >
            <img
              src="../assets/images/homepage-img-3.png"
              class="absolute h-full w-full py-4 object-cover"
              alt=""
            />
            <img
              src="../assets/images/imag-2.jpg"
              class="fadeInClass h-full w-full py-4 object-cover"
              alt=""
            />
            <div
              class="w-[90%] h-60 flex flex-col justify-between items-center text-center absolute -bottom-16 left-[50%] -translate-y-2/4 -translate-x-2/4 bg-PaleOrange px-4 py-6 border border-DarkJungleGreen"
            >
              <h1
                class="text-DarkJungleGreen text-xl font-windsor-pro-bold text-center md:text-left"
              >
                LIFESTYLE
              </h1>
              <p class="text-[8px] md:text-[10px] mb-6 max-w-xs">
                Elevate your wardrobe with our stylish and innovative
                technically-enhanced clothing accessories. From high-tech hats
                that keep you cool, to style that singles you out, our products
                blend fashion and function seamlessly. Whether you're looking
                for a statement piece or an everyday essential, our collection
                of lifestyle accessories has got you covered.
              </p>
              <div>
                <router-link
                  to="/lifeStyle"
                  class="bg-BrownBramble text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                >
                  View site
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="health-and-style-bg border-y-4 border-Asphalt py-6">
        <div class="container mx-auto">
          <div
            class="flex flex-col-reverse items-center space-y-4 md:space-y-0 md:flex-row"
          >
            <div class="w-full md:w-1/2">
              <div
                class="flex flex-col items-center justify-center md:items-start md:justify-start space-y-8"
              >
                <h1
                  class="text-DarkJungleGreen text-2xl lg:text-5xl font-windsor-pro-bold text-center md:text-left"
                >
                  HEALTH AND STYLE
                </h1>
                <div>
                  <p class="text-base md:text-lg mb-3 md:mb-5">
                    We care about your health, yada, yada, yada
                  </p>
                </div>
                <div>
                  <router-link
                    to="/health-and-style"
                    class="bg-ShamrockGreen text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                  >
                    View site
                  </router-link>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mb-10">
              <div class="flex justify-center items-center relative">
                <img
                  src="../assets/images/health-and-style-img-1.png"
                  class="absolute top-0 w-96 h-96 md:w-fit md:h-fit rotate-img-1"
                  alt=""
                />
                <img
                  src="../assets/images/health-and-style-img-2.png"
                  class="fadeInClass w-96 h-96 md:w-fit md:h-fit rotate-img-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sport-gear-bg border-y-4 border-Asphalt py-6">
        <div class="container mx-auto">
          <div
            class="flex flex-col-reverse items-center space-y-4 md:space-y-0 md:flex-row"
          >
            <div class="w-full md:w-1/2">
              <div
                class="flex flex-col items-center justify-center md:items-start md:justify-start space-y-8"
              >
                <h1
                  class="text-PaleOrange text-2xl lg:text-5xl font-windsor-pro-bold text-center md:text-left"
                >
                  SPORT GEAR <br />
                  (COMING SOON)
                </h1>
                <div>
                  <p class="text-white text-base md:text-lg mb-3 md:mb-5">
                    We care about your health, yada, yada, yada
                  </p>
                </div>
                <div>
                  <router-link
                    to="/sport-gear"
                    class="bg-PaleOrange text-DarkJungleGreen px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                  >
                    View site
                  </router-link>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mb-10">
              <div class="flex justify-center items-center relative">
                <img
                  src="../assets/images/sport-gear-img-1.png"
                  class="fadeInClass absolute top-0 w-96 h-96 md:w-fit md:h-fit rotate-img-1"
                  alt=""
                />
                <img
                  src="../assets/images/sport-gear-img-2.png"
                  class="w-96 h-96 md:w-fit md:h-fit rotate-img-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lyfe-style-bg border-y-4 border-Asphalt py-6">
        <div class="container mx-auto">
          <div
            class="flex flex-col-reverse items-center space-y-4 md:space-y-0 md:flex-row"
          >
            <div class="w-full md:w-1/2">
              <div
                class="flex flex-col items-center justify-center md:items-start md:justify-start space-y-8"
              >
                <h1
                  class="text-white text-2xl lg:text-5xl font-windsor-pro-bold text-center md:text-left"
                >
                  LIFESTYLE <br />
                  (COMING SOON)
                </h1>
                <div>
                  <p class="text-white text-base md:text-lg mb-3 md:mb-5">
                    We care about your health, yada, yada, yada
                  </p>
                </div>
                <div>
                  <router-link
                    to="/lifeStyle"
                    class="bg-BrownBramble text-white px-5 py-3.5 text-xs md:text-base font-windsor-pro-bold"
                  >
                    View site
                  </router-link>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mb-10">
              <div class="flex justify-center items-center relative">
                <img
                  src="../assets/images/lyfe-style-img-1.png"
                  class="absolute top-0 w-96 h-96 md:w-fit md:h-fit rotate-img-1"
                  alt=""
                />
                <img
                  src="../assets/images/lyfe-style-img-2.png"
                  class="fadeInClass w-96 h-96 md:w-fit md:h-fit rotate-img-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HomeView",

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
