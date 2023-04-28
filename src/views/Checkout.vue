<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12">
      <p class="text-center text-lg md:text-2xl mb-8">Checkout</p>
      <div
        class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:space-x-28 mb-10"
      >
        <div class="w-full lg:w-[55%] space-y-10">
          <div class="flex items-center space-x-3 mb-2">
            <p class="font-windsor-pro-bold text-lg md:text-2xl">
              Delivery Options
            </p>
            <div v-show="step === 3 || step === 4">
              <img src="../assets/icons/check_circle.svg" alt="" />
            </div>
          </div>
          <div class="space-y-6">
            <div
              v-show="step === 1 || step === 2"
              class="flex flex-row items-center space-x-4 mb-8"
            >
              <button
                class="w-1/2 flex flex-row items-center justify-center space-x-2 border-2 border-black p-4 bg-VeryLightPink"
              >
                <img src="../assets/icons/local_shipping.svg" alt="" />
                <span>Ship</span>
              </button>
              <button
                class="w-1/2 flex flex-row items-center justify-center space-x-2 border-2 border-black p-4 bg-VeryLightPink"
              >
                <img src="../assets/icons/location_pin.svg" alt="" />
                <span>Pickup</span>
              </button>
            </div>
            <div class="space-y-6" v-show="step === 1">
              <div class="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name=""
                  id=""
                  class="w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="First name*"
                  v-model="args.firstname"
                />

                <input
                  type="text"
                  name=""
                  id=""
                  class="w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="Last name*"
                  v-model="args.lastname"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-2 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="Address"
                  v-model="args.addcompany"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-2 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="email "
                  v-model="args.email"
                />
              </div>
              <div class="grid grid-cols-3 gap-6">
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="City*"
                  v-model="args.city"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="State"
                  v-model="args.state"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="Postal Code*"
                  v-model="args.postalcode"
                />
              </div>
              <div class="w-full md:w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                  placeholder="Phone Number*"
                  v-model="args.number"
                />
              </div>
            </div>
            <div class="space-y-6" v-show="step === 2">
              <div
                class="border-2 border-DarkJungleGreen p-6 flex flex-row items-start justify-between"
              >
                <div class="font-light">
                  <p>{{ detailList.firstname }}{{ detailList.lastname }}</p>
                  <p>{{ detailList.addcompany }}</p>
                  <p>{{ detailList.postalcode }}</p>
                  <p>{{ detailList.email }}</p>
                  <p>{{ detailList.number }}</p>
                </div>
                <div>
                  <button @click="step--" class="text-xs underline font-medium">
                    Edit
                  </button>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  @click="step++"
                  class="font-windsor-pro-bold bg-ShamrockGreen text-white px-4 py-3 w-fit"
                >
                  Continue to Order Review
                </button>
              </div>
            </div>
            <div class="font-light space-y-10" v-show="step === 3">
              <div>
                <p class="text-DarkJungleGreen">Shipping Address</p>
                <div class="text-OlsoGrey space-y-1">
                  <p>{{ detailList.firstname }}{{ detailList.lastname }}</p>
                  <p>{{ detailList.addcompany }}</p>
                  <p>{{ detailList.postalcode }}</p>
                  <p>{{ detailList.email }}</p>
                  <p>{{ detailList.number }}</p>
                </div>
              </div>
              <div>
                <p class="text-DarkJungleGreen">Shipping Details</p>
                <div class="text-OlsoGrey space-y-1">
                  <p>$5.00 Shipping</p>
                  <p>Arrives by Thu, Apr 20</p>
                </div>
              </div>
              <hr class="border-[0.1px] border-GreyChateau" />
              <div>
                <div class="flex items-center space-x-2 mb-4">
                  <div>
                    <img src="../assets/icons/check_rectangle.svg" alt="" />
                  </div>
                  <p class="">Billing address same as shipping</p>
                </div>
                <p class="text-DarkJungleGreen">Shipping Address</p>
                <div class="text-OlsoGrey space-y-1">
                  <p>{{ detailList.firstname }}{{ detailList.lastname }}</p>
                  <p>{{ detailList.addcompany }}</p>
                  <p>{{ detailList.postalcode }}</p>
                  <p>{{ detailList.email }}</p>
                  <p>{{ detailList.number }}</p>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  @click="step++"
                  class="font-windsor-pro-bold bg-ShamrockGreen text-white px-4 py-3 w-fit"
                >
                  Continue to Order Review
                </button>
              </div>
            </div>
            <div class="font-light space-y-10" v-show="step === 4">
              <div>
                <p class="text-DarkJungleGreen">Shipping Address</p>
                <div class="text-OlsoGrey space-y-1">
                  <p>{{ detailList.firstname }}{{ detailList.lastname }}</p>
                  <p>{{ detailList.addcompany }}</p>
                  <p>{{ detailList.postalcode }}</p>
                  <p>{{ detailList.email }}</p>
                  <p>{{ detailList.number }}</p>
                </div>
              </div>
              <div>
                <p class="text-DarkJungleGreen">Shipping Details</p>
                <div class="text-OlsoGrey space-y-1">
                  <p>$5.00 Shipping</p>
                  <p>Arrives by Thu, Apr 20</p>
                </div>
              </div>
              <hr class="border-[0.1px] border-GreyChateau" />
              <div>
                <p class="font-windsor-pro-bold text-lg md:text-2xl">
                  Order Review
                </p>
                <p class="text-OlsoGrey">
                  By clicking the "Place Order" button, you confirm that you
                  have read, understand, and accept our Terms of Use, Terms of
                  Sale, Privacy Policy, and Return Policy.
                </p>
              </div>
              <div class="flex justify-end">
                <button
                  class="font-windsor-pro-bold bg-ShamrockGreen text-white px-4 py-3 w-fit"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[28%] space-y-10">
          <div class="flex flex-row items-center justify-between">
            <p class="ext-lg md:text-2xl mb-2">In your cart</p>
            <p class="text-xs font-semibold underline">edit</p>
          </div>
          <div class="space-y-10">
            <div class="text-base font-light space-y-1.5">
              <div class="flex flex-row items-center justify-between">
                <p>Subtotal</p>
                <p>$300.00</p>
              </div>
              <div class="flex flex-row items-center justify-between">
                <p>Estimated Shipping</p>
                <p>$5.00</p>
              </div>
              <div class="flex flex-row items-center justify-between mb-8">
                <p>Estimated Tax</p>
                <p>$0.00</p>
              </div>
            </div>
            <div
              class="flex flex-row items-center justify-between font-semibold"
            >
              <p>Total</p>
              <p>$305.00</p>
            </div>
            <p class="font-semibold mb-4">Arrives by Thu,Apr 20</p>
            <div class="flex flex-row items-start space-x-10">
              <div class="w-28 h-28 bg-GreyCloud relative">
                <!-- <img
                  src="https://lawal-akande.netlify.app/images/profilepic.jpeg"
                  class="h-full object-cover"
                  alt=""
                /> -->
                <!-- <div class="absolute top-4 right-4">
                  <img src="../assets/icons/fi_small_heart.svg" alt="" />
                </div> -->
              </div>
              <div class="space-y-3">
                <p class="font-windsor-pro-bold">3 Doctors Package</p>
                <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                  <span>Size</span>
                  <span>8mm</span>
                </div>
                <!--  <div class="flex flex-row items-center space-x-4">
                  <button class="flex bg-Platinum px-2 rounded-lg">-</button>
                  <span class="text-SpunPearl text-[12px]">0</span>
                  <button class="flex bg-Platinum px-2 rounded-lg">+</button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          v-show="step < 2"
          @click="
            step++;
            createdetails();
          "
          class="font-windsor-pro-bold bg-Platinum text-DavyGrey px-4 py-3 w-fit"
        >
          Save and continue
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Checkout",

  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      step: 1,
      detailList: [],
      args: {
        ToCart: "",
        addcompany: "",
        city: "",
        email: "",
        firstname: "",
        lastname: "",
        number: "",
        postalcode: "",
        state: "",
      },
    };
  },

  methods: {
    async createdetails() {
      console.log("yyyyyoooooooooooooo", this.args);
      let res;
      res = await this.$store.dispatch("mutate", {
        endpoint: "createCustomerdetails",
        data: { input: this.args },
      });
      window.localStorage.setItem("detailId", res._id);
      console.log(res);
      await this.querydetails();
    },

    async querydetails() {
      console.log("yyyyyoooooooooooooo", this.args);
      let viewcreateCustomerdetailsId = localStorage.getItem("detailId");
      await this.$store.dispatch("query", {
        endpoint: "viewcreateCustomerdetails",
        storeKey: "detailList",
        payload: {
          viewcreateCustomerdetailsId: viewcreateCustomerdetailsId,
        },
      });
      console.log("fffgggggg", this.$store.state.data.detailList);
      this.detailList = this.$store.state.data.detailList;
    },
  },

  async created() {
    this.args.ToCart = localStorage.getItem("cartId");
    // await this.querydetails();
    // this.detailList = localStorage.getItem("detailId");
    console.log("ttttttt", this.args.ToCart);
  },
};
</script>
