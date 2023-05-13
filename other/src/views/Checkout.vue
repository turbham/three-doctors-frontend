<template>
  <div>
    <div v-if="isOrderPlaced" class="overlay">
      <div class="toast">
        <div class="flex flex-col items-center justify-center space-y-4">
          <div
            class="bg-white w-16 h-16 rounded-full flex items-center justify-center"
          >
            <img src="../assets/icons/marked.svg" class="w-32 h-32" alt="" />
          </div>
          <div
            class="bg-ShamrockGreen text-white rounded-lg border-2 border-DarkJungleGreen flex flex-col items-center justify-center space-y-3 md:space-y-12 py-10 min-w-[400px] md:min-w-[700px]"
          >
            <p class="font-light text-2xl md:text-4xl mb-3 md:mb-8">
              Order Successful
            </p>
            <div
              class="flex flex-col items-center justify-center font-light text-xs md:text-sm space-y-4 md:space-y-10"
            >
              <p>Order Number: 2388CJDDS89</p>
              <p>
                Thank you for your order! Our agent will call you right away
              </p>
            </div>
          </div>
          <router-link
            to="/"
            class="bg-ShamrockGreen text-white rounded-lg p-4"
          >
            Continue to Home
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <Navbar />
      <div class="container mx-auto my-12">
        <p class="text-center text-lg md:text-2xl mb-8">Checkout</p>
        <div
          class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:space-x-28 mb-10"
        >
          <div class="w-full lg:w-[55%] space-y-10">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3 mb-2">
                <p class="font-windsor-pro-bold text-lg md:text-2xl">
                  Delivery Options
                </p>
                <div v-show="step === 3 || step === 4">
                  <img src="../assets/icons/check_circle.svg" alt="" />
                </div>
              </div>
              <button
                v-show="step === 3 || step === 4"
                @click="jumpToStepOne(1)"
                class="text-xs underline font-medium"
              >
                Edit
              </button>
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
                    :class="{ 'border-red-500': isFirstNameEmpty }"
                    v-model="args.firstname"
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    class="w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    placeholder="Last name*"
                    :class="{ 'border-red-500': isLastNameEmpty }"
                    v-model="args.lastname"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    class="col-span-2 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    :class="{ 'border-red-500': isAddressEmpty }"
                    placeholder="Address*"
                    v-model="args.addcompany"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    class="col-span-2 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    :class="{ 'border-red-500': isEmailEmpty }"
                    placeholder="Email*"
                    v-model="args.email"
                  />
                </div>
                <div class="grid grid-cols-3 gap-6">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    :class="{ 'border-red-500': isCityEmpty }"
                    placeholder="City*"
                    v-model="args.city"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    :class="{ 'border-red-500': isStateEmpty }"
                    placeholder="State*"
                    v-model="args.state"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    class="col-span-1 w-full border border-black bg-VeryLightPink p-3 placeholder-MistBlue"
                    :class="{ 'border-red-500': isPostalCodeEmpty }"
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
                    :class="{ 'border-red-500': isPhoneNumberEmpty }"
                    placeholder="Phone Number*"
                    v-model="args.number"
                  />
                </div>
              </div>
              <div>
                <div v-if="isDetailListLoading">Loading ...</div>
                <div v-else>
                  <div class="space-y-6" v-show="step === 2">
                    <div
                      class="border-2 border-DarkJungleGreen p-6 flex flex-row items-start justify-between"
                    >
                      <div class="font-light">
                        <p>First name: {{ detailList.firstname }}</p>
                        <p>Last name: {{ detailList.lastname }}</p>
                        <p>Address: {{ detailList.addcompany }}</p>
                        <p>Email: {{ detailList.email }}</p>
                        <p>City: {{ detailList.city }}</p>
                        <p>State: {{ detailList.state }}</p>
                        <p>Postal code: {{ detailList.postalcode }}</p>
                        <p>Phone number: {{ detailList.number }}</p>
                      </div>
                      <div>
                        <button
                          @click="step--"
                          class="text-xs underline font-medium"
                        >
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
                </div>
              </div>
              <div class="font-light space-y-10" v-show="step === 3">
                <div>
                  <p class="text-DarkJungleGreen">Shipping Address</p>
                  <div class="text-OlsoGrey space-y-1">
                    <p>{{ detailList.firstname }} {{ detailList.lastname }}</p>
                    <p>{{ detailList.addcompany }}</p>
                    <p>{{ detailList.postalcode }}</p>
                    <p>{{ detailList.email }}</p>
                    <p>{{ detailList.state }}</p>
                    <p>{{ detailList.city }}</p>
                    <p>{{ detailList.number }}</p>
                  </div>
                </div>
                <div>
                  <p class="text-DarkJungleGreen">Shipping Details</p>
                  <div class="text-OlsoGrey space-y-1">
                    <p>$5.00 Shipping</p>
                    <!-- <p>Arrives by Thu, Apr 20</p> -->
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
                    <p>{{ detailList.firstname }} {{ detailList.lastname }}</p>
                    <p>{{ detailList.addcompany }}</p>
                    <p>{{ detailList.postalcode }}</p>
                    <p>{{ detailList.email }}</p>
                    <p>{{ detailList.state }}</p>
                    <p>{{ detailList.city }}</p>
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
                    @click="placeyouroreder"
                    class="font-windsor-pro-bold bg-ShamrockGreen text-white px-4 py-3 flex items-center justify-center"
                  >
                    <span v-if="isPlaceOrderLoading" class="w-32">
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
                    <span v-else class="w-32">Place Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-[28%] space-y-10">
            <div class="flex flex-row items-center justify-between">
              <p class="ext-lg md:text-2xl mb-2">In your cart</p>
              <!-- <p class="text-xs font-semibold underline">edit</p> -->
            </div>
            <div class="space-y-10">
              <div class="text-base font-light space-y-1.5">
                <div class="flex flex-row items-center justify-between">
                  <p>Subtotal</p>
                  <p>${{ cartTotal.toFixed(2) }}</p>
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
                <p>${{ (cartTotal + 5).toFixed(2) }}</p>
              </div>
              <!-- <p class="font-semibold mb-4">Arrives by Thu,Apr 20</p> -->
              <!-- <div class="flex flex-row items-start space-x-10">
                <div class="w-28 h-28 bg-GreyCloud relative">
                  <img
                  src="https://lawal-akande.netlify.app/images/profilepic.jpeg"
                  class="h-full object-cover"
                  alt=""
                />
                  <div class="absolute top-4 right-4">
                  <img src="../assets/icons/fi_small_heart.svg" alt="" />
                </div>
                </div>
                <div class="space-y-3">
                  <p class="font-windsor-pro-bold">3 Doctors Package</p>
                  <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                    <span>Size</span>
                    <span>8mm</span>
                  </div>
                   <div class="flex flex-row items-center space-x-4">
                  <button class="flex bg-Platinum px-2 rounded-lg">-</button>
                  <span class="text-SpunPearl text-[12px]">0</span>
                  <button class="flex bg-Platinum px-2 rounded-lg">+</button>
                </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            v-show="step < 2"
            @click="onSaveAndContinue"
            class="font-windsor-pro-bold bg-Platinum text-DavyGrey px-4 py-3 w-fit"
          >
            Save and continue
          </button>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
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
      isDetailListLoading: false,
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
      isAddressEmpty: false,
      isEmailEmpty: false,
      isCityEmpty: false,
      isStateEmpty: false,
      isPostalCodeEmpty: false,
      isPhoneNumberEmpty: false,
      cartsProduct: [],
      isOrderPlaced: false,
      isPlaceOrderLoading: false,
    };
  },

  methods: {
    async createdetails() {
      this.isDetailListLoading = true;
      let res;
      res = await this.$store.dispatch("mutate", {
        endpoint: "createCustomerdetails",
        data: { input: this.args },
      });
      // console.log(res);
      window.localStorage.setItem("detailId", res._id);
      await this.querydetails();
      this.isDetailListLoading = false;
    },

    onSaveAndContinue() {
      if (
        this.args.firstname.trim() === "" ||
        this.args.lastname.trim() === "" ||
        this.args.addcompany.trim() === "" ||
        this.args.email.trim() === "" ||
        this.args.city.trim() === "" ||
        this.args.state.trim() === "" ||
        this.args.postalcode.trim() === "" ||
        this.args.number.trim() === ""
      ) {
        this.isFirstNameEmpty = true;
        this.isLastNameEmpty = true;
        this.isAddressEmpty = true;
        this.isEmailEmpty = true;
        this.isCityEmpty = true;
        this.isStateEmpty = true;
        this.isPostalCodeEmpty = true;
        this.isPhoneNumberEmpty = true;

        toast.error("Please fill out all shipping details", {
          autoClose: 1000,
        });
        return;
      }

      this.isFirstNameEmpty = false;
      this.isLastNameEmpty = false;
      this.isAddressEmpty = false;
      this.isEmailEmpty = false;
      this.isCityEmpty = false;
      this.isStateEmpty = false;
      this.isPostalCodeEmpty = false;
      this.isPhoneNumberEmpty = false;
      this.step++;
      this.createdetails();
    },

    async querydetails() {
      // console.log("yyyyyoooooooooooooo", this.args);
      let viewcreateCustomerdetailsId = localStorage.getItem("detailId");
      await this.$store.dispatch("query", {
        endpoint: "viewcreateCustomerdetails",
        storeKey: "detailList",
        payload: {
          viewcreateCustomerdetailsId: viewcreateCustomerdetailsId,
        },
      });
      // console.log("fffgggggg", this.$store.state.data.detailList);
      this.detailList = this.$store.state.data.detailList;
      console.log("detailList 11", this.detailList);
    },

    jumpToStepOne(stepNumber) {
      this.step = stepNumber;
    },

    // place order function
    async placeyouroreder() {
      this.isPlaceOrderLoading = true;
      // this.isOrderPlaced = true;
      setTimeout(() => {
        this.isOrderPlaced = true;
        // this.isOrderPlaced = false;
        this.isPlaceOrderLoading = false;
        window.localStorage.removeItem("cartId");
        window.localStorage.removeItem("detailId");
      }, 2000); // Hide the toast after 5 seconds
    },
  },

  async created() {
    this.args.ToCart = localStorage.getItem("cartId");
    // await this.querydetails();
    // this.detailList = localStorage.getItem("detailId");
    // console.log("ttttttt", this.args.ToCart);
  },

  mounted() {
    const cartItems = this.$store.getters.getCartList?.productId;
    if (cartItems) {
      this.cartsProduct = cartItems;
      console.log("lol in checkout 11", cartItems);
    } else {
      console.log("No cart items found 11");
    }
  },

  computed: {
    // total price of all product in cart
    cartTotal() {
      let total = 0;
      for (let product of this.cartsProduct) {
        total += parseFloat(product.price);
      }
      this.subtotal = total;
      return total;
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .toast {
  background-color: #fff;
  border: 1px solid #ccc;
  opacity: 1;
  padding: 10px;
  border-radius: 4px;
} */
</style>
