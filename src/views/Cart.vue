<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-24 md:my-32">
      <div class="space-y-12 mb-12">
        <p><router-link to="/health-and-style">Homepage</router-link> / Cart</p>
        <p
          class="text-lg md:text-2xl font-medium font-windsor-pro-bold text-BrownBramble"
        >
          Cart
        </p>
      </div>
      <div>
        <div v-if="loadingCartList">
          <div class="w-full lg:w-7/12 animate-pulse">
            <div
              class="flex flex-row items-start justify-between w-full lg:w-10/12 mb-4"
            >
              <div class="flex flex-row items-start space-x-5">
                <div class="w-40 h-40 bg-slate-400 relative"></div>
                <div class="space-y-3">
                  <p class="font-windsor-pro-bold h-4 w-full bg-slate-400"></p>
                  <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                    <span class="w-10 h-3 bg-slate-400"></span>
                    <span class="w-10 h-3 bg-slate-400"></span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                    <span
                      class="text-SpunPearl text-[12px] h-2 w-2 bg-slate-400"
                    ></span>
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end space-y-11">
                <p
                  class="text-sm lg:text-base font-semibold font-windsor-pro-bold bg-slate-400 h-3 w-4"
                ></p>
                <div class="w-3 h-4 bg-slate-400"></div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-7/12 animate-pulse">
            <div
              class="flex flex-row items-start justify-between w-full lg:w-10/12 mb-4"
            >
              <div class="flex flex-row items-start space-x-5">
                <div class="w-40 h-40 bg-slate-400 relative"></div>
                <div class="space-y-3">
                  <p class="font-windsor-pro-bold h-4 w-full bg-slate-400"></p>
                  <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                    <span class="w-10 h-3 bg-slate-400"></span>
                    <span class="w-10 h-3 bg-slate-400"></span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                    <span
                      class="text-SpunPearl text-[12px] h-2 w-2 bg-slate-400"
                    ></span>
                    <button
                      class="flex px-2 rounded-lg bg-slate-400 h-5 w-5"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end space-y-11">
                <p
                  class="text-sm lg:text-base font-semibold font-windsor-pro-bold bg-slate-400 h-3 w-4"
                ></p>
                <div class="w-3 h-4 bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="!cartsProduct">
            <div class="flex flex-col items-center justify-center space-y-3">
              <img
                src="../assets/images/empty-shopping-cart.png"
                class="w-24"
                alt=""
              />
              <p>Your cart is empty.</p>
              <p>You have not added any product to your cart.</p>
              <router-link
                to="/products"
                class="text-PaleOrange px-4 md:px-6 py-2 md:py-3 text-xs md:text-base font-windsor-pro-bold border border-PaleOrange hover:bg-PaleOrange hover:text-BrownBramble transition-all duration-500"
                >Start Shopping</router-link
              >
            </div>
          </div>
          <div
            v-if="cartsProduct"
            class="flex flex-col space-y-4 items-start lg:space-y-0 lg:flex-row lg:space-x-12"
          >
            <div class="w-full lg:w-7/12">
              <div class="space-y-6">
                <div
                  class="flex flex-row items-start space-x-3 justify-between w-full lg:w-10/12 mb-4"
                  v-for="cart in cartsProduct"
                  :key="cart"
                >
                  <div class="flex flex-row items-start space-x-5">
                    <div class="w-36 h-36 bg-GreyCloud relative">
                      <img
                        :src="cart.product.images[0]"
                        class="w-full h-full object-cover"
                        :alt="cart.product.name"
                      />
                    </div>
                    <div class="h-36 flex flex-col justify-around">
                      <p class="text-sm md:text-xl font-windsor-pro-bold">
                        {{ cart.product.name }}
                      </p>
                      <div class="flex flex-col justify-end space-y-2">
                        <div
                          class="text-GreyChateau text-xs lg:text-sm space-x-3"
                        >
                          <span
                            class="font-windsor-pro-bold text-BrownBramble text-sm"
                            >Size:</span
                          >
                          <span v-for="size in cart.product.sizes" :key="size"
                            >{{ SizeEnum[size] }}mm</span
                          >
                        </div>
                        <div
                          class="text-GreyChateau text-xs lg:text-sm space-x-3"
                        >
                          <span
                            class="font-windsor-pro-bold text-BrownBramble text-sm"
                            >Color:</span
                          >
                          <span
                            v-for="color in cart.product.colors"
                            :key="color"
                            >{{ color }}</span
                          >
                        </div>
                        <div class="flex flex-row items-center space-x-4">
                          <button
                            @click="decrementQuantity(cart._id)"
                            class="flex bg-Platinum px-2 rounded-lg"
                          >
                            -
                          </button>
                          <span class="text-SpunPearl text-[12px]">{{
                            cart.product.quantity
                          }}</span>
                          <button
                            @click="incrementQuantity(cart._id)"
                            class="flex bg-Platinum px-2 rounded-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h-36 flex flex-col items-end justify-around">
                    <p class="text-sm md:text-xl font-windsor-pro-bold">
                      ${{ cart.product.price }}
                    </p>
                    <button
                      class="delete-button"
                      @click="removeItemFromCart(cart._id)"
                    >
                      <img
                        src="../assets/icons/delete_red_icon.svg"
                        class="w-4 cursor-pointer flex items-end"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-3/12">
              <p class="mb-2">Do you have a promo code?</p>
              <div class="space-y-10">
                <div class="flex flex-row items-center space-x-3 mb-6">
                  <input
                    v-model="inputValue"
                    type="text"
                    name=""
                    id="inputField"
                    class="w-full border-[0.1px] border-GreyChateau p-1.5 h-10 focus:outline-none focus:border-BrownBramble focus:ring-0"
                  />
                  <button
                    @click="displayError"
                    class="font-windsor-pro-bold bg-black text-white w-20 h-10 flex items-center justify-center py-2 px-6 border border-GreyChateau"
                  >
                    <span
                      v-if="isLoading"
                      class="w-20 h-10 flex justify-center items-center"
                    >
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

                    <span v-else>Apply</span>
                  </button>
                </div>
                <div class="text-base font-light space-y-1.5">
                  <div class="flex flex-row items-center justify-between">
                    <p>Subtotal</p>
                    <p>${{ cartTotal.toFixed(2) }}</p>
                  </div>
                  <div class="flex flex-row items-center justify-between">
                    <p>Estimated Shipping</p>
                    <p>$5.00</p>
                  </div>
                  <div class="flex flex-row items-center justify-between">
                    <p>Estimated Tax</p>
                    <p></p>
                  </div>
                </div>
                <div
                  class="flex flex-row items-center justify-between font-light border-y-[0.1px] border-black py-6"
                >
                  <p>Total</p>
                  <p>${{ (cartTotal + 5).toFixed(2) }}</p>
                </div>
                <div class="space-y-2">
                  <router-link
                    to="/checkout"
                    class="font-windsor-pro-bold w-full flex justify-center p-3 bg-ShamrockGreen text-white"
                  >
                    Checkout
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Cart",
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      cart: {
        product: {
          quantity: 0, // Provide a default or initial value for the quantity
        },
      },
      inquantity: [],
      itemIds: [],
      cart: [],
      cartsProduct: [],
      inputValue: "",
      isLoading: false,
      SizeEnum: { one: 5.6, two: 6, three: 7, four: 8 },
      loadingCartList: false,
    };
  },

  methods: {
    async queryCart() {
      const cartId = localStorage.getItem("cartId");

      try {
        this.loadingCartList = true;
        const response = await this.$store.dispatch("query", {
          endpoint: "getCartById",
          storeKey: "cartList",
          payload: { cartId: cartId },
        });
        this.loadingCartList = false;

        this.carts = this.$store.state.data.cartList;
        console.log("this.cart", this.carts);
        this.cartsProduct = this.carts.items;
        this.cartsProductss = this.carts.items.product;
        console.log("bb cartsProduct", this.cartsProduct);
        console.log("bb cartsProduct cccc", this.cartsProductss);
        console.log("this.cart in cart", this.carts);
        const itemIds = this.carts.items.map((item) => item._id);
        console.log(itemIds);
        // Store the item IDs in local storage
        localStorage.setItem("itemIds", itemIds);
        this.itemIds = itemIds;

        // Check each product to set the product quantity
        this.carts.items.forEach((item) => {
          const product = item.product;
          const itemm = item.quantity;
          this.inquantity = itemm;

          console.log("what i need", itemm);
          const index = this.cartsProduct.findIndex(
            (p) => p.product._id === product._id
          );

          if (index !== -1) {
            product.quantity = item.quantity;
          } else {
            product.quantity = 1;
          }
        });

        console.log("this.carts.items", this.carts.items);
        console.log("this.cartsProduct", this.cartsProduct);
      } catch (error) {
        console.error("Failed to query cart:", error);
      }
    },

    // async updatecartItemquant(itemId) {
    //   const cartId = localStorage.getItem("cartId");
    //   const itemId = this.itemIds[0]; // Assuming you only have one item in the cart

    //   const response = await this.$store.dispatch("mutate", {
    //     endpoint: "updateCartItemQuantity",
    //     data: {
    //       cartId: cartId,
    //       itemId: itemId,
    //       quantity: this.inquantity, // Use the updated quantity
    //     },
    //   });
    //   console.log(response);
    // },

    // incrementQuantity() {
    //   this.inquantity++;
    //   this.updatecartItemquant();
    // },

    // decrementQuantity() {
    //   if (this.inquantity > 1) {
    //     this.inquantity--;
    //     this.updatecartItemquant();
    //   }
    // },

    // async incrementQuantity(itemId) {
    //   const cartId = localStorage.getItem("cartId");
    //   const cartItem = this.cartsProduct.find((item) => item._id === itemId);

    //   if (cartItem) {
    //     cartItem.product.quantity++;
    //     await this.updateCartItemQuantity(
    //       cartId,
    //       itemId,
    //       cartItem.product.quantity
    //     );
    //   }
    // },

    // async decrementQuantity(itemId) {
    //   const cartId = localStorage.getItem("cartId");
    //   const cartItem = this.cartsProduct.find((item) => item._id === itemId);

    //   if (cartItem && cartItem.product.quantity > 1) {
    //     cartItem.product.quantity--;
    //     await this.updateCartItemQuantity(
    //       cartId,
    //       itemId,
    //       cartItem.product.quantity
    //     );
    //   }
    // },

    // async updateCartItemQuantity(cartId, itemId, quantity) {
    //   try {
    //     const response = await this.$store.dispatch("mutate", {
    //       endpoint: "updateCartItemQuantity",
    //       data: {
    //         cartId: cartId,
    //         itemId: itemId,
    //         quantity: quantity,
    //       },
    //     });
    //     console.log(response);
    //   } catch (error) {
    //     console.error("Failed to update item quantity:", error);
    //     // Handle the error and display an appropriate message to the user
    //   }
    // },
    async incrementQuantity(itemId) {
      try {
        // Find the cart item index in the cartsProduct array
        const itemIndex = this.cartsProduct.findIndex(
          (item) => item._id === itemId
        );

        if (itemIndex !== -1) {
          // Increment the quantity of the cart item
          this.cartsProduct[itemIndex].product.quantity++;

          // Get the updated quantity
          const quantity = this.cartsProduct[itemIndex].product.quantity;

          // Get the cart ID
          const cartId = localStorage.getItem("cartId");

          // Call the updateCartItemQuantity method or mutation
          await this.updateCartItemQuantity(cartId, itemId, quantity);
          await this.queryCart();
        }
      } catch (error) {
        console.error("Failed to increment item quantity:", error);
        // Handle the error and display an appropriate message to the user
      }
    },

    async decrementQuantity(itemId) {
      try {
        // Find the cart item index in the cartsProduct array
        const itemIndex = this.cartsProduct.findIndex(
          (item) => item._id === itemId
        );

        if (
          itemIndex !== -1 &&
          this.cartsProduct[itemIndex].product.quantity > 1
        ) {
          // Decrement the quantity of the cart item
          this.cartsProduct[itemIndex].product.quantity--;

          // Get the updated quantity
          const quantity = this.cartsProduct[itemIndex].product.quantity;

          // Get the cart ID
          const cartId = localStorage.getItem("cartId");

          // Call the updateCartItemQuantity method or mutation
          await this.updateCartItemQuantity(cartId, itemId, quantity);
          await this.queryCart();
        }
      } catch (error) {
        console.error("Failed to decrement item quantity:", error);
        // Handle the error and display an appropriate message to the user
      }
    },

    async updateCartItemQuantity(cartId, itemId, quantity) {
      // const cartId = localStorage.getItem("cartId");
      try {
        const response = await this.$store.dispatch("mutate", {
          endpoint: "updateCartItemQuantity",
          data: {
            cartId: cartId,
            itemId: itemId,
            quantity: quantity,
          },
        });

        // Update the quantity in the frontend
        const cartItem = this.cartsProduct.find((item) => item._id === itemId);
        if (cartItem) {
          cartItem.product.quantity = quantity;
        }

        console.log(response);
      } catch (error) {
        console.error("Failed to update item quantity:", error);
        // Handle the error and display an appropriate message to the user
      }
    },

    async removeItemFromCart(_id) {
      try {
        const cartId = localStorage.getItem("cartId");
        const itemId = _id;
        console.log("cartId", cartId);
        console.log("itemId", itemId);

        // if (isNaN(cartId) || isNaN(itemId)) {
        //   throw new Error("Invalid cart or item ID.");
        // }

        const confirmed = confirm(
          "Are you sure you want to remove this item from your cart?"
        );
        if (!confirmed) {
          return;
        }

        const response = await this.$store.dispatch("mutate", {
          endpoint: "deleteCartItem",
          data: {
            cartId: cartId,
            itemId: itemId,
          },
        });
        console.log(response);
        // Handle the response and update the UI if necessary
        // For example, you can fetch the updated cart data after item deletion

        // Refetch the updated cart data
        await this.queryCart();
      } catch (error) {
        console.error("Failed to remove item from cart:", error);
        // Handle the error and display an appropriate message to the user
      }
    },

    async updateQuantity(product, amount) {
      product.quantity += amount;

      // Update the quantity of the product in the cart
      const cartId = localStorage.getItem("cartId");
      await this.$store.dispatch("updateCart", {
        endpoint: "updateCart",
        payload: {
          cartId: cartId,
          productId: product._id,
          quantity: product.quantity,
        },
      });
    },

    // check if the promo code is valid
    displayError() {
      if (this.inputValue !== "") {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          toast.error("Invalid promo code", {
            autoClose: 1000,
          });
          this.inputValue = "";
        }, 2000);
      }
    },
  },

  computed: {
    cartTotal() {
      let total = 0;
      for (let product of this.cartsProduct) {
        const quantity = product.quantity;
        const price = parseFloat(product.product.price);
        const productTotal = quantity * price;
        total += productTotal;
      }
      this.subtotal = total;
      // console.log("the subtotal", total);
      return total;
    },
  },

  created() {
    this.queryCart();
  },
};
</script>
