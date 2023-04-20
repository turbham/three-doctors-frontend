<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12 md:my-16">
      <p class="mb-8 md:mb-12">Homepage / Filter / Product Page</p>
      <div
        class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row md:space-x-16"
      >
        <div
          class="lg:w-6/12 flex flex-col-reverse lg:flex-row items-start lg:space-x-10"
        >
          <div
            class="flex flex-row space-x-2.5 lg:space-x-0 lg:flex-col lg:space-y-2.5 mt-10 lg:mt-0"
          >
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
            <div class="w-14 h-14 bg-LightGrey"></div>
          </div>
          <div
            class="bg-LightGrey w-full h-[550px] border-[3px] border-DarkJungleGreen"
          >
            <img
              :src="product.product_img"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 flex flex-row">
          <div class="h-full space-y-8">
            <div class="space-y-2 font-windsor-pro-bold text-BrownBramble">
              <p class="font-medium text-2xl md:text-4xl">
                {{ product.name }}
              </p>
              <p class="font-bold text-xl">${{ product.price }}</p>
            </div>
            <div class="space-y-1">
              <p class="text-base font-medium">Retail unit</p>
              <p class="text-sm font-light font-rebond-grotesque-regular">
                {{ product.retailunit }}
              </p>
            </div>
            <div class="max-w-[22rem]">
              <p class="text-base font-medium mb-2">Description</p>
              <ul class="text-sm font-light list-disc space-y-1 pl-4">
                <li class="">
                  <!-- {{ product.description.desone }} -->
                </li>
                <li>
                  <!-- {{ product.description.destwo }} -->
                </li>
                <!-- <li>{{ product.description.desthree }}</li> -->
              </ul>
            </div>
            <div class="w-full md:w-1/2">
              <input
                type="text"
                name=""
                id=""
                class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                placeholder="Amount"
                v-model="args.quantity"
              />
            </div>
            <!-- <div class="flex flex-row items-center space-x-5"> -->

            <button
              @click="faith"
              class="w-full font-windsor-pro-bold bg-ShamrockGreen p-3 text-white"
            >
              Add to Cart
            </button>
            <button @click="add" class="border border-black p-4">
              <img src="../../assets/icons/fi_small_heart.svg" alt="" />
            </button>
            <!-- </div> -->
            <div>
              <p>Shipping</p>
              <p>To get accrateshipping information Edit Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ProductDetail",
  props: ["products"],

  components: {
    Navbar,
  },
  props: ["productLists"],
  data() {
    return {
      product: {},
      products: [],
      id: null,
      args: {
        quantity: 0,
      },
    };
  },

  methods: {
    async faith() {
      console.log("hhhcchh");
      const cartInput = {
        quantity: this.args.quantity,
        productId: this.product._id,
      };
      await this.$store.dispatch("mutate", {
        endpoint: "addCart",
        data: { input: cartInput },
      });
    },

    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listcreateProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
    },
  },

  async created() {
    await this.queryProduct();
    console.log(this.products, "first"); // Check if products data is available
    this.id = this.$route.params.id;
    console.log(this.id, "second"); // Check if id is correctly assigned
    this.product = this.products.find((product) => product._id == this.id);
    console.log(this.product, "happy");
    console.log(this.products, "okay");
  },
};
</script>
