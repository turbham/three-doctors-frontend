<template>
  <div>
    <div class="min-h-[calc(100vh-80px)] flex flex-row items-end space-x-4">
      <div class="w-[10%]">
        <div class="w-full grid grid-rows-2 gap-y-4">
          <div class="bg-GreyCloud row-span-2 h-[55vh]">
            <img
              src="../assets/images/header-img-1.png"
              class="h-full w-full"
              alt=""
            />
          </div>
          <div class="bg-GreyCloud h-[20vh]">
            <img
              src="../assets/images/header-img-2.png"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="grow">
        <div class="flex flex-col space-y-12">
          <div
            class="font-windsor-pro-black text-BrownBramble text-center text-3xl md:text-5xl xl:text-[5rem]"
          >
            <h3>Get your</h3>
            <h3>smoking filters</h3>
          </div>

          <div class="flex justify-center">
            <router-link
              to="/products"
              class="font-windsor-pro-bold w-fit font-lighter text-sm md:text-lg border border-black hover:text-white hover:bg-black px-12 py-2.5"
            >
              SHOP NOW
            </router-link>
          </div>
          <div class="flex flex-row space-x-4">
            <div class="w-full bg-GreyCloud">
              <img
                src="../assets/images/header-img-3.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full mt-16 bg-GreyCloud">
              <img
                src="../assets/images/header-img-4.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full mt-16 bg-GreyCloud">
              <img
                src="../assets/images/header-img-5.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full bg-GreyCloud">
              <img
                src="../assets/images/header-img-3.png"
                class="h-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[10%] flex justify-end">
        <div class="grid grid-rows-2 w-full">
          <div class="bg-GreyCloud row-span-2 h-[55vh]">
            <img
              src="../assets/images/header-img-6.png"
              class="h-full w-full"
              alt=""
            />
          </div>
          <div class="bg-GreyCloud h-[20vh]">
            <img
              src="../assets/images/header-img-7.png"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="flex flex-row w-full sm:w-full overflow-auto scrollbar-hide -space-x-4 md:-space-x-10 relative" -->
    <div
      class="bg-PaleOrange flex flex-row overflow-auto space-x-4 scrollbar-hide py-6 border-y-[3px] border-DarkJungleGreen text-base md:text-xl"
    >
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
      <div class="slide">
        <span>SKATEBOARDS</span>
      </div>
      <div class="slide">
        <span>TSHIRTS</span>
      </div>
      <div class="slide">
        <span>HATS</span>
      </div>
      <div class="slide">
        <span>BAGS</span>
      </div>
      <div class="slide">
        <span>PIPES</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
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
