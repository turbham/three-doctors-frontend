<template>
  <router-view :products="products" />
</template>

<script>
export default {
  name: "App",
  setup() {
    const products = [
      {
        id: 1,
        name: "3 Doctors Smoking Filter",
        product_img: require("./assets/images/filter_01.png"),
        price: "24.00",
      },
      {
        id: 2,
        name: "3 Doctors Smart Filter",
        product_img: require("./assets/images/filter_smoke_2.png"),
        price: "35.00",
      },
    ];
    return {
      products,
    };
  },
};
</script>
