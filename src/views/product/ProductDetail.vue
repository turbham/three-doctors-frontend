<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-24 md:my-32">
      <p class="mb-8 md:mb-12">
        <router-link class="hover:underline" to="/health-and-style"
          >Homepage</router-link
        >
        /
        <router-link class="hover:underline" to="/products">
          Filters
        </router-link>
        /
        <router-link to="">Product Page</router-link>
      </p>
      <div>
        <div v-if="loading">
          <div
            class="xl:px-40 flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-16 animate-pulse"
          >
            <div
              class="lg:w-7/12 flex flex-col-reverse lg:flex-row items-start lg:space-x-10"
            >
              <div
                class="hidden lg:block md:w-1/12 w-full md:flex flex-row space-x-2.5 lg:space-x-0 lg:flex-col lg:space-y-2.5 mt-10 lg:mt-0"
              >
                <div class="w-14 h-14 bg-slate-400"></div>
                <div class="w-14 h-14 bg-slate-400"></div>
                <div class="w-14 h-14 bg-slate-400"></div>
                <div class="w-14 h-14 bg-slate-400"></div>
                <div class="w-14 h-14 bg-slate-400"></div>
              </div>
              <div
                class="w-full lg:w-11/12 bg-slate-400 h-[350px] md:h-[550px] border-[3px] border-DarkJungleGreen"
              ></div>
            </div>
            <div class="w-full lg:w-5/12 flex flex-row">
              <div class="w-full h-full space-y-4 lg:space-y-20">
                <div class="space-y-4">
                  <p
                    class="font-medium text-2xl md:text-4xl h-8 w-full bg-slate-400"
                  ></p>
                  <p
                    class="font-medium text-2xl md:text-4xl h-8 w-8/12 bg-slate-400"
                  ></p>
                  <p class="font-bold text-xl w-8 h-6 bg-slate-400"></p>
                </div>
                <div class="space-y-1">
                  <p class="h-3 w-28 bg-slate-400"></p>
                  <p class="h-3 w-28 bg-slate-400"></p>
                </div>
                <div class="max-w-[22rem]">
                  <p class="mb-2 h-3 w-28 bg-slate-400"></p>

                  <div class="space-y-2">
                    <div class="h-3 w-full bg-slate-400"></div>
                    <div class="h-3 w-full bg-slate-400"></div>
                    <div class="h-3 w-full bg-slate-400"></div>
                    <div class="h-3 w-full bg-slate-400"></div>
                  </div>
                </div>
                <div class="flex flex-row items-center space-x-5">
                  <button class="h-10 w-full bg-slate-400"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else>
          <div
            class="xl:px-40 flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-16 lg:h-[550px]"
          >
            <div
              class="lg:w-7/12 flex flex-col-reverse lg:flex-row items-start lg:space-x-10 px-10 md:px-0"
            >
              <div
                class="hidden lg:block md:w-1/12 w-full md:flex flex-row space-x-2.5 lg:space-x-0 lg:flex-col lg:space-y-2.5 mt-10 lg:mt-0"
              >
                <div
                  v-for="(image, index) in product.images.slice(0, 6)"
                  :key="index"
                  class="w-14 h-14 bg-BalticSea cursor-pointer"
                  @click="showClickedImage(index)"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="image"
                    :alt="product.name"
                  />
                </div>
              </div>
              <div
                class="w-full lg:w-11/12 bg-LightGrey h-[350px] md:h-[550px] border-[3px] border-DarkJungleGreen"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="clickedImage || product.images[0]"
                  :alt="product.name"
                />
              </div>
            </div>
            <div class="px-5 md:px-0 w-full lg:w-5/12">
              <div
                class="w-full space-y-2 flex flex-col justify-between lg:h-[550px]"
              >
                <div class="space-y-2 font-windsor-pro-bold text-BalticSea">
                  <p class="font-medium text-2xl md:text-5xl">
                    {{ product.name }}
                  </p>
                  <p class="font-bold text-xl text-PaleOrange">
                    ${{ product.price }}
                  </p>
                  <div>
                    <h4>Size:</h4>
                    <div class="relative w-full md:w-3/4 border-none">
                      <select
                        v-model="selectedSize"
                        class="w-full cursor-pointer appearance-none border inline-block px-3 py-2 focus:outline-none focus:border-BrownBramble focus:ring-0"
                      >
                        <option selected class="pt-6">Select size</option>
                        <option
                          v-for="size in sizes"
                          :key="size"
                          :value="size"
                          class="pt-6"
                        >
                          {{ SizeEnum[size] }}mm
                        </option>
                      </select>
                      <div
                        class="pointer-events-none absolute right-0 inset-y-0 flex items-center px-4"
                      >
                        <img
                          src="../../assets/icons/arrow_down.svg"
                          class="w-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>Color:</h4>
                    <div class="relative w-full md:w-3/4 border-none">
                      <select
                        v-model="selectedColor"
                        class="w-full cursor-pointer appearance-none border inline-block px-3 py-2 focus:outline-none focus:border-BrownBramble focus:ring-0"
                      >
                        <option selected class="pt-6">Select color</option>
                        <option
                          v-for="color in colors"
                          :key="color"
                          :value="color"
                          class="pt-6"
                        >
                          {{ color }}
                        </option>
                      </select>
                      <div
                        class="pointer-events-none absolute right-0 inset-y-0 flex items-center px-4"
                      >
                        <img
                          src="../../assets/icons/arrow_down.svg"
                          class="w-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <p class="text-base font-medium">Quantity:</p>
                    <input
                      type="number"
                      v-model="quantity"
                      class="w-full md:w-3/4 border px-3 py-2 focus:outline-none focus:border-BrownBramble focus:ring-0"
                      min="1"
                    />
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="max-w-[22rem]">
                    <p class="text-base font-medium mb-2 font-windsor-pro-bold">
                      Description
                    </p>
                    {{ product.description }}
                  </div>
                  <div class="flex flex-row items-center space-x-5">
                    <button
                      @click="addToCart"
                      class="w-full md:w-3/4 font-windsor-pro-bold bg-BalticSea p-3 text-white"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapMutations } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ProductDetail",
  props: ["products"],
  components: {
    Navbar,
    Footer,
    VueMultiselect,
  },
  data() {
    return {
      value: 1,
      loading: true,
      // cartItems: [],
      // product: {},
      product: {
        _id: "",
        price: null,
        quantity: null,
        inventory: {
          quantity: null,
        },
        name: "",
        images: [],
        colors: [],
        sizes: [],
      },
      products: [],
      id: null,
      quantity: 1,
      numberOfProductInCart: [],
      isLoading: false,
      sizes: [],
      colors: [],
      selectedSize: "",
      selectedColor: "",
      expandedIndex: null,
      SizeEnum: { one: 5.6, two: 6, three: 7, four: 8 },
      // click on image index
      clickedImage: null,
    };
  },

  methods: {
    // clicked function to show image
    showClickedImage(index) {
      this.clickedImage = this.product.images[index];
    },

    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "getAllProducts",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
      this.loading = false;

      const sizesSet = new Set();
      const colorsSet = new Set();
      this.products.forEach((product) => {
        product.sizes.forEach((size) => {
          sizesSet.add(size);
        });
        product.colors.forEach((color) => {
          colorsSet.add(color);
        });
      });
      this.sizes = Array.from(sizesSet);
      this.colors = Array.from(colorsSet);
    },
    // async updateProduct() {
    //   // Update the product with the selected colors and sizes
    //   this.product.colors = this.selectedColor;
    //   this.product.sizes = this.selectedSize;
    //   this.isLoading = true;

    //   try {
    //     // Make the API call to update the product
    //     console.log(this.product._id);
    //     const response = await this.$store.dispatch("mutate", {
    //       endpoint: "updateProduct",
    //       data: {
    //         input: {
    //           productId: this.product._id,
    //           colors: this.product.colors,
    //           sizes: this.product.sizes,
    //         },
    //       },
    //     });
    //     console.log("response", response);
    //     console.log("responseData", response._id);

    //     // Handle the response and perform any necessary actions
    //     if (response) {
    //       const updateProductId = response._id;
    //       console.log(
    //         "Product updated successfully. Update Product ID:",
    //         updateProductId
    //       );
    //       this.isLoading = false;

    //       // Show a success message or perform any other necessary actions
    //       toast.success("Product added to cart successfully 00p00");

    //       // Update localStorage with the updateProductId
    //       localStorage.setItem("updateProductId", updateProductId);

    //       // Reset the selected color and size
    //       this.selectedColor = "";
    //       this.selectedSize = "";
    //     } else {
    //       // Handle the case where the response is not as expected
    //       console.error("Failed to update product: Invalid response");
    //       toast.error("Failed to update product");
    //     }
    //   } catch (error) {
    //     // Handle any errors that occurred during the API call
    //     console.error("Failed to update product:", error);
    //     toast.error("Failed to update product");
    //   }
    // },

    async updateProduct() {
      // Check if sizes or colors are not selected
      if (!this.selectedSize || !this.selectedColor) {
        // Show an alert message or perform any other necessary actions
        toast.error("Please select both size and color before adding to cart");

        return;
      }

      // Update the product with the selected colors and sizes
      this.product.colors = this.selectedColor;
      this.product.sizes = this.selectedSize;
      console.log("this.product.colors", this.product.colors);
      console.log("this.product.sizes", this.product.sizes);
      // this.isLoading = true;

      try {
        // Make the API call to update the product
        console.log(this.product._id);
        const response = await this.$store.dispatch("mutate", {
          endpoint: "updateProduct",
          data: {
            input: {
              productId: this.product._id,
              colors: this.product.colors,
              sizes: this.product.sizes,
            },
          },
        });
        console.log("response", response);
        console.log("responseData", response._id);

        // Handle the response and perform any necessary actions
        if (response) {
          const updateProductId = response._id;
          console.log(
            "Product updated successfully. Update Product ID:",
            updateProductId
          );
          // this.isLoading = false;

          // Show a success message or perform any other necessary actions
          toast.success("Product added to cart successfully");

          // Update localStorage with the updateProductId
          localStorage.setItem("updateProductId", updateProductId);

          // Reset the selected color and size
          this.selectedColor = "";
          this.selectedSize = "";
        } else {
          // Handle the case where the response is not as expected
          console.error("Failed to update product: Invalid response");
          toast.error("Failed to update product");
        }
      } catch (error) {
        // Handle any errors that occurred during the API call
        console.error("Failed to update product:", error);
        toast.error("Failed to update product");
      }
    },
    // async addToCart(items) {
    //   try {
    //     // Call the updateProduct function before creating the cart
    //     await this.updateProduct();
    //     const updatedProduct = localStorage.getItem("updateProductId");
    //     // Prepare the input data for the mutation
    //     const input = {
    //       items: [
    //         {
    //           product: updatedProduct,
    //           quantity: this.quantity,
    //         },
    //       ],
    //     };

    //     // Make the GraphQL mutation request to create the cart
    //     const createCartResponse = await this.$store.dispatch("mutate", {
    //       endpoint: "createCart",
    //       data: { input },
    //     });

    //     // Handle the createCart response and perform any necessary actions
    //     if (createCartResponse) {
    //       // Show a success message or perform any other necessary actions
    //       console.log("Cart created successfully:", createCartResponse);

    //       // Save the created cart ID to localStorage
    //       localStorage.setItem("cartId", createCartResponse._id);

    //       // Reset the cart items or perform any other necessary actions
    //       // ...

    //       return createCartResponse;
    //     } else {
    //       // Handle the case where the createCart response is not as expected
    //       console.error("Failed to create cart: Invalid response");
    //       // Show an error message or perform any other necessary actions
    //       // ...
    //       return null;
    //     }
    //   } catch (error) {
    //     // Handle any errors that occurred during the createCart mutation
    //     console.error("Failed to create cart:", error);
    //     // Show an error message or perform any other necessary actions
    //     // ...
    //     return null;
    //   }
    // },

    async addToCart(items) {
      // this.isLoading = true;
      try {
        // Call the updateProduct function before creating the cart
        await this.updateProduct();
        const updatedProduct = localStorage.getItem("updateProductId");
        // Prepare the input data for the mutation
        const input = {
          items: [
            {
              product: updatedProduct,
              quantity: this.quantity,
            },
          ],
        };

        const cartId = localStorage.getItem("cartId");

        if (cartId) {
          // Get the existing cart by ID
          const existingCartResponse = await this.$store.dispatch("query", {
            endpoint: "getCartById",
            storeKey: "cartList",
            payload: { cartId: cartId },
          });

          const existingCart = existingCartResponse || {};
          console.log("looking444", existingCart);
          // Initialize the items array if it doesn't exist
          if (!existingCart.items) {
            existingCart.items = [];
          }

          // Push the new cart item into the existing cart items array
          existingCart.items.push(input.items[0]);

          // Make the API call to update the cart
          const updateCartResponse = await this.$store.dispatch("mutate", {
            endpoint: "updateCart",
            data: { input: { cartId, items: existingCart.items } },
            variables: { input: { cartId, items: existingCart.items } },
          });
          const updatedQuantities = updateCartResponse.items.map(
            (item) => item.quantity
          );
          console.log("updatedQuantities", updatedQuantities);
          console.log("existingCart.items", existingCart.items);

          const cartItemIds = existingCart.items.map(
            (item) => item.product._id
          );
          localStorage.setItem("cartItemIds", JSON.stringify(cartItemIds));

          console.log("cartItemIds", cartItemIds);

          console.log("youyou", cartItemIds);
          // Handle the updateCart response and perform any necessary actions
          if (updateCartResponse) {
            // Show a success message or perform any other necessary actions
            console.log("Cart updated successfully:", updateCartResponse);

            // Reset the cart items or perform any other necessary actions
            // ...
            return updateCartResponse;
          } else {
            // Handle the case where the updateCart response is not as expected
            console.error("Failed to update cart: Invalid response");
            // Show an error message or perform any other necessary actions
            // ...
            return null;
          }
        } else {
          // Create a new cart with the cart item
          const createCartResponse = await this.$store.dispatch("mutate", {
            endpoint: "createCart",
            data: { input },
          });
          console.log("looking", createCartResponse);
          if (createCartResponse) {
            // Show a success message or perform any other necessary actions
            console.log("Cart created successfully:", createCartResponse);

            // Save the created cart ID to localStorage
            localStorage.setItem("cartId", createCartResponse._id);

            // Reset the cart items or perform any other necessary actions
            // ...
            return createCartResponse;
          } else {
            // Handle the case where the createCart response is not as expected
            console.error("Failed to create cart: Invalid response");
            // Show an error message or perform any other necessary actions
            // ...
            return null;
          }
        }
      } catch (error) {
        // Handle any errors that occurred during the createCart or updateCart mutation
        console.error("Failed to create/update cart:", error);
        // Show an error message or perform any other necessary actions
        // ...
        return null;
      }
    },

    // async updateProduct() {
    //   // Update the product with the selected colors and sizes
    //   this.product.colors = this.selectedColor;
    //   this.product.sizes = this.selectedSize;

    //   try {
    //     // Make the API call to update the product
    //     console.log(this.product._id);
    //     const response = await this.$store.dispatch("mutate", {
    //       endpoint: "updateProduct",
    //       data: {
    //         input: {
    //           productId: this.product._id,
    //           colors: this.product.colors,
    //           sizes: this.product.sizes,
    //         },
    //       },
    //     });

    //     // Handle the response and perform any necessary actions
    //     if (response) {
    //       console.log("Product updated successfully:", response);

    //       // Show a success message or perform any other necessary actions
    //       toast.success("Product updated successfully");

    //       // Reset the selected color and size
    //       this.selectedColor = "";
    //       this.selectedSize = "";
    //     } else {
    //       // Handle the case where the response is not as expected
    //       console.error("Failed to update product: Invalid response");
    //       toast.error("Failed to update product");
    //     }
    //   } catch (error) {
    //     // Handle any errors that occurred during the API call
    //     console.error("Failed to update product:", error);
    //     toast.error("Failed to update product");
    //   }
    // },
    // async addToCart() {
    //   // Set isLoading to true to display loader
    //   this.isLoading = true;

    //   // Check if a color and size have been selected
    //   if (!this.selectedColor || !this.selectedSize) {
    //     console.error("Please select a color and size");
    //     toast.error("Please select a color and size");
    //     this.isLoading = false;
    //     return;
    //   }

    //   // Update the product with the selected color and size
    //   this.product.colors = [this.selectedColor];
    //   this.product.sizes = [this.selectedSize];

    //   try {
    //     // Update the product before adding to the cart
    //     await this.updateProduct();

    //     // Prepare the input for the API call to add the product to the cart
    //     const input = {
    //       product: this.updateProductId,
    //       colors: this.product.colors,
    //       sizes: this.product.sizes,
    //     };
    //     console.log("product", this.updateProductId);

    //     const cartId = localStorage.getItem("cartId");

    //     // Prepare the cart item input
    //     const cartItemInput = {
    //       product: this.updateProductId,
    //       quantity: this.quantity,
    //     };

    //     if (cartId) {
    //       // Get the existing cart by ID
    //       const existingCartResponse = await this.$store.dispatch("query", {
    //         endpoint: "getCartById",
    //         storeKey: "cartList",
    //         payload: { cartId: cartId },
    //       });

    //       const existingCart = existingCartResponse || {};

    //       // Initialize the items array if it doesn't exist
    //       if (!existingCart.items) {
    //         existingCart.items = [];
    //       }

    //       // Push the new cart item into the existing cart items array
    //       existingCart.items.push(cartItemInput);

    //       // Make the API call to update the cart
    //       const updateCartResponse = await this.$store.dispatch("mutate", {
    //         endpoint: "updateCart",
    //         data: { input: { cartId, items: existingCart.items } },
    //         variables: { input: { cartId, items: existingCart.items } },
    //       });

    //       // Rest of the code...
    //     } else {
    //       // Create a new cart with the cart item
    //       const cartInput = {
    //         items: [cartItemInput],
    //       };

    //       const createCartResponse = await this.$store.dispatch("mutate", {
    //         endpoint: "createCart",
    //         data: { input: cartInput },
    //         variables: { input: cartInput },
    //       });

    //       if (createCartResponse) {
    //         const newCartId = createCartResponse._id;
    //         window.localStorage.setItem("cartId", newCartId);
    //         this.$store.commit("setCartItemLength", 1);
    //         toast.success("Product added to cart successfully", {
    //           autoClose: 1000,
    //         });
    //       } else {
    //         toast.error("Failed to add product to cart");
    //       }
    //     }

    //     // Reset the product and quantity after adding to cart
    //     this.product = {
    //       _id: "",
    //       sizes: [],
    //       colors: [],
    //     };
    //     this.quantity = 1;
    //   } catch (error) {
    //     console.error("Failed to add product to cart:", error);
    //     toast.error("Failed to add product to cart");
    //   }

    //   // Set isLoading to false to remove loader
    //   this.isLoading = false;
    // },

    // Assuming you have access to your Vuex store through `this.$store`

    // decrementQuantity() {
    //   this.quantity -= 1;
    //   if (this.quantity === 0) {
    //     this.$emit("removeFromCart", product);
    //   }
    //   this.updateCart();
    // },
    // incrementQuantity() {
    //   this.quantity += 1;
    //   this.updateCart();
    // },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
      console.log(
        "helloo",
        localStorage.setItem("cart", JSON.stringify(this.$store.state.cart))
      );
    },
  },
  watch: {
    numberOfProductInCart: {
      handler: function (newVal) {
        console.log("Cart contains " + newVal.length + " items");
      },
      deep: true,
    },
  },
  computed: {
    cartLength: function () {
      return this.numberOfProductInCart.length;
    },
  },
  async created() {
    await this.queryProduct();
    console.log(this.products, "first"); // Check if products data is available
    this.id = this.$route.params.id;
    console.log(this.id, "second"); // Check if id is correctly assigned
    this.product = this.products.find((product) => product._id == this.id);
    console.log(this.product, "happy");
    console.log("this is what I am looking", this.product);
    console.log(this.products, "okay");
    this.queryCart();
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  /* Add styles for the custom select container */
}

.selected {
  /* Add styles for the selected option display */
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  /* Add styles for the dropdown container */
}

.dropdown > div {
  /* Add styles for individual dropdown options */
  cursor: pointer;
}
</style>
