<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12 md:my-16">
      <p class="mb-8 md:mb-12">Homepage / Filter / Product Page</p>
      <div
        class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row md:space-x-16"
      >
        <div
          class="lg:w-6/12 flex flex-col-reverse lg:flex-row items-start lg:space-x-10"
        >
          <div
            class="flex flex-row space-x-2.5 lg:space-x-0 lg:flex-col lg:space-y-2.5 mt-10 lg:mt-0"
          >
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
          </div>
          <div
            class="bg-LightGrey w-full h-[550px] border-[3px] border-DarkJungleGreen"
          ></div>
        </div>
        <div class="w-full lg:w-6/12 flex flex-row">
          <div class="h-full space-y-8">
            <div class="space-y-2 font-windsor-pro-bold text-BrownBramble">
              <p class="font-medium text-2xl md:text-4xl">
                3 Doktors Smoking Filter
              </p>
              <p class="font-bold text-xl">$24.00</p>
            </div>
            <div class="space-y-1">
              <p class="text-base font-medium">Retail unit</p>
              <p class="text-sm font-light">
                400 activated charcoal filters, 10 boxes wrapped to a sales
                unit.
              </p>
            </div>
            <div class="max-w-[22rem]">
              <p class="text-base font-medium mb-2">Description</p>
              <ul class="text-sm font-light list-disc space-y-1 pl-4">
                <li class="">
                  Improved reduction of harmful substances by means of highly
                  active charcoal pellets
                </li>
                <li>
                  Two heat resistant ceramic caps with special pore structure
                </li>
                <li>Perforated, highly absorbent filter paper</li>
                <li>Can be used in either direction</li>
              </ul>
            </div>
            <div class="flex flex-row items-center space-x-5">
              <button
                class="w-full font-windsor-pro-bold bg-ShamrockGreen p-3 text-white"
              >
                Add to Cart
              </button>
              <button class="border border-black p-4">
                <img src="../../assets/icons/fi_small_heart.svg" alt="" />
              </button>
            </div>
            <div>
              <p>Shipping</p>
              <p>To get accrateshipping information Edit Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "ProductDetail",
  components: {
    Navbar,
  },
};
</script>
