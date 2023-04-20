<template>
  <div>
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="flex flex-col space-y-4">
        <div class="bg-Platinum w-full h-[350px] relative">
          <img
            :src="product.product_img"
            class="w-full h-full object-cover border-[3px] border-black"
            alt=""
          />
          <div class="absolute top-6 right-6">
            <img src="../../assets/icons/fi_heart.svg" alt="" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div class="">
            <p class="text-sm md:text-base font-windsor-pro-regular">
              {{ product.name }}
            </p>
            <p class="text-sm font-windsor-pro-regular">7mm</p>
            <p class="text-lg md:text-xl font-windsor-pro-bold">
              ${{ product.price }}
            </p>
          </div>
          <button
            class="bg-ShamrockGreen text-white font-windsor-pro-bold px-4 py-2.5"
          >
            Add to cart
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>
