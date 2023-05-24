<template>
  <div class="bg-DarkJungleGreen text-white">
    <div class="container mx-auto pt-12 md:pt-24 z-50">
      <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row items-start">
        <div class="w-full md:w-5/12">
          <p class="max-w-xs font-light font-rebond-grotesque-regular xl:ml-16">
            Unwind responsibly with our innovative smoking accessories, where
            health meets enjoyment.
          </p>
        </div>
        <div class="w-full md:w-2/12 flex flex-col space-y-4">
          <p class="font-sf-pro-display-medium">Links</p>
          <router-link to="" class="font-light text-sm">Home</router-link>
          <router-link to="" class="font-light text-sm">About</router-link>
          <router-link to="/products" class="font-light text-sm"
            >Shop</router-link
          >
        </div>
        <div class="w-full md:w-2/12 flex flex-col space-y-4">
          <p class="font-sf-pro-display-medium">About</p>
          <router-link to="" class="font-light text-sm">Partners</router-link>
          <router-link to="" class="font-light text-sm">Careers</router-link>
          <router-link to="" class="font-light text-sm">Press</router-link>
          <router-link to="" class="font-light text-sm">Community</router-link>
        </div>
      </div>
    </div>
    <div class="relative z-20 flex justify-center bg-DarkJungleGreen">
      <img
        src="../assets/images/3Doctors-yellow-logo.png"
        class="absolute -bottom-54 w-full bg-DarkJungleGreen"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
