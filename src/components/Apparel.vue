<template>
  <div class="apparelbg py-12 md:py-24">
    <div class="container mx-auto space-y-4">
      <p
        class="text-SilkBlue text-xl md:text-5xl mb-6 font-meduim font-windsor-pro-bold"
      >
        Apparel
      </p>
      <div
        class="flex flex-col justify-center items-center space-y-2 md:space-y-0 md:flex-row"
      >
        <div class="w-1/2">
          <img
            src="../assets/images/apparel-for-men.png"
            class="w-full"
            alt=""
          />
          <p
            class="text-DarkJungleGreen text-center text-lg md:text-3xl font-windsor-pro-bold"
          >
            For Men
          </p>
        </div>
        <div class="w-1/2">
          <img
            src="../assets/images/apparel-for-women.png"
            class="w-full"
            alt=""
          />
          <p
            class="text-DarkJungleGreen text-center text-lg md:text-3xl font-windsor-pro-bold"
          >
            For Women
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apparel",
};
</script>
