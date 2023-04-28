<template>
  <div class="bg-DarkJungleGreen text-white border-t">
    <div class="container mx-auto pt-12 md:pt-24 z-50">
      <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row items-start">
        <div class="w-full md:w-5/12">
          <p class="max-w-xs font-light font-rebond-grotesque-regular xl:ml-16">
            We are a world famous clothing store that is going to make a mark of
            wearing the best clothing that is in the world.
          </p>
        </div>
        <div class="w-full md:w-2/12 flex flex-col space-y-4">
          <p class="font-sf-pro-display-medium">Links</p>
          <router-link to="" class="font-light text-sm">Home</router-link>
          <router-link to="" class="font-light text-sm">About</router-link>
          <router-link to="" class="font-light text-sm">Shop</router-link>
          <router-link to="" class="font-light text-sm">Location</router-link>
          <router-link to="" class="font-light text-sm">Contact</router-link>
        </div>
        <div class="w-full md:w-2/12 flex flex-col space-y-4">
          <p class="font-sf-pro-display-medium">About</p>
          <router-link to="" class="font-light text-sm">Partners</router-link>
          <router-link to="" class="font-light text-sm">Careers</router-link>
          <router-link to="" class="font-light text-sm">Press</router-link>
          <router-link to="" class="font-light text-sm">Community</router-link>
        </div>
        <div class="w-full md:w-3/12 flex flex-col space-y-4">
          <p class="font-sf-pro-display-medium">Our Office</p>
          <div class="font-light">
            <p>Indonesia</p>
            <p>Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881</p>
          </div>
          <div class="font-light">
            <p>Tokyo</p>
            <p>35Mandalay Road 13-37 Mandalay Towers Singapore 308215</p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-20">
      <img
        src="../assets/images/3-Doktors-logo-yellow_2.png"
        class="absolute -bottom-54 bg-DarkJungleGreen"
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
