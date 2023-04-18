<template>
  <div class="bg-StarDust">
    <div class="container mx-auto py-12 md:py-28">
      <p class="text-white text-xl md:text-5xl mb-6 font-meduim">Smoke Filters</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div class="rounded-2xl flex flex-col space-y-4">
          <div class="bg-white w-full h-[450px] rounded-2xl relative">
            <img src="" alt="" />
            <div class="absolute top-10 right-10">
              <img src="../assets/icons/fi_heart.svg" alt="" />
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <div class="text-white">
              <p class="text-sm md:text-lg">3 Doctors Smoking Filter</p>
              <p class="font-sf-pro-display-medium text-2xl">$24.00</p>
            </div>
            <button class="bg-white rounded-2xl px-6 py-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmokeFilter",
};
</script>
