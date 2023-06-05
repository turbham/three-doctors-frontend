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
          <!-- <p class="text-sm font-windsor-pro-regular">7mm</p> -->
          <p class="text-lg md:text-xl font-windsor-pro-bold">
            ${{ product.price }}
          </p>
        </div>
        <button
          @click="addToCart"
          class="bg-BalticSea text-white font-windsor-pro-bold px-4 py-2.5"
        >
          <span v-if="isLoading">
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span v-else>Add to Cart</span>
        </button>
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
      isLoading: false,
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
    async addToCart() {
      const checkCartId = window.localStorage.getItem("cartId");
      const cartItems = this.$store.getters.getCartList?.items;

      // Check if each product already exists in cart
      const productsToAdd = [];
      for (const product of this.products) {
        const doesProductExist = cartItems.find(
          ({ product }) => product._id === product._id
        );
        if (doesProductExist) {
          toast.error("Product already exists in cart", {
            autoClose: 1000,
          });
        } else {
          productsToAdd.push({
            product: product._id,
            quantity: this.quantity,
          });
        }
      }

      if (productsToAdd.length === 0) {
        // No new products to add
        return;
      }

      const cartInput = {
        items: productsToAdd,
        cartId: checkCartId, // Include the cartId in the cartInput
      };

      const response = await this.$store.dispatch("mutate", {
        endpoint: "addItemsToCart",
        data: { input: cartInput },
      });

      if (response && response.addItemsToCart) {
        toast.success("Products added successfully", {
          autoClose: 1000,
        });
      } else {
        toast.error("Products not added", {
          autoClose: 1000,
        });
      }
    },
  },

  created() {
    this.queryProduct();
  },
};
</script>
