<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12 md:my-32">
      <p class="mb-8 md:mb-12">Homepage / Filter / Product Page</p>
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

                <div class="w-10 h-10 bg-slate-400"></div>
                <div class="w-10 h-10 bg-slate-400"></div>
                <div class="w-10 h-10 bg-slate-400"></div>
                <div class="w-10 h-10 bg-slate-400"></div>
                <div class="w-10 h-10 bg-slate-400"></div>

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
            class="xl:px-40 flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-16"
          >
            <div
              class="lg:w-7/12 flex flex-col-reverse lg:flex-row items-start lg:space-x-10"
            >
              <div
                class="hidden lg:block md:w-1/12 w-full md:flex flex-row space-x-2.5 lg:space-x-0 lg:flex-col lg:space-y-2.5 mt-10 lg:mt-0"
              >
                <div class="w-10 h-10 bg-BalticSea"></div>
                <div class="w-10 h-10 bg-BalticSea"></div>
                <div class="w-10 h-10 bg-BalticSea"></div>
                <div class="w-10 h-10 bg-BalticSea"></div>
                <div class="w-10 h-10 bg-BalticSea"></div>
              </div>
              <div
                class="w-full lg:w-11/12 bg-LightGrey h-[350px] md:h-[550px] border-[3px] border-DarkJungleGreen"
              >
                <img
                  class="h-full w-full object-fill"
                  :src="product.image"
                  :alt="product.name"
                />
              </div>
            </div>
            <div class="w-full lg:w-5/12 flex flex-row">
              <div class="w-full h-full space-y-8">
                <div class="space-y-2 font-windsor-pro-bold text-BalticSea">
                  <p class="font-medium text-lg md:text-xl">
                    {{ product.name }}
                  </p>
                  <p class="font-bold text-xl text-DebianRed">
                    ${{ product.price }}
                  </p>
                  <div class="space-y-2">
                    <p>Color: Black</p>
                    <div class="flex items-center space-x-4">
                      <div
                        class="cursor-pointer flex items-center justify-center rounded-full border p-[2px]"
                      >
                        <span
                          class="bg-DarkJungleGreen rounded-full w-7 h-7"
                        ></span>
                      </div>
                      <div
                        class="cursor-pointer flex items-center justify-center rounded-full border p-[2px]"
                      >
                        <span
                          class="bg-ShamrockGreen rounded-full w-7 h-7"
                        ></span>
                      </div>
                      <div
                        class="cursor-pointer flex items-center justify-center rounded-full border p-[2px]"
                      >
                        <span
                          class="bg-GreyChateau rounded-full w-7 h-7"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p>Size:</p>
                    <select
                      name=""
                      id=""
                      class="w-1/2 border-2 border-BalticSea p-2"
                    >
                      <option value="select size" selected>
                        Please select
                      </option>
                      <option value=" 5.3mm">5.3mm</option>
                      <option value="6mm">6mm</option>
                      <option value="7mm">7mm</option>
                      <option value=" 8mm">8mm</option>
                    </select>
                  </div>
                </div>
                <div class="space-y-1">
                  <p class="text-base font-medium">Retail unit</p>
                  <p class="text-sm font-light font-rebond-grotesque-regular">
                    {{ product.retailunit }}
                  </p>
                </div>
                <div class="max-w-[22rem]">
                  <p class="text-base font-medium mb-2">Description</p>
                  <ul
                    class="text-sm font-light list-disc space-y-1 pl-4"
                    v-for="(description, index) in product.description"
                    :key="index"
                  >
                    <li class="">
                      {{ description }}
                    </li>
                  </ul>
                </div>
                <div class="flex flex-row items-center space-x-5">
                  <button
                    @click="addToCart"
                    class="w-full font-windsor-pro-bold bg-BalticSea p-3 text-white"
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
                  <button class="border border-black p-4">
                    <img src="../../assets/icons/fi_small_heart.svg" alt="" />
                  </button>
                </div>
                <div>
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="border-b-[0.1px] border-black"
                  >
                    <div
                      class="cursor-pointer pr-3 py-2 text-sm font-medium"
                      @click="toggleAccordion(index)"
                    >
                      {{ item.title }}
                      <span class="accordion-icon">{{
                        isExpanded(index) ? "-" : "+"
                      }}</span>
                    </div>
                    <div
                      v-if="isExpanded(index)"
                      class="py-2 text-sm font-thin"
                    >
                      {{ item.content }}
                    </div>
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
    Footer
  },
  data() {
    return {
      loading: true,

      product: {},
      products: [],
      id: null,
      quantity: 1,
      numberOfProductInCart: [],
      isLoading: false,

      items: [
        { title: "Product details", content: "Product details" },
        { title: "Brand", content: "Brand" },
        { title: "Size $ Fit", content: "Size $ Fit" },
        { title: "Look After Me", content: "Look After Me" },
        { title: "About Me", content: "About Me" },
      ],
      expandedIndex: null,
    };
  },
  // mounted() {
  //   console.log("ooo", this.products);
  //   this.id = this.$route.params.id;
  //   console.log("my id", this.id);
  //   this.product = this.products.find((product) => product.id == this.id);
  //   // this.product = this.products.find((product) => product.id == this.id);
  //   console.log("my productd", this.product);
  // },
  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listcreateProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
      this.loading = false;
    },

    async addToCart() {
      // Set isLoading to true to display loader
      this.isLoading = true;
      let cartInput;
      let checkCartId = window.localStorage.getItem("cartId");
      if (checkCartId) {
        cartInput = {
          quantity: this.quantity,
          productId: this.product._id,
          cartId: checkCartId,
        };
      } else {
        cartInput = {
          quantity: this.quantity,
          productId: this.product._id,
        };
      }
      let response = await this.$store.dispatch("mutate", {
        endpoint: "addCart",
        data: { input: cartInput },
      });
      // Set isLoading to false to remove loader
      this.isLoading = false;
      if (response) {
        const viewaddCartId = localStorage.getItem("cartId");
        await this.$store.dispatch("query", {
          endpoint: "viewaddCart",
          storeKey: "cartList",
          payload: { viewaddCartId: viewaddCartId },
        });
      }
      window.localStorage.setItem("cartId", response._id);
      console.log("res", response);
      this.numberOfProductInCart = response.productId;
      if (this.quantity || this.quantity < 1) {
        this.quantity = 1;
      }
      const item = {
        product: this.product,
        quantity: this.quantity,
      };
      this.$store.commit("setCartItemLength", response.productId.length);
      toast.success("Product added successfully", {
        autoClose: 1000,
      });
    },
    decrementQuantity() {
      this.quantity -= 1;
      if (this.quantity === 0) {
        this.$emit("removeFromCart", product);
      }
      this.updateCart();
    },
    incrementQuantity() {
      this.quantity += 1;
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
      console.log(
        "helloo",
        localStorage.setItem("cart", JSON.stringify(this.$store.state.cart))
      );
    },


    // toggleAccordion(index) {
    //   if (this.isExpanded(index)) {
    //     // Collapse the accordion item
    //     this.expandedIndexes = this.expandedIndexes.filter((i) => i !== index);
    //   } else {
    //     // Expand the accordion item
    //     this.expandedIndexes.push(index);
    //   }
    // },
    // isExpanded(index) {
    //   return this.expandedIndexes.includes(index);
    // },
    toggleAccordion(index) {
      if (this.isExpanded(index)) {
        // Collapse the accordion item
        this.expandedIndex = null;
      } else {
        // Expand the accordion item
        this.expandedIndex = index;
      }
    },
    isExpanded(index) {
      return this.expandedIndex === index;
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
  },
};
</script>

<style scoped>
/* .accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  cursor: pointer;
  background-color: #eee;
  padding: 10px;
}

.accordion-content {
  background-color: #f9f9f9;
  padding: 10px;
} */

.accordion-icon {
  float: right;
}
</style>
