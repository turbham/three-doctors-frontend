<template>
  <div class="min-h-[calc(100vh-80px)] flex flex-row items-end space-x-4">
    <div class="w-[10%]">
      <div class="grid grid-rows-3 gap-y-4 w-full">
        <div class="bg-GreyCloud row-span-2 rounded-r-2xl">
          <!-- <img src="https://lawal-akande.netlify.app/images/profilepic.jpeg" class="h-full object-cover rounded-r-2xl" alt=""> -->
        </div>
        <div class="bg-GreyCloud rounded-tr-2xl h-[20vh]"></div>
      </div>
    </div>
    <div class="grow">
      <div class="flex flex-col space-y-10">
        <div
          class="font-windsor-pro-bold text-BrownBramble text-center text-3xl md:text-5xl xl:text-7xl font-sf-pro-display-bold"
        >
          <h3>Get your</h3>
          <h3>smoking filters</h3>
        </div>

        <div class="flex justify-center">
          <router-link
            to="/product"
            class="w-fit font-lighter text-sm md:text-lg border border-black hover:text-white hover:bg-black px-12 py-2"
          >
            SHOP NOW
          </router-link>
        </div>
        <div class="flex flex-row space-x-4">
          <div class="w-full mb-6 bg-GreyCloud h-[350px] rounded-2xl"></div>
          <div class="w-full mt-20 bg-GreyCloud rounded-t-2xl"></div>
          <div class="w-full mt-20 bg-GreyCloud rounded-t-2xl"></div>
          <div class="w-full mb-6 bg-GreyCloud h-[350px] rounded-2xl">
            <!-- <img
              src="https://lawal-akande.netlify.app/images/profilepic.jpeg"
              class="h-full object-cover rounded-2xl"
              alt=""
            /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="w-[10%] flex justify-end">
      <div class="grid grid-rows-3 gap-y-4 w-full">
        <div class="bg-GreyCloud row-span-2 rounded-l-2xl"></div>
        <div class="bg-GreyCloud rounded-tl-2xl h-[20vh]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>
