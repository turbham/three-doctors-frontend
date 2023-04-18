<template>
  <div class="container mx-auto py-4 h-[80px]">
    <div class="flex flex-row items-center justify-between">
      <router-link to="/">
        <img src="../assets/icons/logo.svg" alt="" />
      </router-link>
      <div class="flex flex-row items-center space-x-5">
        <router-link to="/cart" class="flex items-center space-x-2">
          <p>Cart</p>
          <span class="border-dotted border border-black px-2 rounded-full"
            >0</span
          >
        </router-link>
        <p>Menu</p>
      </div>
    </div>
  </div>
</template>
