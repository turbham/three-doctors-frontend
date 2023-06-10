<template>
  <div>
    <div class="flex flex-col space-y-4">
      <router-link :to="{ name: 'product', params: { id: product._id } }">
        <div
          class="bg-Platinum w-full h-[350px] border-4 border-BalticSea overflow-hidden"
        >
          <img
            :src="product.images[0]"
            alt=""
            class="w-full h-full object-cover hover:scale-125 transition-all duration-1000 cursor-pointer"
          />
        </div>
      </router-link>
      <div class="flex flex-row items-center justify-between">
        <div class="">
          <p
            class="text-sm md:text-base font-windsor-pro-regular"
            :title="product.name"
          >
            {{ ReduceText(product.name) }}
          </p>
          <p class="text-lg md:text-xl font-windsor-pro-bold">
            ${{ product.price }}
          </p>
        </div>
        <router-link
          :to="{ name: 'product', params: { id: product._id } }"
          class="bg-BalticSea text-white font-windsor-pro-bold px-4 py-2.5"
        >
          View Product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import myMixin from "../../utils/myMixin.js";

export default {
  name: "ProductItem",
  mixins: [myMixin],
  props: ["product"],

  data() {
    return {
      products: [],
      id: null,
    };
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "getAllProducts",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
      console.log("humm", this.products.length);
    },

    // async addToCart() {
    //   const response = await this.$store.dispatch("mutate", {
    //     endpoint: "createCart",
    //     data: { input: cartInput },
    //   });

    //   if (response && response.createCart) {
    //     const cartId = response.createCart._id; // Use the response createCart._id
    //     window.localStorage.setItem("cartId", cartId); // Store the cartId in localStorage
    //     await this.$store.dispatch("query", {
    //       endpoint: "getCartById",
    //       storeKey: "cartList",
    //       payload: { cartId: cartId }, // Provide the "cartId" variable
    //     });

    //     toast.success("Product added successfully", {
    //       autoClose: 1000,
    //     });
    //   } else {
    //     toast.error("Product not added", {
    //       autoClose: 1000,
    //     });
    //   }

    //   let checkCartId = window.localStorage.getItem("cartId");

    //   const cartItems = this.$store.getters.getCartList?.productId;
    //   console.log("lol me", cartItems);

    //   // Check if product already exists in cart
    //   let doesProductExist = cartItems.find(
    //     ({ _id }) => _id === this.product._id
    //   );
    //   if (doesProductExist) {
    //     toast.error("Product already exists in cart", {
    //       autoClose: 1000,
    //     });
    //     return;
    //   }

    //   console.log("this.product._id", this.product._id);
    //   const cartInput = {
    //     quantity: 1,
    //     productId: this.product._id,
    //     cartId: checkCartId, // Include the cartId in the cartInput
    //   };
    // },
    // async addToCart() {
    //   const checkCartId = window.localStorage.getItem("cartId");
    //   const cartItems = this.$store.getters.getCartList?.items;

    //   // Check if each product already exists in cart
    //   const productsToAdd = [];
    //   for (const product of this.products) {
    //     const doesProductExist = cartItems.find(
    //       ({ product }) => product._id === product._id
    //     );
    //     if (doesProductExist) {
    //       toast.error("Product already exists in cart", {
    //         autoClose: 1000,
    //       });
    //     } else {
    //       productsToAdd.push({
    //         product: product._id,
    //         quantity: this.quantity,
    //       });
    //     }
    //   }

    //   if (productsToAdd.length === 0) {
    //     // No new products to add
    //     return;
    //   }

    //   const cartInput = {
    //     items: productsToAdd,
    //     cartId: checkCartId, // Include the cartId in the cartInput
    //   };

    //   const response = await this.$store.dispatch("mutate", {
    //     endpoint: "addItemsToCart",
    //     data: { input: cartInput },
    //   });

    //   if (response && response.addItemsToCart) {
    //     toast.success("Products added successfully", {
    //       autoClose: 1000,
    //     });
    //   } else {
    //     toast.error("Products not added", {
    //       autoClose: 1000,
    //     });
    //   }
    // },
  },

  created() {
    this.queryProduct();
  },
};
</script>
