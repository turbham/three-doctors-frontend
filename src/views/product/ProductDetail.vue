<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12">
      <p class="mb-10">Homepage / Filter / Product Page</p>
      <div
        class="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10"
      >
        <div class="flex flex-col space-y-2">
          <div class="w-16 h-16 bg-red-200 rounded-lg"></div>
          <div class="w-16 h-16 bg-red-200 rounded-lg"></div>
          <div class="w-16 h-16 bg-red-200 rounded-lg"></div>
          <div class="w-16 h-16 bg-red-200 rounded-lg"></div>
          <div class="w-16 h-16 bg-red-200 rounded-lg"></div>
        </div>
        <div class="grid grid-cols-2 gap-16">
          <div class="bg-red-200 h-full"></div>
          <div class="h-full space-y-6">
            <div class="space-y-2">
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
            <div>
              <p class="text-base font-medium">Description</p>
              <ol class="text-sm font-light">
                <li class="">
                  - Improved reduction of harmful substances by means of highly
                  active charcoal pellets
                </li>
                <li>
                  - Two heat resistant ceramic caps with special pore structure
                </li>
                <li>- Perforated, highly absorbent filter paper</li>
                <li>- Can be used in either direction</li>
              </ol>
            </div>
            <div class="flex flex-row items-center space-x-5">
              <button
                class="w-full flex justify-center p-3 rounded-xl bg-black text-white"
              >
                Checkout
              </button>
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
