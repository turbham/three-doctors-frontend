<template>
  <div
    :style="navStyle"
    class="flex items-center h-[80px] font-windsor-pro-bold text-PaleOrange navigationBar"
  >
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-between">
        <router-link to="/">
          <img src="../assets/images/logg.svg" alt="" class="w-24 md:w-40" />
        </router-link>
        <div>
          <div>
            <div
              class="hidden md:flex items-center md:space-x-10 lg:space-x-16"
              v-if="activeProductsRoute"
            >
              <div class="navbar-right relative">
                <button @click="toggleDropdown('filters')">
                  <span>SMART FILTERS</span>
                </button>
                <button
                  v-if="openDropdown === 'filters'"
                  @click="toggleDropdown('filters')"
                  tabindex="-1"
                  class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"
                ></button>
                <div
                  v-if="openDropdown === 'filters'"
                  class="absolute z-20 top-auto left-0 w-96 px-8 py-6 mt-2 bg-white border-4 border-PaleOrange"
                >
                  <div class="flex flex-row items-start">
                    <div class="w-5/12 space-y-4">
                      <p class="uppercase text-BrownBramble text-sm">
                        Shop By Size
                      </p>
                      <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            5.3mm
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            6mm
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            7mm
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            8mm
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-7/12 space-y-4">
                      <p class="uppercase text-BrownBramble text-sm">
                        Shop By Colour
                      </p>
                      <div class="flex items-center space-x-4">
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-PaleOrange rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-DarkJungleGreen rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-ShamrockGreen rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-GreyChateau rounded-full w-7 h-7"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navbar-right relative">
                <button @click="toggleDropdown('rollingPapers')">
                  <span>ROLLING PAPERS</span>
                </button>
                <button
                  v-if="openDropdown === 'rollingPapers'"
                  @click="toggleDropdown('rollingPapers')"
                  tabindex="-1"
                  class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"
                ></button>
                <div
                  v-if="openDropdown === 'rollingPapers'"
                  class="absolute z-20 top-auto left-0 w-96 px-8 py-6 mt-2 bg-white border-4 border-PaleOrange"
                >
                  <div class="flex flex-row items-start">
                    <div class="w-5/12 space-y-4">
                      <p class="uppercase text-BrownBramble text-sm">
                        Shop By Size
                      </p>
                      <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            Single
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            1 -1/4
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            Double
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            King
                          </p>
                        </div>
                        <div class="flex items-center space-x-3">
                          <img
                            src="../assets/icons/filter-size-img.svg"
                            alt=""
                          />
                          <p class="text-sm text-DavyGrey font-sf-pro-light">
                            King Slim
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-7/12 space-y-4">
                      <p class="uppercase text-BrownBramble text-sm">
                        Shop By Colour
                      </p>
                      <div class="flex items-center space-x-4">
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-PaleOrange rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-DarkJungleGreen rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-ShamrockGreen rounded-full w-7 h-7"
                          ></span>
                        </div>
                        <div
                          class="flex items-center justify-center rounded-full border p-[2px]"
                        >
                          <span
                            class="bg-GreyChateau rounded-full w-7 h-7"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <router-link to="/products">BLOG</router-link>
            </div>
            <div v-else></div>
          </div>
        </div>
        <router-link to="/cart" class="flex items-center space-x-2">
          <p>CART</p>
          <span
            class="border-dotted border border-PaleOrange px-2 rounded-full"
            >{{ getCartLength || 0 }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      // cart: {
      //   items: [],
      // },
      cartItems: [],
      scrolled: false,
      openDropdown: null,
    };
  },
  // beforeCreate() {
  //   this.$store.commit("initializeStore");
  // },
  // mounted() {
  //   console.log(this.productIdLength);
  // },

  methods: {
    toggleDropdown(dropdown) {
      if (this.openDropdown === dropdown) {
        this.openDropdown = null;
      } else {
        this.openDropdown = dropdown;
      }
    },

    async queryCart() {
      const cartId = localStorage.getItem("cartId");
      await this.$store.dispatch("query", {
        endpoint: "getCartById",
        storeKey: "cartList",
        payload: { cartId: cartId },
      });
    },

    handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.scrolled = scrollPosition >= 50;
    },
  },
  created() {
    this.queryCart();
  },
  computed: {
    getCartLength() {
      // const cartItems = this.$store.getters.getCartList?.productId;
      const cartItems = this.$store.state.data.cartList.items;
      console.log("limao", cartItems);
      if (cartItems && cartItems.length) return cartItems.length;
    },

    activeProductsRoute() {
      return this.$route.path === "/health-and-style";
    },

    navStyle() {
      return {
        backgroundColor: this.scrolled ? "#5f2301" : "transparent",
        transition: "background-color 0.3s ease",
      };
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  watch: {
    getCartLength(value) {
      return value;
    },
  },
};
</script>

<style scoped>
.navigationBar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
}
</style>
